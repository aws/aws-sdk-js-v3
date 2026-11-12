import { createCredentialRefreshProvider } from "@aws-sdk/core/client";
import type { FromLoginCredentialsInit } from "@aws-sdk/credential-provider-login";
import type { AssumeRoleWithWebIdentityParams } from "@aws-sdk/credential-provider-web-identity";
import type {
  AwsIdentityProperties,
  CredentialProviderOptions,
  RuntimeConfigAwsCredentialIdentityProvider,
} from "@aws-sdk/types";
import { doesIdentityRequireRefresh, isIdentityExpired, memoizeIdentityProvider } from "@smithy/core";
import type { SourceProfileInit } from "@smithy/core/config";
import { getProfileName, parseKnownFiles } from "@smithy/core/config";
import type { AwsCredentialIdentity, Pluggable } from "@smithy/types";

import type { AssumeRoleParams } from "./resolveAssumeRoleCredentials";
import {
  getProfileCredentialSource,
  isCredentialRefreshSource,
  type ProfileCredentialSource,
  resolveProfileDataForSource,
} from "./resolveProfileData";

/**
 * @public
 */
export interface FromIniInit extends SourceProfileInit, CredentialProviderOptions, FromLoginCredentialsInit {
  /**
   * A function that returns a promise fulfilled with an MFA token code for
   * the provided MFA Serial code. If a profile requires an MFA code and
   * `mfaCodeProvider` is not a valid function, the credential provider
   * promise will be rejected.
   *
   * @param mfaSerial The serial code of the MFA device specified.
   */
  mfaCodeProvider?: (mfaSerial: string) => Promise<string>;

  /**
   * A function that assumes a role and returns a promise fulfilled with
   * credentials for the assumed role.
   *
   * @param sourceCreds The credentials with which to assume a role.
   * @param params
   */
  roleAssumer?: (sourceCreds: AwsCredentialIdentity, params: AssumeRoleParams) => Promise<AwsCredentialIdentity>;

  /**
   * A function that assumes a role with web identity and returns a promise fulfilled with
   * credentials for the assumed role.
   *
   * @param sourceCreds The credentials with which to assume a role.
   * @param params
   */
  roleAssumerWithWebIdentity?: (params: AssumeRoleWithWebIdentityParams) => Promise<AwsCredentialIdentity>;

  /**
   * AWS SDK Client configuration to be used for creating inner client
   * for auth operations. Inner clients include STS, SSO, and Signin clients.
   * @internal
   */
  clientConfig?: any;

  clientPlugins?: Pluggable<any, any>[];

  /**
   * When true, always reload credentials from the file system instead of using cached values.
   * This is useful when you need to detect changes to the credentials file.
   */
  ignoreCache?: boolean;
}

/**
 * @internal
 *
 * Creates a credential provider that will read from ini files and supports
 * role assumption and multi-factor authentication.
 */
export const fromIni = (init: FromIniInit = {}): RuntimeConfigAwsCredentialIdentityProvider => {
  type SelectedProvider = RuntimeConfigAwsCredentialIdentityProvider & {
    invalidate?(rejectedIdentity: Pick<AwsCredentialIdentity, "accessKeyId">): void;
    sourceType?: ProfileCredentialSource;
  };

  const selectedProviders = new Map<string, SelectedProvider>();
  const initializing = new Map<string, Promise<SelectedProvider>>();

  const createSelectedProvider = async (
    profileName: string,
    providedProfiles?: Awaited<ReturnType<typeof parseKnownFiles>>
  ): Promise<SelectedProvider> => {
    const initialProfiles = providedProfiles ?? (await parseKnownFiles(init));
    const sourceType = getProfileCredentialSource(initialProfiles[profileName], profileName, init.logger);
    let firstProfiles: typeof initialProfiles | undefined = initialProfiles;
    let selected: SelectedProvider;

    const source = async ({
      callerClientConfig,
      rejectedAccessKeyId,
    }: AwsIdentityProperties & { rejectedAccessKeyId?: string } = {}): Promise<AwsCredentialIdentity> => {
      init.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
      const profiles = firstProfiles ?? (await parseKnownFiles(init));
      firstProfiles = undefined;

      // The profile was edited to use a different kind of credentials, which is only seen with
      // ignoreCache. Answer with the new kind, then drop this provider so the next call builds one
      // with the right caching for it. Dropped only on success, so a failed switch keeps the
      // cached credentials and retries after the backoff.
      const currentType = getProfileCredentialSource(profiles[profileName], profileName, init.logger);
      if (currentType !== sourceType && currentType !== "unknown") {
        const credentials = await resolveProfileDataForSource(
          currentType,
          profileName,
          profiles,
          init,
          callerClientConfig
        );
        if (selectedProviders.get(profileName) === selected) {
          selectedProviders.delete(profileName);
        }
        return credentials;
      }

      return resolveProfileDataForSource(
        sourceType,
        profileName,
        profiles,
        init,
        callerClientConfig,
        rejectedAccessKeyId
      );
    };

    selected = isCredentialRefreshSource(sourceType)
      ? createCredentialRefreshProvider(source, { logger: init.logger })
      : memoizeIdentityProvider(source, isIdentityExpired, doesIdentityRequireRefresh)!;
    return Object.assign(selected, { sourceType });
  };

  const getSelectedProvider = async (profileName: string): Promise<SelectedProvider> => {
    const selected = selectedProviders.get(profileName);
    if (selected) {
      return selected;
    }
    let pending = initializing.get(profileName);
    if (!pending) {
      pending = createSelectedProvider(profileName).then((created) => {
        // An unclassifiable profile (missing, or no credential keys yet) is not cached, so a profile
        // added later, e.g. by `aws configure` with ignoreCache, is classified on the next call.
        if (created.sourceType !== "unknown") {
          selectedProviders.set(profileName, created);
        }
        return created;
      });
      initializing.set(profileName, pending);
    }
    try {
      return await pending;
    } finally {
      // A late waiter must not clear a newer attempt another caller has started.
      if (initializing.get(profileName) === pending) {
        initializing.delete(profileName);
      }
    }
  };

  const provider = async (awsIdentityProperties: AwsIdentityProperties = {}) => {
    const profileName = getProfileName({
      profile: init.profile ?? awsIdentityProperties.callerClientConfig?.profile,
    });
    return (await getSelectedProvider(profileName))(awsIdentityProperties);
  };

  (provider as typeof provider & { memoized: true }).memoized = true;
  Object.defineProperty(provider, "invalidate", {
    get: () => {
      const refreshProviders = [...selectedProviders.values()].filter(
        (selected): selected is SelectedProvider & { invalidate: NonNullable<SelectedProvider["invalidate"]> } =>
          typeof selected.invalidate === "function"
      );
      return refreshProviders.length === 0
        ? undefined
        : (rejectedIdentity: Pick<AwsCredentialIdentity, "accessKeyId">) => {
            for (const selected of refreshProviders) {
              selected.invalidate(rejectedIdentity);
            }
          };
    },
  });
  return provider;
};

import { fromEnv } from "@aws-sdk/credential-provider-env";
import { fromIni } from "@aws-sdk/credential-provider-ini";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import type { CredentialProviderOptions, Provider } from "@aws-sdk/types";
import { chain, memoize } from "@smithy/property-provider";
import type { AwsCredentialIdentity } from "@smithy/types";

interface AwsCliV2CompatibleProviderOptions extends CredentialProviderOptions {
  profile?: string;
  accessKeyId?: string;
  secretAccessKey?: string;
  sessionToken?: string;
}

/**
 * AWS CLI V2 Compatible Credential Provider Chain
 * If profile is explicitly provided, uses fromIni with that profile.
 * Otherwise, uses a chain of fromEnv and fromNodeProviderChain.
 */
export const fromAwsCliV2CompatibleProviderChain = (
  options: AwsCliV2CompatibleProviderOptions = {}
): Provider<AwsCredentialIdentity> => {
  const { profile, accessKeyId, secretAccessKey, sessionToken } = options;

  return memoize(
    async (): Promise<AwsCredentialIdentity> => {
      // If explicit credentials are provided in the constructor, use them.
      if (accessKeyId && secretAccessKey) {
        return {
          accessKeyId,
          secretAccessKey,
          sessionToken, // Optional
        };
      }
      // If profile is explicitly provided, use fromIni directly
      if (profile) {
        return fromIni({ profile })();
      }

      // Otherwise, use the chain of providers
      const credentials = await chain(fromEnv(), async () => {
        return defaultProvider()();
      })();

      if (!credentials) {
        throw new Error("Failed to retrieve valid AWS credentials");
      }

      return credentials;
    },
    credentialsTreatedAsExpired,
    credentialsWillNeedRefresh
  );
};

export const credentialsTreatedAsExpired = (credentials: AwsCredentialIdentity) =>
  credentials?.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000;

export const credentialsWillNeedRefresh = (credentials: AwsCredentialIdentity) => credentials?.expiration !== undefined;

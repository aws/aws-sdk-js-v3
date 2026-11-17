import type { FromCredentialDaemonInit as CredentialDaemonInit } from "@aws-sdk/credential-provider-daemon";
import type { AwsIdentityProperties, RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import type { SourceProfileInit } from "@smithy/core/config";

/**
 * @public
 */
export interface FromCredentialDaemonInit extends Omit<CredentialDaemonInit, "credential">, SourceProfileInit {
  /**
   * The name of the credential to get from the credential daemon. When it is not set, the provider reads
   * daemon_credential, sso_account_id and sso_role_name from the profile instead, and ignores accountId
   * and roleName.
   */
  credential?: string;
}

/**
 * Creates a credential provider that gets short-lived credentials from the local credential daemon
 * over a Unix domain socket.
 *
 * ```javascript
 * import { fromCredentialDaemon } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromCredentialDaemon } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const client = new FooClient({
 *   credentials: fromCredentialDaemon({
 *     // Optional. The profile that sets daemon_credential. Defaults to the client's profile, then
 *     // AWS_PROFILE, then "default". Not used when credential is set.
 *     profile: "my-profile",
 *     // Optional. The name of the credential to get from the credential daemon, instead of a profile.
 *     credential: "my-credential",
 *     // Optional. Milliseconds to wait for the connection to the credential daemon. Defaults to 1000.
 *     connectTimeout: 1000,
 *     // Optional. Milliseconds to wait for the whole call to the credential daemon. Defaults to 5000.
 *     timeout: 5000,
 *   }),
 * });
 * ```
 *
 * @public
 */
export const fromCredentialDaemon = (
  init: FromCredentialDaemonInit = {}
): RuntimeConfigAwsCredentialIdentityProvider => {
  return async (args?: AwsIdentityProperties) => {
    const { credential, accountId, roleName, connectTimeout, timeout, ...profileInit } = init;
    if (credential === undefined) {
      const { fromCredentialDaemonProfile } = await import("@aws-sdk/credential-provider-ini");
      return fromCredentialDaemonProfile({ ...profileInit, credentialDaemon: { connectTimeout, timeout } })(args);
    }
    const { fromCredentialDaemon: _fromCredentialDaemon } = await import("@aws-sdk/credential-provider-daemon");
    return _fromCredentialDaemon({ ...init, credential })(args);
  };
};

import type { RuntimeConfigAwsCredentialIdentityProvider } from "@aws-sdk/types";
import { NODE_REGION_CONFIG_FILE_OPTIONS } from "@smithy/config-resolver";
import { loadConfig } from "@smithy/node-config-provider";

import { fromNodeProviderChain } from "./fromNodeProviderChain";
import type { FromTemporaryCredentialsOptions } from "./fromTemporaryCredentials.base";
import { fromTemporaryCredentials as fromTemporaryCredentialsBase } from "./fromTemporaryCredentials.base";

/**
 * @public
 */
export { FromTemporaryCredentialsOptions };

/**
 * Creates a credential provider function that retrieves temporary credentials from STS AssumeRole API.
 *
 * ```javascript
 * import { fromTemporaryCredentials } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromTemporaryCredentials } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const client = new FooClient({
 *   region,
 *   credentials: fromTemporaryCredentials(
 *     // Optional. The master credentials used to get and refresh temporary credentials from AWS STS. If skipped, it uses
 *     // the default credential resolved by internal STS client.
 *     masterCredentials: fromTemporaryCredentials({
 *       params: { RoleArn: "arn:aws:iam::1234567890:role/RoleA" }
 *     }),
 *     // Required. Options passed to STS AssumeRole operation.
 *     params: {
 *       // Required. ARN of role to assume.
 *       RoleArn: "arn:aws:iam::1234567890:role/RoleB",
 *       // Optional. An identifier for the assumed role session. If skipped, it generates a random session name with
 *       // prefix of 'aws-sdk-js-'.
 *       RoleSessionName: "aws-sdk-js-123",
 *       // Optional. The duration, in seconds, of the role session.
 *       DurationSeconds: 3600
 *       //... For more options see https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html
 *     },
 *     // Optional. Custom STS client configurations overriding the default ones.
 *     clientConfig: { region },
 *     // Optional. Custom STS client middleware plugin to modify the client default behavior.
 *     // e.g. adding custom headers.
 *     clientPlugins: [addFooHeadersPlugin],
 *     // Optional. A function that returns a promise fulfilled with an MFA token code for the provided MFA Serial code.
 *     // Required if `params` has `SerialNumber` config.
 *     mfaCodeProvider: async mfaSerial => {
 *       return "token"
 *     }
 *   ),
 * });
 * ```
 *
 * @public
 */
export const fromTemporaryCredentials = (
  options: FromTemporaryCredentialsOptions
): RuntimeConfigAwsCredentialIdentityProvider => {
  return fromTemporaryCredentialsBase(
    options,
    fromNodeProviderChain,
    async ({ profile = process.env.AWS_PROFILE }: { profile?: string }) =>
      loadConfig(
        {
          environmentVariableSelector: (env) => env.AWS_REGION,
          configFileSelector: (profileData) => {
            return profileData.region;
          },
          default: () => undefined,
        },
        { ...NODE_REGION_CONFIG_FILE_OPTIONS, profile }
      )()
  );
};

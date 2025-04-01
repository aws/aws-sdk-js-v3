import { setCredentialFeature } from "@aws-sdk/core/client";
import type { CredentialProviderOptions } from "@aws-sdk/types";
import {
  fromInstanceMetadata as _fromInstanceMetadata,
  RemoteProviderConfig as _RemoteProviderInit,
} from "@smithy/credential-provider-imds";
import { AwsCredentialIdentityProvider } from "@smithy/types";

/**
 * Creates a credential provider function that reads from the EC2 instance metadata service.
 *
 * ```javascript
 * import { fromInstanceMetadata } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromInstanceMetadata } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const client = new DynamoDBClient({
 *   credentials: fromInstanceMetadata({
 *     // Optional. The connection timeout (in milliseconds) to apply to any remote requests. If not specified, a
 *     // default value of`1000` (one second) is used.
 *     timeout: 1000,
 *     // Optional. The maximum number of times any HTTP connections should be retried. If not specified, a default
 *     // value of `0` will be used.
 *     maxRetries: 0,
 *   }),
 * });
 * ```
 *
 * @public
 */
export const fromInstanceMetadata = (
  init?: _RemoteProviderInit & CredentialProviderOptions
): AwsCredentialIdentityProvider => {
  init?.logger?.debug("@smithy/credential-provider-imds", "fromInstanceMetadata");
  return async () =>
    _fromInstanceMetadata(init)().then((creds) => setCredentialFeature(creds, "CREDENTIALS_IMDS", "0"));
};

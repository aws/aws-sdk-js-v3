import { fromArgs as _fromArgs, FromArgsInit } from "@aws-sdk/credential-provider-args";
import { AwsCredentialIdentityProvider } from "@aws-sdk/types";

/**
 * Create a credential provider that reads credentials from the following arguments:
 *
 * - `accessKeyId` - The access key for your AWS account.
 * - `secretAccessKey` - The secret key for your AWS account.
 * - `sessionToken` - The session key for your AWS account. This is only
 *   needed when you are using temporary credentials.
 * - `expiry` - The expiration time of the credentials contained
 *   in the arguments described above. This value must be in a format
 *   compatible with the [ISO-8601 standard](https://en.wikipedia.org/wiki/ISO_8601)
 *   and is only needed when you are using temporary credentials.
 *
 * If either the `accessKeyId` or `secretAccessKey` argument variable is not set or contains a falsy
 * value, the promise returned by the `fromArgs` function will be rejected.
 *
 * ```javascript
 * import { fromArgs } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromArgs } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const client = new DynamoDBClient({
 *   credentials: fromArgs({
 *     accessKeyId,
 *     secretAccessKey,
 *     sessionToken,
 *     expiry,
 *   }),
 * });
 * ```
 */

export const fromArgs = (init: FromArgsInit): AwsCredentialIdentityProvider => _fromArgs(init);

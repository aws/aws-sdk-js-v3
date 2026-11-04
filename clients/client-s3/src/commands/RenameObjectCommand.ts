// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RenameObjectOutput, RenameObjectRequest } from "../models/models_1";
import { RenameObject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RenameObjectCommand}.
 */
export interface RenameObjectCommandInput extends RenameObjectRequest {}
/**
 * @public
 *
 * The output of {@link RenameObjectCommand}.
 */
export interface RenameObjectCommandOutput extends RenameObjectOutput, __MetadataBearer {}

/**
 * Renames an existing object in a directory bucket that uses the S3 Express One Zone storage class. You can use `RenameObject` by specifying an existing object’s name as the source and the new name of the object as the destination within the same directory bucket.
 *
 * > **Note:** `RenameObject` is only supported for objects stored in the S3 Express One Zone storage class.
 *
 * To prevent overwriting an object, you can use the `If-None-Match` conditional header.
 *
 * - **If-None-Match** - Renames the object only if an object with the specified name does not already exist in the directory bucket. If you don't want to overwrite an existing object, you can add the `If-None-Match` conditional header with the value `‘*’` in the `RenameObject` request. Amazon S3 then returns a `412 Precondition Failed` error if the object with the specified name already exists. For more information, see [RFC 7232](https://datatracker.ietf.org/doc/rfc7232/).
 *
 * - **Permissions**
 *
 *   To grant access to the `RenameObject` operation on a directory bucket, we recommend that you use the `CreateSession` operation for session-based authorization. Specifically, you grant the `s3express:CreateSession` permission to the directory bucket in a bucket policy or an IAM identity-based policy. Then, you make the `CreateSession` API call on the directory bucket to obtain a session token. With the session token in your request header, you can make API requests to this operation. After the session token expires, you make another `CreateSession` API call to generate a new session token for use. The Amazon Web Services CLI and SDKs will create and manage your session including refreshing the session token automatically to avoid service interruptions when a session expires. In your bucket policy, you can specify the `s3express:SessionMode` condition key to control who can create a `ReadWrite` or `ReadOnly` session. A `ReadWrite` session is required for executing all the Zonal endpoint API operations, including `RenameObject`. For more information about authorization, see [`CreateSession`](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateSession.html). To learn more about Zonal endpoint API operations, see [Authorizing Zonal endpoint API operations with CreateSession](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-create-session.html) in the *Amazon S3 User Guide*.
 *
 * - **HTTP Host header syntax**
 *
 *   **Directory buckets** - The HTTP Host header syntax is `Bucket-name.s3express-zone-id.region-code.amazonaws.com`.
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, RenameObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, RenameObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // RenameObjectRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   RenameSource: "STRING_VALUE", // required
 *   DestinationIfMatch: "STRING_VALUE",
 *   DestinationIfNoneMatch: "STRING_VALUE",
 *   DestinationIfModifiedSince: new Date("TIMESTAMP"),
 *   DestinationIfUnmodifiedSince: new Date("TIMESTAMP"),
 *   SourceIfMatch: "STRING_VALUE",
 *   SourceIfNoneMatch: "STRING_VALUE",
 *   SourceIfModifiedSince: new Date("TIMESTAMP"),
 *   SourceIfUnmodifiedSince: new Date("TIMESTAMP"),
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new RenameObjectCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RenameObjectCommandInput - {@link RenameObjectCommandInput}
 * @returns {@link RenameObjectCommandOutput}
 * @see {@link RenameObjectCommandInput} for command's `input` shape.
 * @see {@link RenameObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link IdempotencyParameterMismatch} (client fault)
 *
 * Parameters on this idempotent request are inconsistent with parameters used in previous request(s).
 *
 * For a list of error codes and more information on Amazon S3 errors, see [Error codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList).
 *
 * > **Note:** Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries complete successfully without performing any further actions.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class RenameObjectCommand extends command<RenameObjectCommandInput, RenameObjectCommandOutput>(
  _ep0,
  _mw0,
  "RenameObject",
  RenameObject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RenameObjectRequest;
      output: {};
    };
    sdk: {
      input: RenameObjectCommandInput;
      output: RenameObjectCommandOutput;
    };
  };
}

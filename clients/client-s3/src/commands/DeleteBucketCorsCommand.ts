// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw4, command } from "../commandBuilder";
import type { DeleteBucketCorsRequest } from "../models/models_0";
import { DeleteBucketCors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBucketCorsCommand}.
 */
export interface DeleteBucketCorsCommandInput extends DeleteBucketCorsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketCorsCommand}.
 */
export interface DeleteBucketCorsCommandOutput extends __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Deletes the `cors` configuration information set for the bucket.
 *
 * To use this operation, you must have permission to perform the `s3:PutBucketCORS` action. The bucket owner has this permission by default and can grant this permission to others.
 *
 * For information about `cors`, see [Enabling Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) in the *Amazon S3 User Guide*.
 *
 * **Related Resources**
 *
 * - [PutBucketCors](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketCors.html)
 * - [RESTOPTIONSobject](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTOPTIONSobject.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketCorsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketCorsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // DeleteBucketCorsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketCorsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketCorsCommandInput - {@link DeleteBucketCorsCommandInput}
 * @returns {@link DeleteBucketCorsCommandOutput}
 * @see {@link DeleteBucketCorsCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketCorsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To delete cors configuration on a bucket.
 * ```javascript
 * // The following example deletes CORS configuration on a bucket.
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new DeleteBucketCorsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteBucketCorsCommand extends command<DeleteBucketCorsCommandInput, DeleteBucketCorsCommandOutput>(
  _ep3,
  _mw4,
  "DeleteBucketCors",
  DeleteBucketCors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBucketCorsRequest;
      output: {};
    };
    sdk: {
      input: DeleteBucketCorsCommandInput;
      output: DeleteBucketCorsCommandOutput;
    };
  };
}

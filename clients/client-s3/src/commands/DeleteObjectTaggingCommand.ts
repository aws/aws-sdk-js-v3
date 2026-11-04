// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { DeleteObjectTaggingOutput, DeleteObjectTaggingRequest } from "../models/models_0";
import { DeleteObjectTagging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteObjectTaggingCommand}.
 */
export interface DeleteObjectTaggingCommandInput extends DeleteObjectTaggingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteObjectTaggingCommand}.
 */
export interface DeleteObjectTaggingCommandOutput extends DeleteObjectTaggingOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Removes the entire tag set from the specified object. For more information about managing object tags, see [Object Tagging](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html).
 *
 * To use this operation, you must have permission to perform the `s3:DeleteObjectTagging` action.
 *
 * To delete tags of a specific object version, add the `versionId` query parameter in the request. You will need permission for the `s3:DeleteObjectVersionTagging` action.
 *
 * The following operations are related to `DeleteObjectTagging`:
 *
 * - [PutObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html)
 * - [GetObjectTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteObjectTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteObjectTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // DeleteObjectTaggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteObjectTaggingCommand(input);
 * const response = await client.send(command);
 * // { // DeleteObjectTaggingOutput
 * //   VersionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteObjectTaggingCommandInput - {@link DeleteObjectTaggingCommandInput}
 * @returns {@link DeleteObjectTaggingCommandOutput}
 * @see {@link DeleteObjectTaggingCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @example To remove tag set from an object
 * ```javascript
 * // The following example removes tag set associated with the specified object. If the bucket is versioning enabled, the operation removes tag set from the latest object version.
 * const input = {
 *   Bucket: "examplebucket",
 *   Key: "HappyFace.jpg"
 * };
 * const command = new DeleteObjectTaggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   VersionId: "null"
 * }
 * *\/
 * ```
 *
 * @example To remove tag set from an object version
 * ```javascript
 * // The following example removes tag set associated with the specified object version. The request specifies both the object key and object version.
 * const input = {
 *   Bucket: "examplebucket",
 *   Key: "HappyFace.jpg",
 *   VersionId: "ydlaNkwWm0SfKJR.T1b1fIdPRbldTYRI"
 * };
 * const command = new DeleteObjectTaggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   VersionId: "ydlaNkwWm0SfKJR.T1b1fIdPRbldTYRI"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteObjectTaggingCommand extends command<DeleteObjectTaggingCommandInput, DeleteObjectTaggingCommandOutput>(
  _ep5,
  _mw0,
  "DeleteObjectTagging",
  DeleteObjectTagging$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteObjectTaggingRequest;
      output: DeleteObjectTaggingOutput;
    };
    sdk: {
      input: DeleteObjectTaggingCommandInput;
      output: DeleteObjectTaggingCommandOutput;
    };
  };
}

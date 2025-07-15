// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteObjectTaggingOutput, DeleteObjectTaggingRequest } from "../models/models_0";
import { de_DeleteObjectTaggingCommand, se_DeleteObjectTaggingCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Removes the entire tag set from the specified object. For more information about managing object
 *       tags, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-tagging.html"> Object
 *         Tagging</a>.</p>
 *          <p>To use this operation, you must have permission to perform the <code>s3:DeleteObjectTagging</code>
 *       action.</p>
 *          <p>To delete tags of a specific object version, add the <code>versionId</code> query parameter in the
 *       request. You will need permission for the <code>s3:DeleteObjectVersionTagging</code> action.</p>
 *          <p>The following operations are related to <code>DeleteObjectTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObjectTagging.html">PutObjectTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTagging.html">GetObjectTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteObjectTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteObjectTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
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
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
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
export class DeleteObjectTaggingCommand extends $Command
  .classBuilder<
    DeleteObjectTaggingCommandInput,
    DeleteObjectTaggingCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getThrow200ExceptionsPlugin(config),
    ];
  })
  .s("AmazonS3", "DeleteObjectTagging", {})
  .n("S3Client", "DeleteObjectTaggingCommand")
  .f(void 0, void 0)
  .ser(se_DeleteObjectTaggingCommand)
  .de(de_DeleteObjectTaggingCommand)
  .build() {
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

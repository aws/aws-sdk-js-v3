// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBucketTaggingRequest } from "../models/models_0";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketTagging } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBucketTaggingCommand}.
 */
export interface DeleteBucketTaggingCommandInput extends DeleteBucketTaggingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketTaggingCommand}.
 */
export interface DeleteBucketTaggingCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Deletes tags from the general purpose bucket if attribute based access control (ABAC) is not enabled for the bucket. When you <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/buckets-tagging-enable-abac.html">enable ABAC for a general purpose bucket</a>, you can no longer use this operation for that bucket and must use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UntagResource.html">UntagResource</a> instead.</p>
 *          <p>if ABAC is not enabled for the bucket. When you <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/buckets-tagging-enable-abac.html">enable ABAC for a general purpose bucket</a>, you can no longer use this operation for that bucket and must use <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_UntagResource.html">UntagResource</a> instead.</p>
 *          <p>To use this operation, you must have permission to perform the <code>s3:PutBucketTagging</code>
 *       action. By default, the bucket owner has this permission and can grant this permission to others. </p>
 *          <p>The following operations are related to <code>DeleteBucketTagging</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketTagging.html">GetBucketTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketTagging.html">PutBucketTagging</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketTaggingCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketTaggingCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // DeleteBucketTaggingRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketTaggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketTaggingCommandInput - {@link DeleteBucketTaggingCommandInput}
 * @returns {@link DeleteBucketTaggingCommandOutput}
 * @see {@link DeleteBucketTaggingCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @example To delete bucket tags
 * ```javascript
 * // The following example deletes bucket tags.
 * const input = {
 *   Bucket: "examplebucket"
 * };
 * const command = new DeleteBucketTaggingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteBucketTaggingCommand extends $Command
  .classBuilder<
    DeleteBucketTaggingCommandInput,
    DeleteBucketTaggingCommandOutput,
    S3ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseS3ExpressControlEndpoint: { type: "staticContextParams", value: true },
    Bucket: { type: "contextParams", name: "Bucket" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonS3", "DeleteBucketTagging", {})
  .n("S3Client", "DeleteBucketTaggingCommand")
  .sc(DeleteBucketTagging)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBucketTaggingRequest;
      output: {};
    };
    sdk: {
      input: DeleteBucketTaggingCommandInput;
      output: DeleteBucketTaggingCommandOutput;
    };
  };
}

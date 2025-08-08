// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBucketRequest } from "../models/models_0";
import { de_DeleteBucketCommand, se_DeleteBucketCommand } from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBucketCommand}.
 */
export interface DeleteBucketCommandInput extends DeleteBucketRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketCommand}.
 */
export interface DeleteBucketCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the S3 bucket. All objects (including all object versions and delete markers) in the bucket
 *       must be deleted before the bucket itself can be deleted.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <b>Directory buckets</b> - If multipart uploads in a
 *             directory bucket are in progress, you can't delete the bucket until all the in-progress multipart
 *             uploads are aborted or completed.</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>Directory buckets </b> - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format <code>https://s3express-control.<i>region-code</i>.amazonaws.com/<i>bucket-name</i>
 *                      </code>. Virtual-hosted-style requests aren't supported.
 * For more information about endpoints in Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html">Regional and Zonal endpoints for directory buckets in Availability Zones</a> in the
 *     <i>Amazon S3 User Guide</i>. For more information about endpoints in Local Zones, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html">Concepts for directory buckets in Local Zones</a> in the
 *     <i>Amazon S3 User Guide</i>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>General purpose bucket permissions</b> - You must have the
 *                   <code>s3:DeleteBucket</code> permission on the specified bucket in a policy.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Directory bucket permissions</b> - You must have the
 *                   <code>s3express:DeleteBucket</code> permission in an IAM identity-based policy instead of a bucket policy.
 *                 Cross-account access to this API operation isn't supported. This operation can only be performed by the Amazon Web Services account that owns the resource. For more information about directory bucket policies and permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html">Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is <code>s3express-control.<i>region-code</i>.amazonaws.com</code>.</p>
 *             </dd>
 *          </dl>
 *          <p>The following operations are related to <code>DeleteBucket</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteBucketRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketCommandInput - {@link DeleteBucketCommandInput}
 * @returns {@link DeleteBucketCommandOutput}
 * @see {@link DeleteBucketCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @example To delete a bucket
 * ```javascript
 * // The following example deletes the specified bucket.
 * const input = {
 *   Bucket: "forrandall2"
 * };
 * const command = new DeleteBucketCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteBucketCommand extends $Command
  .classBuilder<
    DeleteBucketCommandInput,
    DeleteBucketCommandOutput,
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonS3", "DeleteBucket", {})
  .n("S3Client", "DeleteBucketCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBucketCommand)
  .de(de_DeleteBucketCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBucketRequest;
      output: {};
    };
    sdk: {
      input: DeleteBucketCommandInput;
      output: DeleteBucketCommandOutput;
    };
  };
}

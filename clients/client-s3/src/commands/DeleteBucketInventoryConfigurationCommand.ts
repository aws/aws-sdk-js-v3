// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBucketInventoryConfigurationRequest } from "../models/models_0";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketInventoryConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBucketInventoryConfigurationCommand}.
 */
export interface DeleteBucketInventoryConfigurationCommandInput extends DeleteBucketInventoryConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketInventoryConfigurationCommand}.
 */
export interface DeleteBucketInventoryConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an S3 Inventory configuration (identified by the inventory ID) from the bucket.</p>
 *          <note>
 *             <p>
 *                <b>Directory buckets </b> - For directory buckets, you must make requests for this API operation to the Regional endpoint. These endpoints support path-style requests in the format <code>https://s3express-control.<i>region-code</i>.amazonaws.com/<i>bucket-name</i>
 *                </code>. Virtual-hosted-style requests aren't supported.
 * For more information about endpoints in Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/endpoint-directory-buckets-AZ.html">Regional and Zonal endpoints for directory buckets in Availability Zones</a> in the
 *     <i>Amazon S3 User Guide</i>. For more information about endpoints in Local Zones, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-lzs-for-directory-buckets.html">Concepts for directory buckets in Local Zones</a> in the
 *     <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use this operation, you must have permissions to perform the
 *               <code>s3:PutInventoryConfiguration</code> action. The bucket owner has this permission by default. The
 *             bucket owner can grant this permission to others. For more information about permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources">Permissions Related to Bucket Subresource Operations</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html">Managing Access Permissions to Your Amazon S3
 *               Resources</a>.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>General purpose bucket permissions</b> - The
 * 	                   <code>s3:PutInventoryConfiguration</code> permission is required in a policy. For more information
 * 	                 about general purpose buckets permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-iam-policies.html">Using Bucket Policies and User
 * 	                   Policies</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Directory bucket permissions</b> - To grant access to
 * 	                 this API operation, you must have the <code>s3express:PutInventoryConfiguration</code> permission in
 * 	                 an IAM identity-based policy instead of a bucket policy.
 * 	                 For more information about directory bucket policies and permissions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-security-iam.html">Amazon Web Services Identity and Access Management (IAM) for S3 Express One Zone</a> in the <i>Amazon S3 User Guide</i>.</p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>HTTP Host header syntax</dt>
 *             <dd>
 *                <p>
 *                   <b>Directory buckets </b> - The HTTP Host header syntax is <code>s3express-control.<i>region-code</i>.amazonaws.com</code>.</p>
 *             </dd>
 *          </dl>
 *          <p>For information about the Amazon S3 inventory feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html">Amazon S3 Inventory</a>.</p>
 *          <note>
 *             <p>After deleting a configuration, Amazon S3 might still deliver one additional inventory
 *         report during a brief transition period while the system processes the deletion.</p>
 *          </note>
 *          <p>Operations related to <code>DeleteBucketInventoryConfiguration</code> include: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketInventoryConfiguration.html">GetBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketInventoryConfiguration.html">PutBucketInventoryConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketInventoryConfigurations.html">ListBucketInventoryConfigurations</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketInventoryConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketInventoryConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // DeleteBucketInventoryConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketInventoryConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketInventoryConfigurationCommandInput - {@link DeleteBucketInventoryConfigurationCommandInput}
 * @returns {@link DeleteBucketInventoryConfigurationCommandOutput}
 * @see {@link DeleteBucketInventoryConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketInventoryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class DeleteBucketInventoryConfigurationCommand extends $Command
  .classBuilder<
    DeleteBucketInventoryConfigurationCommandInput,
    DeleteBucketInventoryConfigurationCommandOutput,
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
  .s("AmazonS3", "DeleteBucketInventoryConfiguration", {})
  .n("S3Client", "DeleteBucketInventoryConfigurationCommand")
  .sc(DeleteBucketInventoryConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBucketInventoryConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteBucketInventoryConfigurationCommandInput;
      output: DeleteBucketInventoryConfigurationCommandOutput;
    };
  };
}

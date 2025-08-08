// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBucketMetadataTableConfigurationRequest } from "../models/models_0";
import {
  de_DeleteBucketMetadataTableConfigurationCommand,
  se_DeleteBucketMetadataTableConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBucketMetadataTableConfigurationCommand}.
 */
export interface DeleteBucketMetadataTableConfigurationCommandInput
  extends DeleteBucketMetadataTableConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBucketMetadataTableConfigurationCommand}.
 */
export interface DeleteBucketMetadataTableConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <important>
 *             <p>
 *         We recommend that you delete your S3 Metadata configurations by using the V2
 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetadataTableConfiguration.html">DeleteBucketMetadataTableConfiguration</a> API operation. We no longer recommend using
 *         the V1 <code>DeleteBucketMetadataTableConfiguration</code> API operation.
 *       </p>
 *             <p>If you created your S3 Metadata configuration before July 15, 2025, we recommend that you delete
 *         and re-create your configuration by using <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataConfiguration.html">CreateBucketMetadataConfiguration</a> so that you can expire journal table records and create
 *         a live inventory table.</p>
 *          </important>
 *          <p> Deletes a V1 S3 Metadata configuration from a general purpose bucket. For more information, see
 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html">Accelerating
 *         data discovery with S3 Metadata</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <note>
 *             <p>You can use the V2 <code>DeleteBucketMetadataConfiguration</code> API operation with V1 or V2
 *             metadata table configurations. However, if you try to use the V1
 *             <code>DeleteBucketMetadataTableConfiguration</code> API operation with V2 configurations, you
 *             will receive an HTTP <code>405 Method Not Allowed</code> error.</p>
 *             <p>Make sure that you update your processes to use the new V2 API operations
 *             (<code>CreateBucketMetadataConfiguration</code>, <code>GetBucketMetadataConfiguration</code>, and
 *             <code>DeleteBucketMetadataConfiguration</code>) instead of the V1 API operations. </p>
 *          </note>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use this operation, you must have the
 *               <code>s3:DeleteBucketMetadataTableConfiguration</code> permission. For more information, see
 *               <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html">Setting up permissions for configuring metadata tables</a> in the
 *               <i>Amazon S3 User Guide</i>. </p>
 *             </dd>
 *          </dl>
 *          <p>The following operations are related to <code>DeleteBucketMetadataTableConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucketMetadataTableConfiguration.html">CreateBucketMetadataTableConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketMetadataTableConfiguration.html">GetBucketMetadataTableConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, DeleteBucketMetadataTableConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, DeleteBucketMetadataTableConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // DeleteBucketMetadataTableConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new DeleteBucketMetadataTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBucketMetadataTableConfigurationCommandInput - {@link DeleteBucketMetadataTableConfigurationCommandInput}
 * @returns {@link DeleteBucketMetadataTableConfigurationCommandOutput}
 * @see {@link DeleteBucketMetadataTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteBucketMetadataTableConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class DeleteBucketMetadataTableConfigurationCommand extends $Command
  .classBuilder<
    DeleteBucketMetadataTableConfigurationCommandInput,
    DeleteBucketMetadataTableConfigurationCommandOutput,
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
  .s("AmazonS3", "DeleteBucketMetadataTableConfiguration", {})
  .n("S3Client", "DeleteBucketMetadataTableConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBucketMetadataTableConfigurationCommand)
  .de(de_DeleteBucketMetadataTableConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBucketMetadataTableConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteBucketMetadataTableConfigurationCommandInput;
      output: DeleteBucketMetadataTableConfigurationCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBucketMetadataTableConfigurationRequest } from "../models/models_0";
import {
  de_CreateBucketMetadataTableConfigurationCommand,
  se_CreateBucketMetadataTableConfigurationCommand,
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
 * The input for {@link CreateBucketMetadataTableConfigurationCommand}.
 */
export interface CreateBucketMetadataTableConfigurationCommandInput
  extends CreateBucketMetadataTableConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateBucketMetadataTableConfigurationCommand}.
 */
export interface CreateBucketMetadataTableConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates a metadata table configuration for a general purpose bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html">Accelerating data
 *             discovery with S3 Metadata</a> in the <i>Amazon S3 User Guide</i>. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use this operation, you must have the following permissions. For more
 *                   information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html">Setting up
 *                      permissions for configuring metadata tables</a> in the
 *                      <i>Amazon S3 User Guide</i>.</p>
 *                <p>If you also want to integrate your table bucket with Amazon Web Services analytics services so that you
 *                   can query your metadata table, you need additional permissions. For more information, see
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables-integrating-aws.html">
 *                      Integrating Amazon S3 Tables with Amazon Web Services analytics services</a> in the
 *                   <i>Amazon S3 User Guide</i>.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>s3:CreateBucketMetadataTableConfiguration</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>s3tables:CreateNamespace</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>s3tables:GetTable</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>s3tables:CreateTable</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>s3tables:PutTablePolicy</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </dd>
 *          </dl>
 *          <p>The following operations are related to <code>CreateBucketMetadataTableConfiguration</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketMetadataTableConfiguration.html">DeleteBucketMetadataTableConfiguration</a>
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
 * import { S3Client, CreateBucketMetadataTableConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, CreateBucketMetadataTableConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const input = { // CreateBucketMetadataTableConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContentMD5: "STRING_VALUE",
 *   ChecksumAlgorithm: "CRC32" || "CRC32C" || "SHA1" || "SHA256",
 *   MetadataTableConfiguration: { // MetadataTableConfiguration
 *     S3TablesDestination: { // S3TablesDestination
 *       TableBucketArn: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *     },
 *   },
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new CreateBucketMetadataTableConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateBucketMetadataTableConfigurationCommandInput - {@link CreateBucketMetadataTableConfigurationCommandInput}
 * @returns {@link CreateBucketMetadataTableConfigurationCommandOutput}
 * @see {@link CreateBucketMetadataTableConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateBucketMetadataTableConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 * @public
 */
export class CreateBucketMetadataTableConfigurationCommand extends $Command
  .classBuilder<
    CreateBucketMetadataTableConfigurationCommandInput,
    CreateBucketMetadataTableConfigurationCommandOutput,
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
      getFlexibleChecksumsPlugin(config, {
        requestAlgorithmMember: { httpHeader: "x-amz-sdk-checksum-algorithm", name: "ChecksumAlgorithm" },
        requestChecksumRequired: true,
      }),
    ];
  })
  .s("AmazonS3", "CreateBucketMetadataTableConfiguration", {})
  .n("S3Client", "CreateBucketMetadataTableConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateBucketMetadataTableConfigurationCommand)
  .de(de_CreateBucketMetadataTableConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBucketMetadataTableConfigurationRequest;
      output: {};
    };
    sdk: {
      input: CreateBucketMetadataTableConfigurationCommandInput;
      output: CreateBucketMetadataTableConfigurationCommandOutput;
    };
  };
}

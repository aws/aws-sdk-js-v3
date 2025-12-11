// smithy-typescript generated code
import { getThrow200ExceptionsPlugin } from "@aws-sdk/middleware-sdk-s3";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListBucketIntelligentTieringConfigurationsOutput,
  ListBucketIntelligentTieringConfigurationsRequest,
} from "../models/models_0";
import type { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListBucketIntelligentTieringConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBucketIntelligentTieringConfigurationsCommand}.
 */
export interface ListBucketIntelligentTieringConfigurationsCommandInput
  extends ListBucketIntelligentTieringConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListBucketIntelligentTieringConfigurationsCommand}.
 */
export interface ListBucketIntelligentTieringConfigurationsCommandOutput
  extends ListBucketIntelligentTieringConfigurationsOutput,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported for directory buckets.</p>
 *          </note>
 *          <p>Lists the S3 Intelligent-Tiering configuration from the specified bucket.</p>
 *          <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities.</p>
 *          <p>The S3 Intelligent-Tiering storage class is  the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for automatically optimizing frequently and infrequently accessed objects</a>.</p>
 *          <p>Operations related to <code>ListBucketIntelligentTieringConfigurations</code> include: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html">DeleteBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html">PutBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketIntelligentTieringConfiguration.html">GetBucketIntelligentTieringConfiguration</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, ListBucketIntelligentTieringConfigurationsCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, ListBucketIntelligentTieringConfigurationsCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // ListBucketIntelligentTieringConfigurationsRequest
 *   Bucket: "STRING_VALUE", // required
 *   ContinuationToken: "STRING_VALUE",
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new ListBucketIntelligentTieringConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListBucketIntelligentTieringConfigurationsOutput
 * //   IsTruncated: true || false,
 * //   ContinuationToken: "STRING_VALUE",
 * //   NextContinuationToken: "STRING_VALUE",
 * //   IntelligentTieringConfigurationList: [ // IntelligentTieringConfigurationList
 * //     { // IntelligentTieringConfiguration
 * //       Id: "STRING_VALUE", // required
 * //       Filter: { // IntelligentTieringFilter
 * //         Prefix: "STRING_VALUE",
 * //         Tag: { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         And: { // IntelligentTieringAndOperator
 * //           Prefix: "STRING_VALUE",
 * //           Tags: [ // TagSet
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       Status: "Enabled" || "Disabled", // required
 * //       Tierings: [ // TieringList // required
 * //         { // Tiering
 * //           Days: Number("int"), // required
 * //           AccessTier: "ARCHIVE_ACCESS" || "DEEP_ARCHIVE_ACCESS", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListBucketIntelligentTieringConfigurationsCommandInput - {@link ListBucketIntelligentTieringConfigurationsCommandInput}
 * @returns {@link ListBucketIntelligentTieringConfigurationsCommandOutput}
 * @see {@link ListBucketIntelligentTieringConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListBucketIntelligentTieringConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 * <p>Base exception class for all service exceptions from S3 service.</p>
 *
 *
 * @public
 */
export class ListBucketIntelligentTieringConfigurationsCommand extends $Command
  .classBuilder<
    ListBucketIntelligentTieringConfigurationsCommandInput,
    ListBucketIntelligentTieringConfigurationsCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getThrow200ExceptionsPlugin(config)];
  })
  .s("AmazonS3", "ListBucketIntelligentTieringConfigurations", {})
  .n("S3Client", "ListBucketIntelligentTieringConfigurationsCommand")
  .sc(ListBucketIntelligentTieringConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBucketIntelligentTieringConfigurationsRequest;
      output: ListBucketIntelligentTieringConfigurationsOutput;
    };
    sdk: {
      input: ListBucketIntelligentTieringConfigurationsCommandInput;
      output: ListBucketIntelligentTieringConfigurationsCommandOutput;
    };
  };
}

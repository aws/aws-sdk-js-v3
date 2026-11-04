// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep3, _mw0, command } from "../commandBuilder";
import type {
  GetBucketIntelligentTieringConfigurationOutput,
  GetBucketIntelligentTieringConfigurationRequest,
} from "../models/models_0";
import { GetBucketIntelligentTieringConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBucketIntelligentTieringConfigurationCommand}.
 */
export interface GetBucketIntelligentTieringConfigurationCommandInput extends GetBucketIntelligentTieringConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketIntelligentTieringConfigurationCommand}.
 */
export interface GetBucketIntelligentTieringConfigurationCommandOutput extends GetBucketIntelligentTieringConfigurationOutput, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported for directory buckets.
 *
 * Gets the S3 Intelligent-Tiering configuration from the specified bucket.
 *
 * The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without performance impact or operational overhead. S3 Intelligent-Tiering delivers automatic cost savings in three low latency and high throughput access tiers. To get the lowest storage cost on data that can be accessed in minutes to hours, you can choose to activate additional archiving capabilities.
 *
 * The S3 Intelligent-Tiering storage class is the ideal storage class for data with unknown, changing, or unpredictable access patterns, independent of object size or retention period. If the size of an object is less than 128 KB, it is not monitored and not eligible for auto-tiering. Smaller objects can be stored, but they are always charged at the Frequent Access tier rates in the S3 Intelligent-Tiering storage class.
 *
 * For more information, see [Storage class for automatically optimizing frequently and infrequently accessed objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access).
 *
 * Operations related to `GetBucketIntelligentTieringConfiguration` include:
 *
 * - [DeleteBucketIntelligentTieringConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucketIntelligentTieringConfiguration.html)
 * - [PutBucketIntelligentTieringConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketIntelligentTieringConfiguration.html)
 * - [ListBucketIntelligentTieringConfigurations](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBucketIntelligentTieringConfigurations.html)
 *
 * > **Important:** You must URL encode any signed header values that contain spaces. For example, if your header value is `my file.txt`, containing two spaces after `my`, you must URL encode this value to `my%20%20file.txt`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, GetBucketIntelligentTieringConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, GetBucketIntelligentTieringConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * // import type { S3ClientConfig } from "@aws-sdk/client-s3";
 * const config = {}; // type is S3ClientConfig
 * const client = new S3Client(config);
 * const input = { // GetBucketIntelligentTieringConfigurationRequest
 *   Bucket: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 * };
 * const command = new GetBucketIntelligentTieringConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketIntelligentTieringConfigurationOutput
 * //   IntelligentTieringConfiguration: { // IntelligentTieringConfiguration
 * //     Id: "STRING_VALUE", // required
 * //     Filter: { // IntelligentTieringFilter
 * //       Prefix: "STRING_VALUE",
 * //       Tag: { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //       And: { // IntelligentTieringAndOperator
 * //         Prefix: "STRING_VALUE",
 * //         Tags: [ // TagSet
 * //           {
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     Status: "Enabled" || "Disabled", // required
 * //     Tierings: [ // TieringList // required
 * //       { // Tiering
 * //         Days: Number("int"), // required
 * //         AccessTier: "ARCHIVE_ACCESS" || "DEEP_ARCHIVE_ACCESS", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBucketIntelligentTieringConfigurationCommandInput - {@link GetBucketIntelligentTieringConfigurationCommandInput}
 * @returns {@link GetBucketIntelligentTieringConfigurationCommandOutput}
 * @see {@link GetBucketIntelligentTieringConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBucketIntelligentTieringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 * @throws {@link S3ServiceException}
 *
 * Base exception class for all service exceptions from S3 service.
 *
 * @public
 */
export class GetBucketIntelligentTieringConfigurationCommand extends command<GetBucketIntelligentTieringConfigurationCommandInput, GetBucketIntelligentTieringConfigurationCommandOutput>(
  _ep3,
  _mw0,
  "GetBucketIntelligentTieringConfiguration",
  GetBucketIntelligentTieringConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketIntelligentTieringConfigurationRequest;
      output: GetBucketIntelligentTieringConfigurationOutput;
    };
    sdk: {
      input: GetBucketIntelligentTieringConfigurationCommandInput;
      output: GetBucketIntelligentTieringConfigurationCommandOutput;
    };
  };
}

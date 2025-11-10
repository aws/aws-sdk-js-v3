// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeJobRequest, DescribeJobResponse } from "../models/models_0";
import { DescribeJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandInput extends DescribeJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandOutput extends DescribeJobResponse, __MetadataBearer {}

/**
 * <p>Returns the definition of a specific DataBrew job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // DescribeJobRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobResponse
 * //   CreateDate: new Date("TIMESTAMP"),
 * //   CreatedBy: "STRING_VALUE",
 * //   DatasetName: "STRING_VALUE",
 * //   EncryptionKeyArn: "STRING_VALUE",
 * //   EncryptionMode: "SSE-KMS" || "SSE-S3",
 * //   Name: "STRING_VALUE", // required
 * //   Type: "PROFILE" || "RECIPE",
 * //   LastModifiedBy: "STRING_VALUE",
 * //   LastModifiedDate: new Date("TIMESTAMP"),
 * //   LogSubscription: "ENABLE" || "DISABLE",
 * //   MaxCapacity: Number("int"),
 * //   MaxRetries: Number("int"),
 * //   Outputs: [ // OutputList
 * //     { // Output
 * //       CompressionFormat: "GZIP" || "LZ4" || "SNAPPY" || "BZIP2" || "DEFLATE" || "LZO" || "BROTLI" || "ZSTD" || "ZLIB",
 * //       Format: "CSV" || "JSON" || "PARQUET" || "GLUEPARQUET" || "AVRO" || "ORC" || "XML" || "TABLEAUHYPER",
 * //       PartitionColumns: [ // ColumnNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       Location: { // S3Location
 * //         Bucket: "STRING_VALUE", // required
 * //         Key: "STRING_VALUE",
 * //         BucketOwner: "STRING_VALUE",
 * //       },
 * //       Overwrite: true || false,
 * //       FormatOptions: { // OutputFormatOptions
 * //         Csv: { // CsvOutputOptions
 * //           Delimiter: "STRING_VALUE",
 * //         },
 * //       },
 * //       MaxOutputFiles: Number("int"),
 * //     },
 * //   ],
 * //   DataCatalogOutputs: [ // DataCatalogOutputList
 * //     { // DataCatalogOutput
 * //       CatalogId: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       S3Options: { // S3TableOutputOptions
 * //         Location: {
 * //           Bucket: "STRING_VALUE", // required
 * //           Key: "STRING_VALUE",
 * //           BucketOwner: "STRING_VALUE",
 * //         },
 * //       },
 * //       DatabaseOptions: { // DatabaseTableOutputOptions
 * //         TempDirectory: {
 * //           Bucket: "STRING_VALUE", // required
 * //           Key: "STRING_VALUE",
 * //           BucketOwner: "STRING_VALUE",
 * //         },
 * //         TableName: "STRING_VALUE", // required
 * //       },
 * //       Overwrite: true || false,
 * //     },
 * //   ],
 * //   DatabaseOutputs: [ // DatabaseOutputList
 * //     { // DatabaseOutput
 * //       GlueConnectionName: "STRING_VALUE", // required
 * //       DatabaseOptions: {
 * //         TempDirectory: {
 * //           Bucket: "STRING_VALUE", // required
 * //           Key: "STRING_VALUE",
 * //           BucketOwner: "STRING_VALUE",
 * //         },
 * //         TableName: "STRING_VALUE", // required
 * //       },
 * //       DatabaseOutputMode: "NEW_TABLE",
 * //     },
 * //   ],
 * //   ProjectName: "STRING_VALUE",
 * //   ProfileConfiguration: { // ProfileConfiguration
 * //     DatasetStatisticsConfiguration: { // StatisticsConfiguration
 * //       IncludedStatistics: [ // StatisticList
 * //         "STRING_VALUE",
 * //       ],
 * //       Overrides: [ // StatisticOverrideList
 * //         { // StatisticOverride
 * //           Statistic: "STRING_VALUE", // required
 * //           Parameters: { // ParameterMap // required
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     ProfileColumns: [ // ColumnSelectorList
 * //       { // ColumnSelector
 * //         Regex: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ColumnStatisticsConfigurations: [ // ColumnStatisticsConfigurationList
 * //       { // ColumnStatisticsConfiguration
 * //         Selectors: [
 * //           {
 * //             Regex: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Statistics: {
 * //           IncludedStatistics: [
 * //             "STRING_VALUE",
 * //           ],
 * //           Overrides: [
 * //             {
 * //               Statistic: "STRING_VALUE", // required
 * //               Parameters: { // required
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     EntityDetectorConfiguration: { // EntityDetectorConfiguration
 * //       EntityTypes: [ // EntityTypeList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       AllowedStatistics: [ // AllowedStatisticList
 * //         { // AllowedStatistics
 * //           Statistics: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   ValidationConfigurations: [ // ValidationConfigurationList
 * //     { // ValidationConfiguration
 * //       RulesetArn: "STRING_VALUE", // required
 * //       ValidationMode: "CHECK_ALL",
 * //     },
 * //   ],
 * //   RecipeReference: { // RecipeReference
 * //     Name: "STRING_VALUE", // required
 * //     RecipeVersion: "STRING_VALUE",
 * //   },
 * //   ResourceArn: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Timeout: Number("int"),
 * //   JobSample: { // JobSample
 * //     Mode: "FULL_DATASET" || "CUSTOM_ROWS",
 * //     Size: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJobCommandInput - {@link DescribeJobCommandInput}
 * @returns {@link DescribeJobCommandOutput}
 * @see {@link DescribeJobCommandInput} for command's `input` shape.
 * @see {@link DescribeJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 *
 * @public
 */
export class DescribeJobCommand extends $Command
  .classBuilder<
    DescribeJobCommandInput,
    DescribeJobCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "DescribeJob", {})
  .n("DataBrewClient", "DescribeJobCommand")
  .sc(DescribeJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobRequest;
      output: DescribeJobResponse;
    };
    sdk: {
      input: DescribeJobCommandInput;
      output: DescribeJobCommandOutput;
    };
  };
}

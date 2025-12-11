// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeJobRunRequest, DescribeJobRunResponse } from "../models/models_0";
import { DescribeJobRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobRunCommand}.
 */
export interface DescribeJobRunCommandInput extends DescribeJobRunRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobRunCommand}.
 */
export interface DescribeJobRunCommandOutput extends DescribeJobRunResponse, __MetadataBearer {}

/**
 * <p>Represents one run of a DataBrew job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, DescribeJobRunCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, DescribeJobRunCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // DescribeJobRunRequest
 *   Name: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new DescribeJobRunCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobRunResponse
 * //   Attempt: Number("int"),
 * //   CompletedOn: new Date("TIMESTAMP"),
 * //   DatasetName: "STRING_VALUE",
 * //   ErrorMessage: "STRING_VALUE",
 * //   ExecutionTime: Number("int"),
 * //   JobName: "STRING_VALUE", // required
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
 * //   RunId: "STRING_VALUE",
 * //   State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * //   LogSubscription: "ENABLE" || "DISABLE",
 * //   LogGroupName: "STRING_VALUE",
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
 * //   RecipeReference: { // RecipeReference
 * //     Name: "STRING_VALUE", // required
 * //     RecipeVersion: "STRING_VALUE",
 * //   },
 * //   StartedBy: "STRING_VALUE",
 * //   StartedOn: new Date("TIMESTAMP"),
 * //   JobSample: { // JobSample
 * //     Mode: "FULL_DATASET" || "CUSTOM_ROWS",
 * //     Size: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJobRunCommandInput - {@link DescribeJobRunCommandInput}
 * @returns {@link DescribeJobRunCommandOutput}
 * @see {@link DescribeJobRunCommandInput} for command's `input` shape.
 * @see {@link DescribeJobRunCommandOutput} for command's `response` shape.
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
export class DescribeJobRunCommand extends $Command
  .classBuilder<
    DescribeJobRunCommandInput,
    DescribeJobRunCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "DescribeJobRun", {})
  .n("DataBrewClient", "DescribeJobRunCommand")
  .sc(DescribeJobRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobRunRequest;
      output: DescribeJobRunResponse;
    };
    sdk: {
      input: DescribeJobRunCommandInput;
      output: DescribeJobRunCommandOutput;
    };
  };
}

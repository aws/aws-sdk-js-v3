// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListJobRunsRequest, ListJobRunsResponse } from "../models/models_0";
import { de_ListJobRunsCommand, se_ListJobRunsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandInput extends ListJobRunsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobRunsCommand}.
 */
export interface ListJobRunsCommandOutput extends ListJobRunsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the previous runs of a particular DataBrew job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListJobRunsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListJobRunsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // ListJobRunsRequest
 *   Name: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListJobRunsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobRunsResponse
 * //   JobRuns: [ // JobRunList // required
 * //     { // JobRun
 * //       Attempt: Number("int"),
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       DatasetName: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ExecutionTime: Number("int"),
 * //       JobName: "STRING_VALUE",
 * //       RunId: "STRING_VALUE",
 * //       State: "STARTING" || "RUNNING" || "STOPPING" || "STOPPED" || "SUCCEEDED" || "FAILED" || "TIMEOUT",
 * //       LogSubscription: "ENABLE" || "DISABLE",
 * //       LogGroupName: "STRING_VALUE",
 * //       Outputs: [ // OutputList
 * //         { // Output
 * //           CompressionFormat: "GZIP" || "LZ4" || "SNAPPY" || "BZIP2" || "DEFLATE" || "LZO" || "BROTLI" || "ZSTD" || "ZLIB",
 * //           Format: "CSV" || "JSON" || "PARQUET" || "GLUEPARQUET" || "AVRO" || "ORC" || "XML" || "TABLEAUHYPER",
 * //           PartitionColumns: [ // ColumnNameList
 * //             "STRING_VALUE",
 * //           ],
 * //           Location: { // S3Location
 * //             Bucket: "STRING_VALUE", // required
 * //             Key: "STRING_VALUE",
 * //             BucketOwner: "STRING_VALUE",
 * //           },
 * //           Overwrite: true || false,
 * //           FormatOptions: { // OutputFormatOptions
 * //             Csv: { // CsvOutputOptions
 * //               Delimiter: "STRING_VALUE",
 * //             },
 * //           },
 * //           MaxOutputFiles: Number("int"),
 * //         },
 * //       ],
 * //       DataCatalogOutputs: [ // DataCatalogOutputList
 * //         { // DataCatalogOutput
 * //           CatalogId: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           S3Options: { // S3TableOutputOptions
 * //             Location: {
 * //               Bucket: "STRING_VALUE", // required
 * //               Key: "STRING_VALUE",
 * //               BucketOwner: "STRING_VALUE",
 * //             },
 * //           },
 * //           DatabaseOptions: { // DatabaseTableOutputOptions
 * //             TempDirectory: {
 * //               Bucket: "STRING_VALUE", // required
 * //               Key: "STRING_VALUE",
 * //               BucketOwner: "STRING_VALUE",
 * //             },
 * //             TableName: "STRING_VALUE", // required
 * //           },
 * //           Overwrite: true || false,
 * //         },
 * //       ],
 * //       DatabaseOutputs: [ // DatabaseOutputList
 * //         { // DatabaseOutput
 * //           GlueConnectionName: "STRING_VALUE", // required
 * //           DatabaseOptions: {
 * //             TempDirectory: {
 * //               Bucket: "STRING_VALUE", // required
 * //               Key: "STRING_VALUE",
 * //               BucketOwner: "STRING_VALUE",
 * //             },
 * //             TableName: "STRING_VALUE", // required
 * //           },
 * //           DatabaseOutputMode: "NEW_TABLE",
 * //         },
 * //       ],
 * //       RecipeReference: { // RecipeReference
 * //         Name: "STRING_VALUE", // required
 * //         RecipeVersion: "STRING_VALUE",
 * //       },
 * //       StartedBy: "STRING_VALUE",
 * //       StartedOn: new Date("TIMESTAMP"),
 * //       JobSample: { // JobSample
 * //         Mode: "FULL_DATASET" || "CUSTOM_ROWS",
 * //         Size: Number("long"),
 * //       },
 * //       ValidationConfigurations: [ // ValidationConfigurationList
 * //         { // ValidationConfiguration
 * //           RulesetArn: "STRING_VALUE", // required
 * //           ValidationMode: "CHECK_ALL",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListJobRunsCommandInput - {@link ListJobRunsCommandInput}
 * @returns {@link ListJobRunsCommandOutput}
 * @see {@link ListJobRunsCommandInput} for command's `input` shape.
 * @see {@link ListJobRunsCommandOutput} for command's `response` shape.
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
export class ListJobRunsCommand extends $Command
  .classBuilder<
    ListJobRunsCommandInput,
    ListJobRunsCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlueDataBrew", "ListJobRuns", {})
  .n("DataBrewClient", "ListJobRunsCommand")
  .f(void 0, void 0)
  .ser(se_ListJobRunsCommand)
  .de(de_ListJobRunsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobRunsRequest;
      output: ListJobRunsResponse;
    };
    sdk: {
      input: ListJobRunsCommandInput;
      output: ListJobRunsCommandOutput;
    };
  };
}

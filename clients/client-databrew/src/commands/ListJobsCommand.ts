// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListJobsRequest, ListJobsResponse } from "../models/models_0";
import { de_ListJobsCommand, se_ListJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListJobsCommand}.
 */
export interface ListJobsCommandInput extends ListJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListJobsCommand}.
 */
export interface ListJobsCommandOutput extends ListJobsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the DataBrew jobs that are defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListJobsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListJobsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataBrewClient(config);
 * const input = { // ListJobsRequest
 *   DatasetName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ProjectName: "STRING_VALUE",
 * };
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListJobsResponse
 * //   Jobs: [ // JobList // required
 * //     { // Job
 * //       AccountId: "STRING_VALUE",
 * //       CreatedBy: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       DatasetName: "STRING_VALUE",
 * //       EncryptionKeyArn: "STRING_VALUE",
 * //       EncryptionMode: "SSE-KMS" || "SSE-S3",
 * //       Name: "STRING_VALUE", // required
 * //       Type: "PROFILE" || "RECIPE",
 * //       LastModifiedBy: "STRING_VALUE",
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LogSubscription: "ENABLE" || "DISABLE",
 * //       MaxCapacity: Number("int"),
 * //       MaxRetries: Number("int"),
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
 * //       ProjectName: "STRING_VALUE",
 * //       RecipeReference: { // RecipeReference
 * //         Name: "STRING_VALUE", // required
 * //         RecipeVersion: "STRING_VALUE",
 * //       },
 * //       ResourceArn: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       Timeout: Number("int"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
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
 * @param ListJobsCommandInput - {@link ListJobsCommandInput}
 * @returns {@link ListJobsCommandOutput}
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 * @public
 */
export class ListJobsCommand extends $Command
  .classBuilder<
    ListJobsCommandInput,
    ListJobsCommandOutput,
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
  .s("AWSGlueDataBrew", "ListJobs", {})
  .n("DataBrewClient", "ListJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListJobsCommand)
  .de(de_ListJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListJobsRequest;
      output: ListJobsResponse;
    };
    sdk: {
      input: ListJobsCommandInput;
      output: ListJobsCommandOutput;
    };
  };
}

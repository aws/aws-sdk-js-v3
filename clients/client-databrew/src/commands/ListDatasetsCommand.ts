// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDatasetsRequest, ListDatasetsResponse } from "../models/models_0";
import { ListDatasets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetsCommand}.
 */
export interface ListDatasetsCommandInput extends ListDatasetsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetsCommand}.
 */
export interface ListDatasetsCommandOutput extends ListDatasetsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the DataBrew datasets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, ListDatasetsCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, ListDatasetsCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // ListDatasetsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDatasetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetsResponse
 * //   Datasets: [ // DatasetList // required
 * //     { // Dataset
 * //       AccountId: "STRING_VALUE",
 * //       CreatedBy: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE", // required
 * //       Format: "CSV" || "JSON" || "PARQUET" || "EXCEL" || "ORC",
 * //       FormatOptions: { // FormatOptions
 * //         Json: { // JsonOptions
 * //           MultiLine: true || false,
 * //         },
 * //         Excel: { // ExcelOptions
 * //           SheetNames: [ // SheetNameList
 * //             "STRING_VALUE",
 * //           ],
 * //           SheetIndexes: [ // SheetIndexList
 * //             Number("int"),
 * //           ],
 * //           HeaderRow: true || false,
 * //         },
 * //         Csv: { // CsvOptions
 * //           Delimiter: "STRING_VALUE",
 * //           HeaderRow: true || false,
 * //         },
 * //       },
 * //       Input: { // Input
 * //         S3InputDefinition: { // S3Location
 * //           Bucket: "STRING_VALUE", // required
 * //           Key: "STRING_VALUE",
 * //           BucketOwner: "STRING_VALUE",
 * //         },
 * //         DataCatalogInputDefinition: { // DataCatalogInputDefinition
 * //           CatalogId: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           TempDirectory: {
 * //             Bucket: "STRING_VALUE", // required
 * //             Key: "STRING_VALUE",
 * //             BucketOwner: "STRING_VALUE",
 * //           },
 * //         },
 * //         DatabaseInputDefinition: { // DatabaseInputDefinition
 * //           GlueConnectionName: "STRING_VALUE", // required
 * //           DatabaseTableName: "STRING_VALUE",
 * //           TempDirectory: {
 * //             Bucket: "STRING_VALUE", // required
 * //             Key: "STRING_VALUE",
 * //             BucketOwner: "STRING_VALUE",
 * //           },
 * //           QueryString: "STRING_VALUE",
 * //         },
 * //         Metadata: { // Metadata
 * //           SourceArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //       LastModifiedBy: "STRING_VALUE",
 * //       Source: "S3" || "DATA-CATALOG" || "DATABASE",
 * //       PathOptions: { // PathOptions
 * //         LastModifiedDateCondition: { // FilterExpression
 * //           Expression: "STRING_VALUE", // required
 * //           ValuesMap: { // ValuesMap // required
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         FilesLimit: { // FilesLimit
 * //           MaxFiles: Number("int"), // required
 * //           OrderedBy: "LAST_MODIFIED_DATE",
 * //           Order: "DESCENDING" || "ASCENDING",
 * //         },
 * //         Parameters: { // PathParametersMap
 * //           "<keys>": { // DatasetParameter
 * //             Name: "STRING_VALUE", // required
 * //             Type: "Datetime" || "Number" || "String", // required
 * //             DatetimeOptions: { // DatetimeOptions
 * //               Format: "STRING_VALUE", // required
 * //               TimezoneOffset: "STRING_VALUE",
 * //               LocaleCode: "STRING_VALUE",
 * //             },
 * //             CreateColumn: true || false,
 * //             Filter: {
 * //               Expression: "STRING_VALUE", // required
 * //               ValuesMap: { // required
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetsCommandInput - {@link ListDatasetsCommandInput}
 * @returns {@link ListDatasetsCommandOutput}
 * @see {@link ListDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetsCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
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
export class ListDatasetsCommand extends $Command
  .classBuilder<
    ListDatasetsCommandInput,
    ListDatasetsCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "ListDatasets", {})
  .n("DataBrewClient", "ListDatasetsCommand")
  .sc(ListDatasets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetsRequest;
      output: ListDatasetsResponse;
    };
    sdk: {
      input: ListDatasetsCommandInput;
      output: ListDatasetsCommandOutput;
    };
  };
}

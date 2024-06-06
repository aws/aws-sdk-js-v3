// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDatasetRequest, UpdateDatasetResponse } from "../models/models_0";
import { de_UpdateDatasetCommand, se_UpdateDatasetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandInput extends UpdateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandOutput extends UpdateDatasetResponse, __MetadataBearer {}

/**
 * <p>Modifies the definition of an existing DataBrew dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateDatasetCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateDatasetCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const input = { // UpdateDatasetRequest
 *   Name: "STRING_VALUE", // required
 *   Format: "CSV" || "JSON" || "PARQUET" || "EXCEL" || "ORC",
 *   FormatOptions: { // FormatOptions
 *     Json: { // JsonOptions
 *       MultiLine: true || false,
 *     },
 *     Excel: { // ExcelOptions
 *       SheetNames: [ // SheetNameList
 *         "STRING_VALUE",
 *       ],
 *       SheetIndexes: [ // SheetIndexList
 *         Number("int"),
 *       ],
 *       HeaderRow: true || false,
 *     },
 *     Csv: { // CsvOptions
 *       Delimiter: "STRING_VALUE",
 *       HeaderRow: true || false,
 *     },
 *   },
 *   Input: { // Input
 *     S3InputDefinition: { // S3Location
 *       Bucket: "STRING_VALUE", // required
 *       Key: "STRING_VALUE",
 *       BucketOwner: "STRING_VALUE",
 *     },
 *     DataCatalogInputDefinition: { // DataCatalogInputDefinition
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *       TempDirectory: {
 *         Bucket: "STRING_VALUE", // required
 *         Key: "STRING_VALUE",
 *         BucketOwner: "STRING_VALUE",
 *       },
 *     },
 *     DatabaseInputDefinition: { // DatabaseInputDefinition
 *       GlueConnectionName: "STRING_VALUE", // required
 *       DatabaseTableName: "STRING_VALUE",
 *       TempDirectory: {
 *         Bucket: "STRING_VALUE", // required
 *         Key: "STRING_VALUE",
 *         BucketOwner: "STRING_VALUE",
 *       },
 *       QueryString: "STRING_VALUE",
 *     },
 *     Metadata: { // Metadata
 *       SourceArn: "STRING_VALUE",
 *     },
 *   },
 *   PathOptions: { // PathOptions
 *     LastModifiedDateCondition: { // FilterExpression
 *       Expression: "STRING_VALUE", // required
 *       ValuesMap: { // ValuesMap // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     FilesLimit: { // FilesLimit
 *       MaxFiles: Number("int"), // required
 *       OrderedBy: "LAST_MODIFIED_DATE",
 *       Order: "DESCENDING" || "ASCENDING",
 *     },
 *     Parameters: { // PathParametersMap
 *       "<keys>": { // DatasetParameter
 *         Name: "STRING_VALUE", // required
 *         Type: "Datetime" || "Number" || "String", // required
 *         DatetimeOptions: { // DatetimeOptions
 *           Format: "STRING_VALUE", // required
 *           TimezoneOffset: "STRING_VALUE",
 *           LocaleCode: "STRING_VALUE",
 *         },
 *         CreateColumn: true || false,
 *         Filter: {
 *           Expression: "STRING_VALUE", // required
 *           ValuesMap: { // required
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDatasetResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateDatasetCommandInput - {@link UpdateDatasetCommandInput}
 * @returns {@link UpdateDatasetCommandOutput}
 * @see {@link UpdateDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the specified resource was denied.</p>
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
 * @public
 */
export class UpdateDatasetCommand extends $Command
  .classBuilder<
    UpdateDatasetCommandInput,
    UpdateDatasetCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlueDataBrew", "UpdateDataset", {})
  .n("DataBrewClient", "UpdateDatasetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDatasetCommand)
  .de(de_UpdateDatasetCommand)
  .build() {}

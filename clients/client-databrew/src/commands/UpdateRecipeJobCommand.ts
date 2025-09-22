// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRecipeJobRequest, UpdateRecipeJobResponse } from "../models/models_0";
import { UpdateRecipeJob } from "../schemas/schemas_1_Job";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecipeJobCommand}.
 */
export interface UpdateRecipeJobCommandInput extends UpdateRecipeJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecipeJobCommand}.
 */
export interface UpdateRecipeJobCommandOutput extends UpdateRecipeJobResponse, __MetadataBearer {}

/**
 * <p>Modifies the definition of an existing DataBrew recipe job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateRecipeJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateRecipeJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // UpdateRecipeJobRequest
 *   EncryptionKeyArn: "STRING_VALUE",
 *   EncryptionMode: "SSE-KMS" || "SSE-S3",
 *   Name: "STRING_VALUE", // required
 *   LogSubscription: "ENABLE" || "DISABLE",
 *   MaxCapacity: Number("int"),
 *   MaxRetries: Number("int"),
 *   Outputs: [ // OutputList
 *     { // Output
 *       CompressionFormat: "GZIP" || "LZ4" || "SNAPPY" || "BZIP2" || "DEFLATE" || "LZO" || "BROTLI" || "ZSTD" || "ZLIB",
 *       Format: "CSV" || "JSON" || "PARQUET" || "GLUEPARQUET" || "AVRO" || "ORC" || "XML" || "TABLEAUHYPER",
 *       PartitionColumns: [ // ColumnNameList
 *         "STRING_VALUE",
 *       ],
 *       Location: { // S3Location
 *         Bucket: "STRING_VALUE", // required
 *         Key: "STRING_VALUE",
 *         BucketOwner: "STRING_VALUE",
 *       },
 *       Overwrite: true || false,
 *       FormatOptions: { // OutputFormatOptions
 *         Csv: { // CsvOutputOptions
 *           Delimiter: "STRING_VALUE",
 *         },
 *       },
 *       MaxOutputFiles: Number("int"),
 *     },
 *   ],
 *   DataCatalogOutputs: [ // DataCatalogOutputList
 *     { // DataCatalogOutput
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *       S3Options: { // S3TableOutputOptions
 *         Location: {
 *           Bucket: "STRING_VALUE", // required
 *           Key: "STRING_VALUE",
 *           BucketOwner: "STRING_VALUE",
 *         },
 *       },
 *       DatabaseOptions: { // DatabaseTableOutputOptions
 *         TempDirectory: {
 *           Bucket: "STRING_VALUE", // required
 *           Key: "STRING_VALUE",
 *           BucketOwner: "STRING_VALUE",
 *         },
 *         TableName: "STRING_VALUE", // required
 *       },
 *       Overwrite: true || false,
 *     },
 *   ],
 *   DatabaseOutputs: [ // DatabaseOutputList
 *     { // DatabaseOutput
 *       GlueConnectionName: "STRING_VALUE", // required
 *       DatabaseOptions: {
 *         TempDirectory: {
 *           Bucket: "STRING_VALUE", // required
 *           Key: "STRING_VALUE",
 *           BucketOwner: "STRING_VALUE",
 *         },
 *         TableName: "STRING_VALUE", // required
 *       },
 *       DatabaseOutputMode: "NEW_TABLE",
 *     },
 *   ],
 *   RoleArn: "STRING_VALUE", // required
 *   Timeout: Number("int"),
 * };
 * const command = new UpdateRecipeJobCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecipeJobResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateRecipeJobCommandInput - {@link UpdateRecipeJobCommandInput}
 * @returns {@link UpdateRecipeJobCommandOutput}
 * @see {@link UpdateRecipeJobCommandInput} for command's `input` shape.
 * @see {@link UpdateRecipeJobCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateRecipeJobCommand extends $Command
  .classBuilder<
    UpdateRecipeJobCommandInput,
    UpdateRecipeJobCommandOutput,
    DataBrewClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataBrewClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlueDataBrew", "UpdateRecipeJob", {})
  .n("DataBrewClient", "UpdateRecipeJobCommand")
  .sc(UpdateRecipeJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecipeJobRequest;
      output: UpdateRecipeJobResponse;
    };
    sdk: {
      input: UpdateRecipeJobCommandInput;
      output: UpdateRecipeJobCommandOutput;
    };
  };
}

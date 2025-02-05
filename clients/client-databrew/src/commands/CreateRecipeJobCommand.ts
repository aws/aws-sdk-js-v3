// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRecipeJobRequest, CreateRecipeJobResponse } from "../models/models_0";
import { de_CreateRecipeJobCommand, se_CreateRecipeJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRecipeJobCommand}.
 */
export interface CreateRecipeJobCommandInput extends CreateRecipeJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecipeJobCommand}.
 */
export interface CreateRecipeJobCommandOutput extends CreateRecipeJobResponse, __MetadataBearer {}

/**
 * <p>Creates a new job to transform input data, using steps defined in an existing Glue DataBrew recipe</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateRecipeJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateRecipeJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DataBrewClient(config);
 * const input = { // CreateRecipeJobRequest
 *   DatasetName: "STRING_VALUE",
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
 *   ProjectName: "STRING_VALUE",
 *   RecipeReference: { // RecipeReference
 *     Name: "STRING_VALUE", // required
 *     RecipeVersion: "STRING_VALUE",
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Timeout: Number("int"),
 * };
 * const command = new CreateRecipeJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecipeJobResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRecipeJobCommandInput - {@link CreateRecipeJobCommandInput}
 * @returns {@link CreateRecipeJobCommandOutput}
 * @see {@link CreateRecipeJobCommandInput} for command's `input` shape.
 * @see {@link CreateRecipeJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the specified resource was denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service quota is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters for this request failed validation.</p>
 *
 * @throws {@link DataBrewServiceException}
 * <p>Base exception class for all service exceptions from DataBrew service.</p>
 *
 * @public
 */
export class CreateRecipeJobCommand extends $Command
  .classBuilder<
    CreateRecipeJobCommandInput,
    CreateRecipeJobCommandOutput,
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
  .s("AWSGlueDataBrew", "CreateRecipeJob", {})
  .n("DataBrewClient", "CreateRecipeJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateRecipeJobCommand)
  .de(de_CreateRecipeJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRecipeJobRequest;
      output: CreateRecipeJobResponse;
    };
    sdk: {
      input: CreateRecipeJobCommandInput;
      output: CreateRecipeJobCommandOutput;
    };
  };
}

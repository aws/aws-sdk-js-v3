// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import { UpdateRecipeJobRequest, UpdateRecipeJobResponse } from "../models/models_0";
import { de_UpdateRecipeJobCommand, se_UpdateRecipeJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Modifies the definition of an existing DataBrew recipe job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, UpdateRecipeJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, UpdateRecipeJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
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
 */
export class UpdateRecipeJobCommand extends $Command<
  UpdateRecipeJobCommandInput,
  UpdateRecipeJobCommandOutput,
  DataBrewClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateRecipeJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRecipeJobCommandInput, UpdateRecipeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRecipeJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "UpdateRecipeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlueDataBrew",
        operation: "UpdateRecipeJob",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateRecipeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRecipeJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRecipeJobCommandOutput> {
    return de_UpdateRecipeJobCommand(output, context);
  }
}

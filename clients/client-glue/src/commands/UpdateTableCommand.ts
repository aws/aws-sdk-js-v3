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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateTableRequest, UpdateTableResponse } from "../models/models_2";
import { de_UpdateTableCommand, se_UpdateTableCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTableCommand}.
 */
export interface UpdateTableCommandInput extends UpdateTableRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableCommand}.
 */
export interface UpdateTableCommandOutput extends UpdateTableResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a metadata table in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // UpdateTableRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableInput: { // TableInput
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     Owner: "STRING_VALUE",
 *     LastAccessTime: new Date("TIMESTAMP"),
 *     LastAnalyzedTime: new Date("TIMESTAMP"),
 *     Retention: Number("int"),
 *     StorageDescriptor: { // StorageDescriptor
 *       Columns: [ // ColumnList
 *         { // Column
 *           Name: "STRING_VALUE", // required
 *           Type: "STRING_VALUE",
 *           Comment: "STRING_VALUE",
 *           Parameters: { // ParametersMap
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       ],
 *       Location: "STRING_VALUE",
 *       AdditionalLocations: [ // LocationStringList
 *         "STRING_VALUE",
 *       ],
 *       InputFormat: "STRING_VALUE",
 *       OutputFormat: "STRING_VALUE",
 *       Compressed: true || false,
 *       NumberOfBuckets: Number("int"),
 *       SerdeInfo: { // SerDeInfo
 *         Name: "STRING_VALUE",
 *         SerializationLibrary: "STRING_VALUE",
 *         Parameters: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       BucketColumns: [ // NameStringList
 *         "STRING_VALUE",
 *       ],
 *       SortColumns: [ // OrderList
 *         { // Order
 *           Column: "STRING_VALUE", // required
 *           SortOrder: Number("int"), // required
 *         },
 *       ],
 *       Parameters: "<ParametersMap>",
 *       SkewedInfo: { // SkewedInfo
 *         SkewedColumnNames: [
 *           "STRING_VALUE",
 *         ],
 *         SkewedColumnValues: [ // ColumnValueStringList
 *           "STRING_VALUE",
 *         ],
 *         SkewedColumnValueLocationMaps: { // LocationMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *       StoredAsSubDirectories: true || false,
 *       SchemaReference: { // SchemaReference
 *         SchemaId: { // SchemaId
 *           SchemaArn: "STRING_VALUE",
 *           SchemaName: "STRING_VALUE",
 *           RegistryName: "STRING_VALUE",
 *         },
 *         SchemaVersionId: "STRING_VALUE",
 *         SchemaVersionNumber: Number("long"),
 *       },
 *     },
 *     PartitionKeys: [
 *       {
 *         Name: "STRING_VALUE", // required
 *         Type: "STRING_VALUE",
 *         Comment: "STRING_VALUE",
 *         Parameters: "<ParametersMap>",
 *       },
 *     ],
 *     ViewOriginalText: "STRING_VALUE",
 *     ViewExpandedText: "STRING_VALUE",
 *     TableType: "STRING_VALUE",
 *     Parameters: "<ParametersMap>",
 *     TargetTable: { // TableIdentifier
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Region: "STRING_VALUE",
 *     },
 *   },
 *   SkipArchive: true || false,
 *   TransactionId: "STRING_VALUE",
 *   VersionId: "STRING_VALUE",
 * };
 * const command = new UpdateTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTableCommandInput - {@link UpdateTableCommandInput}
 * @returns {@link UpdateTableCommandOutput}
 * @see {@link UpdateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>A resource was not ready for a transaction.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class UpdateTableCommand extends $Command<
  UpdateTableCommandInput,
  UpdateTableCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: UpdateTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTableCommandInput, UpdateTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateTableCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "UpdateTable",
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
  private serialize(input: UpdateTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTableCommandOutput> {
    return de_UpdateTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

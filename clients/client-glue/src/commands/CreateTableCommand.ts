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
import { CreateTableRequest, CreateTableResponse } from "../models/models_1";
import { de_CreateTableCommand, se_CreateTableCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTableCommand}.
 */
export interface CreateTableCommandInput extends CreateTableRequest {}
/**
 * @public
 *
 * The output of {@link CreateTableCommand}.
 */
export interface CreateTableCommandOutput extends CreateTableResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new table definition in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateTableRequest
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
 *   PartitionIndexes: [ // PartitionIndexList
 *     { // PartitionIndex
 *       Keys: [ // KeyList // required
 *         "STRING_VALUE",
 *       ],
 *       IndexName: "STRING_VALUE", // required
 *     },
 *   ],
 *   TransactionId: "STRING_VALUE",
 *   OpenTableFormatInput: { // OpenTableFormatInput
 *     IcebergInput: { // IcebergInput
 *       MetadataOperation: "CREATE", // required
 *       Version: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateTableCommandInput - {@link CreateTableCommandInput}
 * @returns {@link CreateTableCommandOutput}
 * @see {@link CreateTableCommandInput} for command's `input` shape.
 * @see {@link CreateTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
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
export class CreateTableCommand extends $Command<
  CreateTableCommandInput,
  CreateTableCommandOutput,
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
  constructor(readonly input: CreateTableCommandInput) {
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
  ): Handler<CreateTableCommandInput, CreateTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTableCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "CreateTable",
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
  private serialize(input: CreateTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTableCommandOutput> {
    return de_CreateTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

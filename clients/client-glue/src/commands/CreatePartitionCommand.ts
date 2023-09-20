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
import { CreatePartitionRequest, CreatePartitionResponse } from "../models/models_1";
import { de_CreatePartitionCommand, se_CreatePartitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePartitionCommand}.
 */
export interface CreatePartitionCommandInput extends CreatePartitionRequest {}
/**
 * @public
 *
 * The output of {@link CreatePartitionCommand}.
 */
export interface CreatePartitionCommandOutput extends CreatePartitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new partition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreatePartitionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreatePartitionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreatePartitionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionInput: { // PartitionInput
 *     Values: [ // ValueStringList
 *       "STRING_VALUE",
 *     ],
 *     LastAccessTime: new Date("TIMESTAMP"),
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
 *     Parameters: "<ParametersMap>",
 *     LastAnalyzedTime: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new CreatePartitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreatePartitionCommandInput - {@link CreatePartitionCommandInput}
 * @returns {@link CreatePartitionCommandOutput}
 * @see {@link CreatePartitionCommandInput} for command's `input` shape.
 * @see {@link CreatePartitionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class CreatePartitionCommand extends $Command<
  CreatePartitionCommandInput,
  CreatePartitionCommandOutput,
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
  constructor(readonly input: CreatePartitionCommandInput) {
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
  ): Handler<CreatePartitionCommandInput, CreatePartitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePartitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreatePartitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "CreatePartition",
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
  private serialize(input: CreatePartitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePartitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePartitionCommandOutput> {
    return de_CreatePartitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

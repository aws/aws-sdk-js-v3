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
import { GetUnfilteredPartitionMetadataRequest, GetUnfilteredPartitionMetadataResponse } from "../models/models_2";
import {
  de_GetUnfilteredPartitionMetadataCommand,
  se_GetUnfilteredPartitionMetadataCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUnfilteredPartitionMetadataCommand}.
 */
export interface GetUnfilteredPartitionMetadataCommandInput extends GetUnfilteredPartitionMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetUnfilteredPartitionMetadataCommand}.
 */
export interface GetUnfilteredPartitionMetadataCommandOutput
  extends GetUnfilteredPartitionMetadataResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves partition metadata from the Data Catalog that contains unfiltered
 *           metadata.</p>
 *          <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartition</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUnfilteredPartitionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUnfilteredPartitionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetUnfilteredPartitionMetadataRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   PartitionValues: [ // ValueStringList // required
 *     "STRING_VALUE",
 *   ],
 *   AuditContext: { // AuditContext
 *     AdditionalAuditContext: "STRING_VALUE",
 *     RequestedColumns: [ // AuditColumnNamesList
 *       "STRING_VALUE",
 *     ],
 *     AllColumnsRequested: true || false,
 *   },
 *   SupportedPermissionTypes: [ // PermissionTypeList // required
 *     "COLUMN_PERMISSION" || "CELL_FILTER_PERMISSION" || "NESTED_PERMISSION" || "NESTED_CELL_PERMISSION",
 *   ],
 * };
 * const command = new GetUnfilteredPartitionMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetUnfilteredPartitionMetadataResponse
 * //   Partition: { // Partition
 * //     Values: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     DatabaseName: "STRING_VALUE",
 * //     TableName: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastAccessTime: new Date("TIMESTAMP"),
 * //     StorageDescriptor: { // StorageDescriptor
 * //       Columns: [ // ColumnList
 * //         { // Column
 * //           Name: "STRING_VALUE", // required
 * //           Type: "STRING_VALUE",
 * //           Comment: "STRING_VALUE",
 * //           Parameters: { // ParametersMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Location: "STRING_VALUE",
 * //       AdditionalLocations: [ // LocationStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       InputFormat: "STRING_VALUE",
 * //       OutputFormat: "STRING_VALUE",
 * //       Compressed: true || false,
 * //       NumberOfBuckets: Number("int"),
 * //       SerdeInfo: { // SerDeInfo
 * //         Name: "STRING_VALUE",
 * //         SerializationLibrary: "STRING_VALUE",
 * //         Parameters: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       BucketColumns: [ // NameStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SortColumns: [ // OrderList
 * //         { // Order
 * //           Column: "STRING_VALUE", // required
 * //           SortOrder: Number("int"), // required
 * //         },
 * //       ],
 * //       Parameters: "<ParametersMap>",
 * //       SkewedInfo: { // SkewedInfo
 * //         SkewedColumnNames: [
 * //           "STRING_VALUE",
 * //         ],
 * //         SkewedColumnValues: [ // ColumnValueStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         SkewedColumnValueLocationMaps: { // LocationMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       StoredAsSubDirectories: true || false,
 * //       SchemaReference: { // SchemaReference
 * //         SchemaId: { // SchemaId
 * //           SchemaArn: "STRING_VALUE",
 * //           SchemaName: "STRING_VALUE",
 * //           RegistryName: "STRING_VALUE",
 * //         },
 * //         SchemaVersionId: "STRING_VALUE",
 * //         SchemaVersionNumber: Number("long"),
 * //       },
 * //     },
 * //     Parameters: "<ParametersMap>",
 * //     LastAnalyzedTime: new Date("TIMESTAMP"),
 * //     CatalogId: "STRING_VALUE",
 * //   },
 * //   AuthorizedColumns: "<NameStringList>",
 * //   IsRegisteredWithLakeFormation: true || false,
 * // };
 *
 * ```
 *
 * @param GetUnfilteredPartitionMetadataCommandInput - {@link GetUnfilteredPartitionMetadataCommandInput}
 * @returns {@link GetUnfilteredPartitionMetadataCommandOutput}
 * @see {@link GetUnfilteredPartitionMetadataCommandInput} for command's `input` shape.
 * @see {@link GetUnfilteredPartitionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link FederationSourceException} (client fault)
 *  <p>A federation source failed.</p>
 *
 * @throws {@link FederationSourceRetryableException} (client fault)
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
 * @throws {@link PermissionTypeMismatchException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetUnfilteredPartitionMetadataCommand extends $Command<
  GetUnfilteredPartitionMetadataCommandInput,
  GetUnfilteredPartitionMetadataCommandOutput,
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
  constructor(readonly input: GetUnfilteredPartitionMetadataCommandInput) {
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
  ): Handler<GetUnfilteredPartitionMetadataCommandInput, GetUnfilteredPartitionMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUnfilteredPartitionMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUnfilteredPartitionMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetUnfilteredPartitionMetadata",
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
  private serialize(
    input: GetUnfilteredPartitionMetadataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetUnfilteredPartitionMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetUnfilteredPartitionMetadataCommandOutput> {
    return de_GetUnfilteredPartitionMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

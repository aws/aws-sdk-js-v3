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
} from "@smithy/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUnfilteredTableMetadataRequest, GetUnfilteredTableMetadataResponse } from "../models/models_2";
import { de_GetUnfilteredTableMetadataCommand, se_GetUnfilteredTableMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUnfilteredTableMetadataCommand}.
 */
export interface GetUnfilteredTableMetadataCommandInput extends GetUnfilteredTableMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetUnfilteredTableMetadataCommand}.
 */
export interface GetUnfilteredTableMetadataCommandOutput extends GetUnfilteredTableMetadataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves table metadata from the Data Catalog that contains unfiltered
 *           metadata.</p>
 *          <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUnfilteredTableMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUnfilteredTableMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetUnfilteredTableMetadataRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
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
 * const command = new GetUnfilteredTableMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetUnfilteredTableMetadataResponse
 * //   Table: { // Table
 * //     Name: "STRING_VALUE", // required
 * //     DatabaseName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     UpdateTime: new Date("TIMESTAMP"),
 * //     LastAccessTime: new Date("TIMESTAMP"),
 * //     LastAnalyzedTime: new Date("TIMESTAMP"),
 * //     Retention: Number("int"),
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
 * //     PartitionKeys: [
 * //       {
 * //         Name: "STRING_VALUE", // required
 * //         Type: "STRING_VALUE",
 * //         Comment: "STRING_VALUE",
 * //         Parameters: "<ParametersMap>",
 * //       },
 * //     ],
 * //     ViewOriginalText: "STRING_VALUE",
 * //     ViewExpandedText: "STRING_VALUE",
 * //     TableType: "STRING_VALUE",
 * //     Parameters: "<ParametersMap>",
 * //     CreatedBy: "STRING_VALUE",
 * //     IsRegisteredWithLakeFormation: true || false,
 * //     TargetTable: { // TableIdentifier
 * //       CatalogId: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     CatalogId: "STRING_VALUE",
 * //     VersionId: "STRING_VALUE",
 * //     FederatedTable: { // FederatedTable
 * //       Identifier: "STRING_VALUE",
 * //       DatabaseIdentifier: "STRING_VALUE",
 * //       ConnectionName: "STRING_VALUE",
 * //     },
 * //   },
 * //   AuthorizedColumns: "<NameStringList>",
 * //   IsRegisteredWithLakeFormation: true || false,
 * //   CellFilters: [ // ColumnRowFilterList
 * //     { // ColumnRowFilter
 * //       ColumnName: "STRING_VALUE",
 * //       RowFilterExpression: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetUnfilteredTableMetadataCommandInput - {@link GetUnfilteredTableMetadataCommandInput}
 * @returns {@link GetUnfilteredTableMetadataCommandOutput}
 * @see {@link GetUnfilteredTableMetadataCommandInput} for command's `input` shape.
 * @see {@link GetUnfilteredTableMetadataCommandOutput} for command's `response` shape.
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
export class GetUnfilteredTableMetadataCommand extends $Command<
  GetUnfilteredTableMetadataCommandInput,
  GetUnfilteredTableMetadataCommandOutput,
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
  constructor(readonly input: GetUnfilteredTableMetadataCommandInput) {
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
  ): Handler<GetUnfilteredTableMetadataCommandInput, GetUnfilteredTableMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUnfilteredTableMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUnfilteredTableMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetUnfilteredTableMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUnfilteredTableMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetUnfilteredTableMetadataCommandOutput> {
    return de_GetUnfilteredTableMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

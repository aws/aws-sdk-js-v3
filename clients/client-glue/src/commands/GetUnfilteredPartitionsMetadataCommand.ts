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
import { GetUnfilteredPartitionsMetadataRequest, GetUnfilteredPartitionsMetadataResponse } from "../models/models_2";
import {
  de_GetUnfilteredPartitionsMetadataCommand,
  se_GetUnfilteredPartitionsMetadataCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUnfilteredPartitionsMetadataCommand}.
 */
export interface GetUnfilteredPartitionsMetadataCommandInput extends GetUnfilteredPartitionsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetUnfilteredPartitionsMetadataCommand}.
 */
export interface GetUnfilteredPartitionsMetadataCommandOutput
  extends GetUnfilteredPartitionsMetadataResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves partition metadata from the Data Catalog that contains unfiltered
 *           metadata.</p>
 *          <p>For IAM authorization, the public IAM action associated with this API is <code>glue:GetPartitions</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUnfilteredPartitionsMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUnfilteredPartitionsMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetUnfilteredPartitionsMetadataRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Expression: "STRING_VALUE",
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
 *   NextToken: "STRING_VALUE",
 *   Segment: { // Segment
 *     SegmentNumber: Number("int"), // required
 *     TotalSegments: Number("int"), // required
 *   },
 *   MaxResults: Number("int"),
 * };
 * const command = new GetUnfilteredPartitionsMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetUnfilteredPartitionsMetadataResponse
 * //   UnfilteredPartitions: [ // UnfilteredPartitionList
 * //     { // UnfilteredPartition
 * //       Partition: { // Partition
 * //         Values: [ // ValueStringList
 * //           "STRING_VALUE",
 * //         ],
 * //         DatabaseName: "STRING_VALUE",
 * //         TableName: "STRING_VALUE",
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         LastAccessTime: new Date("TIMESTAMP"),
 * //         StorageDescriptor: { // StorageDescriptor
 * //           Columns: [ // ColumnList
 * //             { // Column
 * //               Name: "STRING_VALUE", // required
 * //               Type: "STRING_VALUE",
 * //               Comment: "STRING_VALUE",
 * //               Parameters: { // ParametersMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           Location: "STRING_VALUE",
 * //           AdditionalLocations: [ // LocationStringList
 * //             "STRING_VALUE",
 * //           ],
 * //           InputFormat: "STRING_VALUE",
 * //           OutputFormat: "STRING_VALUE",
 * //           Compressed: true || false,
 * //           NumberOfBuckets: Number("int"),
 * //           SerdeInfo: { // SerDeInfo
 * //             Name: "STRING_VALUE",
 * //             SerializationLibrary: "STRING_VALUE",
 * //             Parameters: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           BucketColumns: [ // NameStringList
 * //             "STRING_VALUE",
 * //           ],
 * //           SortColumns: [ // OrderList
 * //             { // Order
 * //               Column: "STRING_VALUE", // required
 * //               SortOrder: Number("int"), // required
 * //             },
 * //           ],
 * //           Parameters: "<ParametersMap>",
 * //           SkewedInfo: { // SkewedInfo
 * //             SkewedColumnNames: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SkewedColumnValues: [ // ColumnValueStringList
 * //               "STRING_VALUE",
 * //             ],
 * //             SkewedColumnValueLocationMaps: { // LocationMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           StoredAsSubDirectories: true || false,
 * //           SchemaReference: { // SchemaReference
 * //             SchemaId: { // SchemaId
 * //               SchemaArn: "STRING_VALUE",
 * //               SchemaName: "STRING_VALUE",
 * //               RegistryName: "STRING_VALUE",
 * //             },
 * //             SchemaVersionId: "STRING_VALUE",
 * //             SchemaVersionNumber: Number("long"),
 * //           },
 * //         },
 * //         Parameters: "<ParametersMap>",
 * //         LastAnalyzedTime: new Date("TIMESTAMP"),
 * //         CatalogId: "STRING_VALUE",
 * //       },
 * //       AuthorizedColumns: "<NameStringList>",
 * //       IsRegisteredWithLakeFormation: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUnfilteredPartitionsMetadataCommandInput - {@link GetUnfilteredPartitionsMetadataCommandInput}
 * @returns {@link GetUnfilteredPartitionsMetadataCommandOutput}
 * @see {@link GetUnfilteredPartitionsMetadataCommandInput} for command's `input` shape.
 * @see {@link GetUnfilteredPartitionsMetadataCommandOutput} for command's `response` shape.
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
export class GetUnfilteredPartitionsMetadataCommand extends $Command<
  GetUnfilteredPartitionsMetadataCommandInput,
  GetUnfilteredPartitionsMetadataCommandOutput,
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
  constructor(readonly input: GetUnfilteredPartitionsMetadataCommandInput) {
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
  ): Handler<GetUnfilteredPartitionsMetadataCommandInput, GetUnfilteredPartitionsMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUnfilteredPartitionsMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUnfilteredPartitionsMetadataCommand";
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
  private serialize(
    input: GetUnfilteredPartitionsMetadataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetUnfilteredPartitionsMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetUnfilteredPartitionsMetadataCommandOutput> {
    return de_GetUnfilteredPartitionsMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

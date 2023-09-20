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

import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import { GetTableRequest, GetTableResponse } from "../models/models_0";
import { de_GetTableCommand, se_GetTableCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTableCommand}.
 */
export interface GetTableCommandInput extends GetTableRequest {}
/**
 * @public
 *
 * The output of {@link GetTableCommand}.
 */
export interface GetTableCommandOutput extends GetTableResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the table, including the table's name and current status, the keyspace name,
 *          configuration settings, and metadata.</p>
 *          <p>To read table metadata using <code>GetTable</code>, <code>Select</code> action
 *          permissions for the table and system tables are required to complete the operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, GetTableCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, GetTableCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const input = { // GetTableRequest
 *   keyspaceName: "STRING_VALUE", // required
 *   tableName: "STRING_VALUE", // required
 * };
 * const command = new GetTableCommand(input);
 * const response = await client.send(command);
 * // { // GetTableResponse
 * //   keyspaceName: "STRING_VALUE", // required
 * //   tableName: "STRING_VALUE", // required
 * //   resourceArn: "STRING_VALUE", // required
 * //   creationTimestamp: new Date("TIMESTAMP"),
 * //   status: "STRING_VALUE",
 * //   schemaDefinition: { // SchemaDefinition
 * //     allColumns: [ // ColumnDefinitionList // required
 * //       { // ColumnDefinition
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     partitionKeys: [ // PartitionKeyList // required
 * //       { // PartitionKey
 * //         name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     clusteringKeys: [ // ClusteringKeyList
 * //       { // ClusteringKey
 * //         name: "STRING_VALUE", // required
 * //         orderBy: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     staticColumns: [ // StaticColumnList
 * //       { // StaticColumn
 * //         name: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   capacitySpecification: { // CapacitySpecificationSummary
 * //     throughputMode: "STRING_VALUE", // required
 * //     readCapacityUnits: Number("long"),
 * //     writeCapacityUnits: Number("long"),
 * //     lastUpdateToPayPerRequestTimestamp: new Date("TIMESTAMP"),
 * //   },
 * //   encryptionSpecification: { // EncryptionSpecification
 * //     type: "STRING_VALUE", // required
 * //     kmsKeyIdentifier: "STRING_VALUE",
 * //   },
 * //   pointInTimeRecovery: { // PointInTimeRecoverySummary
 * //     status: "STRING_VALUE", // required
 * //     earliestRestorableTimestamp: new Date("TIMESTAMP"),
 * //   },
 * //   ttl: { // TimeToLive
 * //     status: "STRING_VALUE", // required
 * //   },
 * //   defaultTimeToLive: Number("int"),
 * //   comment: { // Comment
 * //     message: "STRING_VALUE", // required
 * //   },
 * //   clientSideTimestamps: { // ClientSideTimestamps
 * //     status: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableCommandInput - {@link GetTableCommandInput}
 * @returns {@link GetTableCommandOutput}
 * @see {@link GetTableCommandInput} for command's `input` shape.
 * @see {@link GetTableCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Amazon Keyspaces was unable to fully process this request because of an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a keyspace or table that doesn't exist. The resource might not be specified correctly, or its status might not be <code>ACTIVE</code>.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation exceeded the service quota for this resource.  For more information on service quotas, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html">Quotas</a> in the <i>Amazon Keyspaces Developer
 *             Guide</i>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation failed due to an invalid or malformed request.</p>
 *
 * @throws {@link KeyspacesServiceException}
 * <p>Base exception class for all service exceptions from Keyspaces service.</p>
 *
 */
export class GetTableCommand extends $Command<
  GetTableCommandInput,
  GetTableCommandOutput,
  KeyspacesClientResolvedConfig
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
  constructor(readonly input: GetTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KeyspacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTableCommandInput, GetTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetTableCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KeyspacesClient";
    const commandName = "GetTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KeyspacesService",
        operation: "GetTable",
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
  private serialize(input: GetTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTableCommandOutput> {
    return de_GetTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

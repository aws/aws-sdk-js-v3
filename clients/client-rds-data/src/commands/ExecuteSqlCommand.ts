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

import { ExecuteSqlRequest, ExecuteSqlResponse } from "../models/models_0";
import { de_ExecuteSqlCommand, se_ExecuteSqlCommand } from "../protocols/Aws_restJson1";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExecuteSqlCommand}.
 */
export interface ExecuteSqlCommandInput extends ExecuteSqlRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteSqlCommand}.
 */
export interface ExecuteSqlCommandOutput extends ExecuteSqlResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Runs one or more SQL statements.</p>
 *         <note>
 *             <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or
 *                     <code>ExecuteStatement</code> operation.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, ExecuteSqlCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, ExecuteSqlCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const input = { // ExecuteSqlRequest
 *   dbClusterOrInstanceArn: "STRING_VALUE", // required
 *   awsSecretStoreArn: "STRING_VALUE", // required
 *   sqlStatements: "STRING_VALUE", // required
 *   database: "STRING_VALUE",
 *   schema: "STRING_VALUE",
 * };
 * const command = new ExecuteSqlCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteSqlResponse
 * //   sqlStatementResults: [ // SqlStatementResults
 * //     { // SqlStatementResult
 * //       resultFrame: { // ResultFrame
 * //         resultSetMetadata: { // ResultSetMetadata
 * //           columnCount: Number("long"),
 * //           columnMetadata: [ // Metadata
 * //             { // ColumnMetadata
 * //               name: "STRING_VALUE",
 * //               type: Number("int"),
 * //               typeName: "STRING_VALUE",
 * //               label: "STRING_VALUE",
 * //               schemaName: "STRING_VALUE",
 * //               tableName: "STRING_VALUE",
 * //               isAutoIncrement: true || false,
 * //               isSigned: true || false,
 * //               isCurrency: true || false,
 * //               isCaseSensitive: true || false,
 * //               nullable: Number("int"),
 * //               precision: Number("int"),
 * //               scale: Number("int"),
 * //               arrayBaseColumnType: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //         records: [ // Records
 * //           { // Record
 * //             values: [ // Row
 * //               { // Value Union: only one key present
 * //                 isNull: true || false,
 * //                 bitValue: true || false,
 * //                 bigIntValue: Number("long"),
 * //                 intValue: Number("int"),
 * //                 doubleValue: Number("double"),
 * //                 realValue: Number("float"),
 * //                 stringValue: "STRING_VALUE",
 * //                 blobValue: "BLOB_VALUE",
 * //                 arrayValues: [ // ArrayValueList
 * //                   {//  Union: only one key present
 * //                     isNull: true || false,
 * //                     bitValue: true || false,
 * //                     bigIntValue: Number("long"),
 * //                     intValue: Number("int"),
 * //                     doubleValue: Number("double"),
 * //                     realValue: Number("float"),
 * //                     stringValue: "STRING_VALUE",
 * //                     blobValue: "BLOB_VALUE",
 * //                     arrayValues: [
 * //                       "<Value>",
 * //                     ],
 * //                     structValue: { // StructValue
 * //                       attributes: "<ArrayValueList>",
 * //                     },
 * //                   },
 * //                 ],
 * //                 structValue: {
 * //                   attributes: "<ArrayValueList>",
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       numberOfRecordsUpdated: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ExecuteSqlCommandInput - {@link ExecuteSqlCommandInput}
 * @returns {@link ExecuteSqlCommandOutput}
 * @see {@link ExecuteSqlCommandInput} for command's `input` shape.
 * @see {@link ExecuteSqlCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for RDSDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>There is an error in the call or in a SQL statement.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>There are insufficient privileges to make the call.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *  <p>The service specified by the <code>resourceArn</code> parameter is not
 *             available.</p>
 *
 * @throws {@link RDSDataServiceException}
 * <p>Base exception class for all service exceptions from RDSData service.</p>
 *
 */
export class ExecuteSqlCommand extends $Command<
  ExecuteSqlCommandInput,
  ExecuteSqlCommandOutput,
  RDSDataClientResolvedConfig
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
  constructor(readonly input: ExecuteSqlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteSqlCommandInput, ExecuteSqlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExecuteSqlCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSDataClient";
    const commandName = "ExecuteSqlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RdsDataService",
        operation: "ExecuteSql",
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
  private serialize(input: ExecuteSqlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExecuteSqlCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteSqlCommandOutput> {
    return de_ExecuteSqlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

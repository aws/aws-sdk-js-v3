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

import { ExecuteStatementRequest, ExecuteStatementResponse } from "../models/models_0";
import { de_ExecuteStatementCommand, se_ExecuteStatementCommand } from "../protocols/Aws_restJson1";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExecuteStatementCommand}.
 */
export interface ExecuteStatementCommandInput extends ExecuteStatementRequest {}
/**
 * @public
 *
 * The output of {@link ExecuteStatementCommand}.
 */
export interface ExecuteStatementCommandOutput extends ExecuteStatementResponse, __MetadataBearer {}

/**
 * @public
 * <p>Runs a SQL statement against a database.</p>
 *         <note>
 *             <p>If a call isn't part of a transaction because it doesn't include the
 *                     <code>transactionID</code> parameter, changes that result from the call are
 *                 committed automatically.</p>
 *             <p>If the binary response data from the database is more than 1 MB, the call is terminated.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, ExecuteStatementCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, ExecuteStatementCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const input = { // ExecuteStatementRequest
 *   resourceArn: "STRING_VALUE", // required
 *   secretArn: "STRING_VALUE", // required
 *   sql: "STRING_VALUE", // required
 *   database: "STRING_VALUE",
 *   schema: "STRING_VALUE",
 *   parameters: [ // SqlParametersList
 *     { // SqlParameter
 *       name: "STRING_VALUE",
 *       value: { // Field Union: only one key present
 *         isNull: true || false,
 *         booleanValue: true || false,
 *         longValue: Number("long"),
 *         doubleValue: Number("double"),
 *         stringValue: "STRING_VALUE",
 *         blobValue: "BLOB_VALUE",
 *         arrayValue: { // ArrayValue Union: only one key present
 *           booleanValues: [ // BooleanArray
 *             true || false,
 *           ],
 *           longValues: [ // LongArray
 *             Number("long"),
 *           ],
 *           doubleValues: [ // DoubleArray
 *             Number("double"),
 *           ],
 *           stringValues: [ // StringArray
 *             "STRING_VALUE",
 *           ],
 *           arrayValues: [ // ArrayOfArray
 *             {//  Union: only one key present
 *               booleanValues: [
 *                 true || false,
 *               ],
 *               longValues: [
 *                 Number("long"),
 *               ],
 *               doubleValues: [
 *                 Number("double"),
 *               ],
 *               stringValues: [
 *                 "STRING_VALUE",
 *               ],
 *               arrayValues: [
 *                 "<ArrayValue>",
 *               ],
 *             },
 *           ],
 *         },
 *       },
 *       typeHint: "STRING_VALUE",
 *     },
 *   ],
 *   transactionId: "STRING_VALUE",
 *   includeResultMetadata: true || false,
 *   continueAfterTimeout: true || false,
 *   resultSetOptions: { // ResultSetOptions
 *     decimalReturnType: "STRING_VALUE",
 *     longReturnType: "STRING_VALUE",
 *   },
 *   formatRecordsAs: "STRING_VALUE",
 * };
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteStatementResponse
 * //   records: [ // SqlRecords
 * //     [ // FieldList
 * //       { // Field Union: only one key present
 * //         isNull: true || false,
 * //         booleanValue: true || false,
 * //         longValue: Number("long"),
 * //         doubleValue: Number("double"),
 * //         stringValue: "STRING_VALUE",
 * //         blobValue: "BLOB_VALUE",
 * //         arrayValue: { // ArrayValue Union: only one key present
 * //           booleanValues: [ // BooleanArray
 * //             true || false,
 * //           ],
 * //           longValues: [ // LongArray
 * //             Number("long"),
 * //           ],
 * //           doubleValues: [ // DoubleArray
 * //             Number("double"),
 * //           ],
 * //           stringValues: [ // StringArray
 * //             "STRING_VALUE",
 * //           ],
 * //           arrayValues: [ // ArrayOfArray
 * //             {//  Union: only one key present
 * //               booleanValues: [
 * //                 true || false,
 * //               ],
 * //               longValues: [
 * //                 Number("long"),
 * //               ],
 * //               doubleValues: [
 * //                 Number("double"),
 * //               ],
 * //               stringValues: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               arrayValues: [
 * //                 "<ArrayValue>",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   ],
 * //   columnMetadata: [ // Metadata
 * //     { // ColumnMetadata
 * //       name: "STRING_VALUE",
 * //       type: Number("int"),
 * //       typeName: "STRING_VALUE",
 * //       label: "STRING_VALUE",
 * //       schemaName: "STRING_VALUE",
 * //       tableName: "STRING_VALUE",
 * //       isAutoIncrement: true || false,
 * //       isSigned: true || false,
 * //       isCurrency: true || false,
 * //       isCaseSensitive: true || false,
 * //       nullable: Number("int"),
 * //       precision: Number("int"),
 * //       scale: Number("int"),
 * //       arrayBaseColumnType: Number("int"),
 * //     },
 * //   ],
 * //   numberOfRecordsUpdated: Number("long"),
 * //   generatedFields: [
 * //     {//  Union: only one key present
 * //       isNull: true || false,
 * //       booleanValue: true || false,
 * //       longValue: Number("long"),
 * //       doubleValue: Number("double"),
 * //       stringValue: "STRING_VALUE",
 * //       blobValue: "BLOB_VALUE",
 * //       arrayValue: "<ArrayValue>",
 * //     },
 * //   ],
 * //   formattedRecords: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExecuteStatementCommandInput - {@link ExecuteStatementCommandInput}
 * @returns {@link ExecuteStatementCommandOutput}
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
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
 * @throws {@link StatementTimeoutException} (client fault)
 *  <p>The execution of the SQL statement timed out.</p>
 *
 * @throws {@link RDSDataServiceException}
 * <p>Base exception class for all service exceptions from RDSData service.</p>
 *
 */
export class ExecuteStatementCommand extends $Command<
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
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
  constructor(readonly input: ExecuteStatementCommandInput) {
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
  ): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSDataClient";
    const commandName = "ExecuteStatementCommand";
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
  private serialize(input: ExecuteStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExecuteStatementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteStatementCommandOutput> {
    return de_ExecuteStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

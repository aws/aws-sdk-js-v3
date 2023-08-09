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

import { BatchExecuteStatementRequest, BatchExecuteStatementResponse } from "../models/models_0";
import { de_BatchExecuteStatementCommand, se_BatchExecuteStatementCommand } from "../protocols/Aws_restJson1";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchExecuteStatementCommand}.
 */
export interface BatchExecuteStatementCommandInput extends BatchExecuteStatementRequest {}
/**
 * @public
 *
 * The output of {@link BatchExecuteStatementCommand}.
 */
export interface BatchExecuteStatementCommandOutput extends BatchExecuteStatementResponse, __MetadataBearer {}

/**
 * @public
 * <p>Runs a batch SQL statement over an array of data.</p>
 *         <p>You can run bulk update and insert operations for multiple records using a DML
 *             statement with different parameter sets. Bulk operations can provide a significant
 *             performance improvement over individual insert and update operations.</p>
 *         <note>
 *             <p>If a call isn't part of a transaction because it doesn't include the <code>transactionID</code> parameter,
 *                 changes that result from the call are committed automatically.</p>
 *             <p>There isn't a fixed upper limit on the number of parameter sets. However, the maximum size of the HTTP request
 *                 submitted through the Data API is 4 MiB. If the request exceeds this limit, the Data API returns an error and doesn't
 *                 process the request. This 4-MiB limit includes the size of the HTTP headers and the JSON notation in the request. Thus, the
 *                 number of parameter sets that you can include depends on a combination of factors, such as the size of the SQL statement and
 *                 the size of each parameter set.</p>
 *             <p>The response size limit is 1 MiB. If the call returns more than 1 MiB of response data, the call is terminated.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, BatchExecuteStatementCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const input = { // BatchExecuteStatementRequest
 *   resourceArn: "STRING_VALUE", // required
 *   secretArn: "STRING_VALUE", // required
 *   sql: "STRING_VALUE", // required
 *   database: "STRING_VALUE",
 *   schema: "STRING_VALUE",
 *   parameterSets: [ // SqlParameterSets
 *     [ // SqlParametersList
 *       { // SqlParameter
 *         name: "STRING_VALUE",
 *         value: { // Field Union: only one key present
 *           isNull: true || false,
 *           booleanValue: true || false,
 *           longValue: Number("long"),
 *           doubleValue: Number("double"),
 *           stringValue: "STRING_VALUE",
 *           blobValue: "BLOB_VALUE",
 *           arrayValue: { // ArrayValue Union: only one key present
 *             booleanValues: [ // BooleanArray
 *               true || false,
 *             ],
 *             longValues: [ // LongArray
 *               Number("long"),
 *             ],
 *             doubleValues: [ // DoubleArray
 *               Number("double"),
 *             ],
 *             stringValues: [ // StringArray
 *               "STRING_VALUE",
 *             ],
 *             arrayValues: [ // ArrayOfArray
 *               {//  Union: only one key present
 *                 booleanValues: [
 *                   true || false,
 *                 ],
 *                 longValues: [
 *                   Number("long"),
 *                 ],
 *                 doubleValues: [
 *                   Number("double"),
 *                 ],
 *                 stringValues: [
 *                   "STRING_VALUE",
 *                 ],
 *                 arrayValues: [
 *                   "<ArrayValue>",
 *                 ],
 *               },
 *             ],
 *           },
 *         },
 *         typeHint: "STRING_VALUE",
 *       },
 *     ],
 *   ],
 *   transactionId: "STRING_VALUE",
 * };
 * const command = new BatchExecuteStatementCommand(input);
 * const response = await client.send(command);
 * // { // BatchExecuteStatementResponse
 * //   updateResults: [ // UpdateResults
 * //     { // UpdateResult
 * //       generatedFields: [ // FieldList
 * //         { // Field Union: only one key present
 * //           isNull: true || false,
 * //           booleanValue: true || false,
 * //           longValue: Number("long"),
 * //           doubleValue: Number("double"),
 * //           stringValue: "STRING_VALUE",
 * //           blobValue: "BLOB_VALUE",
 * //           arrayValue: { // ArrayValue Union: only one key present
 * //             booleanValues: [ // BooleanArray
 * //               true || false,
 * //             ],
 * //             longValues: [ // LongArray
 * //               Number("long"),
 * //             ],
 * //             doubleValues: [ // DoubleArray
 * //               Number("double"),
 * //             ],
 * //             stringValues: [ // StringArray
 * //               "STRING_VALUE",
 * //             ],
 * //             arrayValues: [ // ArrayOfArray
 * //               {//  Union: only one key present
 * //                 booleanValues: [
 * //                   true || false,
 * //                 ],
 * //                 longValues: [
 * //                   Number("long"),
 * //                 ],
 * //                 doubleValues: [
 * //                   Number("double"),
 * //                 ],
 * //                 stringValues: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 arrayValues: [
 * //                   "<ArrayValue>",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchExecuteStatementCommandInput - {@link BatchExecuteStatementCommandInput}
 * @returns {@link BatchExecuteStatementCommandOutput}
 * @see {@link BatchExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link BatchExecuteStatementCommandOutput} for command's `response` shape.
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
export class BatchExecuteStatementCommand extends $Command<
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
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
  constructor(readonly input: BatchExecuteStatementCommandInput) {
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
  ): Handler<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchExecuteStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSDataClient";
    const commandName = "BatchExecuteStatementCommand";
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
  private serialize(input: BatchExecuteStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchExecuteStatementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchExecuteStatementCommandOutput> {
    return de_BatchExecuteStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

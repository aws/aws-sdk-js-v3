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

import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import {
  BatchUpdateTableRowsRequest,
  BatchUpdateTableRowsRequestFilterSensitiveLog,
  BatchUpdateTableRowsResult,
} from "../models/models_0";
import { de_BatchUpdateTableRowsCommand, se_BatchUpdateTableRowsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateTableRowsCommand}.
 */
export interface BatchUpdateTableRowsCommandInput extends BatchUpdateTableRowsRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateTableRowsCommand}.
 */
export interface BatchUpdateTableRowsCommandOutput extends BatchUpdateTableRowsResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook.
 *         </p>
 *          <p>
 *             You can specify the values to set in some or all of the columns in the table for the specified
 *             rows.
 *             If a column is not explicitly specified in a particular row, then that column will not be updated
 *             for that row. To clear out the data in a specific cell, you need to set the value as an empty string
 *             ("").
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchUpdateTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchUpdateTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const input = { // BatchUpdateTableRowsRequest
 *   workbookId: "STRING_VALUE", // required
 *   tableId: "STRING_VALUE", // required
 *   rowsToUpdate: [ // UpdateRowDataList // required
 *     { // UpdateRowData
 *       rowId: "STRING_VALUE", // required
 *       cellsToUpdate: { // RowDataInput // required
 *         "<keys>": { // CellInput
 *           fact: "STRING_VALUE",
 *           facts: [ // FactList
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 * };
 * const command = new BatchUpdateTableRowsCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateTableRowsResult
 * //   workbookCursor: Number("long"), // required
 * //   failedBatchItems: [ // FailedBatchItems
 * //     { // FailedBatchItem
 * //       id: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateTableRowsCommandInput - {@link BatchUpdateTableRowsCommandInput}
 * @returns {@link BatchUpdateTableRowsCommandOutput}
 * @see {@link BatchUpdateTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateTableRowsCommandOutput} for command's `response` shape.
 * @see {@link HoneycodeClientResolvedConfig | config} for HoneycodeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *             You do not have sufficient access to perform this action. Check that the workbook is owned by you and your
 *             IAM policy allows access to the resource in the request.
 *         </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There were unexpected errors from the server.</p>
 *
 * @throws {@link RequestTimeoutException} (server fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A Workbook, Table, App, Screen or Screen Automation was not found with the given ID.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Remote service is unreachable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Tps(transactions per second) rate reached.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *             Request is invalid. The message in the response contains details on why the request is invalid.
 *         </p>
 *
 * @throws {@link HoneycodeServiceException}
 * <p>Base exception class for all service exceptions from Honeycode service.</p>
 *
 */
export class BatchUpdateTableRowsCommand extends $Command<
  BatchUpdateTableRowsCommandInput,
  BatchUpdateTableRowsCommandOutput,
  HoneycodeClientResolvedConfig
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
  constructor(readonly input: BatchUpdateTableRowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HoneycodeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdateTableRowsCommandInput, BatchUpdateTableRowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdateTableRowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "BatchUpdateTableRowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateTableRowsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SheetsPublicApiService",
        operation: "BatchUpdateTableRows",
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
  private serialize(input: BatchUpdateTableRowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchUpdateTableRowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateTableRowsCommandOutput> {
    return de_BatchUpdateTableRowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

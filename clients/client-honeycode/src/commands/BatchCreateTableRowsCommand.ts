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
  BatchCreateTableRowsRequest,
  BatchCreateTableRowsRequestFilterSensitiveLog,
  BatchCreateTableRowsResult,
} from "../models/models_0";
import { de_BatchCreateTableRowsCommand, se_BatchCreateTableRowsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateTableRowsCommand}.
 */
export interface BatchCreateTableRowsCommandInput extends BatchCreateTableRowsRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateTableRowsCommand}.
 */
export interface BatchCreateTableRowsCommandOutput extends BatchCreateTableRowsResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook.
 *             The API allows you to specify the values to set in some or all of the columns in the new rows.
 *         </p>
 *          <p>
 *             If a column is not explicitly set in a specific row, then the column level formula specified in the table
 *             will be applied to the new row. If there is no column level formula but the last row of the table has a
 *             formula, then that formula will be copied down to the new row. If there is no column level formula and
 *             no formula in the last row of the table, then that column will be left blank for the new rows.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, BatchCreateTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, BatchCreateTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const input = { // BatchCreateTableRowsRequest
 *   workbookId: "STRING_VALUE", // required
 *   tableId: "STRING_VALUE", // required
 *   rowsToCreate: [ // CreateRowDataList // required
 *     { // CreateRowData
 *       batchItemId: "STRING_VALUE", // required
 *       cellsToCreate: { // RowDataInput // required
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
 * const command = new BatchCreateTableRowsCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateTableRowsResult
 * //   workbookCursor: Number("long"), // required
 * //   createdRows: { // CreatedRowsMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
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
 * @param BatchCreateTableRowsCommandInput - {@link BatchCreateTableRowsCommandInput}
 * @returns {@link BatchCreateTableRowsCommandOutput}
 * @see {@link BatchCreateTableRowsCommandInput} for command's `input` shape.
 * @see {@link BatchCreateTableRowsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *             The request caused service quota to be breached.
 *         </p>
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
export class BatchCreateTableRowsCommand extends $Command<
  BatchCreateTableRowsCommandInput,
  BatchCreateTableRowsCommandOutput,
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
  constructor(readonly input: BatchCreateTableRowsCommandInput) {
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
  ): Handler<BatchCreateTableRowsCommandInput, BatchCreateTableRowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchCreateTableRowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "BatchCreateTableRowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchCreateTableRowsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SheetsPublicApiService",
        operation: "BatchCreateTableRows",
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
  private serialize(input: BatchCreateTableRowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchCreateTableRowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchCreateTableRowsCommandOutput> {
    return de_BatchCreateTableRowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

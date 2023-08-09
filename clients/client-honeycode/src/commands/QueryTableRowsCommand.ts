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

import { HoneycodeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HoneycodeClient";
import {
  QueryTableRowsRequest,
  QueryTableRowsRequestFilterSensitiveLog,
  QueryTableRowsResult,
  QueryTableRowsResultFilterSensitiveLog,
} from "../models/models_0";
import { de_QueryTableRowsCommand, se_QueryTableRowsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QueryTableRowsCommand}.
 */
export interface QueryTableRowsCommandInput extends QueryTableRowsRequest {}
/**
 * @public
 *
 * The output of {@link QueryTableRowsCommand}.
 */
export interface QueryTableRowsCommandOutput extends QueryTableRowsResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *             The QueryTableRows API allows you to use a filter formula to query for specific rows in a table.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HoneycodeClient, QueryTableRowsCommand } from "@aws-sdk/client-honeycode"; // ES Modules import
 * // const { HoneycodeClient, QueryTableRowsCommand } = require("@aws-sdk/client-honeycode"); // CommonJS import
 * const client = new HoneycodeClient(config);
 * const input = { // QueryTableRowsRequest
 *   workbookId: "STRING_VALUE", // required
 *   tableId: "STRING_VALUE", // required
 *   filterFormula: { // Filter
 *     formula: "STRING_VALUE", // required
 *     contextRowId: "STRING_VALUE",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new QueryTableRowsCommand(input);
 * const response = await client.send(command);
 * // { // QueryTableRowsResult
 * //   columnIds: [ // ResourceIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   rows: [ // TableRows // required
 * //     { // TableRow
 * //       rowId: "STRING_VALUE", // required
 * //       cells: [ // Cells // required
 * //         { // Cell
 * //           formula: "STRING_VALUE",
 * //           format: "STRING_VALUE",
 * //           rawValue: "STRING_VALUE",
 * //           formattedValue: "STRING_VALUE",
 * //           formattedValues: [ // FormattedValuesList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   workbookCursor: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param QueryTableRowsCommandInput - {@link QueryTableRowsCommandInput}
 * @returns {@link QueryTableRowsCommandOutput}
 * @see {@link QueryTableRowsCommandInput} for command's `input` shape.
 * @see {@link QueryTableRowsCommandOutput} for command's `response` shape.
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
export class QueryTableRowsCommand extends $Command<
  QueryTableRowsCommandInput,
  QueryTableRowsCommandOutput,
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
  constructor(readonly input: QueryTableRowsCommandInput) {
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
  ): Handler<QueryTableRowsCommandInput, QueryTableRowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, QueryTableRowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HoneycodeClient";
    const commandName = "QueryTableRowsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryTableRowsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: QueryTableRowsResultFilterSensitiveLog,
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
  private serialize(input: QueryTableRowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QueryTableRowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryTableRowsCommandOutput> {
    return de_QueryTableRowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { ListPerformanceAnalysisReportsRequest, ListPerformanceAnalysisReportsResponse } from "../models/models_0";
import { PIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PIClient";
import {
  de_ListPerformanceAnalysisReportsCommand,
  se_ListPerformanceAnalysisReportsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPerformanceAnalysisReportsCommand}.
 */
export interface ListPerformanceAnalysisReportsCommandInput extends ListPerformanceAnalysisReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListPerformanceAnalysisReportsCommand}.
 */
export interface ListPerformanceAnalysisReportsCommandOutput
  extends ListPerformanceAnalysisReportsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists all the analysis reports created for the DB instance. The reports are sorted based on the start time of each report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PIClient, ListPerformanceAnalysisReportsCommand } from "@aws-sdk/client-pi"; // ES Modules import
 * // const { PIClient, ListPerformanceAnalysisReportsCommand } = require("@aws-sdk/client-pi"); // CommonJS import
 * const client = new PIClient(config);
 * const input = { // ListPerformanceAnalysisReportsRequest
 *   ServiceType: "RDS" || "DOCDB", // required
 *   Identifier: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ListTags: true || false,
 * };
 * const command = new ListPerformanceAnalysisReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListPerformanceAnalysisReportsResponse
 * //   AnalysisReports: [ // AnalysisReportSummaryList
 * //     { // AnalysisReportSummary
 * //       AnalysisReportId: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Status: "RUNNING" || "SUCCEEDED" || "FAILED",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPerformanceAnalysisReportsCommandInput - {@link ListPerformanceAnalysisReportsCommandInput}
 * @returns {@link ListPerformanceAnalysisReportsCommandOutput}
 * @see {@link ListPerformanceAnalysisReportsCommandInput} for command's `input` shape.
 * @see {@link ListPerformanceAnalysisReportsCommandOutput} for command's `response` shape.
 * @see {@link PIClientResolvedConfig | config} for PIClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>The request failed due to an unknown error.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>One of the arguments provided is invalid for this request.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The user is not authorized to perform this request.</p>
 *
 * @throws {@link PIServiceException}
 * <p>Base exception class for all service exceptions from PI service.</p>
 *
 */
export class ListPerformanceAnalysisReportsCommand extends $Command<
  ListPerformanceAnalysisReportsCommandInput,
  ListPerformanceAnalysisReportsCommandOutput,
  PIClientResolvedConfig
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
  constructor(readonly input: ListPerformanceAnalysisReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PIClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPerformanceAnalysisReportsCommandInput, ListPerformanceAnalysisReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPerformanceAnalysisReportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PIClient";
    const commandName = "ListPerformanceAnalysisReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PerformanceInsightsv20180227",
        operation: "ListPerformanceAnalysisReports",
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
    input: ListPerformanceAnalysisReportsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListPerformanceAnalysisReportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPerformanceAnalysisReportsCommandOutput> {
    return de_ListPerformanceAnalysisReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

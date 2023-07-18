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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListSessionMetricsRequest, ListSessionMetricsResponse } from "../models/models_1";
import { de_ListSessionMetricsCommand, se_ListSessionMetricsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSessionMetricsCommand}.
 */
export interface ListSessionMetricsCommandInput extends ListSessionMetricsRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionMetricsCommand}.
 */
export interface ListSessionMetricsCommandOutput extends ListSessionMetricsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves summary metrics for the user sessions with your bot. The following fields are required:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>metrics</code> – A list of <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_AnalyticsSessionMetric.html">AnalyticsSessionMetric</a> objects. In each object, use the <code>name</code> field to specify the metric to calculate, the <code>statistic</code> field to specify whether to calculate the <code>Sum</code>, <code>Average</code>, or <code>Max</code> number, and the <code>order</code> field to specify whether to sort the results in <code>Ascending</code> or <code>Descending</code> order.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>startDateTime</code> and <code>endDateTime</code> – Define a time range for which you want to retrieve results.</p>
 *             </li>
 *          </ul>
 *          <p>Of the optional fields, you can organize the results in the following ways:</p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>filters</code> field to filter the results, the <code>groupBy</code> field to specify categories by which to group the results, and the <code>binBy</code> field to specify time intervals by which to group the results.</p>
 *             </li>
 *             <li>
 *                <p>Use the <code>maxResults</code> field to limit the number of results to return in a single response and the <code>nextToken</code> field to return the next batch of results if the response does not return the full set of results.</p>
 *             </li>
 *          </ul>
 *          <p>Note that an <code>order</code> field exists in both <code>binBy</code> and <code>metrics</code>. Currently, you can specify it in either field, but not in both.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListSessionMetricsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListSessionMetricsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListSessionMetricsRequest
 *   botId: "STRING_VALUE", // required
 *   startDateTime: new Date("TIMESTAMP"), // required
 *   endDateTime: new Date("TIMESTAMP"), // required
 *   metrics: [ // AnalyticsSessionMetrics // required
 *     { // AnalyticsSessionMetric
 *       name: "Count" || "Success" || "Failure" || "Dropped" || "Duration" || "TurnsPerConversation" || "Concurrency", // required
 *       statistic: "Sum" || "Avg" || "Max", // required
 *       order: "Ascending" || "Descending",
 *     },
 *   ],
 *   binBy: [ // AnalyticsBinByList
 *     { // AnalyticsBinBySpecification
 *       name: "ConversationStartTime" || "UtteranceTimestamp", // required
 *       interval: "OneHour" || "OneDay", // required
 *       order: "Ascending" || "Descending",
 *     },
 *   ],
 *   groupBy: [ // AnalyticsSessionGroupByList
 *     { // AnalyticsSessionGroupBySpecification
 *       name: "ConversationEndState" || "LocaleId", // required
 *     },
 *   ],
 *   filters: [ // AnalyticsSessionFilters
 *     { // AnalyticsSessionFilter
 *       name: "BotAliasId" || "BotVersion" || "LocaleId" || "Modality" || "Channel" || "Duration" || "ConversationEndState" || "SessionId" || "OriginatingRequestId" || "IntentPath", // required
 *       operator: "EQ" || "GT" || "LT", // required
 *       values: [ // AnalyticsFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSessionMetricsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionMetricsResponse
 * //   botId: "STRING_VALUE",
 * //   results: [ // AnalyticsSessionResults
 * //     { // AnalyticsSessionResult
 * //       binKeys: [ // AnalyticsBinKeys
 * //         { // AnalyticsBinKey
 * //           name: "ConversationStartTime" || "UtteranceTimestamp",
 * //           value: Number("long"),
 * //         },
 * //       ],
 * //       groupByKeys: [ // AnalyticsSessionGroupByKeys
 * //         { // AnalyticsSessionGroupByKey
 * //           name: "ConversationEndState" || "LocaleId",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       metricsResults: [ // AnalyticsSessionMetricResults
 * //         { // AnalyticsSessionMetricResult
 * //           name: "Count" || "Success" || "Failure" || "Dropped" || "Duration" || "TurnsPerConversation" || "Concurrency",
 * //           statistic: "Sum" || "Avg" || "Max",
 * //           value: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSessionMetricsCommandInput - {@link ListSessionMetricsCommandInput}
 * @returns {@link ListSessionMetricsCommandOutput}
 * @see {@link ListSessionMetricsCommandInput} for command's `input` shape.
 * @see {@link ListSessionMetricsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class ListSessionMetricsCommand extends $Command<
  ListSessionMetricsCommandInput,
  ListSessionMetricsCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: ListSessionMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSessionMetricsCommandInput, ListSessionMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSessionMetricsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListSessionMetricsCommand";
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
  private serialize(input: ListSessionMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSessionMetricsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSessionMetricsCommandOutput> {
    return de_ListSessionMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetInsightRuleReportInput, GetInsightRuleReportOutput } from "../models/models_0";
import { de_GetInsightRuleReportCommand, se_GetInsightRuleReportCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInsightRuleReportCommand}.
 */
export interface GetInsightRuleReportCommandInput extends GetInsightRuleReportInput {}
/**
 * @public
 *
 * The output of {@link GetInsightRuleReportCommand}.
 */
export interface GetInsightRuleReportCommandOutput extends GetInsightRuleReportOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of
 * 		contributors to the log group.</p>
 *          <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the
 * 					contributor might change for each data point in the graph.</p>
 *                <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the
 * 					most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified
 * 					by the rule's <code>Value</code>, during that period.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SampleCount</code> -- the number of data points matched by the rule.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetInsightRuleReportCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetInsightRuleReportCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // GetInsightRuleReportInput
 *   RuleName: "STRING_VALUE", // required
 *   StartTime: new Date("TIMESTAMP"), // required
 *   EndTime: new Date("TIMESTAMP"), // required
 *   Period: Number("int"), // required
 *   MaxContributorCount: Number("int"),
 *   Metrics: [ // InsightRuleMetricList
 *     "STRING_VALUE",
 *   ],
 *   OrderBy: "STRING_VALUE",
 * };
 * const command = new GetInsightRuleReportCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightRuleReportOutput
 * //   KeyLabels: [ // InsightRuleContributorKeyLabels
 * //     "STRING_VALUE",
 * //   ],
 * //   AggregationStatistic: "STRING_VALUE",
 * //   AggregateValue: Number("double"),
 * //   ApproximateUniqueCount: Number("long"),
 * //   Contributors: [ // InsightRuleContributors
 * //     { // InsightRuleContributor
 * //       Keys: [ // InsightRuleContributorKeys // required
 * //         "STRING_VALUE",
 * //       ],
 * //       ApproximateAggregateValue: Number("double"), // required
 * //       Datapoints: [ // InsightRuleContributorDatapoints // required
 * //         { // InsightRuleContributorDatapoint
 * //           Timestamp: new Date("TIMESTAMP"), // required
 * //           ApproximateValue: Number("double"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   MetricDatapoints: [ // InsightRuleMetricDatapoints
 * //     { // InsightRuleMetricDatapoint
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       UniqueContributors: Number("double"),
 * //       MaxContributorValue: Number("double"),
 * //       SampleCount: Number("double"),
 * //       Average: Number("double"),
 * //       Sum: Number("double"),
 * //       Minimum: Number("double"),
 * //       Maximum: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetInsightRuleReportCommandInput - {@link GetInsightRuleReportCommandInput}
 * @returns {@link GetInsightRuleReportCommandOutput}
 * @see {@link GetInsightRuleReportCommandInput} for command's `input` shape.
 * @see {@link GetInsightRuleReportCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 */
export class GetInsightRuleReportCommand extends $Command<
  GetInsightRuleReportCommandInput,
  GetInsightRuleReportCommandOutput,
  CloudWatchClientResolvedConfig
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
  constructor(readonly input: GetInsightRuleReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInsightRuleReportCommandInput, GetInsightRuleReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInsightRuleReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetInsightRuleReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GraniteServiceVersion20100801",
        operation: "GetInsightRuleReport",
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
  private serialize(input: GetInsightRuleReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInsightRuleReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightRuleReportCommandOutput> {
    return de_GetInsightRuleReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

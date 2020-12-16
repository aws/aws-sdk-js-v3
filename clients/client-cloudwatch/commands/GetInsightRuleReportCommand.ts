import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetInsightRuleReportInput, GetInsightRuleReportOutput } from "../models/models_0";
import {
  deserializeAws_queryGetInsightRuleReportCommand,
  serializeAws_queryGetInsightRuleReportCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetInsightRuleReportCommandInput = GetInsightRuleReportInput;
export type GetInsightRuleReportCommandOutput = GetInsightRuleReportOutput & __MetadataBearer;

/**
 * <p>This operation returns the time series data collected by a Contributor Insights rule. The data includes the identity and number of
 * 		contributors to the log group.</p>
 * 		       <p>You can also optionally return one or more statistics about each data point in the time series. These statistics can include the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>UniqueContributors</code> -- the number of unique contributors for each data point.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>MaxContributorValue</code> -- the value of the top contributor for each data point. The identity of the
 * 					contributor might change for each data point in the graph.</p>
 * 				           <p>If this rule aggregates by COUNT, the top contributor for each data point is the contributor with the
 * 					most occurrences in that period. If the rule aggregates by SUM, the top contributor is the contributor with the highest sum in the log field specified
 * 					by the rule's <code>Value</code>, during that period.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>SampleCount</code> -- the number of data points matched by the rule.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>Sum</code> -- the sum of the values from all contributors during the time period represented by that data point.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>Minimum</code> -- the minimum value from a single observation during the time period represented by that data point.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>Maximum</code> -- the maximum value from a single observation during the time period represented by that data point.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <code>Average</code> -- the average value from all contributors during the time period represented by that data point.</p>
 * 			         </li>
 *          </ul>
 */
export class GetInsightRuleReportCommand extends $Command<
  GetInsightRuleReportCommandInput,
  GetInsightRuleReportCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetInsightRuleReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInsightRuleReportInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetInsightRuleReportOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInsightRuleReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetInsightRuleReportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightRuleReportCommandOutput> {
    return deserializeAws_queryGetInsightRuleReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetMetricDataInput, GetMetricDataOutput } from "../models/models_0";
import {
  deserializeAws_queryGetMetricDataCommand,
  serializeAws_queryGetMetricDataCommand,
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

export type GetMetricDataCommandInput = GetMetricDataInput;
export type GetMetricDataCommandOutput = GetMetricDataOutput & __MetadataBearer;

/**
 * <p>You can use the <code>GetMetricData</code> API to retrieve as many as 500 different
 * 			metrics in a single request, with a total of as many as 100,800 data points. You can also
 * 			optionally perform math expressions on the values of the returned statistics, to create
 * 			new time series that represent new insights into your data. For example, using Lambda
 * 			metrics, you could divide the Errors metric by the Invocations metric to get an error
 * 			rate time series. For more information about metric math expressions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax">Metric Math Syntax and Functions</a> in the <i>Amazon CloudWatch User
 * 				Guide</i>.</p>
 *
 * 		       <p>Calls to the <code>GetMetricData</code> API have a different pricing structure than
 * 			calls to <code>GetMetricStatistics</code>. For more information about pricing, see
 * 			<a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
 *
 * 		       <p>Amazon CloudWatch retains metric data as follows:</p>
 * 		       <ul>
 *             <li>
 *                <p>Data points with a period of less than 60 seconds are available for 3 hours. These data points are high-resolution
 * 				metrics and are available only for custom metrics that have been defined with a <code>StorageResolution</code> of 1.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 60 seconds (1-minute) are available for 15 days.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 300 seconds (5-minute) are available for 63 days.</p>
 *             </li>
 *             <li>
 *                <p>Data points with a period of 3600 seconds (1 hour) are available for 455 days (15 months).</p>
 *             </li>
 *          </ul>
 * 		       <p>Data points that are initially published with a shorter period are aggregated together for long-term storage. For example, if you collect
 * 			data using a period of 1 minute, the data remains available for 15 days with 1-minute resolution. After 15 days, this data is still available,
 * 			but is aggregated and retrievable only with a resolution of 5 minutes. After 63 days, the data is further aggregated and is available with
 * 			a resolution of 1 hour.</p>
 *
 * 		       <p>If you omit <code>Unit</code> in your request, all data that was collected with any unit is returned, along with the corresponding units that were specified
 * 			when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified.
 * 			If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.</p>
 */
export class GetMetricDataCommand extends $Command<
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMetricDataCommandInput) {
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
  ): Handler<GetMetricDataCommandInput, GetMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetMetricDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMetricDataInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetMetricDataOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetMetricDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricDataCommandOutput> {
    return deserializeAws_queryGetMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

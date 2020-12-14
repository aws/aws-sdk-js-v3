import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutMetricDataInput } from "../models/models_0";
import {
  deserializeAws_queryPutMetricDataCommand,
  serializeAws_queryPutMetricDataCommand,
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

export type PutMetricDataCommandInput = PutMetricDataInput;
export type PutMetricDataCommandOutput = __MetadataBearer;

/**
 * <p>Publishes metric data points to Amazon CloudWatch. CloudWatch associates
 * 			the data points with the specified metric. If the specified metric does not exist,
 * 			CloudWatch creates the metric. When CloudWatch creates a metric, it can
 * 			take up to fifteen minutes for the metric to appear in calls to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p>
 *
 * 		       <p>You can publish either individual data points in the <code>Value</code> field, or
 * 		arrays of values and the number of times each value occurred during the period by using the
 * 		<code>Values</code> and <code>Counts</code> fields in the <code>MetricDatum</code> structure. Using
 * 		the <code>Values</code> and <code>Counts</code> method enables you to publish up to 150 values per metric
 * 			with one <code>PutMetricData</code> request, and
 * 		supports retrieving percentile statistics on this data.</p>
 * 		       <p>Each <code>PutMetricData</code> request is limited to 40 KB in size for HTTP POST requests. You can
 * 			send a payload compressed by gzip. Each request
 * 		is also limited to no more than 20 different metrics.</p>
 * 		       <p>Although the <code>Value</code> parameter accepts numbers of type
 * 			<code>Double</code>, CloudWatch rejects values that are either too small
 * 			or too large. Values must be in the range of -2^360 to 2^360. In addition, special values (for example, NaN, +Infinity,
 * 			-Infinity) are not supported.</p>
 * 		       <p>You can use up to 10 dimensions per metric to further clarify what data the metric collects. Each dimension
 * 			consists of a Name and Value pair. For more information about specifying dimensions, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publishing Metrics</a> in the
 * 			<i>Amazon CloudWatch User Guide</i>.</p>
 *
 * 		       <p>You specify the time stamp to be associated with each data point. You can specify
 * 		time stamps that are as much as two weeks before the current date, and as much as 2 hours after
 * 		the current day and time.</p>
 * 		       <p>Data points with time stamps from 24 hours ago or longer can take at least 48
 * 			hours to become available for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a> from the time they
 * 			are submitted. Data points with time stamps between 3 and 24 hours ago can take as much as 2 hours to become available
 * 			for for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricData.html">GetMetricData</a> or
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_GetMetricStatistics.html">GetMetricStatistics</a>.</p>
 * 		       <p>CloudWatch needs raw data points to calculate percentile statistics. If you publish
 * 			data using a statistic set instead, you can only retrieve
 * 			percentile statistics for this data if one of the following conditions is true:</p>
 * 			      <ul>
 *             <li>
 *                <p>The <code>SampleCount</code> value of the statistic set is 1 and <code>Min</code>,
 * 					<code>Max</code>, and <code>Sum</code> are all equal.</p>
 *             </li>
 *             <li>
 *                <p>The <code>Min</code> and
 * 					<code>Max</code> are equal, and <code>Sum</code> is equal to <code>Min</code>
 * 					multiplied by <code>SampleCount</code>.</p>
 *             </li>
 *          </ul>
 */
export class PutMetricDataCommand extends $Command<
  PutMetricDataCommandInput,
  PutMetricDataCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutMetricDataCommandInput) {
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
  ): Handler<PutMetricDataCommandInput, PutMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutMetricDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMetricDataInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutMetricDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutMetricDataCommandOutput> {
    return deserializeAws_queryPutMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

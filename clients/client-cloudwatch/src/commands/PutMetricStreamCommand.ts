// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import {
  PutMetricStreamInput,
  PutMetricStreamInputFilterSensitiveLog,
  PutMetricStreamOutput,
  PutMetricStreamOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryPutMetricStreamCommand,
  serializeAws_queryPutMetricStreamCommand,
} from "../protocols/Aws_query";

export interface PutMetricStreamCommandInput extends PutMetricStreamInput {}
export interface PutMetricStreamCommandOutput extends PutMetricStreamOutput, __MetadataBearer {}

/**
 * <p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch
 * 			metrics to Amazon Web Services destinations, including Amazon S3, and to many third-party
 * 			solutions.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html">
 * 		Using Metric Streams</a>.</p>
 *          <p>To create a metric stream, you must be signed in to an account that has the
 * 				<code>iam:PassRole</code> permission and either the
 * 				<code>CloudWatchFullAccess</code> policy or the
 * 				<code>cloudwatch:PutMetricStream</code> permission.</p>
 *          <p>When you create or update a metric stream, you choose one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>Stream metrics from all metric namespaces in the account.</p>
 *             </li>
 *             <li>
 *                <p>Stream metrics from all metric namespaces in the account, except
 * 				for the namespaces that you list in <code>ExcludeFilters</code>.</p>
 *             </li>
 *             <li>
 *                <p>Stream metrics from only the metric namespaces that you list in
 * 				<code>IncludeFilters</code>.</p>
 *             </li>
 *          </ul>
 *          <p>By default, a metric stream always sends the <code>MAX</code>, <code>MIN</code>,
 * 				<code>SUM</code>, and <code>SAMPLECOUNT</code> statistics for each metric that is
 * 			streamed. You can use the <code>StatisticsConfigurations</code> parameter to have the
 * 			metric stream send additional statistics in the stream. Streaming additional statistics
 * 			incurs additional costs. For more information, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>. </p>
 *          <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream
 * 		is created in the <code>running</code> state. If you use it to update an existing stream,
 * 		the state of the stream is not changed.</p>
 *          <p>If you are using CloudWatch cross-account observability and you create a metric stream in a monitoring account,
 * 			you can choose whether to include metrics from source accounts in the stream. For more information, see
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new PutMetricStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMetricStreamCommandInput} for command's `input` shape.
 * @see {@link PutMetricStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class PutMetricStreamCommand extends $Command<
  PutMetricStreamCommandInput,
  PutMetricStreamCommandOutput,
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

  constructor(readonly input: PutMetricStreamCommandInput) {
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
  ): Handler<PutMetricStreamCommandInput, PutMetricStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutMetricStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutMetricStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMetricStreamInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutMetricStreamOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutMetricStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutMetricStreamCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutMetricStreamCommandOutput> {
    return deserializeAws_queryPutMetricStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

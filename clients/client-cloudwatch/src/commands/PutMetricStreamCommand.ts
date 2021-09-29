import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutMetricStreamInput, PutMetricStreamOutput } from "../models/models_0";
import {
  deserializeAws_queryPutMetricStreamCommand,
  serializeAws_queryPutMetricStreamCommand,
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

export interface PutMetricStreamCommandInput extends PutMetricStreamInput {}
export interface PutMetricStreamCommandOutput extends PutMetricStreamOutput, __MetadataBearer {}

/**
 * <p>Creates or updates a metric stream. Metric streams can automatically stream CloudWatch metrics
 * 			to Amazon Web Services destinations including
 * 			Amazon S3 and to many third-party solutions.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Metric-Streams.html">
 * 		Using Metric Streams</a>.</p>
 * 		       <p>To create a metric stream,
 * 			you must be logged on to an account that has the <code>iam:PassRole</code> permission
 * 			and either the <code>CloudWatchFullAccess</code>
 * 		policy or the <code>cloudwatch:PutMetricStream</code>
 * 		permission.</p>
 * 		       <p>When you create or update a metric stream, you choose one of the following:</p>
 * 		       <ul>
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
 *
 * 		       <p>When you use <code>PutMetricStream</code> to create a new metric stream, the stream
 * 		is created in the <code>running</code> state. If you use it to update an existing stream,
 * 		the state of the stream is not changed.</p>
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
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutMetricStreamCommand extends $Command<
  PutMetricStreamCommandInput,
  PutMetricStreamCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutMetricStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMetricStreamInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutMetricStreamOutput.filterSensitiveLog,
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

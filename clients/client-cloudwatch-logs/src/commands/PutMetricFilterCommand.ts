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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutMetricFilterRequest, PutMetricFilterRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1PutMetricFilterCommand,
  serializeAws_json1_1PutMetricFilterCommand,
} from "../protocols/Aws_json1_1";

export interface PutMetricFilterCommandInput extends PutMetricFilterRequest {}
export interface PutMetricFilterCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates a metric filter and associates it with the specified log group. With
 *       metric filters, you can configure rules to extract metric data from log events ingested
 *       through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p>
 *          <p>The maximum number of metric filters that can be associated with a log group is
 *       100.</p>
 *          <p>When you create a metric filter, you can also optionally assign a unit and dimensions
 *     to the metric that is created.</p>
 *          <important>
 *             <p>Metrics extracted from log events are charged as custom metrics.
 *       To prevent unexpected high charges, do not specify high-cardinality fields such as
 *       <code>IPAddress</code> or <code>requestID</code> as dimensions. Each different value
 *       found for
 *       a dimension is treated as a separate metric and accrues charges as a separate custom metric.
 *     </p>
 *             <p>CloudWatch Logs disables a metric filter if it generates 1,000 different name/value pairs for
 *         your specified dimensions within a certain amount of time. This helps to prevent accidental
 *         high charges.</p>
 *             <p>You can also set up a billing alarm to alert you if your charges are higher than
 *         expected. For more information,
 *         see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html">
 *           Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>.
 *       </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutMetricFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutMetricFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new PutMetricFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutMetricFilterCommandInput} for command's `input` shape.
 * @see {@link PutMetricFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 */
export class PutMetricFilterCommand extends $Command<
  PutMetricFilterCommandInput,
  PutMetricFilterCommandOutput,
  CloudWatchLogsClientResolvedConfig
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

  constructor(readonly input: PutMetricFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutMetricFilterCommandInput, PutMetricFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutMetricFilterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "PutMetricFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutMetricFilterRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutMetricFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutMetricFilterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutMetricFilterCommandOutput> {
    return deserializeAws_json1_1PutMetricFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

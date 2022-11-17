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

import {
  BatchCreateRumMetricDefinitionsRequest,
  BatchCreateRumMetricDefinitionsRequestFilterSensitiveLog,
  BatchCreateRumMetricDefinitionsResponse,
  BatchCreateRumMetricDefinitionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchCreateRumMetricDefinitionsCommand,
  serializeAws_restJson1BatchCreateRumMetricDefinitionsCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

export interface BatchCreateRumMetricDefinitionsCommandInput extends BatchCreateRumMetricDefinitionsRequest {}
export interface BatchCreateRumMetricDefinitionsCommandOutput
  extends BatchCreateRumMetricDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>Specifies the extended metrics that you want a CloudWatch RUM app monitor to send to a destination. Valid
 *          destinations include CloudWatch and Evidently.</p>
 *          <p>By default, RUM app monitors send some metrics to CloudWatch. These default metrics
 *          are listed in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-metrics.html">CloudWatch metrics that you can collect
 *             with CloudWatch RUM</a>.</p>
 *          <p>If you also send extended metrics, you can send metrics to Evidently as well as CloudWatch, and you can also
 *          optionally
 *          send the metrics with additional dimensions. The valid dimension names for the additional dimensions are
 *          <code>BrowserName</code>, <code>CountryCode</code>, <code>DeviceType</code>,
 *          <code>FileType</code>, <code>OSName</code>, and <code>PageId</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-RUM-vended-metrics.html">
 *             Extended metrics that you can send to CloudWatch and CloudWatch Evidently</a>.</p>
 *          <p>The maximum number of metric definitions that you can specify in one
 *          <code>BatchCreateRumMetricDefinitions</code> operation is 200.</p>
 *          <p>The maximum number of metric definitions that one destination can contain is 2000.</p>
 *          <p>Extended metrics sent are charged as CloudWatch custom metrics. Each combination of additional dimension name and dimension
 *          value counts as a custom metric. For more information, see
 *          <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
 *          <p>You must have
 *          already created a destination for the metrics before you send them. For more information, see
 *          <a href="https://docs.aws.amazon.com/cloudwatchrum/latest/APIReference/API_PutRumMetricsDestination.html">PutRumMetricsDestination</a>.</p>
 *          <p>If some metric definitions specified in a <code>BatchCreateRumMetricDefinitions</code> operations are not valid,
 *       those metric definitions fail and return errors, but all valid metric definitions in the same operation still succeed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, BatchCreateRumMetricDefinitionsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, BatchCreateRumMetricDefinitionsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const command = new BatchCreateRumMetricDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchCreateRumMetricDefinitionsCommandInput} for command's `input` shape.
 * @see {@link BatchCreateRumMetricDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 */
export class BatchCreateRumMetricDefinitionsCommand extends $Command<
  BatchCreateRumMetricDefinitionsCommandInput,
  BatchCreateRumMetricDefinitionsCommandOutput,
  RUMClientResolvedConfig
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

  constructor(readonly input: BatchCreateRumMetricDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchCreateRumMetricDefinitionsCommandInput, BatchCreateRumMetricDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchCreateRumMetricDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "BatchCreateRumMetricDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchCreateRumMetricDefinitionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchCreateRumMetricDefinitionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchCreateRumMetricDefinitionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchCreateRumMetricDefinitionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchCreateRumMetricDefinitionsCommandOutput> {
    return deserializeAws_restJson1BatchCreateRumMetricDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

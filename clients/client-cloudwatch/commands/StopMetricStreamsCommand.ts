import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { StopMetricStreamsInput, StopMetricStreamsOutput } from "../models/models_0";
import {
  deserializeAws_queryStopMetricStreamsCommand,
  serializeAws_queryStopMetricStreamsCommand,
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

export interface StopMetricStreamsCommandInput extends StopMetricStreamsInput {}
export interface StopMetricStreamsCommandOutput extends StopMetricStreamsOutput, __MetadataBearer {}

/**
 * <p>Stops the streaming of metrics for one or more of your metric streams.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, StopMetricStreamsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, StopMetricStreamsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new StopMetricStreamsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMetricStreamsCommandInput} for command's `input` shape.
 * @see {@link StopMetricStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopMetricStreamsCommand extends $Command<
  StopMetricStreamsCommandInput,
  StopMetricStreamsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopMetricStreamsCommandInput) {
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
  ): Handler<StopMetricStreamsCommandInput, StopMetricStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "StopMetricStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopMetricStreamsInput.filterSensitiveLog,
      outputFilterSensitiveLog: StopMetricStreamsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopMetricStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStopMetricStreamsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopMetricStreamsCommandOutput> {
    return deserializeAws_queryStopMetricStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

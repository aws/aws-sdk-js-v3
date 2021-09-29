import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListFleetMetricsRequest, ListFleetMetricsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListFleetMetricsCommand,
  serializeAws_restJson1ListFleetMetricsCommand,
} from "../protocols/Aws_restJson1";
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

export interface ListFleetMetricsCommandInput extends ListFleetMetricsRequest {}
export interface ListFleetMetricsCommandOutput extends ListFleetMetricsResponse, __MetadataBearer {}

/**
 * <p>Lists all your fleet metrics. </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListFleetMetrics</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListFleetMetricsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListFleetMetricsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListFleetMetricsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFleetMetricsCommandInput} for command's `input` shape.
 * @see {@link ListFleetMetricsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFleetMetricsCommand extends $Command<
  ListFleetMetricsCommandInput,
  ListFleetMetricsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFleetMetricsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFleetMetricsCommandInput, ListFleetMetricsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListFleetMetricsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFleetMetricsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListFleetMetricsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFleetMetricsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListFleetMetricsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFleetMetricsCommandOutput> {
    return deserializeAws_restJson1ListFleetMetricsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

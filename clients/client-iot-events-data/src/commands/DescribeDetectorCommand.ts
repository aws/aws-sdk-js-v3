import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { DescribeDetectorRequest, DescribeDetectorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDetectorCommand,
  serializeAws_restJson1DescribeDetectorCommand,
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

export interface DescribeDetectorCommandInput extends DescribeDetectorRequest {}
export interface DescribeDetectorCommandOutput extends DescribeDetectorResponse, __MetadataBearer {}

/**
 * <p>Returns information about the specified detector (instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, DescribeDetectorCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, DescribeDetectorCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new DescribeDetectorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDetectorCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectorCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeDetectorCommand extends $Command<
  DescribeDetectorCommandInput,
  DescribeDetectorCommandOutput,
  IoTEventsDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDetectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDetectorCommandInput, DescribeDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "DescribeDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDetectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDetectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDetectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDetectorCommandOutput> {
    return deserializeAws_restJson1DescribeDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

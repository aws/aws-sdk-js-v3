import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchDisableAlarmRequest, BatchDisableAlarmResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchDisableAlarmCommand,
  serializeAws_restJson1BatchDisableAlarmCommand,
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

export interface BatchDisableAlarmCommandInput extends BatchDisableAlarmRequest {}
export interface BatchDisableAlarmCommandOutput extends BatchDisableAlarmResponse, __MetadataBearer {}

/**
 * <p>Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after
 *       you disable them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchDisableAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchDisableAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchDisableAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisableAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchDisableAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDisableAlarmCommand extends $Command<
  BatchDisableAlarmCommandInput,
  BatchDisableAlarmCommandOutput,
  IoTEventsDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDisableAlarmCommandInput) {
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
  ): Handler<BatchDisableAlarmCommandInput, BatchDisableAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "BatchDisableAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisableAlarmRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDisableAlarmResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDisableAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDisableAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDisableAlarmCommandOutput> {
    return deserializeAws_restJson1BatchDisableAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

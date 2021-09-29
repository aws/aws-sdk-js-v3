import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchResetAlarmRequest, BatchResetAlarmResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchResetAlarmCommand,
  serializeAws_restJson1BatchResetAlarmCommand,
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

export interface BatchResetAlarmCommandInput extends BatchResetAlarmRequest {}
export interface BatchResetAlarmCommandOutput extends BatchResetAlarmResponse, __MetadataBearer {}

/**
 * <p>Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you
 *       reset them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchResetAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchResetAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchResetAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchResetAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchResetAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchResetAlarmCommand extends $Command<
  BatchResetAlarmCommandInput,
  BatchResetAlarmCommandOutput,
  IoTEventsDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchResetAlarmCommandInput) {
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
  ): Handler<BatchResetAlarmCommandInput, BatchResetAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "BatchResetAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchResetAlarmRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchResetAlarmResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchResetAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchResetAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchResetAlarmCommandOutput> {
    return deserializeAws_restJson1BatchResetAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

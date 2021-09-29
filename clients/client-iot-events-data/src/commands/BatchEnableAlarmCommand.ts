import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import { BatchEnableAlarmRequest, BatchEnableAlarmResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchEnableAlarmCommand,
  serializeAws_restJson1BatchEnableAlarmCommand,
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

export interface BatchEnableAlarmCommandInput extends BatchEnableAlarmRequest {}
export interface BatchEnableAlarmCommandOutput extends BatchEnableAlarmResponse, __MetadataBearer {}

/**
 * <p>Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you
 *       enable them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchEnableAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchEnableAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchEnableAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchEnableAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchEnableAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchEnableAlarmCommand extends $Command<
  BatchEnableAlarmCommandInput,
  BatchEnableAlarmCommandOutput,
  IoTEventsDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchEnableAlarmCommandInput) {
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
  ): Handler<BatchEnableAlarmCommandInput, BatchEnableAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "BatchEnableAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchEnableAlarmRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchEnableAlarmResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchEnableAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchEnableAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchEnableAlarmCommandOutput> {
    return deserializeAws_restJson1BatchEnableAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { IoTEventsDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsDataClient";
import {
  BatchSnoozeAlarmRequest,
  BatchSnoozeAlarmRequestFilterSensitiveLog,
  BatchSnoozeAlarmResponse,
  BatchSnoozeAlarmResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchSnoozeAlarmCommand,
  serializeAws_restJson1BatchSnoozeAlarmCommand,
} from "../protocols/Aws_restJson1";

export interface BatchSnoozeAlarmCommandInput extends BatchSnoozeAlarmRequest {}
export interface BatchSnoozeAlarmCommandOutput extends BatchSnoozeAlarmResponse, __MetadataBearer {}

/**
 * <p>Changes one or more alarms to the snooze mode. The alarms change to the
 *         <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchSnoozeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchSnoozeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchSnoozeAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchSnoozeAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchSnoozeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for IoTEventsDataClient's `config` shape.
 *
 */
export class BatchSnoozeAlarmCommand extends $Command<
  BatchSnoozeAlarmCommandInput,
  BatchSnoozeAlarmCommandOutput,
  IoTEventsDataClientResolvedConfig
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

  constructor(readonly input: BatchSnoozeAlarmCommandInput) {
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
  ): Handler<BatchSnoozeAlarmCommandInput, BatchSnoozeAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchSnoozeAlarmCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "BatchSnoozeAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchSnoozeAlarmRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchSnoozeAlarmResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchSnoozeAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchSnoozeAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchSnoozeAlarmCommandOutput> {
    return deserializeAws_restJson1BatchSnoozeAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

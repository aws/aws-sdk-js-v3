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
  BatchAcknowledgeAlarmRequest,
  BatchAcknowledgeAlarmRequestFilterSensitiveLog,
  BatchAcknowledgeAlarmResponse,
  BatchAcknowledgeAlarmResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchAcknowledgeAlarmCommand,
  serializeAws_restJson1BatchAcknowledgeAlarmCommand,
} from "../protocols/Aws_restJson1";

export interface BatchAcknowledgeAlarmCommandInput extends BatchAcknowledgeAlarmRequest {}
export interface BatchAcknowledgeAlarmCommandOutput extends BatchAcknowledgeAlarmResponse, __MetadataBearer {}

/**
 * <p>Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state
 *       after you acknowledge them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } from "@aws-sdk/client-iot-events-data"; // ES Modules import
 * // const { IoTEventsDataClient, BatchAcknowledgeAlarmCommand } = require("@aws-sdk/client-iot-events-data"); // CommonJS import
 * const client = new IoTEventsDataClient(config);
 * const command = new BatchAcknowledgeAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAcknowledgeAlarmCommandInput} for command's `input` shape.
 * @see {@link BatchAcknowledgeAlarmCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsDataClientResolvedConfig | config} for IoTEventsDataClient's `config` shape.
 *
 */
export class BatchAcknowledgeAlarmCommand extends $Command<
  BatchAcknowledgeAlarmCommandInput,
  BatchAcknowledgeAlarmCommandOutput,
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

  constructor(readonly input: BatchAcknowledgeAlarmCommandInput) {
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
  ): Handler<BatchAcknowledgeAlarmCommandInput, BatchAcknowledgeAlarmCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchAcknowledgeAlarmCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsDataClient";
    const commandName = "BatchAcknowledgeAlarmCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAcknowledgeAlarmRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BatchAcknowledgeAlarmResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchAcknowledgeAlarmCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchAcknowledgeAlarmCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchAcknowledgeAlarmCommandOutput> {
    return deserializeAws_restJson1BatchAcknowledgeAlarmCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

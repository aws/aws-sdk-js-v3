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

import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import {
  DeleteAlarmModelRequest,
  DeleteAlarmModelRequestFilterSensitiveLog,
  DeleteAlarmModelResponse,
  DeleteAlarmModelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAlarmModelCommand,
  serializeAws_restJson1DeleteAlarmModelCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteAlarmModelCommandInput extends DeleteAlarmModelRequest {}
export interface DeleteAlarmModelCommandOutput extends DeleteAlarmModelResponse, __MetadataBearer {}

/**
 * <p>Deletes an alarm model. Any alarm instances that were created based on this alarm model
 *       are also deleted. This action can't be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DeleteAlarmModelCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DeleteAlarmModelCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new DeleteAlarmModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAlarmModelCommandInput} for command's `input` shape.
 * @see {@link DeleteAlarmModelCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 */
export class DeleteAlarmModelCommand extends $Command<
  DeleteAlarmModelCommandInput,
  DeleteAlarmModelCommandOutput,
  IoTEventsClientResolvedConfig
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

  constructor(readonly input: DeleteAlarmModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAlarmModelCommandInput, DeleteAlarmModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAlarmModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "DeleteAlarmModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAlarmModelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAlarmModelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAlarmModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAlarmModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAlarmModelCommandOutput> {
    return deserializeAws_restJson1DeleteAlarmModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

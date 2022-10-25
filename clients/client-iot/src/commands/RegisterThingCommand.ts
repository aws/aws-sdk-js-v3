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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  RegisterThingRequest,
  RegisterThingRequestFilterSensitiveLog,
  RegisterThingResponse,
  RegisterThingResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1RegisterThingCommand,
  serializeAws_restJson1RegisterThingCommand,
} from "../protocols/Aws_restJson1";

export interface RegisterThingCommandInput extends RegisterThingRequest {}
export interface RegisterThingCommandOutput extends RegisterThingResponse, __MetadataBearer {}

/**
 * <p>Provisions a thing in the device registry. RegisterThing calls other IoT control
 *          plane APIs. These calls might exceed your account level <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_iot">
 *             IoT Throttling Limits</a> and cause throttle errors. Please contact <a href="https://console.aws.amazon.com/support/home">Amazon Web Services Customer Support</a> to raise
 *          your throttling limits if necessary.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterThing</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RegisterThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterThingCommandInput} for command's `input` shape.
 * @see {@link RegisterThingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class RegisterThingCommand extends $Command<
  RegisterThingCommandInput,
  RegisterThingCommandOutput,
  IoTClientResolvedConfig
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

  constructor(readonly input: RegisterThingCommandInput) {
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
  ): Handler<RegisterThingCommandInput, RegisterThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RegisterThingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "RegisterThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterThingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterThingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterThingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterThingCommandOutput> {
    return deserializeAws_restJson1RegisterThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

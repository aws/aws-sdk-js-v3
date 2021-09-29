import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { RegisterAVSDeviceRequest, RegisterAVSDeviceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RegisterAVSDeviceCommand,
  serializeAws_json1_1RegisterAVSDeviceCommand,
} from "../protocols/Aws_json1_1";
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

export interface RegisterAVSDeviceCommandInput extends RegisterAVSDeviceRequest {}
export interface RegisterAVSDeviceCommandOutput extends RegisterAVSDeviceResponse, __MetadataBearer {}

/**
 * <p>Registers an Alexa-enabled device built by an Original Equipment Manufacturer (OEM)
 *          using Alexa Voice Service (AVS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, RegisterAVSDeviceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, RegisterAVSDeviceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new RegisterAVSDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterAVSDeviceCommandInput} for command's `input` shape.
 * @see {@link RegisterAVSDeviceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RegisterAVSDeviceCommand extends $Command<
  RegisterAVSDeviceCommandInput,
  RegisterAVSDeviceCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterAVSDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterAVSDeviceCommandInput, RegisterAVSDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "RegisterAVSDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterAVSDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterAVSDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterAVSDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterAVSDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterAVSDeviceCommandOutput> {
    return deserializeAws_json1_1RegisterAVSDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

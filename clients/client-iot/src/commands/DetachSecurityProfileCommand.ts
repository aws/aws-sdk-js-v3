import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DetachSecurityProfileRequest, DetachSecurityProfileResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DetachSecurityProfileCommand,
  serializeAws_restJson1DetachSecurityProfileCommand,
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

export interface DetachSecurityProfileCommandInput extends DetachSecurityProfileRequest {}
export interface DetachSecurityProfileCommandOutput extends DetachSecurityProfileResponse, __MetadataBearer {}

/**
 * <p>Disassociates a Device Defender security profile from a thing group or from this account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DetachSecurityProfile</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DetachSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DetachSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DetachSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link DetachSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DetachSecurityProfileCommand extends $Command<
  DetachSecurityProfileCommandInput,
  DetachSecurityProfileCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DetachSecurityProfileCommandInput) {
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
  ): Handler<DetachSecurityProfileCommandInput, DetachSecurityProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DetachSecurityProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachSecurityProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DetachSecurityProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachSecurityProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DetachSecurityProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachSecurityProfileCommandOutput> {
    return deserializeAws_restJson1DetachSecurityProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

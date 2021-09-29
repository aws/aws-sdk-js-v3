import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateSecurityProfileRequest, UpdateSecurityProfileResponse } from "../models/models_2";
import {
  deserializeAws_restJson1UpdateSecurityProfileCommand,
  serializeAws_restJson1UpdateSecurityProfileCommand,
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

export interface UpdateSecurityProfileCommandInput extends UpdateSecurityProfileRequest {}
export interface UpdateSecurityProfileCommandOutput extends UpdateSecurityProfileResponse, __MetadataBearer {}

/**
 * <p>Updates a Device Defender security profile.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSecurityProfile</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateSecurityProfileCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateSecurityProfileCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateSecurityProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateSecurityProfileCommand extends $Command<
  UpdateSecurityProfileCommandInput,
  UpdateSecurityProfileCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSecurityProfileCommandInput) {
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
  ): Handler<UpdateSecurityProfileCommandInput, UpdateSecurityProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateSecurityProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSecurityProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSecurityProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSecurityProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateSecurityProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSecurityProfileCommandOutput> {
    return deserializeAws_restJson1UpdateSecurityProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

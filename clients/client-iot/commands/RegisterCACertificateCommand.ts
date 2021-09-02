import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RegisterCACertificateRequest, RegisterCACertificateResponse } from "../models/models_2";
import {
  deserializeAws_restJson1RegisterCACertificateCommand,
  serializeAws_restJson1RegisterCACertificateCommand,
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

export interface RegisterCACertificateCommandInput extends RegisterCACertificateRequest {}
export interface RegisterCACertificateCommandOutput extends RegisterCACertificateResponse, __MetadataBearer {}

/**
 * <p>Registers a CA certificate with IoT. This CA certificate can then be used to sign
 *          device certificates, which can be then registered with IoT. You can register up to 10
 *          CA certificates per Amazon Web Services account that have the same subject field. This enables you to have
 *          up to 10 certificate authorities sign your device certificates. If you have more than one
 *          CA certificate registered, make sure you pass the CA certificate when you register your
 *          device certificates with the <a>RegisterCertificate</a> action.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCACertificate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RegisterCACertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterCACertificateCommandInput} for command's `input` shape.
 * @see {@link RegisterCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RegisterCACertificateCommand extends $Command<
  RegisterCACertificateCommandInput,
  RegisterCACertificateCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterCACertificateCommandInput) {
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
  ): Handler<RegisterCACertificateCommandInput, RegisterCACertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "RegisterCACertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterCACertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterCACertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterCACertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterCACertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterCACertificateCommandOutput> {
    return deserializeAws_restJson1RegisterCACertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

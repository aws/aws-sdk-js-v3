import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RegisterCertificateRequest, RegisterCertificateResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RegisterCertificateCommand,
  serializeAws_restJson1RegisterCertificateCommand,
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

export type RegisterCertificateCommandInput = RegisterCertificateRequest;
export type RegisterCertificateCommandOutput = RegisterCertificateResponse & __MetadataBearer;

/**
 * <p>Registers a device certificate with AWS IoT. If you have more than one CA certificate
 *          that has the same subject field, you must specify the CA certificate that was used to sign
 *          the device certificate being registered.</p>
 */
export class RegisterCertificateCommand extends $Command<
  RegisterCertificateCommandInput,
  RegisterCertificateCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterCertificateCommandInput) {
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
  ): Handler<RegisterCertificateCommandInput, RegisterCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "RegisterCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterCertificateCommandOutput> {
    return deserializeAws_restJson1RegisterCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

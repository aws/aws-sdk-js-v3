import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RegisterCertificateWithoutCARequest, RegisterCertificateWithoutCAResponse } from "../models/models_1";
import {
  deserializeAws_restJson1RegisterCertificateWithoutCACommand,
  serializeAws_restJson1RegisterCertificateWithoutCACommand,
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

export type RegisterCertificateWithoutCACommandInput = RegisterCertificateWithoutCARequest;
export type RegisterCertificateWithoutCACommandOutput = RegisterCertificateWithoutCAResponse & __MetadataBearer;

/**
 * <p>Register a certificate that does not have a certificate authority (CA).</p>
 */
export class RegisterCertificateWithoutCACommand extends $Command<
  RegisterCertificateWithoutCACommandInput,
  RegisterCertificateWithoutCACommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterCertificateWithoutCACommandInput) {
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
  ): Handler<RegisterCertificateWithoutCACommandInput, RegisterCertificateWithoutCACommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "RegisterCertificateWithoutCACommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterCertificateWithoutCARequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterCertificateWithoutCAResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterCertificateWithoutCACommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterCertificateWithoutCACommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterCertificateWithoutCACommandOutput> {
    return deserializeAws_restJson1RegisterCertificateWithoutCACommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

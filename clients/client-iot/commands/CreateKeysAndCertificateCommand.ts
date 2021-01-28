import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateKeysAndCertificateRequest, CreateKeysAndCertificateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateKeysAndCertificateCommand,
  serializeAws_restJson1CreateKeysAndCertificateCommand,
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

export type CreateKeysAndCertificateCommandInput = CreateKeysAndCertificateRequest;
export type CreateKeysAndCertificateCommandOutput = CreateKeysAndCertificateResponse & __MetadataBearer;

/**
 * <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued
 *          public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a
 *          device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p>
 *          <p>
 *             <b>Note</b> This is the only time AWS IoT issues the private key
 *          for this certificate, so it is important to keep it in a secure location.</p>
 */
export class CreateKeysAndCertificateCommand extends $Command<
  CreateKeysAndCertificateCommandInput,
  CreateKeysAndCertificateCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateKeysAndCertificateCommandInput) {
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
  ): Handler<CreateKeysAndCertificateCommandInput, CreateKeysAndCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateKeysAndCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateKeysAndCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateKeysAndCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateKeysAndCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateKeysAndCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeysAndCertificateCommandOutput> {
    return deserializeAws_restJson1CreateKeysAndCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

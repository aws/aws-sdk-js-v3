import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateCertificateRequest } from "../models/models_2";
import {
  deserializeAws_restJson1UpdateCertificateCommand,
  serializeAws_restJson1UpdateCertificateCommand,
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

export type UpdateCertificateCommandInput = UpdateCertificateRequest;
export type UpdateCertificateCommandOutput = __MetadataBearer;

/**
 * <p>Updates the status of the specified certificate. This operation is
 *          idempotent.</p>
 *          <p>Certificates must be in the ACTIVE state to authenticate devices that use
 *          a certificate to connect to AWS IoT.</p>
 *          <p>Within a few minutes of updating a certificate from the ACTIVE state to any other
 *          state, AWS IoT disconnects all devices that used that certificate to connect. Devices cannot
 *          use a certificate that is not in the ACTIVE state to reconnect.</p>
 */
export class UpdateCertificateCommand extends $Command<
  UpdateCertificateCommandInput,
  UpdateCertificateCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCertificateCommandInput) {
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
  ): Handler<UpdateCertificateCommandInput, UpdateCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "UpdateCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCertificateCommandOutput> {
    return deserializeAws_restJson1UpdateCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

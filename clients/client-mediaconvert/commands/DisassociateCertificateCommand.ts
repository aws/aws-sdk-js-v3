import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { DisassociateCertificateRequest, DisassociateCertificateResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DisassociateCertificateCommand,
  serializeAws_restJson1DisassociateCertificateCommand,
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

export type DisassociateCertificateCommandInput = DisassociateCertificateRequest;
export type DisassociateCertificateCommandOutput = DisassociateCertificateResponse & __MetadataBearer;

/**
 * Removes an association between the Amazon Resource Name (ARN) of an AWS Certificate Manager (ACM) certificate and an AWS Elemental MediaConvert resource.
 */
export class DisassociateCertificateCommand extends $Command<
  DisassociateCertificateCommandInput,
  DisassociateCertificateCommandOutput,
  MediaConvertClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConvertClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateCertificateCommandInput, DisassociateCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConvertClient";
    const commandName = "DisassociateCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateCertificateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateCertificateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateCertificateCommandOutput> {
    return deserializeAws_restJson1DisassociateCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

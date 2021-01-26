import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { UpdateMacieSessionRequest, UpdateMacieSessionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateMacieSessionCommand,
  serializeAws_restJson1UpdateMacieSessionCommand,
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

export type UpdateMacieSessionCommandInput = UpdateMacieSessionRequest;
export type UpdateMacieSessionCommandOutput = UpdateMacieSessionResponse & __MetadataBearer;

/**
 * <p>Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.</p>
 */
export class UpdateMacieSessionCommand extends $Command<
  UpdateMacieSessionCommandInput,
  UpdateMacieSessionCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMacieSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMacieSessionCommandInput, UpdateMacieSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "UpdateMacieSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMacieSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMacieSessionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMacieSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateMacieSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMacieSessionCommandOutput> {
    return deserializeAws_restJson1UpdateMacieSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

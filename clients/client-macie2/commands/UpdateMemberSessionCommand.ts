import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { UpdateMemberSessionRequest, UpdateMemberSessionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateMemberSessionCommand,
  serializeAws_restJson1UpdateMemberSessionCommand,
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

export type UpdateMemberSessionCommandInput = UpdateMemberSessionRequest;
export type UpdateMemberSessionCommandOutput = UpdateMemberSessionResponse & __MetadataBearer;

/**
 * <p>Enables an Amazon Macie master account to suspend or re-enable a member account.</p>
 */
export class UpdateMemberSessionCommand extends $Command<
  UpdateMemberSessionCommandInput,
  UpdateMemberSessionCommandOutput,
  Macie2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMemberSessionCommandInput) {
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
  ): Handler<UpdateMemberSessionCommandInput, UpdateMemberSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "UpdateMemberSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMemberSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMemberSessionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateMemberSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateMemberSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMemberSessionCommandOutput> {
    return deserializeAws_restJson1UpdateMemberSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

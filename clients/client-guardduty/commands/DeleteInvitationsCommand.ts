import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeleteInvitationsRequest, DeleteInvitationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteInvitationsCommand,
  serializeAws_restJson1DeleteInvitationsCommand,
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

export type DeleteInvitationsCommandInput = DeleteInvitationsRequest;
export type DeleteInvitationsCommandOutput = DeleteInvitationsResponse & __MetadataBearer;

/**
 * <p>Deletes invitations sent to the current member account by AWS accounts specified by their
 *       account IDs.</p>
 */
export class DeleteInvitationsCommand extends $Command<
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteInvitationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "DeleteInvitationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInvitationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteInvitationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteInvitationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteInvitationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteInvitationsCommandOutput> {
    return deserializeAws_restJson1DeleteInvitationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

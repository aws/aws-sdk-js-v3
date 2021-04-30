import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { AcceptAdministratorInvitationRequest, AcceptAdministratorInvitationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AcceptAdministratorInvitationCommand,
  serializeAws_restJson1AcceptAdministratorInvitationCommand,
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

export interface AcceptAdministratorInvitationCommandInput extends AcceptAdministratorInvitationRequest {}
export interface AcceptAdministratorInvitationCommandOutput
  extends AcceptAdministratorInvitationResponse,
    __MetadataBearer {}

/**
 * <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator
 *          account that the invitation was sent from.</p>
 *          <p>This operation is only used by member accounts that are not added through
 *          Organizations.</p>
 *          <p>When the member account accepts the invitation, permission is granted to the administrator
 *          account to view findings generated in the member account.</p>
 */
export class AcceptAdministratorInvitationCommand extends $Command<
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptAdministratorInvitationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptAdministratorInvitationCommandInput, AcceptAdministratorInvitationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "AcceptAdministratorInvitationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptAdministratorInvitationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptAdministratorInvitationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptAdministratorInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AcceptAdministratorInvitationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptAdministratorInvitationCommandOutput> {
    return deserializeAws_restJson1AcceptAdministratorInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

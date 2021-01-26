import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { InviteMembersRequest, InviteMembersResponse } from "../models/models_1";
import {
  deserializeAws_restJson1InviteMembersCommand,
  serializeAws_restJson1InviteMembersCommand,
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

export type InviteMembersCommandInput = InviteMembersRequest;
export type InviteMembersCommandOutput = InviteMembersResponse & __MetadataBearer;

/**
 * <p>Invites other AWS accounts to become member accounts for the Security Hub master account that
 *          the invitation is sent from.</p>
 *          <p>This operation is only used to invite accounts that do not belong to an organization.
 *          Organization accounts do not receive invitations.</p>
 *          <p>Before you can use this action to invite a member, you must first use the <code>
 *                <a>CreateMembers</a>
 *             </code> action to create the member account in Security Hub.</p>
 *          <p>When the account owner enables Security Hub and accepts the invitation to become a member
 *          account, the master account can view the findings generated from the member account.</p>
 */
export class InviteMembersCommand extends $Command<
  InviteMembersCommandInput,
  InviteMembersCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InviteMembersCommandInput) {
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
  ): Handler<InviteMembersCommandInput, InviteMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "InviteMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InviteMembersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InviteMembersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InviteMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InviteMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InviteMembersCommandOutput> {
    return deserializeAws_restJson1InviteMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

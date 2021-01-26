import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { CreateMembersRequest, CreateMembersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateMembersCommand,
  serializeAws_restJson1CreateMembersCommand,
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

export type CreateMembersCommandInput = CreateMembersRequest;
export type CreateMembersCommandOutput = CreateMembersResponse & __MetadataBearer;

/**
 * <p>Creates a member association in Security Hub between the specified accounts and the account
 *          used to make the request, which is the master account. If you are integrated with
 *          Organizations, then the master account is the Security Hub administrator account that is
 *          designated by the organization management account.</p>
 *          <p>
 *             <code>CreateMembers</code> is always used to add accounts that are not organization
 *          members.</p>
 *          <p>For accounts that are part of an organization, <code>CreateMembers</code> is only used
 *          in the following cases:</p>
 *          <ul>
 *             <li>
 *                <p>Security Hub is not configured to automatically add new accounts in an
 *                organization.</p>
 *             </li>
 *             <li>
 *                <p>The account was disassociated or deleted in Security Hub.</p>
 *             </li>
 *          </ul>
 *          <p>This action can only be used by an account that has Security Hub enabled. To enable Security Hub, you
 *          can use the <code>
 *                <a>EnableSecurityHub</a>
 *             </code> operation.</p>
 *          <p>For accounts that are not organization members, you create the account association and
 *          then send an invitation to the member account. To send the invitation, you use the
 *                <code>
 *                <a>InviteMembers</a>
 *             </code> operation. If the account owner accepts
 *          the invitation, the account becomes a member account in Security Hub.</p>
 *          <p>Accounts that are part of an organization do not receive an invitation. They
 *          automatically become a member account in Security Hub.</p>
 *          <p>A permissions policy is added that permits the master account to view the findings
 *          generated in the member account. When Security Hub is enabled in a member account, findings are
 *          sent to both the member and master accounts. </p>
 *          <p>To remove the association between the master and member accounts, use the <code>
 *                <a>DisassociateFromMasterAccount</a>
 *             </code> or <code>
 *                <a>DisassociateMembers</a>
 *             </code> operation.</p>
 */
export class CreateMembersCommand extends $Command<
  CreateMembersCommandInput,
  CreateMembersCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMembersCommandInput) {
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
  ): Handler<CreateMembersCommandInput, CreateMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "CreateMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMembersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMembersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateMembersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMembersCommandOutput> {
    return deserializeAws_restJson1CreateMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

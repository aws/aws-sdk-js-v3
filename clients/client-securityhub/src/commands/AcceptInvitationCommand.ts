import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { AcceptInvitationRequest, AcceptInvitationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AcceptInvitationCommand,
  serializeAws_restJson1AcceptInvitationCommand,
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

export interface AcceptInvitationCommandInput extends AcceptInvitationRequest {}
export interface AcceptInvitationCommandOutput extends AcceptInvitationResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>This method is deprecated. Instead, use <code>AcceptAdministratorInvitation</code>.</p>
 *          <p>The Security Hub console continues to use <code>AcceptInvitation</code>. It will eventually change to use <code>AcceptAdministratorInvitation</code>. Any IAM policies that specifically control access to this function must continue to use <code>AcceptInvitation</code>. You should also add <code>AcceptAdministratorInvitation</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>AcceptAdministratorInvitation</code>.</p>
 *          <p>Accepts the invitation to be a member account and be monitored by the Security Hub administrator
 *          account that the invitation was sent from.</p>
 *          <p>This operation is only used by member accounts that are not added through
 *          Organizations.</p>
 *          <p>When the member account accepts the invitation, permission is granted to the administrator
 *          account to view findings generated in the member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, AcceptInvitationCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, AcceptInvitationCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new AcceptInvitationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptInvitationCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AcceptInvitationCommand extends $Command<
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptInvitationCommandInput) {
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
  ): Handler<AcceptInvitationCommandInput, AcceptInvitationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "AcceptInvitationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptInvitationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptInvitationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptInvitationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AcceptInvitationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptInvitationCommandOutput> {
    return deserializeAws_restJson1AcceptInvitationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

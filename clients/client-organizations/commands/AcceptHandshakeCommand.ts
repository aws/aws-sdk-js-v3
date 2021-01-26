import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { AcceptHandshakeRequest, AcceptHandshakeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AcceptHandshakeCommand,
  serializeAws_json1_1AcceptHandshakeCommand,
} from "../protocols/Aws_json1_1";
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

export type AcceptHandshakeCommandInput = AcceptHandshakeRequest;
export type AcceptHandshakeCommandOutput = AcceptHandshakeResponse & __MetadataBearer;

/**
 * <p>Sends a response to the originator of a handshake agreeing to the action proposed by
 *             the handshake request.</p>
 *         <p>This operation can be called only by the following principals when they also have the
 *             relevant IAM permissions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from
 *                     the member account.</p>
 *                 <p>The user who calls the API for an invitation to join must have the
 *                         <code>organizations:AcceptHandshake</code> permission. If you enabled all
 *                     features in the organization, the user must also have the
 *                         <code>iam:CreateServiceLinkedRole</code> permission so that AWS Organizations can
 *                     create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For
 *                     more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integration_service-linked-roles">AWS Organizations and Service-Linked Roles</a> in the
 *                         <i>AWS Organizations User Guide</i>.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Enable all features final confirmation</b>
 *                     handshake: only a principal from the management account.</p>
 *                 <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an AWS Account to Join Your Organization</a> in the
 *                         <i>AWS Organizations User Guide.</i> For more information about requests to
 *                     enable all features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling All Features in Your Organization</a> in
 *                     the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>After you accept a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 */
export class AcceptHandshakeCommand extends $Command<
  AcceptHandshakeCommandInput,
  AcceptHandshakeCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptHandshakeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptHandshakeCommandInput, AcceptHandshakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "AcceptHandshakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptHandshakeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptHandshakeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptHandshakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptHandshakeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptHandshakeCommandOutput> {
    return deserializeAws_json1_1AcceptHandshakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

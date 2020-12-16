import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { InviteAccountToOrganizationRequest, InviteAccountToOrganizationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1InviteAccountToOrganizationCommand,
  serializeAws_json1_1InviteAccountToOrganizationCommand,
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

export type InviteAccountToOrganizationCommandInput = InviteAccountToOrganizationRequest;
export type InviteAccountToOrganizationCommandOutput = InviteAccountToOrganizationResponse & __MetadataBearer;

/**
 * <p>Sends an invitation to another account to join your organization as a member account.
 *             AWS Organizations sends email on your behalf to the email address that is associated with the
 *             other account's owner. The invitation is implemented as a <a>Handshake</a>
 *             whose details are in the response.</p>
 *         <important>
 *             <ul>
 *                <li>
 *                     <p>You can invite AWS accounts only from the same seller as the
 *                         management account. For example, if your organization's management account was
 *                         created by Amazon Internet Services Pvt. Ltd (AISPL), an AWS seller in
 *                         India, you can invite only other AISPL accounts to your organization. You
 *                         can't combine accounts from AISPL and AWS or from any other AWS seller.
 *                         For more information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilliing-India.html">Consolidated
 *                             Billing in India</a>.</p>
 *                 </li>
 *                <li>
 *                     <p>If you receive an exception that indicates that you exceeded your account
 *                         limits for the organization or that the operation failed because your
 *                         organization is still initializing, wait one hour and then try again. If the
 *                         error persists after an hour, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </important>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 */
export class InviteAccountToOrganizationCommand extends $Command<
  InviteAccountToOrganizationCommandInput,
  InviteAccountToOrganizationCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InviteAccountToOrganizationCommandInput) {
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
  ): Handler<InviteAccountToOrganizationCommandInput, InviteAccountToOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "InviteAccountToOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InviteAccountToOrganizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InviteAccountToOrganizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InviteAccountToOrganizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InviteAccountToOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InviteAccountToOrganizationCommandOutput> {
    return deserializeAws_json1_1InviteAccountToOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

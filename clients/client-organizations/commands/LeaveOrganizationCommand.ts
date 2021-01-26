import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1LeaveOrganizationCommand,
  serializeAws_json1_1LeaveOrganizationCommand,
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

export type LeaveOrganizationCommandInput = {};
export type LeaveOrganizationCommandOutput = __MetadataBearer;

/**
 * <p>Removes a member account from its parent organization. This version of the operation
 *             is performed by the account that wants to leave. To remove a member account as a user in
 *             the management account, use <a>RemoveAccountFromOrganization</a>
 *             instead.</p>
 *         <p>This operation can be called only from a member account in the organization.</p>
 *         <important>
 *             <ul>
 *                <li>
 *                     <p>The management account in an organization with all features enabled can set
 *                         service control policies (SCPs) that can restrict what administrators of
 *                         member accounts can do. This includes preventing them from successfully
 *                         calling <code>LeaveOrganization</code> and leaving the organization.</p>
 *                 </li>
 *                <li>
 *                     <p>You can leave an organization as a member account only if the account is
 *                         configured with the information required to operate as a standalone account.
 *                         When you create an account in an organization using the AWS Organizations console,
 *                         API, or CLI commands, the information required of standalone accounts is
 *                             <i>not</i> automatically collected. For each account that
 *                         you want to make standalone, you must perform the following steps. If any of
 *                         the steps are already completed for this account, that step doesn't
 *                         appear.</p>
 *                     <ul>
 *                      <li>
 *                             <p>Choose a support plan</p>
 *                         </li>
 *                      <li>
 *                             <p>Provide and verify the required contact information</p>
 *                         </li>
 *                      <li>
 *                             <p>Provide a current payment method</p>
 *                         </li>
 *                   </ul>
 *                     <p>AWS uses the payment method to charge for any billable (not free tier)
 *                         AWS activity that occurs while the account isn't attached to an
 *                         organization. Follow the steps at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization when all required account information has not
 *                             yet been provided</a> in the
 *                         <i>AWS Organizations User Guide.</i>
 *                   </p>
 *                 </li>
 *                <li>
 *                     <p>You can leave an organization only after you enable IAM user access to
 *                         billing in your account. For more information, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html#ControllingAccessWebsite-Activate">Activating Access to the Billing and Cost Management Console</a> in
 *                         the <i>AWS Billing and Cost Management User Guide.</i>
 *                   </p>
 *                 </li>
 *                <li>
 *                     <p>After the account leaves the organization, all tags that were attached to
 *                         the account object in the organization are deleted. AWS accounts outside
 *                         of an organization do not support tags.</p>
 *                 </li>
 *             </ul>
 *         </important>
 */
export class LeaveOrganizationCommand extends $Command<
  LeaveOrganizationCommandInput,
  LeaveOrganizationCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: LeaveOrganizationCommandInput) {
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
  ): Handler<LeaveOrganizationCommandInput, LeaveOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "LeaveOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: LeaveOrganizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1LeaveOrganizationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LeaveOrganizationCommandOutput> {
    return deserializeAws_json1_1LeaveOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

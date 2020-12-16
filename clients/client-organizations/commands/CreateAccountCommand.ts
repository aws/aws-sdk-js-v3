import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CreateAccountRequest, CreateAccountResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAccountCommand,
  serializeAws_json1_1CreateAccountCommand,
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

export type CreateAccountCommandInput = CreateAccountRequest;
export type CreateAccountCommandOutput = CreateAccountResponse & __MetadataBearer;

/**
 * <p>Creates an AWS account that is automatically a member of the organization whose
 *             credentials made the request. This is an asynchronous request that AWS performs in the
 *             background. Because <code>CreateAccount</code> operates asynchronously, it can return a
 *             successful completion message even though account initialization might still be in
 *             progress. You might need to wait a few minutes before you can successfully access the
 *             account. To check the status of the request, do one of the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Use the <code>Id</code> member of the <code>CreateAccountStatus</code>
 *                     response element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p>
 *             </li>
 *             <li>
 *                 <p>Check the AWS CloudTrail log for the <code>CreateAccountResult</code> event. For
 *                     information on using AWS CloudTrail with AWS Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your
 *                         Organization</a> in the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>The user who calls the API to create an account must have the
 *                 <code>organizations:CreateAccount</code> permission. If you enabled all features in
 *             the organization, AWS Organizations creates the required service-linked role named
 *                 <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">AWS Organizations and Service-Linked Roles</a> in the
 *                 <i>AWS Organizations User Guide</i>.</p>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission.</p>
 *         <p>AWS Organizations preconfigures the new member account with a role (named
 *                 <code>OrganizationAccountAccessRole</code> by default) that grants users in the
 *             management account administrator permissions in the new member account. Principals in the
 *             management account can assume the role. AWS Organizations clones the company name and address
 *             information for the new account from the organization's management account.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 *         <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating
 *                 an AWS Account in Your Organization</a> in the
 *                 <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <important>
 *             <ul>
 *                <li>
 *                     <p>When you create an account in an organization using the AWS Organizations console,
 *                         API, or CLI commands, the information required for the account to operate as
 *                         a standalone account, such as a payment method and signing the end user
 *                         license agreement (EULA) is <i>not</i> automatically
 *                         collected. If you must remove an account from your organization later, you
 *                         can do so only after you provide the missing information. Follow the steps
 *                         at <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the
 *                             <i>AWS Organizations User Guide</i>.</p>
 *                 </li>
 *                <li>
 *                     <p>If you get an exception that indicates that you exceeded your account
 *                         limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">AWS Support</a>.</p>
 *                 </li>
 *                <li>
 *                     <p>If you get an exception that indicates that the operation failed because
 *                         your organization is still initializing, wait one hour and then try again.
 *                         If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">AWS
 *                             Support</a>.</p>
 *                 </li>
 *                <li>
 *                     <p>Using <code>CreateAccount</code> to create multiple temporary accounts
 *                         isn't recommended. You can only close an account from the Billing and Cost
 *                         Management Console, and you must be signed in as the root user. For
 *                         information on the requirements and process for closing an account, see
 *                             <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an
 *                             AWS Account</a> in the
 *                         <i>AWS Organizations User Guide</i>.</p>
 *                 </li>
 *             </ul>
 *         </important>
 *         <note>
 *             <p>When you create a member account with this operation, you can choose whether to
 *                 create the account with the <b>IAM User and Role Access to
 *                     Billing Information</b> switch enabled. If you enable it, IAM users and
 *                 roles that have appropriate permissions can view billing information for the
 *                 account. If you disable it, only the account root user can access billing
 *                 information. For information about how to disable this switch for an account, see
 *                     <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/grantaccess.html">Granting
 *                     Access to Your Billing Information and Tools</a>.</p>
 *         </note>
 */
export class CreateAccountCommand extends $Command<
  CreateAccountCommandInput,
  CreateAccountCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccountCommandInput) {
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
  ): Handler<CreateAccountCommandInput, CreateAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CreateAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccountCommandOutput> {
    return deserializeAws_json1_1CreateAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

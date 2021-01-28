import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CreateGovCloudAccountRequest, CreateGovCloudAccountResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateGovCloudAccountCommand,
  serializeAws_json1_1CreateGovCloudAccountCommand,
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

export type CreateGovCloudAccountCommandInput = CreateGovCloudAccountRequest;
export type CreateGovCloudAccountCommandOutput = CreateGovCloudAccountResponse & __MetadataBearer;

/**
 * <p>This action is available if all of the following are true:</p>
 *         <ul>
 *             <li>
 *                 <p>You're authorized to create accounts in the AWS GovCloud (US) Region. For
 *                     more information on the AWS GovCloud (US) Region, see the <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/welcome.html">
 *                      <i>AWS GovCloud User Guide</i>.</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>You already have an account in the AWS GovCloud (US) Region that is paired
 *                     with a management account of an organization in the commercial Region.</p>
 *             </li>
 *             <li>
 *                 <p>You call this action from the management account of your organization in the
 *                     commercial Region.</p>
 *             </li>
 *             <li>
 *                 <p>You have the <code>organizations:CreateGovCloudAccount</code> permission.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>AWS Organizations automatically creates the required service-linked role named
 *                 <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">AWS Organizations and Service-Linked Roles</a> in the
 *                 <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>AWS automatically enables AWS CloudTrail for AWS GovCloud (US) accounts, but you should also
 *             do the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Verify that AWS CloudTrail is enabled to store logs.</p>
 *             </li>
 *             <li>
 *                 <p>Create an S3 bucket for AWS CloudTrail log storage.</p>
 *                 <p>For more information, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/verifying-cloudtrail.html">Verifying AWS CloudTrail Is
 *                         Enabled</a> in the <i>AWS GovCloud User Guide</i>.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission. The tags are attached to the
 *             commercial account associated with the GovCloud account, rather than the GovCloud
 *             account itself. To add tags to the GovCloud account, call the <a>TagResource</a> operation in the GovCloud Region after the new GovCloud
 *             account exists.</p>
 *         <p>You call this action from the management account of your organization in the commercial
 *             Region to create a standalone AWS account in the AWS GovCloud (US) Region. After the
 *             account is created, the management account of an organization in the AWS GovCloud (US)
 *             Region can invite it to that organization. For more information on inviting standalone
 *             accounts in the AWS GovCloud (US) to join an organization, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">AWS Organizations</a> in the
 *                 <i>AWS GovCloud User Guide.</i>
 *          </p>
 *         <p>Calling <code>CreateGovCloudAccount</code> is an asynchronous request that AWS
 *             performs in the background. Because <code>CreateGovCloudAccount</code> operates
 *             asynchronously, it can return a successful completion message even though account
 *             initialization might still be in progress. You might need to wait a few minutes before
 *             you can successfully access the account. To check the status of the request, do one of
 *             the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Use the <code>OperationId</code> response element from this operation to
 *                     provide as a parameter to the <a>DescribeCreateAccountStatus</a>
 *                     operation.</p>
 *             </li>
 *             <li>
 *                 <p>Check the AWS CloudTrail log for the <code>CreateAccountResult</code> event. For
 *                     information on using AWS CloudTrail with Organizations, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your
 *                         Organization</a> in the <i>AWS Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <p></p>
 *         <p>When you call the <code>CreateGovCloudAccount</code> action, you create two accounts:
 *             a standalone account in the AWS GovCloud (US) Region and an associated account in the
 *             commercial Region for billing and support purposes. The account in the commercial Region
 *             is automatically a member of the organization whose credentials made the request. Both
 *             accounts are associated with the same email address.</p>
 *         <p>A role is created in the new account in the commercial Region that allows the
 *             management account in the organization in the commercial Region to assume it. An AWS
 *             GovCloud (US) account is then created and associated with the commercial account that
 *             you just created. A role is also created in the new AWS GovCloud (US) account that can
 *             be assumed by the AWS GovCloud (US) account that is associated with the
 *             management account of the commercial organization. For more information and to view a
 *             diagram that explains how account access works, see <a href="http://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">AWS Organizations</a> in the
 *                 <i>AWS GovCloud User Guide.</i>
 *          </p>
 *
 *
 *         <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating
 *                 an AWS Account in Your Organization</a> in the
 *                 <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <important>
 *             <ul>
 *                <li>
 *                     <p>When you create an account in an organization using the AWS Organizations console,
 *                         API, or CLI commands, the information required for the account to operate as
 *                         a standalone account is <i>not</i> automatically collected.
 *                         This includes a payment method and signing the end user license agreement
 *                         (EULA). If you must remove an account from your organization later, you can
 *                         do so only after you provide the missing information. Follow the steps at
 *                             <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the
 *                             <i>AWS Organizations User Guide.</i>
 *                   </p>
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
 *                     <p>Using <code>CreateGovCloudAccount</code> to create multiple temporary
 *                         accounts isn't recommended. You can only close an account from the AWS
 *                         Billing and Cost Management console, and you must be signed in as the root
 *                         user. For information on the requirements and process for closing an
 *                         account, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an AWS Account</a> in the
 *                             <i>AWS Organizations User Guide</i>.</p>
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
export class CreateGovCloudAccountCommand extends $Command<
  CreateGovCloudAccountCommandInput,
  CreateGovCloudAccountCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGovCloudAccountCommandInput) {
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
  ): Handler<CreateGovCloudAccountCommandInput, CreateGovCloudAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CreateGovCloudAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGovCloudAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGovCloudAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGovCloudAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateGovCloudAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGovCloudAccountCommandOutput> {
    return deserializeAws_json1_1CreateGovCloudAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

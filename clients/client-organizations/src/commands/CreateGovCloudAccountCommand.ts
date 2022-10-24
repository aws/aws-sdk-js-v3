// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateGovCloudAccountRequest,
  CreateGovCloudAccountRequestFilterSensitiveLog,
  CreateGovCloudAccountResponse,
  CreateGovCloudAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1CreateGovCloudAccountCommand,
  serializeAws_json1_1CreateGovCloudAccountCommand,
} from "../protocols/Aws_json1_1";

export interface CreateGovCloudAccountCommandInput extends CreateGovCloudAccountRequest {}
export interface CreateGovCloudAccountCommandOutput extends CreateGovCloudAccountResponse, __MetadataBearer {}

/**
 * <p>This action is available if all of the following are true:</p>
 *         <ul>
 *             <li>
 *                 <p>You're authorized to create accounts in the Amazon Web Services GovCloud (US) Region. For
 *                     more information on the Amazon Web Services GovCloud (US) Region, see the <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/welcome.html">
 *                      <i>Amazon Web Services GovCloud User Guide</i>.</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>You already have an account in the Amazon Web Services GovCloud (US) Region that is paired
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
 *         <p>Organizations automatically creates the required service-linked role named
 *                 <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the
 *                 <i>Organizations User Guide.</i>
 *          </p>
 *         <p>Amazon Web Services automatically enables CloudTrail for Amazon Web Services GovCloud (US) accounts, but you should also
 *             do the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Verify that CloudTrail is enabled to store logs.</p>
 *             </li>
 *             <li>
 *                 <p>Create an Amazon S3 bucket for CloudTrail log storage.</p>
 *                 <p>For more information, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/verifying-cloudtrail.html">Verifying CloudTrail Is
 *                         Enabled</a> in the <i>Amazon Web Services GovCloud User Guide</i>.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission. The tags are attached to the
 *             commercial account associated with the GovCloud account, rather than the GovCloud
 *             account itself. To add tags to the GovCloud account, call the <a>TagResource</a> operation in the GovCloud Region after the new GovCloud
 *             account exists.</p>
 *         <p>You call this action from the management account of your organization in the
 *             commercial Region to create a standalone Amazon Web Services account in the Amazon Web Services GovCloud (US)
 *             Region. After the account is created, the management account of an organization in the
 *             Amazon Web Services GovCloud (US) Region can invite it to that organization. For more information on
 *             inviting standalone accounts in the Amazon Web Services GovCloud (US) to join an organization, see
 *                 <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the
 *                 <i>Amazon Web Services GovCloud User Guide.</i>
 *          </p>
 *         <p>Calling <code>CreateGovCloudAccount</code> is an asynchronous request that Amazon Web Services
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
 *                 <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For
 *                     information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_monitoring.html">Monitoring the Activity in Your
 *                         Organization</a> in the <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <p></p>
 *         <p>When you call the <code>CreateGovCloudAccount</code> action, you create two accounts:
 *             a standalone account in the Amazon Web Services GovCloud (US) Region and an associated account in the
 *             commercial Region for billing and support purposes. The account in the commercial Region
 *             is automatically a member of the organization whose credentials made the request. Both
 *             accounts are associated with the same email address.</p>
 *         <p>A role is created in the new account in the commercial Region that allows the
 *             management account in the organization in the commercial Region to assume it. An Amazon Web Services
 *             GovCloud (US) account is then created and associated with the commercial account that
 *             you just created. A role is also created in the new Amazon Web Services GovCloud (US) account that can
 *             be assumed by the Amazon Web Services GovCloud (US) account that is associated with the management
 *             account of the commercial organization. For more information and to view a diagram that
 *             explains how account access works, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a> in the
 *                 <i>Amazon Web Services GovCloud User Guide.</i>
 *          </p>
 *
 *
 *         <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating
 *                 an Amazon Web Services account in Your Organization</a> in the
 *                 <i>Organizations User Guide.</i>
 *          </p>
 *         <important>
 *             <ul>
 *                <li>
 *                     <p>When you create an account in an organization using the Organizations console,
 *                         API, or CLI commands, the information required for the account to operate as
 *                         a standalone account is <i>not</i> automatically collected.
 *                         This includes a payment method and signing the end user license agreement
 *                         (EULA). If you must remove an account from your organization later, you can
 *                         do so only after you provide the missing information. Follow the steps at
 *                             <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the
 *                             <i>Organizations User Guide.</i>
 *                   </p>
 *                 </li>
 *                <li>
 *                     <p>If you get an exception that indicates that you exceeded your account
 *                         limits for the organization, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p>
 *                 </li>
 *                <li>
 *                     <p>If you get an exception that indicates that the operation failed because
 *                         your organization is still initializing, wait one hour and then try again.
 *                         If the error persists, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services Support</a>.</p>
 *                 </li>
 *                <li>
 *                     <p>Using <code>CreateGovCloudAccount</code> to create multiple temporary
 *                         accounts isn't recommended. You can only close an account from the Amazon Web Services
 *                         Billing and Cost Management console, and you must be signed in as the root user. For information on
 *                         the requirements and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an
 *                             Amazon Web Services account</a> in the
 *                         <i>Organizations User Guide</i>.</p>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CreateGovCloudAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CreateGovCloudAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CreateGovCloudAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGovCloudAccountCommandInput} for command's `input` shape.
 * @see {@link CreateGovCloudAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class CreateGovCloudAccountCommand extends $Command<
  CreateGovCloudAccountCommandInput,
  CreateGovCloudAccountCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGovCloudAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CreateGovCloudAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGovCloudAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateGovCloudAccountResponseFilterSensitiveLog,
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

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
  CreateAccountRequest,
  CreateAccountRequestFilterSensitiveLog,
  CreateAccountResponse,
  CreateAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import {
  deserializeAws_json1_1CreateAccountCommand,
  serializeAws_json1_1CreateAccountCommand,
} from "../protocols/Aws_json1_1";

export interface CreateAccountCommandInput extends CreateAccountRequest {}
export interface CreateAccountCommandOutput extends CreateAccountResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Web Services account that is automatically a member of the organization whose
 *             credentials made the request. This is an asynchronous request that Amazon Web Services performs in the
 *             background. Because <code>CreateAccount</code> operates asynchronously, it can return a
 *             successful completion message even though account initialization might still be in
 *             progress. You might need to wait a few minutes before you can successfully access the
 *             account. To check the status of the request, do one of the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Use the <code>Id</code> value of the <code>CreateAccountStatus</code> response
 *                     element from this operation to provide as a parameter to the <a>DescribeCreateAccountStatus</a> operation.</p>
 *             </li>
 *             <li>
 *                 <p>Check the CloudTrail log for the <code>CreateAccountResult</code> event. For
 *                     information on using CloudTrail with Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration">Logging and monitoring in Organizations</a> in the
 *                         <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>The user who calls the API to create an account must have the
 *                 <code>organizations:CreateAccount</code> permission. If you enabled all features in
 *             the organization, Organizations creates the required service-linked role named
 *                 <code>AWSServiceRoleForOrganizations</code>. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs">Organizations and Service-Linked Roles</a> in the
 *                 <i>Organizations User Guide</i>.</p>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission.</p>
 *         <p>Organizations preconfigures the new member account with a role (named
 *                 <code>OrganizationAccountAccessRole</code> by default) that grants users in the
 *             management account administrator permissions in the new member account. Principals in
 *             the management account can assume the role. Organizations clones the company name and address
 *             information for the new account from the organization's management account.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 *         <p>For more information about creating accounts, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html">Creating an Amazon Web Services account in
 *                 Your Organization</a> in the <i>Organizations User Guide.</i>
 *          </p>
 *         <important>
 *             <ul>
 *                <li>
 *                     <p>When you create an account in an organization using the Organizations console,
 *                         API, or CLI commands, the information required for the account to operate
 *                         as a standalone account, such as a payment method and signing the end user
 *                         license agreement (EULA) is <i>not</i> automatically
 *                         collected. If you must remove an account from your organization later, you
 *                         can do so only after you provide the missing information. Follow the steps
 *                         at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info"> To leave an organization as a member account</a> in the
 *                             <i>Organizations User Guide</i>.</p>
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
 *                     <p>Using <code>CreateAccount</code> to create multiple temporary accounts
 *                         isn't recommended. You can only close an account from the Billing and Cost Management console, and
 *                         you must be signed in as the root user. For information on the requirements
 *                         and process for closing an account, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html">Closing an
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
 * import { OrganizationsClient, CreateAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CreateAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CreateAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountCommandInput} for command's `input` shape.
 * @see {@link CreateAccountCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 */
export class CreateAccountCommand extends $Command<
  CreateAccountCommandInput,
  CreateAccountCommandOutput,
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
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateAccountCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CreateAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAccountResponseFilterSensitiveLog,
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

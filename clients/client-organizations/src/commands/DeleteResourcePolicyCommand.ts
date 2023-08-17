// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { de_DeleteResourcePolicyCommand, se_DeleteResourcePolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandInput {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes the resource policy from your organization.</p>
 *          <p>You can only call this operation from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeleteResourcePolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeleteResourcePolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const input = {};
 * const command = new DeleteResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourcePolicyCommandInput - {@link DeleteResourcePolicyCommandInput}
 * @returns {@link DeleteResourcePolicyCommandOutput}
 * @see {@link DeleteResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that
 *             is making the request must have at least one IAM permissions policy attached that
 *             grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 *                 <i>IAM User Guide.</i>
 *          </p>
 *
 * @throws {@link AWSOrganizationsNotInUseException} (client fault)
 *  <p>Your account isn't a member of an organization. To make this request, you must use the
 *             credentials of an account that belongs to an organization.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The target of the operation is currently being modified by a different request. Try
 *             again later.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Performing this operation violates a minimum or maximum value limit. For example,
 *             attempting to remove the last service control policy (SCP) from an OU or root, inviting
 *             or creating too many accounts to the organization, or attaching too many policies to an
 *             account, OU, or root. This exception includes a reason that contains additional
 *             information about the violated limit:</p>
 *          <note>
 *             <p>Some of the reasons in the following list might not be applicable to this specific
 *                 API or operation.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>ACCOUNT_CANNOT_LEAVE_ORGANIZATION: You attempted to remove the management
 *                     account from the organization. You can't remove the management account. Instead,
 *                     after you remove all member accounts, delete the organization itself.</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_CANNOT_LEAVE_WITHOUT_PHONE_VERIFICATION: You attempted to remove an
 *                     account from the organization that doesn't yet have enough information to exist
 *                     as a standalone account. This account requires you to first complete phone
 *                     verification. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#orgs_manage_accounts_remove-from-master">Removing a member account from your organization</a> in the
 *                         <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_CREATION_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of
 *                     accounts that you can create in one day.</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_CREATION_NOT_COMPLETE: Your account setup isn't complete or your account isn't fully active. You must complete the account setup before you create an organization.</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number
 *                     of accounts in an organization. If you need more accounts, contact <a href="https://docs.aws.amazon.com/support/home#/">Amazon Web Services Support</a> to
 *                     request an increase in your limit. </p>
 *                <p>Or the number of invitations that you tried to send would cause you to exceed
 *                     the limit of accounts in your organization. Send fewer invitations or contact
 *                     Amazon Web Services Support to request an increase in the number of accounts.</p>
 *                <note>
 *                   <p>Deleted and closed accounts still count toward your limit.</p>
 *                </note>
 *                <important>
 *                   <p>If you get this exception when running a command immediately after
 *                         creating the organization, wait one hour and try again. After an hour, if
 *                         the command continues to fail with this error, contact <a href="https://docs.aws.amazon.com/support/home#/">Amazon Web Services
 *                         Support</a>.</p>
 *                </important>
 *             </li>
 *             <li>
 *                <p>CANNOT_REGISTER_MASTER_AS_DELEGATED_ADMINISTRATOR: You attempted to register
 *                     the management account of the organization as a delegated administrator for an
 *                     Amazon Web Services service integrated with Organizations. You can designate only a member account as a
 *                     delegated administrator.</p>
 *             </li>
 *             <li>
 *                <p>CANNOT_CLOSE_MANAGEMENT_ACCOUNT: You attempted to close the management
 *                     account. To close the management account for the organization, you must first
 *                     either remove or close all member accounts in the organization. Follow standard
 *                     account closure process using root credentials.​ </p>
 *             </li>
 *             <li>
 *                <p>CANNOT_REMOVE_DELEGATED_ADMINISTRATOR_FROM_ORG: You attempted to remove an
 *                     account that is registered as a delegated administrator for a service integrated
 *                     with your organization. To complete this operation, you must first deregister
 *                     this account as a delegated administrator. </p>
 *             </li>
 *             <li>
 *                <p>CLOSE_ACCOUNT_QUOTA_EXCEEDED: You have exceeded close account quota for the
 *                     past 30 days. </p>
 *             </li>
 *             <li>
 *                <p>CLOSE_ACCOUNT_REQUESTS_LIMIT_EXCEEDED: You attempted to exceed the number of
 *                     accounts that you can close at a time. ​ </p>
 *             </li>
 *             <li>
 *                <p>CREATE_ORGANIZATION_IN_BILLING_MODE_UNSUPPORTED_REGION: To create an
 *                     organization in the specified region, you must enable all features mode.</p>
 *             </li>
 *             <li>
 *                <p>DELEGATED_ADMINISTRATOR_EXISTS_FOR_THIS_SERVICE: You attempted to register an
 *                     Amazon Web Services account as a delegated administrator for an Amazon Web Services service that already has
 *                     a delegated administrator. To complete this operation, you must first deregister
 *                     any existing delegated administrators for this service.</p>
 *             </li>
 *             <li>
 *                <p>EMAIL_VERIFICATION_CODE_EXPIRED: The email verification code is only valid for
 *                     a limited period of time. You must resubmit the request and generate a new
 *                     verfication code.</p>
 *             </li>
 *             <li>
 *                <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of
 *                     handshakes that you can send in one day.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PAYMENT_INSTRUMENT: You cannot remove an account because no supported
 *                     payment method is associated with the account. Amazon Web Services does not support cards
 *                     issued by financial institutions in Russia or Belarus. For more information, see
 *                         <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-general.html">Managing your
 *                         Amazon Web Services payments</a>.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_ADDRESS_DOES_NOT_MATCH_MARKETPLACE: To create an account in
 *                     this organization, you first must migrate the organization's management account
 *                     to the marketplace that corresponds to the management account's address. For
 *                     example, accounts with India addresses must be associated with the AISPL
 *                     marketplace. All accounts in an organization must be associated with the same
 *                     marketplace.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_MISSING_BUSINESS_LICENSE: Applies only to the Amazon Web Services /> Regions
 *                     in China. To create an organization, the master must have a valid business
 *                     license. For more information, contact customer support.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_MISSING_CONTACT_INFO: To complete this operation, you must
 *                     first provide a valid contact address and phone number for the management
 *                     account. Then try the operation again.</p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_NOT_GOVCLOUD_ENABLED: To complete this operation, the
 *                     management account must have an associated account in the Amazon Web Services GovCloud
 *                     (US-West) Region. For more information, see <a href="https://docs.aws.amazon.com/govcloud-us/latest/UserGuide/govcloud-organizations.html">Organizations</a>
 *                     in the
 *                     <i>Amazon Web Services GovCloud User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>MASTER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To create an organization with
 *                     this management account, you first must associate a valid payment instrument,
 *                     such as a credit card, with the account. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet
 *                         been provided</a> in the <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>MAX_DELEGATED_ADMINISTRATORS_FOR_SERVICE_LIMIT_EXCEEDED: You attempted to
 *                     register more delegated administrators than allowed for the service principal.
 *                 </p>
 *             </li>
 *             <li>
 *                <p>MAX_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to exceed the number
 *                     of policies of a certain type that can be attached to an entity at one
 *                     time.</p>
 *             </li>
 *             <li>
 *                <p>MAX_TAG_LIMIT_EXCEEDED: You have exceeded the number of tags allowed on this
 *                     resource. </p>
 *             </li>
 *             <li>
 *                <p>MEMBER_ACCOUNT_PAYMENT_INSTRUMENT_REQUIRED: To complete this operation with
 *                     this member account, you first must associate a valid payment instrument, such
 *                     as a credit card, with the account. Follow the steps at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html#leave-without-all-info">To leave an organization when all required account information has not yet
 *                         been provided</a> in the <i>Organizations User Guide.</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>MIN_POLICY_TYPE_ATTACHMENT_LIMIT_EXCEEDED: You attempted to detach a policy
 *                     from an entity that would cause the entity to have fewer than the minimum number
 *                     of policies of a certain type required.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_NOT_IN_ALL_FEATURES_MODE: You attempted to perform an operation
 *                     that requires the organization to be configured to support all features. An
 *                     organization that supports only consolidated billing features can't perform this
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>OU_DEPTH_LIMIT_EXCEEDED: You attempted to create an OU tree that is too many
 *                     levels deep.</p>
 *             </li>
 *             <li>
 *                <p>OU_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the number of OUs that you
 *                     can have in an organization.</p>
 *             </li>
 *             <li>
 *                <p>POLICY_CONTENT_LIMIT_EXCEEDED: You attempted to create a policy that is larger
 *                     than the maximum size.</p>
 *             </li>
 *             <li>
 *                <p>POLICY_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the number of policies
 *                     that you can have in an organization.</p>
 *             </li>
 *             <li>
 *                <p>SERVICE_ACCESS_NOT_ENABLED: You attempted to register a delegated
 *                     administrator before you enabled service access. Call the
 *                         <code>EnableAWSServiceAccess</code> API first.</p>
 *             </li>
 *             <li>
 *                <p>TAG_POLICY_VIOLATION: You attempted to create or update a resource with tags
 *                     that are not compliant with the tag policy requirements for this account.</p>
 *             </li>
 *             <li>
 *                <p>WAIT_PERIOD_ACTIVE: After you create an Amazon Web Services account, there is a waiting
 *                     period before you can remove it from the organization. If you get an error that
 *                     indicates that a wait period is required, try again in a few days.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourcePolicyNotFoundException} (client fault)
 *  <p>We can't find a resource policy request with the parameter that you specified.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Organizations can't complete your request because of an internal service error. Try again
 *             later.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You have sent too many requests in too short a period of time. The quota helps protect
 *             against denial-of-service attacks. Try again later.</p>
 *          <p>For information about quotas that affect Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html">Quotas for Organizations</a>in the
 *                 <i>Organizations User Guide.</i>
 *          </p>
 *
 * @throws {@link UnsupportedAPIEndpointException} (client fault)
 *  <p>This action isn't available in the current Amazon Web Services Region.</p>
 *
 * @throws {@link OrganizationsServiceException}
 * <p>Base exception class for all service exceptions from Organizations service.</p>
 *
 */
export class DeleteResourcePolicyCommand extends $Command<
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteResourcePolicyCommandInput) {
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
  ): Handler<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteResourcePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DeleteResourcePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteResourcePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteResourcePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteResourcePolicyCommandOutput> {
    return de_DeleteResourcePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

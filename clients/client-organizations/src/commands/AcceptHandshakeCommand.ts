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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  AcceptHandshakeRequest,
  AcceptHandshakeResponse,
  AcceptHandshakeResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { de_AcceptHandshakeCommand, se_AcceptHandshakeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcceptHandshakeCommand}.
 */
export interface AcceptHandshakeCommandInput extends AcceptHandshakeRequest {}
/**
 * @public
 *
 * The output of {@link AcceptHandshakeCommand}.
 */
export interface AcceptHandshakeCommandOutput extends AcceptHandshakeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Sends a response to the originator of a handshake agreeing to the action proposed by
 *             the handshake request.</p>
 *          <p>You can only call this operation by the following principals when they also have the
 *             relevant IAM permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Invitation to join</b> or <b>Approve all features request</b> handshakes: only a principal from
 *                     the member account.</p>
 *                <p>The user who calls the API for an invitation to join must have the
 *                         <code>organizations:AcceptHandshake</code> permission. If you enabled all
 *                     features in the organization, the user must also have the
 *                         <code>iam:CreateServiceLinkedRole</code> permission so that Organizations can
 *                     create the required service-linked role named <code>AWSServiceRoleForOrganizations</code>. For
 *                     more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integration_services.html#orgs_integrate_services-using_slrs">Organizations and service-linked roles</a> in the
 *                         <i>Organizations User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Enable all features final confirmation</b>
 *                     handshake: only a principal from the management account.</p>
 *                <p>For more information about invitations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_invites.html">Inviting an
 *                         Amazon Web Services account to join your organization</a> in the
 *                         <i>Organizations User Guide</i>. For more information about requests to
 *                     enable all features in the organization, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">Enabling all features in your organization</a> in
 *                     the <i>Organizations User Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>After you accept a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, AcceptHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, AcceptHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const input = { // AcceptHandshakeRequest
 *   HandshakeId: "STRING_VALUE", // required
 * };
 * const command = new AcceptHandshakeCommand(input);
 * const response = await client.send(command);
 * // { // AcceptHandshakeResponse
 * //   Handshake: { // Handshake
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Parties: [ // HandshakeParties
 * //       { // HandshakeParty
 * //         Id: "STRING_VALUE", // required
 * //         Type: "ACCOUNT" || "ORGANIZATION" || "EMAIL", // required
 * //       },
 * //     ],
 * //     State: "REQUESTED" || "OPEN" || "CANCELED" || "ACCEPTED" || "DECLINED" || "EXPIRED",
 * //     RequestedTimestamp: new Date("TIMESTAMP"),
 * //     ExpirationTimestamp: new Date("TIMESTAMP"),
 * //     Action: "INVITE" || "ENABLE_ALL_FEATURES" || "APPROVE_ALL_FEATURES" || "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE",
 * //     Resources: [ // HandshakeResources
 * //       { // HandshakeResource
 * //         Value: "STRING_VALUE",
 * //         Type: "ACCOUNT" || "ORGANIZATION" || "ORGANIZATION_FEATURE_SET" || "EMAIL" || "MASTER_EMAIL" || "MASTER_NAME" || "NOTES" || "PARENT_HANDSHAKE",
 * //         Resources: [
 * //           {
 * //             Value: "STRING_VALUE",
 * //             Type: "ACCOUNT" || "ORGANIZATION" || "ORGANIZATION_FEATURE_SET" || "EMAIL" || "MASTER_EMAIL" || "MASTER_NAME" || "NOTES" || "PARENT_HANDSHAKE",
 * //             Resources: "<HandshakeResources>",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptHandshakeCommandInput - {@link AcceptHandshakeCommandInput}
 * @returns {@link AcceptHandshakeCommandOutput}
 * @see {@link AcceptHandshakeCommandInput} for command's `input` shape.
 * @see {@link AcceptHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that
 *             is making the request must have at least one IAM permissions policy attached that
 *             grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *
 * @throws {@link AccessDeniedForDependencyException} (client fault)
 *  <p>The operation that you attempted requires you to have the
 *                 <code>iam:CreateServiceLinkedRole</code> for
 *                 <code>organizations.amazonaws.com</code> permission so that Organizations can create the
 *             required service-linked role. You don't have that permission.</p>
 *
 * @throws {@link AWSOrganizationsNotInUseException} (client fault)
 *  <p>Your account isn't a member of an organization. To make this request, you must use the
 *             credentials of an account that belongs to an organization.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The target of the operation is currently being modified by a different request. Try
 *             again later.</p>
 *
 * @throws {@link HandshakeAlreadyInStateException} (client fault)
 *  <p>The specified handshake is already in the requested state. For example, you can't
 *             accept a handshake that was already accepted.</p>
 *
 * @throws {@link HandshakeConstraintViolationException} (client fault)
 *  <p>The requested operation would violate the constraint identified in the reason
 *             code.</p>
 *          <note>
 *             <p>Some of the reasons in the following list might not be applicable to this specific
 *                 API or operation:</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>ACCOUNT_NUMBER_LIMIT_EXCEEDED: You attempted to exceed the limit on the number
 *                     of accounts in an organization. Note that deleted and closed accounts still
 *                     count toward your limit.</p>
 *                <important>
 *                   <p>If you get this exception immediately after creating the organization,
 *                         wait one hour and try again. If after an hour it continues to fail with this
 *                         error, contact <a href="https://console.aws.amazon.com/support/home#/">Amazon Web Services
 *                             Support</a>.</p>
 *                </important>
 *             </li>
 *             <li>
 *                <p>ALREADY_IN_AN_ORGANIZATION: The handshake request is invalid because the
 *                     invited account is already a member of an organization.</p>
 *             </li>
 *             <li>
 *                <p>HANDSHAKE_RATE_LIMIT_EXCEEDED: You attempted to exceed the number of
 *                     handshakes that you can send in one day.</p>
 *             </li>
 *             <li>
 *                <p>INVITE_DISABLED_DURING_ENABLE_ALL_FEATURES: You can't issue new invitations to
 *                     join an organization while it's in the process of enabling all features. You can
 *                     resume inviting accounts after you finalize the process when all accounts have
 *                     agreed to the change.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_ALREADY_HAS_ALL_FEATURES: The handshake request is invalid
 *                     because the organization has already enabled all features.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_IS_ALREADY_PENDING_ALL_FEATURES_MIGRATION: The handshake request
 *                     is invalid because the organization has already started the process to enable
 *                     all features.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_FROM_DIFFERENT_SELLER_OF_RECORD: The request failed because the
 *                     account is from a different marketplace than the accounts in the organization.
 *                     For example, accounts with India addresses must be associated with the AISPL
 *                     marketplace. All accounts in an organization must be from the same
 *                     marketplace.</p>
 *             </li>
 *             <li>
 *                <p>ORGANIZATION_MEMBERSHIP_CHANGE_RATE_LIMIT_EXCEEDED: You attempted to change
 *                     the membership of an account too quickly after its previous change.</p>
 *             </li>
 *             <li>
 *                <p>PAYMENT_INSTRUMENT_REQUIRED: You can't complete the operation with an account
 *                     that doesn't have a payment instrument, such as a credit card, associated with
 *                     it.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link HandshakeNotFoundException} (client fault)
 *  <p>We can't find a handshake with the <code>HandshakeId</code> that you specified.</p>
 *
 * @throws {@link InvalidHandshakeTransitionException} (client fault)
 *  <p>You can't perform the operation on the handshake in its current state. For example,
 *             you can't cancel a handshake that was already accepted or accept a handshake that was
 *             already declined.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The requested operation failed because you provided invalid values for one or more of
 *             the request parameters. This exception includes a reason that contains additional
 *             information about the violated limit:</p>
 *          <note>
 *             <p>Some of the reasons in the following list might not be applicable to this specific
 *                 API or operation.</p>
 *          </note>
 *          <ul>
 *             <li>
 *                <p>DUPLICATE_TAG_KEY: Tag keys must be unique among the tags attached to the same
 *                     entity.</p>
 *             </li>
 *             <li>
 *                <p>IMMUTABLE_POLICY: You specified a policy that is managed by Amazon Web Services and can't be
 *                     modified.</p>
 *             </li>
 *             <li>
 *                <p>INPUT_REQUIRED: You must include a value for all required parameters.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_EMAIL_ADDRESS_TARGET: You specified an invalid email address for the
 *                     invited account owner.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ENUM: You specified an invalid value.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ENUM_POLICY_TYPE: You specified an invalid policy type string.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_FULL_NAME_TARGET: You specified a full name that contains invalid
 *                     characters.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_LIST_MEMBER: You provided a list to a parameter that contains at least
 *                     one invalid value.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PAGINATION_TOKEN: Get the value for the <code>NextToken</code>
 *                     parameter from the response to a previous call of the operation.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PARTY_TYPE_TARGET: You specified the wrong type of entity (account,
 *                     organization, or email) as a party.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PATTERN: You provided a value that doesn't match the required
 *                     pattern.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_PATTERN_TARGET_ID: You specified a policy target ID that doesn't match
 *                     the required pattern.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ROLE_NAME: You provided a role name that isn't valid. A role name
 *                     can't begin with the reserved prefix <code>AWSServiceRoleFor</code>.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYNTAX_ORGANIZATION_ARN: You specified an invalid Amazon Resource Name
 *                     (ARN) for the organization.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYNTAX_POLICY_ID: You specified an invalid policy ID. </p>
 *             </li>
 *             <li>
 *                <p>INVALID_SYSTEM_TAGS_PARAMETER: You specified a tag key that is a system tag.
 *                     You can’t add, edit, or delete system tag keys because they're reserved for
 *                     Amazon Web Services use. System tags don’t count against your tags per resource limit.</p>
 *             </li>
 *             <li>
 *                <p>MAX_FILTER_LIMIT_EXCEEDED: You can specify only one filter parameter for the
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>MAX_LENGTH_EXCEEDED: You provided a string parameter that is longer than
 *                     allowed.</p>
 *             </li>
 *             <li>
 *                <p>MAX_VALUE_EXCEEDED: You provided a numeric parameter that has a larger value
 *                     than allowed.</p>
 *             </li>
 *             <li>
 *                <p>MIN_LENGTH_EXCEEDED: You provided a string parameter that is shorter than
 *                     allowed.</p>
 *             </li>
 *             <li>
 *                <p>MIN_VALUE_EXCEEDED: You provided a numeric parameter that has a smaller value
 *                     than allowed.</p>
 *             </li>
 *             <li>
 *                <p>MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS: You can move an account only between
 *                     entities in the same root.</p>
 *             </li>
 *             <li>
 *                <p>TARGET_NOT_SUPPORTED: You can't perform the specified operation on that target
 *                     entity.</p>
 *             </li>
 *             <li>
 *                <p>UNRECOGNIZED_SERVICE_PRINCIPAL: You specified a service principal that isn't
 *                     recognized.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Organizations can't complete your request because of an internal service error. Try again
 *             later.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You have sent too many requests in too short a period of time. The quota helps protect
 *             against denial-of-service attacks. Try again later.</p>
 *          <p>For information about quotas that affect Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html">Quotas for Organizations</a> in the
 *                 <i>Organizations User Guide</i>.</p>
 *
 * @throws {@link OrganizationsServiceException}
 * <p>Base exception class for all service exceptions from Organizations service.</p>
 *
 * @example To accept a handshake from another account
 * ```javascript
 * // Bill is the owner of an organization, and he invites Juan's account (222222222222) to join his organization. The following example shows Juan's account accepting the handshake and thus agreeing to the invitation.
 * const input = {
 *   "HandshakeId": "h-examplehandshakeid111"
 * };
 * const command = new AcceptHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Handshake": {
 *     "Action": "INVITE",
 *     "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
 *     "ExpirationTimestamp": "20170228T1215Z",
 *     "Id": "h-examplehandshakeid111",
 *     "Parties": [
 *       {
 *         "Id": "o-exampleorgid",
 *         "Type": "ORGANIZATION"
 *       },
 *       {
 *         "Id": "juan@example.com",
 *         "Type": "EMAIL"
 *       }
 *     ],
 *     "RequestedTimestamp": "20170214T1215Z",
 *     "Resources": [
 *       {
 *         "Resources": [
 *           {
 *             "Type": "MASTER_EMAIL",
 *             "Value": "bill@amazon.com"
 *           },
 *           {
 *             "Type": "MASTER_NAME",
 *             "Value": "Org Master Account"
 *           },
 *           {
 *             "Type": "ORGANIZATION_FEATURE_SET",
 *             "Value": "ALL"
 *           }
 *         ],
 *         "Type": "ORGANIZATION",
 *         "Value": "o-exampleorgid"
 *       },
 *       {
 *         "Type": "ACCOUNT",
 *         "Value": "222222222222"
 *       }
 *     ],
 *     "State": "ACCEPTED"
 *   }
 * }
 * *\/
 * // example id: to-accept-a-handshake-from-another-account-1472500561150
 * ```
 *
 */
export class AcceptHandshakeCommand extends $Command<
  AcceptHandshakeCommandInput,
  AcceptHandshakeCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptHandshakeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "AcceptHandshakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: AcceptHandshakeResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSOrganizationsV20161128",
        operation: "AcceptHandshake",
      },
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
  private serialize(input: AcceptHandshakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AcceptHandshakeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptHandshakeCommandOutput> {
    return de_AcceptHandshakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
  DeclineHandshakeRequest,
  DeclineHandshakeResponse,
  DeclineHandshakeResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { de_DeclineHandshakeCommand, se_DeclineHandshakeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeclineHandshakeCommand}.
 */
export interface DeclineHandshakeCommandInput extends DeclineHandshakeRequest {}
/**
 * @public
 *
 * The output of {@link DeclineHandshakeCommand}.
 */
export interface DeclineHandshakeCommandOutput extends DeclineHandshakeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code>
 *             and effectively deactivates the request.</p>
 *          <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a>
 *             instead. The originator can't reactivate a declined request, but can reinitiate the
 *             process with a new handshake request.</p>
 *          <p>After you decline a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DeclineHandshakeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DeclineHandshakeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const input = { // DeclineHandshakeRequest
 *   HandshakeId: "STRING_VALUE", // required
 * };
 * const command = new DeclineHandshakeCommand(input);
 * const response = await client.send(command);
 * // { // DeclineHandshakeResponse
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
 * @param DeclineHandshakeCommandInput - {@link DeclineHandshakeCommandInput}
 * @returns {@link DeclineHandshakeCommandOutput}
 * @see {@link DeclineHandshakeCommandInput} for command's `input` shape.
 * @see {@link DeclineHandshakeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that
 *             is making the request must have at least one IAM permissions policy attached that
 *             grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The target of the operation is currently being modified by a different request. Try
 *             again later.</p>
 *
 * @throws {@link HandshakeAlreadyInStateException} (client fault)
 *  <p>The specified handshake is already in the requested state. For example, you can't
 *             accept a handshake that was already accepted.</p>
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
 * @example To decline a handshake sent from the master account
 * ```javascript
 * // The following example shows Susan declining an invitation to join Bill's organization. The DeclineHandshake operation returns a handshake object, showing that the state is now DECLINED:
 * const input = {
 *   "HandshakeId": "h-examplehandshakeid111"
 * };
 * const command = new DeclineHandshakeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Handshake": {
 *     "Action": "INVITE",
 *     "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
 *     "ExpirationTimestamp": "2016-12-15T19:27:58Z",
 *     "Id": "h-examplehandshakeid111",
 *     "Parties": [
 *       {
 *         "Id": "222222222222",
 *         "Type": "ACCOUNT"
 *       },
 *       {
 *         "Id": "o-exampleorgid",
 *         "Type": "ORGANIZATION"
 *       }
 *     ],
 *     "RequestedTimestamp": "2016-11-30T19:27:58Z",
 *     "Resources": [
 *       {
 *         "Resources": [
 *           {
 *             "Type": "MASTER_EMAIL",
 *             "Value": "bill@example.com"
 *           },
 *           {
 *             "Type": "MASTER_NAME",
 *             "Value": "Master Account"
 *           }
 *         ],
 *         "Type": "ORGANIZATION",
 *         "Value": "o-exampleorgid"
 *       },
 *       {
 *         "Type": "ACCOUNT",
 *         "Value": "222222222222"
 *       },
 *       {
 *         "Type": "NOTES",
 *         "Value": "This is an invitation to Susan's account to join the Bill's organization."
 *       }
 *     ],
 *     "State": "DECLINED"
 *   }
 * }
 * *\/
 * // example id: to-decline-a-handshake-sent-from-the-master-account-1472502666967
 * ```
 *
 */
export class DeclineHandshakeCommand extends $Command<
  DeclineHandshakeCommandInput,
  DeclineHandshakeCommandOutput,
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
  constructor(readonly input: DeclineHandshakeCommandInput) {
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
  ): Handler<DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeclineHandshakeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DeclineHandshakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DeclineHandshakeResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSOrganizationsV20161128",
        operation: "DeclineHandshake",
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
  private serialize(input: DeclineHandshakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeclineHandshakeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeclineHandshakeCommandOutput> {
    return de_DeclineHandshakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

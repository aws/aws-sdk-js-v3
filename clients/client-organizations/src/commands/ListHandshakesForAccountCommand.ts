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
  ListHandshakesForAccountRequest,
  ListHandshakesForAccountResponse,
  ListHandshakesForAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { de_ListHandshakesForAccountCommand, se_ListHandshakesForAccountCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHandshakesForAccountCommand}.
 */
export interface ListHandshakesForAccountCommandInput extends ListHandshakesForAccountRequest {}
/**
 * @public
 *
 * The output of {@link ListHandshakesForAccountCommand}.
 */
export interface ListHandshakesForAccountCommandOutput extends ListHandshakesForAccountResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the current handshakes that are associated with the account of the requesting
 *             user.</p>
 *          <p>Handshakes that are <code>ACCEPTED</code>, <code>DECLINED</code>,
 *                 <code>CANCELED</code>, or <code>EXPIRED</code> appear in the results of this API for
 *             only 30 days after changing to that state. After that, they're deleted and no longer
 *             accessible.</p>
 *          <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *          <p>This operation can be called from any account in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListHandshakesForAccountCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListHandshakesForAccountCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const input = { // ListHandshakesForAccountRequest
 *   Filter: { // HandshakeFilter
 *     ActionType: "INVITE" || "ENABLE_ALL_FEATURES" || "APPROVE_ALL_FEATURES" || "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE",
 *     ParentHandshakeId: "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListHandshakesForAccountCommand(input);
 * const response = await client.send(command);
 * // { // ListHandshakesForAccountResponse
 * //   Handshakes: [ // Handshakes
 * //     { // Handshake
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Parties: [ // HandshakeParties
 * //         { // HandshakeParty
 * //           Id: "STRING_VALUE", // required
 * //           Type: "ACCOUNT" || "ORGANIZATION" || "EMAIL", // required
 * //         },
 * //       ],
 * //       State: "REQUESTED" || "OPEN" || "CANCELED" || "ACCEPTED" || "DECLINED" || "EXPIRED",
 * //       RequestedTimestamp: new Date("TIMESTAMP"),
 * //       ExpirationTimestamp: new Date("TIMESTAMP"),
 * //       Action: "INVITE" || "ENABLE_ALL_FEATURES" || "APPROVE_ALL_FEATURES" || "ADD_ORGANIZATIONS_SERVICE_LINKED_ROLE",
 * //       Resources: [ // HandshakeResources
 * //         { // HandshakeResource
 * //           Value: "STRING_VALUE",
 * //           Type: "ACCOUNT" || "ORGANIZATION" || "ORGANIZATION_FEATURE_SET" || "EMAIL" || "MASTER_EMAIL" || "MASTER_NAME" || "NOTES" || "PARENT_HANDSHAKE",
 * //           Resources: [
 * //             {
 * //               Value: "STRING_VALUE",
 * //               Type: "ACCOUNT" || "ORGANIZATION" || "ORGANIZATION_FEATURE_SET" || "EMAIL" || "MASTER_EMAIL" || "MASTER_NAME" || "NOTES" || "PARENT_HANDSHAKE",
 * //               Resources: "<HandshakeResources>",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHandshakesForAccountCommandInput - {@link ListHandshakesForAccountCommandInput}
 * @returns {@link ListHandshakesForAccountCommandOutput}
 * @see {@link ListHandshakesForAccountCommandInput} for command's `input` shape.
 * @see {@link ListHandshakesForAccountCommandOutput} for command's `response` shape.
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
 * @example To retrieve a list of the handshakes sent to an account
 * ```javascript
 * // The following example shows you how to get a list of handshakes that are associated with the account of the credentials used to call the operation:
 * const input = undefined;
 * const command = new ListHandshakesForAccountCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Handshakes": [
 *     {
 *       "Action": "INVITE",
 *       "Arn": "arn:aws:organizations::111111111111:handshake/o-exampleorgid/invite/h-examplehandshakeid111",
 *       "ExpirationTimestamp": "2017-01-28T14:35:23.3Z",
 *       "Id": "h-examplehandshakeid111",
 *       "Parties": [
 *         {
 *           "Id": "o-exampleorgid",
 *           "Type": "ORGANIZATION"
 *         },
 *         {
 *           "Id": "juan@example.com",
 *           "Type": "EMAIL"
 *         }
 *       ],
 *       "RequestedTimestamp": "2017-01-13T14:35:23.3Z",
 *       "Resources": [
 *         {
 *           "Resources": [
 *             {
 *               "Type": "MASTER_EMAIL",
 *               "Value": "bill@amazon.com"
 *             },
 *             {
 *               "Type": "MASTER_NAME",
 *               "Value": "Org Master Account"
 *             },
 *             {
 *               "Type": "ORGANIZATION_FEATURE_SET",
 *               "Value": "FULL"
 *             }
 *           ],
 *           "Type": "ORGANIZATION",
 *           "Value": "o-exampleorgid"
 *         },
 *         {
 *           "Type": "EMAIL",
 *           "Value": "juan@example.com"
 *         }
 *       ],
 *       "State": "OPEN"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-retrieve-a-list-of-the-handshakes-sent-to-an-account-1472510214747
 * ```
 *
 */
export class ListHandshakesForAccountCommand extends $Command<
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
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
  constructor(readonly input: ListHandshakesForAccountCommandInput) {
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
  ): Handler<ListHandshakesForAccountCommandInput, ListHandshakesForAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHandshakesForAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListHandshakesForAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListHandshakesForAccountResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSOrganizationsV20161128",
        operation: "ListHandshakesForAccount",
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
  private serialize(input: ListHandshakesForAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHandshakesForAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHandshakesForAccountCommandOutput> {
    return de_ListHandshakesForAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

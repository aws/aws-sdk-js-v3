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

import {
  ListCreateAccountStatusRequest,
  ListCreateAccountStatusResponse,
  ListCreateAccountStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { de_ListCreateAccountStatusCommand, se_ListCreateAccountStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCreateAccountStatusCommand}.
 */
export interface ListCreateAccountStatusCommandInput extends ListCreateAccountStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListCreateAccountStatusCommand}.
 */
export interface ListCreateAccountStatusCommandOutput extends ListCreateAccountStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the account creation requests that match the specified status that is currently
 *             being tracked for the organization.</p>
 *          <note>
 *             <p>Always check the <code>NextToken</code> response parameter
 * for a <code>null</code> value when calling a <code>List*</code> operation. These operations can
 * occasionally return an empty set of results even when there are more results available. The
 * <code>NextToken</code> response parameter value is <code>null</code>
 *                <i>only</i>
 * when there are no more results to display.</p>
 *          </note>
 *          <p>This operation can be called only from the organization's
 * management account or by a member account that is a delegated administrator for an Amazon Web Services service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListCreateAccountStatusCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListCreateAccountStatusCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const input = { // ListCreateAccountStatusRequest
 *   States: [ // CreateAccountStates
 *     "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCreateAccountStatusCommand(input);
 * const response = await client.send(command);
 * // { // ListCreateAccountStatusResponse
 * //   CreateAccountStatuses: [ // CreateAccountStatuses
 * //     { // CreateAccountStatus
 * //       Id: "STRING_VALUE",
 * //       AccountName: "STRING_VALUE",
 * //       State: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //       RequestedTimestamp: new Date("TIMESTAMP"),
 * //       CompletedTimestamp: new Date("TIMESTAMP"),
 * //       AccountId: "STRING_VALUE",
 * //       GovCloudAccountId: "STRING_VALUE",
 * //       FailureReason: "ACCOUNT_LIMIT_EXCEEDED" || "EMAIL_ALREADY_EXISTS" || "INVALID_ADDRESS" || "INVALID_EMAIL" || "CONCURRENT_ACCOUNT_MODIFICATION" || "INTERNAL_FAILURE" || "GOVCLOUD_ACCOUNT_ALREADY_EXISTS" || "MISSING_BUSINESS_VALIDATION" || "FAILED_BUSINESS_VALIDATION" || "PENDING_BUSINESS_VALIDATION" || "INVALID_IDENTITY_FOR_BUSINESS_VALIDATION" || "UNKNOWN_BUSINESS_VALIDATION" || "MISSING_PAYMENT_INSTRUMENT" || "INVALID_PAYMENT_INSTRUMENT" || "UPDATE_EXISTING_RESOURCE_POLICY_WITH_TAGS_NOT_SUPPORTED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCreateAccountStatusCommandInput - {@link ListCreateAccountStatusCommandInput}
 * @returns {@link ListCreateAccountStatusCommandOutput}
 * @see {@link ListCreateAccountStatusCommandInput} for command's `input` shape.
 * @see {@link ListCreateAccountStatusCommandOutput} for command's `response` shape.
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
 * @example To get a list of completed account creation requests made in the organization
 * ```javascript
 * // The following example shows a user requesting a list of only the completed account creation requests made for the current organization:
 * const input = {
 *   "States": [
 *     "SUCCEEDED"
 *   ]
 * };
 * const command = new ListCreateAccountStatusCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CreateAccountStatuses": [
 *     {
 *       "AccountId": "444444444444",
 *       "AccountName": "Developer Test Account",
 *       "CompletedTimestamp": "2017-01-15T13:45:23.6Z",
 *       "Id": "car-exampleaccountcreationrequestid1",
 *       "RequestedTimestamp": "2017-01-15T13:45:23.01Z",
 *       "State": "SUCCEEDED"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-completed-account-creation-requests-made-in-the-organization
 * ```
 *
 * @example To get a list of all account creation requests made in the organization
 * ```javascript
 * // The following example shows a user requesting a list of only the in-progress account creation requests made for the current organization:
 * const input = {
 *   "States": [
 *     "IN_PROGRESS"
 *   ]
 * };
 * const command = new ListCreateAccountStatusCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CreateAccountStatuses": [
 *     {
 *       "AccountName": "Production Account",
 *       "Id": "car-exampleaccountcreationrequestid2",
 *       "RequestedTimestamp": "2017-01-15T13:45:23.01Z",
 *       "State": "IN_PROGRESS"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-all-account-creation-requests-made-in-the-organization-1472509174532
 * ```
 *
 */
export class ListCreateAccountStatusCommand extends $Command<
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
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
  constructor(readonly input: ListCreateAccountStatusCommandInput) {
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
  ): Handler<ListCreateAccountStatusCommandInput, ListCreateAccountStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCreateAccountStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "ListCreateAccountStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListCreateAccountStatusResponseFilterSensitiveLog,
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
  private serialize(input: ListCreateAccountStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCreateAccountStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCreateAccountStatusCommandOutput> {
    return de_ListCreateAccountStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

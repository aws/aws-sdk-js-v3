// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccountsForParentRequest, ListAccountsForParentResponse } from "../models/models_0";
import { ListAccountsForParent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccountsForParentCommand}.
 */
export interface ListAccountsForParentCommandInput extends ListAccountsForParentRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountsForParentCommand}.
 */
export interface ListAccountsForParentCommandOutput extends ListAccountsForParentResponse, __MetadataBearer {}

/**
 * Lists the accounts in an organization that are contained by the specified target root or organizational unit (OU). If you specify the root, you get a list of all the accounts that aren't in any OU. If you specify an OU, you get a list of all the accounts in only that OU and not in any child OUs. To get a list of all accounts in the organization, use the ListAccounts operation.
 *
 * > **Note:** When calling List* operations, always check the `NextToken` response parameter value, even if you receive an empty result set. These operations can occasionally return an empty set of results even when more results are available. Continue making requests until `NextToken` returns null. A null `NextToken` value indicates that you have retrieved all available results.
 *
 * You can only call this operation from the management account or a member account that is a delegated administrator.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListAccountsForParentCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListAccountsForParentCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * // import type { OrganizationsClientConfig } from "@aws-sdk/client-organizations";
 * const config = {}; // type is OrganizationsClientConfig
 * const client = new OrganizationsClient(config);
 * const input = { // ListAccountsForParentRequest
 *   ParentId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAccountsForParentCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountsForParentResponse
 * //   Accounts: [ // Accounts
 * //     { // Account
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Email: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "ACTIVE" || "SUSPENDED" || "PENDING_CLOSURE",
 * //       State: "PENDING_ACTIVATION" || "ACTIVE" || "SUSPENDED" || "PENDING_CLOSURE" || "CLOSED",
 * //       Paths: [ // Paths
 * //         "STRING_VALUE",
 * //       ],
 * //       JoinedMethod: "INVITED" || "CREATED",
 * //       JoinedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountsForParentCommandInput - {@link ListAccountsForParentCommandInput}
 * @returns {@link ListAccountsForParentCommandOutput}
 * @see {@link ListAccountsForParentCommandInput} for command's `input` shape.
 * @see {@link ListAccountsForParentCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link AWSOrganizationsNotInUseException} (client fault)
 *
 * Your account isn't a member of an organization. To make this request, you must use the credentials of an account that belongs to an organization.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The requested operation failed because you provided invalid values for one or more of the request parameters. This exception includes a reason that contains additional information about the violated limit:
 *
 * > **Note:** Some of the reasons in the following list might not be applicable to this specific API or operation.
 *
 * - CALLER_REQUIRED_FIELD_MISSING: At least one of the required field is missing: Caller Account Id, Management Account Id or Organization Id.
 * - DUPLICATE_TAG_KEY: Tag keys must be unique among the tags attached to the same entity.
 * - END_DATE_NOT_END_OF_MONTH: You provided an invalid end date. The end date must be the end of the last day of the month (23.59.59.999).
 * - END_DATE_TOO_EARLY: You provided an invalid end date. The end date is too early.
 * - END_DATE_TOO_LATE: You provided an invalid end date. The end date is too late.
 * - IMMUTABLE_POLICY: You specified a policy that is managed by Amazon Web Services and can't be modified.
 * - INPUT_REQUIRED: You must include a value for all required parameters.
 * - INVALID_EMAIL_ADDRESS_TARGET: You specified an invalid email address for the invited account owner.
 * - INVALID_END_DATE: The selected withdrawal date doesn't meet the minimum notice period required by your partner agreement. Visit Amazon Web Services Partner Central or contact your Amazon Web Services Channel Partner for help.
 * - INVALID_ENUM: You specified an invalid value.
 * - INVALID_ENUM_POLICY_TYPE: You specified an invalid policy type string.
 * - INVALID_FULL_NAME_TARGET: You specified a full name that contains invalid characters.
 * - INVALID_LIST_MEMBER: You provided a list to a parameter that contains at least one invalid value.
 * - INVALID_PAGINATION_TOKEN: Get the value for the `NextToken` parameter from the response to a previous call of the operation.
 * - INVALID_PARTY_TYPE_TARGET: You specified the wrong type of entity (account, organization, or email) as a party.
 * - INVALID_PATTERN: You provided a value that doesn't match the required pattern. The service also validates your free-text field values against common cross-site scripting (XSS) patterns and rejects requests that contain matching values.
 * - INVALID_PATTERN_TARGET_ID: You specified a policy target ID that doesn't match the required pattern.
 * - INVALID_PRINCIPAL: You specified an invalid principal element in the policy.
 * - INVALID_ROLE_NAME: You provided a role name that isn't valid. A role name can't begin with the reserved prefix `AWSServiceRoleFor`.
 * - INVALID_START_DATE: The start date doesn't meet the minimum requirements.
 * - INVALID_SYNTAX_ORGANIZATION_ARN: You specified an invalid Amazon Resource Name (ARN) for the organization.
 * - INVALID_SYNTAX_POLICY_ID: You specified an invalid policy ID.
 * - INVALID_SYSTEM_TAGS_PARAMETER: You specified a tag key that is a system tag. You can’t add, edit, or delete system tag keys because they're reserved for Amazon Web Services use. System tags don’t count against your tags per resource limit.
 * - MAX_FILTER_LIMIT_EXCEEDED: You can specify only one filter parameter for the operation.
 * - MAX_LENGTH_EXCEEDED: You provided a string parameter that is longer than allowed.
 * - MAX_VALUE_EXCEEDED: You provided a numeric parameter that has a larger value than allowed.
 * - MIN_LENGTH_EXCEEDED: You provided a string parameter that is shorter than allowed.
 * - MIN_VALUE_EXCEEDED: You provided a numeric parameter that has a smaller value than allowed.
 * - MOVING_ACCOUNT_BETWEEN_DIFFERENT_ROOTS: You can move an account only between entities in the same root.
 * - NON_DETACHABLE_POLICY: You can't detach this Amazon Web Services Managed Policy.
 * - START_DATE_NOT_BEGINNING_OF_DAY: You provided an invalid start date. The start date must be the beginning of the day (00:00:00.000).
 * - START_DATE_NOT_BEGINNING_OF_MONTH: You provided an invalid start date. The start date must be the first day of the month.
 * - START_DATE_TOO_EARLY: You provided an invalid start date. The start date is too early.
 * - START_DATE_TOO_LATE: You provided an invalid start date. The start date is too late.
 * - TARGET_NOT_SUPPORTED: You can't perform the specified operation on that target entity.
 * - UNRECOGNIZED_SERVICE_PRINCIPAL: You specified a service principal that isn't recognized.
 * - UNSUPPORTED_ACTION_IN_RESPONSIBILITY_TRANSFER: You provided a value that is not supported by this operation.
 *
 * @throws {@link ParentNotFoundException} (client fault)
 *
 * We can't find a root or OU with the `ParentId` that you specified.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * Organizations can't complete your request because of an internal service error. Try again later.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * You have sent too many requests in too short a period of time. The quota helps protect against denial-of-service attacks. Try again later.
 *
 * For information about quotas that affect Organizations, see [Quotas for Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html) in the *Organizations User Guide*.
 *
 * @throws {@link OrganizationsServiceException}
 *
 * Base exception class for all service exceptions from Organizations service.
 *
 * @example To retrieve a list of all of the accounts in a root or OU
 * ```javascript
 * // The following example shows how to request a list of the accounts in an OU:/n/n
 * const input = {
 *   ParentId: "ou-examplerootid111-exampleouid111"
 * };
 * const command = new ListAccountsForParentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Accounts: [
 *     {
 *       Arn: "arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333",
 *       Email: "juan@example.com",
 *       Id: "333333333333",
 *       JoinedMethod: "INVITED",
 *       JoinedTimestamp: 1.481835795536E9,
 *       Name: "Development Account",
 *       Status: "ACTIVE"
 *     },
 *     {
 *       Arn: "arn:aws:organizations::111111111111:account/o-exampleorgid/444444444444",
 *       Email: "anika@example.com",
 *       Id: "444444444444",
 *       JoinedMethod: "INVITED",
 *       JoinedTimestamp: 1.481835812143E9,
 *       Name: "Test Account",
 *       Status: "ACTIVE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAccountsForParentCommand extends command<ListAccountsForParentCommandInput, ListAccountsForParentCommandOutput>(
  _ep0,
  _mw0,
  "ListAccountsForParent",
  ListAccountsForParent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountsForParentRequest;
      output: ListAccountsForParentResponse;
    };
    sdk: {
      input: ListAccountsForParentCommandInput;
      output: ListAccountsForParentCommandOutput;
    };
  };
}

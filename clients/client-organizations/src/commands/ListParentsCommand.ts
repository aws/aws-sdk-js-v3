// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListParentsRequest, ListParentsResponse } from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListParents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListParentsCommand}.
 */
export interface ListParentsCommandInput extends ListParentsRequest {}
/**
 * @public
 *
 * The output of {@link ListParentsCommand}.
 */
export interface ListParentsCommandOutput extends ListParentsResponse, __MetadataBearer {}

/**
 * <p>Lists the root or organizational units (OUs) that serve as the immediate parent of the
 *             specified child OU or account. This operation, along with <a>ListChildren</a>
 *             enables you to traverse the tree structure that makes up this root.</p>
 *          <note>
 *             <p>When calling List* operations, always check the <code>NextToken</code> response parameter value, even if you receive an empty result set.
 * These operations can occasionally return an empty set of results even when more results are available.
 * Continue making requests until <code>NextToken</code> returns null. A null <code>NextToken</code> value indicates that you have retrieved all available results.</p>
 *          </note>
 *          <p>You can only call this operation from the management account or a member account that is a delegated administrator.</p>
 *          <note>
 *             <p>In the current release, a child can have only a single parent.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, ListParentsCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListParentsCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * // import type { OrganizationsClientConfig } from "@aws-sdk/client-organizations";
 * const config = {}; // type is OrganizationsClientConfig
 * const client = new OrganizationsClient(config);
 * const input = { // ListParentsRequest
 *   ChildId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListParentsCommand(input);
 * const response = await client.send(command);
 * // { // ListParentsResponse
 * //   Parents: [ // Parents
 * //     { // Parent
 * //       Id: "STRING_VALUE",
 * //       Type: "ROOT" || "ORGANIZATIONAL_UNIT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListParentsCommandInput - {@link ListParentsCommandInput}
 * @returns {@link ListParentsCommandOutput}
 * @see {@link ListParentsCommandInput} for command's `input` shape.
 * @see {@link ListParentsCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that
 *             is making the request must have at least one IAM permissions policy attached that
 *             grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *
 * @throws {@link AWSOrganizationsNotInUseException} (client fault)
 *  <p>Your account isn't a member of an organization. To make this request, you must use the
 *             credentials of an account that belongs to an organization.</p>
 *
 * @throws {@link ChildNotFoundException} (client fault)
 *  <p>We can't find an organizational unit (OU) or Amazon Web Services account with the
 *                 <code>ChildId</code> that you specified.</p>
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
 *                <p>CALLER_REQUIRED_FIELD_MISSING: At least one of the required field is missing: Caller Account Id, Management Account Id or Organization Id.</p>
 *             </li>
 *             <li>
 *                <p>DUPLICATE_TAG_KEY: Tag keys must be unique among the tags attached to the same
 *                     entity.</p>
 *             </li>
 *             <li>
 *                <p>END_DATE_NOT_END_OF_MONTH: You provided an invalid end date. The end date must be the end
 *                     of the last day of the month (23.59.59.999).</p>
 *             </li>
 *             <li>
 *                <p>END_DATE_TOO_EARLY: You provided an invalid end date. It is too early for the transfer to
 *                     end.</p>
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
 *                <p>INVALID_END_DATE: The selected withdrawal date doesn't meet the terms of your partner
 *                     agreement. Visit Amazon Web Services Partner Central to view your partner agreements or contact your Amazon Web Services
 *                     Partner for help.</p>
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
 *                <p>INVALID_PRINCIPAL: You specified an invalid principal element in the
 *                     policy.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_ROLE_NAME: You provided a role name that isn't valid. A role name
 *                     can't begin with the reserved prefix <code>AWSServiceRoleFor</code>.</p>
 *             </li>
 *             <li>
 *                <p>INVALID_START_DATE: The start date doesn't meet the minimum requirements.</p>
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
 *                <p>NON_DETACHABLE_POLICY: You can't detach this Amazon Web Services Managed Policy.</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_NOT_BEGINNING_OF_DAY: You provided an invalid start date. The start date must
 *                     be the beginning of the day (00:00:00.000).</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_NOT_BEGINNING_OF_MONTH: You provided an invalid start date. The start date must
 *                     be the first day of the month.</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_TOO_EARLY: You provided an invalid start date. The start date is too early.</p>
 *             </li>
 *             <li>
 *                <p>START_DATE_TOO_LATE: You provided an invalid start date. The start date is too late.</p>
 *             </li>
 *             <li>
 *                <p>TARGET_NOT_SUPPORTED: You can't perform the specified operation on that target
 *                     entity.</p>
 *             </li>
 *             <li>
 *                <p>UNRECOGNIZED_SERVICE_PRINCIPAL: You specified a service principal that isn't
 *                     recognized.</p>
 *             </li>
 *             <li>
 *                <p>UNSUPPORTED_ACTION_IN_RESPONSIBILITY_TRANSFER: You provided a value that is not supported
 *                 by this operation.</p>
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
 *
 * @example To retrieve a list of all of the parents of a child OU or account
 * ```javascript
 * // The following example shows how to list the root or OUs that contain account 444444444444:/n/n
 * const input = {
 *   ChildId: "444444444444"
 * };
 * const command = new ListParentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Parents: [
 *     {
 *       Id: "ou-examplerootid111-exampleouid111",
 *       Type: "ORGANIZATIONAL_UNIT"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListParentsCommand extends $Command
  .classBuilder<
    ListParentsCommandInput,
    ListParentsCommandOutput,
    OrganizationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OrganizationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSOrganizationsV20161128", "ListParents", {})
  .n("OrganizationsClient", "ListParentsCommand")
  .sc(ListParents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListParentsRequest;
      output: ListParentsResponse;
    };
    sdk: {
      input: ListParentsCommandInput;
      output: ListParentsCommandOutput;
    };
  };
}

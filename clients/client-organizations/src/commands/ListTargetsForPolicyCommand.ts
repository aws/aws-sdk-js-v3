// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTargetsForPolicyRequest, ListTargetsForPolicyResponse } from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { de_ListTargetsForPolicyCommand, se_ListTargetsForPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTargetsForPolicyCommand}.
 */
export interface ListTargetsForPolicyCommandInput extends ListTargetsForPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ListTargetsForPolicyCommand}.
 */
export interface ListTargetsForPolicyCommandOutput extends ListTargetsForPolicyResponse, __MetadataBearer {}

/**
 * <p>Lists all the roots, organizational units (OUs), and accounts that the specified
 *             policy is attached to.</p>
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
 * import { OrganizationsClient, ListTargetsForPolicyCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, ListTargetsForPolicyCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const input = { // ListTargetsForPolicyRequest
 *   PolicyId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTargetsForPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ListTargetsForPolicyResponse
 * //   Targets: [ // PolicyTargets
 * //     { // PolicyTargetSummary
 * //       TargetId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Type: "ACCOUNT" || "ORGANIZATIONAL_UNIT" || "ROOT",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTargetsForPolicyCommandInput - {@link ListTargetsForPolicyCommandInput}
 * @returns {@link ListTargetsForPolicyCommandOutput}
 * @see {@link ListTargetsForPolicyCommandInput} for command's `input` shape.
 * @see {@link ListTargetsForPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link PolicyNotFoundException} (client fault)
 *  <p>We can't find a policy with the <code>PolicyId</code> that you specified.</p>
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
 * @throws {@link UnsupportedAPIEndpointException} (client fault)
 *  <p>This action isn't available in the current Amazon Web Services Region.</p>
 *
 * @throws {@link OrganizationsServiceException}
 * <p>Base exception class for all service exceptions from Organizations service.</p>
 *
 * @public
 * @example To retrieve a list of roots, OUs, and accounts to which a policy is attached
 * ```javascript
 * // The following example shows how to get the list of roots, OUs, and accounts to which the specified policy is attached:/n/n
 * const input = {
 *   "PolicyId": "p-FullAWSAccess"
 * };
 * const command = new ListTargetsForPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Targets": [
 *     {
 *       "Arn": "arn:aws:organizations::111111111111:root/o-exampleorgid/r-examplerootid111",
 *       "Name": "Root",
 *       "TargetId": "r-examplerootid111",
 *       "Type": "ROOT"
 *     },
 *     {
 *       "Arn": "arn:aws:organizations::111111111111:account/o-exampleorgid/333333333333;",
 *       "Name": "Developer Test Account",
 *       "TargetId": "333333333333",
 *       "Type": "ACCOUNT"
 *     },
 *     {
 *       "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111",
 *       "Name": "Accounting",
 *       "TargetId": "ou-examplerootid111-exampleouid111",
 *       "Type": "ORGANIZATIONAL_UNIT"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-retrieve-a-list-of-roots-ous-and-accounts-to-which-a-policy-is-attached
 * ```
 *
 */
export class ListTargetsForPolicyCommand extends $Command
  .classBuilder<
    ListTargetsForPolicyCommandInput,
    ListTargetsForPolicyCommandOutput,
    OrganizationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OrganizationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSOrganizationsV20161128", "ListTargetsForPolicy", {})
  .n("OrganizationsClient", "ListTargetsForPolicyCommand")
  .f(void 0, void 0)
  .ser(se_ListTargetsForPolicyCommand)
  .de(de_ListTargetsForPolicyCommand)
  .build() {}

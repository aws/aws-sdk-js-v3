// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateOrganizationalUnitRequest, UpdateOrganizationalUnitResponse } from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { de_UpdateOrganizationalUnitCommand, se_UpdateOrganizationalUnitCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOrganizationalUnitCommand}.
 */
export interface UpdateOrganizationalUnitCommandInput extends UpdateOrganizationalUnitRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOrganizationalUnitCommand}.
 */
export interface UpdateOrganizationalUnitCommandOutput extends UpdateOrganizationalUnitResponse, __MetadataBearer {}

/**
 * <p>Renames the specified organizational unit (OU). The ID and ARN don't change. The child
 *             OUs and accounts remain in place, and any attached policies of the OU remain
 *             attached.</p>
 *          <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, UpdateOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, UpdateOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const input = { // UpdateOrganizationalUnitRequest
 *   OrganizationalUnitId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOrganizationalUnitResponse
 * //   OrganizationalUnit: { // OrganizationalUnit
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateOrganizationalUnitCommandInput - {@link UpdateOrganizationalUnitCommandInput}
 * @returns {@link UpdateOrganizationalUnitCommandOutput}
 * @see {@link UpdateOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationalUnitCommandOutput} for command's `response` shape.
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
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The target of the operation is currently being modified by a different request. Try
 *             again later.</p>
 *
 * @throws {@link DuplicateOrganizationalUnitException} (client fault)
 *  <p>An OU with the same name already exists.</p>
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
 * @throws {@link OrganizationalUnitNotFoundException} (client fault)
 *  <p>We can't find an OU with the <code>OrganizationalUnitId</code> that you
 *             specified.</p>
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
 * @public
 * @example To rename an organizational unit
 * ```javascript
 * // The following example shows how to rename an OU. The output confirms the new name:/n/n
 * const input = {
 *   "Name": "AccountingOU",
 *   "OrganizationalUnitId": "ou-examplerootid111-exampleouid111"
 * };
 * const command = new UpdateOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OrganizationalUnit": {
 *     "Arn": "arn:aws:organizations::111111111111:ou/o-exampleorgid/ou-examplerootid111-exampleouid111",
 *     "Id": "ou-examplerootid111-exampleouid111",
 *     "Name": "AccountingOU"
 *   }
 * }
 * *\/
 * // example id: to-rename-an-organizational-unit
 * ```
 *
 */
export class UpdateOrganizationalUnitCommand extends $Command
  .classBuilder<
    UpdateOrganizationalUnitCommandInput,
    UpdateOrganizationalUnitCommandOutput,
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
  .s("AWSOrganizationsV20161128", "UpdateOrganizationalUnit", {})
  .n("OrganizationsClient", "UpdateOrganizationalUnitCommand")
  .f(void 0, void 0)
  .ser(se_UpdateOrganizationalUnitCommand)
  .de(de_UpdateOrganizationalUnitCommand)
  .build() {}

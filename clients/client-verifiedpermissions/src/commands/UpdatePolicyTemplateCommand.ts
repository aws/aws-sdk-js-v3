// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdatePolicyTemplateInput,
  UpdatePolicyTemplateInputFilterSensitiveLog,
  UpdatePolicyTemplateOutput,
} from "../models/models_0";
import { de_UpdatePolicyTemplateCommand, se_UpdatePolicyTemplateCommand } from "../protocols/Aws_json1_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  VerifiedPermissionsClientResolvedConfig,
} from "../VerifiedPermissionsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePolicyTemplateCommand}.
 */
export interface UpdatePolicyTemplateCommandInput extends UpdatePolicyTemplateInput {}
/**
 * @public
 *
 * The output of {@link UpdatePolicyTemplateCommand}.
 */
export interface UpdatePolicyTemplateCommandOutput extends UpdatePolicyTemplateOutput, __MetadataBearer {}

/**
 * <p>Updates the specified policy template. You can update only the description and the some elements
 *             of the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_UpdatePolicyTemplate.html#amazonverifiedpermissions-UpdatePolicyTemplate-request-policyBody">policyBody</a>. </p>
 *          <important>
 *             <p>Changes you make to the policy template content are immediately (within the constraints of
 *                 eventual consistency) reflected in authorization decisions that involve all template-linked policies
 *                 instantiated from this template.</p>
 *          </important>
 *          <note>
 *             <p>Verified Permissions is <i>
 *                   <a href="https://wikipedia.org/wiki/Eventual_consistency">eventually consistent</a>
 *                </i>. It can take a few seconds for a new or changed element to propagate through
 *     the service and be visible in the results of other Verified Permissions operations.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, UpdatePolicyTemplateCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, UpdatePolicyTemplateCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // UpdatePolicyTemplateInput
 *   policyStoreId: "STRING_VALUE", // required
 *   policyTemplateId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   statement: "STRING_VALUE", // required
 * };
 * const command = new UpdatePolicyTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePolicyTemplateOutput
 * //   policyStoreId: "STRING_VALUE", // required
 * //   policyTemplateId: "STRING_VALUE", // required
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdatePolicyTemplateCommandInput - {@link UpdatePolicyTemplateCommandInput}
 * @returns {@link UpdatePolicyTemplateCommandOutput}
 * @see {@link UpdatePolicyTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdatePolicyTemplateCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request failed because another request to modify a resource occurred at the
 *             same.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request failed because it references a resource that doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of an internal error. Try your request again later</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because it exceeded a throttling quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because one or more input parameters don't satisfy their constraint
 *             requirements. The output is provided as a list of fields and a reason for each field that
 *             isn't valid.</p>
 *          <p>The possible reasons include the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>UnrecognizedEntityType</b>
 *                </p>
 *                <p>The policy includes an entity type that isn't found in the schema.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnrecognizedActionId</b>
 *                </p>
 *                <p>The policy includes an action id that isn't found in the schema.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>InvalidActionApplication</b>
 *                </p>
 *                <p>The policy includes an action that, according to the schema, doesn't support
 *                     the specified principal and resource.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnexpectedType</b>
 *                </p>
 *                <p>The policy included an operand that isn't a valid type for the specified
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>IncompatibleTypes</b>
 *                </p>
 *                <p>The types of elements included in a <code>set</code>, or the types of
 *                     expressions used in an <code>if...then...else</code> clause aren't compatible in
 *                     this context.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>MissingAttribute</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that isn't
 *                     specified in the schema. Test for the existence of the attribute first before
 *                     attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnsafeOptionalAttributeAccess</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that is optional
 *                     and isn't guaranteed to be present. Test for the existence of the attribute
 *                     first before attempting to access its value. For more information, see the
 *                         <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ImpossiblePolicy</b>
 *                </p>
 *                <p>Cedar has determined that a policy condition always evaluates to false. If
 *                     the policy is always false, it can never apply to any query, and so it can never
 *                     affect an authorization decision.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>WrongNumberArguments</b>
 *                </p>
 *                <p>The policy references an extension type with the wrong number of
 *                     arguments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FunctionArgumentValidationError</b>
 *                </p>
 *                <p>Cedar couldn't parse the argument passed to an extension type. For example,
 *                     a string that is to be parsed as an IPv4 address can contain only digits and the
 *                     period character.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link VerifiedPermissionsServiceException}
 * <p>Base exception class for all service exceptions from VerifiedPermissions service.</p>
 *
 *
 * @example UpdatePolicyTemplate
 * ```javascript
 * // The following example updates a policy template with both a new description and a new policy body. The effect, principal, and resource are the same as the original policy template. Only the action in the head, and the when and unless clauses can be different.
 *
 * Note
 * The JSON in the parameters of this operation are strings that can contain embedded quotation marks (") within the outermost quotation mark pair. This requires that you stringify the JSON object by preceding all embedded quotation marks with a backslash character ( \" ) and combining all lines into a single text line with no line breaks.
 *
 * Example strings might be displayed wrapped across multiple lines here for readability, but the operation requires the parameters be submitted as single line strings.
 * const input = {
 *   description: "My updated template description",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   policyTemplateId: "PTEXAMPLEabcdefg111111",
 *   statement: `"ResearchAccess"
 * permit(
 * principal in ?principal,
 * action == Action::"view",
 * resource in ?resource"
 * )
 * when {
 * principal has department && principal.department == "research"
 * };`
 * };
 * const command = new UpdatePolicyTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdDate: "2023-05-17T18:58:48.795411Z",
 *   lastUpdatedDate: "2023-05-17T19:18:48.870209Z",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   policyTemplateId: "PTEXAMPLEabcdefg111111"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdatePolicyTemplateCommand extends $Command
  .classBuilder<
    UpdatePolicyTemplateCommandInput,
    UpdatePolicyTemplateCommandOutput,
    VerifiedPermissionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VerifiedPermissionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VerifiedPermissions", "UpdatePolicyTemplate", {})
  .n("VerifiedPermissionsClient", "UpdatePolicyTemplateCommand")
  .f(UpdatePolicyTemplateInputFilterSensitiveLog, void 0)
  .ser(se_UpdatePolicyTemplateCommand)
  .de(de_UpdatePolicyTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePolicyTemplateInput;
      output: UpdatePolicyTemplateOutput;
    };
    sdk: {
      input: UpdatePolicyTemplateCommandInput;
      output: UpdatePolicyTemplateCommandOutput;
    };
  };
}

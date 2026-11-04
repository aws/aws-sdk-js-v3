// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPolicyTemplateInput, GetPolicyTemplateOutput } from "../models/models_0";
import { GetPolicyTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPolicyTemplateCommand}.
 */
export interface GetPolicyTemplateCommandInput extends GetPolicyTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetPolicyTemplateCommand}.
 */
export interface GetPolicyTemplateCommandOutput extends GetPolicyTemplateOutput, __MetadataBearer {}

/**
 * Retrieve the details for the specified policy template in the specified policy store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, GetPolicyTemplateCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, GetPolicyTemplateCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // GetPolicyTemplateInput
 *   policyStoreId: "STRING_VALUE", // required
 *   policyTemplateId: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyTemplateOutput
 * //   policyStoreId: "STRING_VALUE", // required
 * //   policyTemplateId: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   statement: "STRING_VALUE", // required
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * //   name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPolicyTemplateCommandInput - {@link GetPolicyTemplateCommandInput}
 * @returns {@link GetPolicyTemplateCommandOutput}
 * @see {@link GetPolicyTemplateCommandInput} for command's `input` shape.
 * @see {@link GetPolicyTemplateCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request failed because it references a resource that doesn't exist.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed because of an internal error. Try your request again later
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request failed because it exceeded a throttling quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because one or more input parameters don't satisfy their constraint requirements. The output is provided as a list of fields and a reason for each field that isn't valid.
 *
 * The possible reasons include the following:
 *
 * - **UnrecognizedEntityType**
 *
 *   The policy includes an entity type that isn't found in the schema.
 * - **UnrecognizedActionId**
 *
 *   The policy includes an action id that isn't found in the schema.
 * - **InvalidActionApplication**
 *
 *   The policy includes an action that, according to the schema, doesn't support the specified principal and resource.
 * - **UnexpectedType**
 *
 *   The policy included an operand that isn't a valid type for the specified operation.
 * - **IncompatibleTypes**
 *
 *   The types of elements included in a `set`, or the types of expressions used in an `if...then...else` clause aren't compatible in this context.
 * - **MissingAttribute**
 *
 *   The policy attempts to access a record or entity attribute that isn't specified in the schema. Test for the existence of the attribute first before attempting to access its value. For more information, see the [has (presence of attribute test) operator](https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test) in the *Cedar Policy Language Guide*.
 * - **UnsafeOptionalAttributeAccess**
 *
 *   The policy attempts to access a record or entity attribute that is optional and isn't guaranteed to be present. Test for the existence of the attribute first before attempting to access its value. For more information, see the [has (presence of attribute test) operator](https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test) in the *Cedar Policy Language Guide*.
 * - **ImpossiblePolicy**
 *
 *   Cedar has determined that a policy condition always evaluates to false. If the policy is always false, it can never apply to any query, and so it can never affect an authorization decision.
 * - **WrongNumberArguments**
 *
 *   The policy references an extension type with the wrong number of arguments.
 * - **FunctionArgumentValidationError**
 *
 *   Cedar couldn't parse the argument passed to an extension type. For example, a string that is to be parsed as an IPv4 address can contain only digits and the period character.
 *
 * @throws {@link VerifiedPermissionsServiceException}
 *
 * Base exception class for all service exceptions from VerifiedPermissions service.
 *
 * @example GetPolicyTemplate
 * ```javascript
 * // The following example displays the details of the specified policy template.
 * const input = {
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   policyTemplateId: "PTEXAMPLEabcdefg111111"
 * };
 * const command = new GetPolicyTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdDate: "2024-08-12T18:20:50.99Z",
 *   description: "Template for research dept",
 *   lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   policyTemplateId: "PTEXAMPLEabcdefg111111",
 *   statement: `permit(
 *   principal ?principal,
 *   action == Action::"view",
 *   resource in ?resource
 * ) when {
 *   principal has department && principal.department == "research"
 * };`
 * }
 * *\/
 * ```
 *
 * @example To retrieve a policy template by name
 * ```javascript
 * // The following example retrieves the details of a policy template using its name instead of its ID.
 * const input = {
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   policyTemplateId: "name/example-policy-template"
 * };
 * const command = new GetPolicyTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdDate: "2024-08-12T18:20:50.99Z",
 *   description: "Template for research dept",
 *   lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *   name: "name/example-policy-template",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   policyTemplateId: "PTEXAMPLEabcdefg111111",
 *   statement: `permit(
 *   principal ?principal,
 *   action == Action::"view",
 *   resource in ?resource
 * ) when {
 *   principal has department && principal.department == "research"
 * };`
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetPolicyTemplateCommand extends command<GetPolicyTemplateCommandInput, GetPolicyTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetPolicyTemplate",
  GetPolicyTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyTemplateInput;
      output: GetPolicyTemplateOutput;
    };
    sdk: {
      input: GetPolicyTemplateCommandInput;
      output: GetPolicyTemplateCommandOutput;
    };
  };
}

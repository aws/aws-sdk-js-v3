// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePolicyTemplateInput, CreatePolicyTemplateOutput } from "../models/models_0";
import { CreatePolicyTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePolicyTemplateCommand}.
 */
export interface CreatePolicyTemplateCommandInput extends CreatePolicyTemplateInput {}
/**
 * @public
 *
 * The output of {@link CreatePolicyTemplateCommand}.
 */
export interface CreatePolicyTemplateCommandOutput extends CreatePolicyTemplateOutput, __MetadataBearer {}

/**
 * Creates a policy template. A template can use placeholders for the principal and resource. A template must be instantiated into a policy by associating it with specific principals and resources to use for the placeholders. That instantiated policy can then be considered in authorization decisions. The instantiated policy works identically to any other policy, except that it is dynamically linked to the template. If the template changes, then any policies that are linked to that template are immediately updated as well.
 *
 * > **Note:** Verified Permissions is *[eventually consistent](https://wikipedia.org/wiki/Eventual_consistency)* . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, CreatePolicyTemplateCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, CreatePolicyTemplateCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // CreatePolicyTemplateInput
 *   clientToken: "STRING_VALUE",
 *   policyStoreId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   statement: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 * };
 * const command = new CreatePolicyTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicyTemplateOutput
 * //   policyStoreId: "STRING_VALUE", // required
 * //   policyTemplateId: "STRING_VALUE", // required
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreatePolicyTemplateCommandInput - {@link CreatePolicyTemplateCommandInput}
 * @returns {@link CreatePolicyTemplateCommandOutput}
 * @see {@link CreatePolicyTemplateCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyTemplateCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed because another request to modify a resource occurred at the same time.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request failed because it references a resource that doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request failed because it would cause a service quota to be exceeded.
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
 * @example To create a policy template
 * ```javascript
 * // The following example creates a policy template that has a placeholder for the principal.
 * const input = {
 *   clientToken: "a1b2c3d4-e5f6-a1b2-c3d4-TOKEN1111111",
 *   description: "Template for research dept",
 *   name: "name/example-policy-template",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   statement: `"AccessVacation"
 * permit(
 *     principal in ?principal,
 *     action == Action::"view",
 *     resource == Photo::"VacationPhoto94.jpg"
 * )
 * when {
 *     principal has department && principal.department == "research"
 * };`
 * };
 * const command = new CreatePolicyTemplateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdDate: "2024-08-12T18:20:50.99Z",
 *   lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   policyTemplateId: "PTEXAMPLEabcdefg111111"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreatePolicyTemplateCommand extends command<CreatePolicyTemplateCommandInput, CreatePolicyTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreatePolicyTemplate",
  CreatePolicyTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicyTemplateInput;
      output: CreatePolicyTemplateOutput;
    };
    sdk: {
      input: CreatePolicyTemplateCommandInput;
      output: CreatePolicyTemplateCommandOutput;
    };
  };
}

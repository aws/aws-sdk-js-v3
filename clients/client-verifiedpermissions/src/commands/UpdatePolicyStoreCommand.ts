// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePolicyStoreInput, UpdatePolicyStoreOutput } from "../models/models_0";
import { UpdatePolicyStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePolicyStoreCommand}.
 */
export interface UpdatePolicyStoreCommandInput extends UpdatePolicyStoreInput {}
/**
 * @public
 *
 * The output of {@link UpdatePolicyStoreCommand}.
 */
export interface UpdatePolicyStoreCommandOutput extends UpdatePolicyStoreOutput, __MetadataBearer {}

/**
 * Modifies the validation setting for a policy store.
 *
 * > **Note:** Verified Permissions is *[eventually consistent](https://wikipedia.org/wiki/Eventual_consistency)* . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, UpdatePolicyStoreCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, UpdatePolicyStoreCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // UpdatePolicyStoreInput
 *   policyStoreId: "STRING_VALUE", // required
 *   validationSettings: { // ValidationSettings
 *     mode: "OFF" || "STRICT", // required
 *   },
 *   deletionProtection: "ENABLED" || "DISABLED",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdatePolicyStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePolicyStoreOutput
 * //   policyStoreId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdatePolicyStoreCommandInput - {@link UpdatePolicyStoreCommandInput}
 * @returns {@link UpdatePolicyStoreCommandOutput}
 * @see {@link UpdatePolicyStoreCommandInput} for command's `input` shape.
 * @see {@link UpdatePolicyStoreCommandOutput} for command's `response` shape.
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
 * @example UpdatePolicyStore
 * ```javascript
 * // The following example turns off the validation settings for a policy store.
 * const input = {
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   validationSettings: {
 *     mode: "OFF"
 *   }
 * };
 * const command = new UpdatePolicyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:verifiedpermissions::123456789012:policy-store/C7v5xMplfFH3i3e4Jrzb1a",
 *   createdDate: "2023-05-17T18:36:10.134448Z",
 *   lastUpdatedDate: "2023-05-23T18:18:12.443083Z",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdatePolicyStoreCommand extends command<UpdatePolicyStoreCommandInput, UpdatePolicyStoreCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePolicyStore",
  UpdatePolicyStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePolicyStoreInput;
      output: UpdatePolicyStoreOutput;
    };
    sdk: {
      input: UpdatePolicyStoreCommandInput;
      output: UpdatePolicyStoreCommandOutput;
    };
  };
}

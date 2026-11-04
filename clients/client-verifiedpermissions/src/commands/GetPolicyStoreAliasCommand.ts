// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPolicyStoreAliasInput, GetPolicyStoreAliasOutput } from "../models/models_0";
import { GetPolicyStoreAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPolicyStoreAliasCommand}.
 */
export interface GetPolicyStoreAliasCommandInput extends GetPolicyStoreAliasInput {}
/**
 * @public
 *
 * The output of {@link GetPolicyStoreAliasCommand}.
 */
export interface GetPolicyStoreAliasCommandOutput extends GetPolicyStoreAliasOutput, __MetadataBearer {}

/**
 * Retrieves details about the specified policy store alias.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, GetPolicyStoreAliasCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, GetPolicyStoreAliasCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // GetPolicyStoreAliasInput
 *   aliasName: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyStoreAliasCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyStoreAliasOutput
 * //   aliasName: "STRING_VALUE", // required
 * //   policyStoreId: "STRING_VALUE", // required
 * //   aliasArn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   state: "Active" || "PendingDeletion", // required
 * // };
 *
 * ```
 *
 * @param GetPolicyStoreAliasCommandInput - {@link GetPolicyStoreAliasCommandInput}
 * @returns {@link GetPolicyStoreAliasCommandOutput}
 * @see {@link GetPolicyStoreAliasCommandInput} for command's `input` shape.
 * @see {@link GetPolicyStoreAliasCommandOutput} for command's `response` shape.
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
 * @example GetPolicyStoreAlias
 * ```javascript
 * // The following example retrieves details about the policy store alias with name example-policy-store.
 * const input = {
 *   aliasName: "policy-store-alias/example-policy-store"
 * };
 * const command = new GetPolicyStoreAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   aliasArn: "arn:aws:verifiedpermissions:us-east-1:123456789012:policy-store-alias/example-policy-store",
 *   aliasName: "policy-store-alias/example-policy-store",
 *   createdAt: "2024-01-15T12:30:00.52Z",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   state: "Active"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetPolicyStoreAliasCommand extends command<GetPolicyStoreAliasCommandInput, GetPolicyStoreAliasCommandOutput>(
  _ep0,
  _mw0,
  "GetPolicyStoreAlias",
  GetPolicyStoreAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyStoreAliasInput;
      output: GetPolicyStoreAliasOutput;
    };
    sdk: {
      input: GetPolicyStoreAliasCommandInput;
      output: GetPolicyStoreAliasCommandOutput;
    };
  };
}

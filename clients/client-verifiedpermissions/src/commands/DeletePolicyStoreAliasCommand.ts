// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePolicyStoreAliasInput, DeletePolicyStoreAliasOutput } from "../models/models_0";
import { DeletePolicyStoreAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePolicyStoreAliasCommand}.
 */
export interface DeletePolicyStoreAliasCommandInput extends DeletePolicyStoreAliasInput {}
/**
 * @public
 *
 * The output of {@link DeletePolicyStoreAliasCommand}.
 */
export interface DeletePolicyStoreAliasCommandOutput extends DeletePolicyStoreAliasOutput, __MetadataBearer {}

/**
 * Deletes the specified policy store alias.
 *
 * This operation is idempotent. If you specify a policy store alias that does not exist, the request response will still return a successful HTTP 200 status code.
 *
 * By default, when a policy store alias is deleted, it enters the `PendingDeletion` state. When a policy store alias is in the `PendingDeletion` state, new policy store aliases cannot be created with the same name. If the policy store alias is used in an API that has a `policyStoreId` field, the operation will fail with a `ResourceNotFound` exception.
 *
 * To immediately delete a policy store alias and bypass the `PendingDeletion` state, set the `deletionMode` parameter to `HardDelete`.
 *
 * > **Important:** Verified Permissions is eventually consistent. If you hard delete a policy store alias and then immediately recreate it to be associated with a different policy store, requests that reference this alias may continue to be evaluated against the previously associated policy store for a short period of time.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, DeletePolicyStoreAliasCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, DeletePolicyStoreAliasCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // DeletePolicyStoreAliasInput
 *   aliasName: "STRING_VALUE", // required
 *   deletionMode: "SoftDelete" || "HardDelete",
 * };
 * const command = new DeletePolicyStoreAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePolicyStoreAliasCommandInput - {@link DeletePolicyStoreAliasCommandInput}
 * @returns {@link DeletePolicyStoreAliasCommandOutput}
 * @see {@link DeletePolicyStoreAliasCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyStoreAliasCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * The policy store can't be deleted because deletion protection is enabled. To delete this policy store, disable deletion protection.
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
 * @example Soft delete a policy store alias
 * ```javascript
 * // The following example soft deletes the policy store alias with name example-policy-store. The alias enters the PendingDeletion state.
 * const input = {
 *   aliasName: "policy-store-alias/example-policy-store"
 * };
 * const command = new DeletePolicyStoreAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example Hard delete a policy store alias
 * ```javascript
 * // The following example hard deletes the policy store alias with name example-policy-store. The alias is immediately deleted, bypassing the PendingDeletion state.
 * const input = {
 *   aliasName: "policy-store-alias/example-policy-store",
 *   deletionMode: "HardDelete"
 * };
 * const command = new DeletePolicyStoreAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeletePolicyStoreAliasCommand extends command<DeletePolicyStoreAliasCommandInput, DeletePolicyStoreAliasCommandOutput>(
  _ep0,
  _mw0,
  "DeletePolicyStoreAlias",
  DeletePolicyStoreAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePolicyStoreAliasInput;
      output: {};
    };
    sdk: {
      input: DeletePolicyStoreAliasCommandInput;
      output: DeletePolicyStoreAliasCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePolicyStoreAliasInput, CreatePolicyStoreAliasOutput } from "../models/models_0";
import { CreatePolicyStoreAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePolicyStoreAliasCommand}.
 */
export interface CreatePolicyStoreAliasCommandInput extends CreatePolicyStoreAliasInput {}
/**
 * @public
 *
 * The output of {@link CreatePolicyStoreAliasCommand}.
 */
export interface CreatePolicyStoreAliasCommandOutput extends CreatePolicyStoreAliasOutput, __MetadataBearer {}

/**
 * Creates a policy store alias for the specified policy store. A policy store alias is an alternative identifier that you can use to reference a policy store in API operations.
 *
 * This operation is idempotent. If multiple CreatePolicyStoreAlias requests are made where the `aliasName` and `policyStoreId` fields are the same between the requests, subsequent requests will be ignored. For each duplicate CreatePolicyStoreAlias request, a Success response will be returned and a new policy store alias will not be created.
 *
 * > **Note:** Verified Permissions is *[eventually consistent](https://wikipedia.org/wiki/Eventual_consistency)* . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, CreatePolicyStoreAliasCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, CreatePolicyStoreAliasCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // CreatePolicyStoreAliasInput
 *   aliasName: "STRING_VALUE", // required
 *   policyStoreId: "STRING_VALUE", // required
 * };
 * const command = new CreatePolicyStoreAliasCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicyStoreAliasOutput
 * //   aliasName: "STRING_VALUE", // required
 * //   policyStoreId: "STRING_VALUE", // required
 * //   aliasArn: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreatePolicyStoreAliasCommandInput - {@link CreatePolicyStoreAliasCommandInput}
 * @returns {@link CreatePolicyStoreAliasCommandOutput}
 * @see {@link CreatePolicyStoreAliasCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyStoreAliasCommandOutput} for command's `response` shape.
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
 * @example CreatePolicyStoreAlias
 * ```javascript
 * // The following example creates a new policy store alias.
 * const input = {
 *   aliasName: "policy-store-alias/example-policy-store",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new CreatePolicyStoreAliasCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   aliasArn: "arn:aws:verifiedpermissions:us-east-1:123456789012:policy-store-alias/example-policy-store",
 *   aliasName: "policy-store-alias/example-policy-store",
 *   createdAt: "2024-01-15T12:30:00.52Z",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreatePolicyStoreAliasCommand extends command<CreatePolicyStoreAliasCommandInput, CreatePolicyStoreAliasCommandOutput>(
  _ep0,
  _mw0,
  "CreatePolicyStoreAlias",
  CreatePolicyStoreAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicyStoreAliasInput;
      output: CreatePolicyStoreAliasOutput;
    };
    sdk: {
      input: CreatePolicyStoreAliasCommandInput;
      output: CreatePolicyStoreAliasCommandOutput;
    };
  };
}

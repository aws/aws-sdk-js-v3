// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPolicyStoreInput, GetPolicyStoreOutput } from "../models/models_0";
import { GetPolicyStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPolicyStoreCommand}.
 */
export interface GetPolicyStoreCommandInput extends GetPolicyStoreInput {}
/**
 * @public
 *
 * The output of {@link GetPolicyStoreCommand}.
 */
export interface GetPolicyStoreCommandOutput extends GetPolicyStoreOutput, __MetadataBearer {}

/**
 * Retrieves details about a policy store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, GetPolicyStoreCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, GetPolicyStoreCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // GetPolicyStoreInput
 *   policyStoreId: "STRING_VALUE", // required
 *   tags: true || false,
 * };
 * const command = new GetPolicyStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyStoreOutput
 * //   policyStoreId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   validationSettings: { // ValidationSettings
 * //     mode: "OFF" || "STRICT", // required
 * //   },
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * //   deletionProtection: "ENABLED" || "DISABLED",
 * //   encryptionState: { // EncryptionState Union: only one key present
 * //     kmsEncryptionState: { // KmsEncryptionState
 * //       key: "STRING_VALUE", // required
 * //       encryptionContext: { // EncryptionContext // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     default: {},
 * //   },
 * //   cedarVersion: "CEDAR_2" || "CEDAR_4",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPolicyStoreCommandInput - {@link GetPolicyStoreCommandInput}
 * @returns {@link GetPolicyStoreCommandOutput}
 * @see {@link GetPolicyStoreCommandInput} for command's `input` shape.
 * @see {@link GetPolicyStoreCommandOutput} for command's `response` shape.
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
 * @example GetPolicyStore
 * ```javascript
 * // The following example retrieves details about the specified policy store.
 * const input = {
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new GetPolicyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:verifiedpermissions::123456789012:policy-store/C7v5xMplfFH3i3e4Jrzb1a",
 *   createdDate: "2024-08-12T18:20:50.99Z",
 *   encryptionState: {
 *     default:     { /* empty *\/ }
 *   },
 *   lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   validationSettings: {
 *     mode: "STRICT"
 *   }
 * }
 * *\/
 * ```
 *
 * @example GetPolicyStore that is encrypted
 * ```javascript
 * // The following example retrieves details about the specified encrypted policy store.
 * const input = {
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new GetPolicyStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:verifiedpermissions::123456789012:policy-store/C7v5xMplfFH3i3e4Jrzb1a",
 *   createdDate: "2024-08-12T18:20:50.99Z",
 *   encryptionState: {
 *     kmsEncryptionState: {
 *       encryptionContext: {
 *         policy_store_owner: "Tim"
 *       },
 *       key: "arn:aws:kms:us-east-1:123456789012:key/abcdefgh-ijkl-mnop-qrst-uvwxyz123456"
 *     }
 *   },
 *   lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   validationSettings: {
 *     mode: "STRICT"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetPolicyStoreCommand extends command<GetPolicyStoreCommandInput, GetPolicyStoreCommandOutput>(
  _ep0,
  _mw0,
  "GetPolicyStore",
  GetPolicyStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyStoreInput;
      output: GetPolicyStoreOutput;
    };
    sdk: {
      input: GetPolicyStoreCommandInput;
      output: GetPolicyStoreCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetPolicyInput, BatchGetPolicyOutput } from "../models/models_0";
import { BatchGetPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetPolicyCommand}.
 */
export interface BatchGetPolicyCommandInput extends BatchGetPolicyInput {}
/**
 * @public
 *
 * The output of {@link BatchGetPolicyCommand}.
 */
export interface BatchGetPolicyCommandOutput extends BatchGetPolicyOutput, __MetadataBearer {}

/**
 * Retrieves information about a group (batch) of policies.
 *
 * > **Note:** The `BatchGetPolicy` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `verifiedpermissions:GetPolicy` in their IAM policies.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, BatchGetPolicyCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, BatchGetPolicyCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // BatchGetPolicyInput
 *   requests: [ // BatchGetPolicyInputList // required
 *     { // BatchGetPolicyInputItem
 *       policyStoreId: "STRING_VALUE", // required
 *       policyId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetPolicyCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetPolicyOutput
 * //   results: [ // BatchGetPolicyOutputList // required
 * //     { // BatchGetPolicyOutputItem
 * //       policyStoreId: "STRING_VALUE", // required
 * //       policyId: "STRING_VALUE", // required
 * //       policyType: "STATIC" || "TEMPLATE_LINKED", // required
 * //       definition: { // PolicyDefinitionDetail Union: only one key present
 * //         static: { // StaticPolicyDefinitionDetail
 * //           description: "STRING_VALUE",
 * //           statement: "STRING_VALUE", // required
 * //         },
 * //         templateLinked: { // TemplateLinkedPolicyDefinitionDetail
 * //           policyTemplateId: "STRING_VALUE", // required
 * //           principal: { // EntityIdentifier
 * //             entityType: "STRING_VALUE", // required
 * //             entityId: "STRING_VALUE", // required
 * //           },
 * //           resource: {
 * //             entityType: "STRING_VALUE", // required
 * //             entityId: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //       createdDate: new Date("TIMESTAMP"), // required
 * //       lastUpdatedDate: new Date("TIMESTAMP"), // required
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // BatchGetPolicyErrorList // required
 * //     { // BatchGetPolicyErrorItem
 * //       code: "POLICY_STORE_NOT_FOUND" || "POLICY_NOT_FOUND" || "POLICY_STORE_ALIAS_NOT_FOUND", // required
 * //       policyStoreId: "STRING_VALUE", // required
 * //       policyId: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetPolicyCommandInput - {@link BatchGetPolicyCommandInput}
 * @returns {@link BatchGetPolicyCommandOutput}
 * @see {@link BatchGetPolicyCommandInput} for command's `input` shape.
 * @see {@link BatchGetPolicyCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
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
 * @example To retrieve details about a policy
 * ```javascript
 * // The following example retrieves information about the specified policy contained in the specified policy store. In this example, the requested policy is a template-linked policy, so it returns the ID of the policy template, and the specific principal and resource used by this policy.
 * const input = {
 *   requests: [
 *     {
 *       policyId: "PWv5M6d5HePx3gVVLKY1nK",
 *       policyStoreId: "ERZeDpRc34dkYZeb6FZRVC"
 *     },
 *     {
 *       policyId: "LzFn6KgLWvv4Mbegus35jn",
 *       policyStoreId: "ERZeDpRc34dkYZeb6FZRVC"
 *     },
 *     {
 *       policyId: "77gLjer8H5o3mvrnMGrSL5",
 *       policyStoreId: "ERZeDpRc34dkYZeb6FZRVC"
 *     }
 *   ]
 * };
 * const command = new BatchGetPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   errors:   [],
 *   results: [
 *     {
 *       createdDate: "2024-10-18T18:53:39.258153Z",
 *       definition: {
 *         static: {
 *           description: "Users can manage account resources in any account they own",
 *           statement: `permit (principal, action in PhotoFlash::Action::"ManageAccount",resource) when { resource in principal.Account };`
 *         }
 *       },
 *       lastUpdatedDate: "2024-10-18T18:53:39.258153Z",
 *       name: "name/example-policy",
 *       policyId: "PWv5M6d5HePx3gVVLKY1nK",
 *       policyStoreId: "ERZeDpRc34dkYZeb6FZRVC",
 *       policyType: "STATIC"
 *     },
 *     {
 *       createdDate: "2024-10-18T18:57:03.305027Z",
 *       definition: {
 *         static: {
 *           description: "User alice can't delete any photos.",
 *           statement: `forbid (principal == PhotoFlash::User::"alice", action in [PhotoFlash::Action::"DeletePhoto"], resource);`
 *         }
 *       },
 *       lastUpdatedDate: "2024-10-18T18:57:03.305027Z",
 *       name: "name/example-policy-2",
 *       policyId: "LzFn6KgLWvv4Mbegus35jn",
 *       policyStoreId: "ERZeDpRc34dkYZeb6FZRVC",
 *       policyType: "STATIC"
 *     },
 *     {
 *       createdDate: "2024-10-18T18:57:48.005343Z",
 *       definition: {
 *         static: {
 *           description: "User alice can view and delete photos.",
 *           statement: `permit (principal == PhotoFlash::User::"alice", action in [PhotoFlash::Action::"DeletePhoto", PhotoFlash::Action::"ViewPhoto"], resource);`
 *         }
 *       },
 *       lastUpdatedDate: "2024-10-18T18:57:48.005343Z",
 *       policyId: "77gLjer8H5o3mvrnMGrSL5",
 *       policyStoreId: "ERZeDpRc34dkYZeb6FZRVC",
 *       policyType: "STATIC"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To retrieve policies by name
 * ```javascript
 * // The following example retrieves information about policies using their names instead of their IDs.
 * const input = {
 *   requests: [
 *     {
 *       policyId: "name/example-policy",
 *       policyStoreId: "ERZeDpRc34dkYZeb6FZRVC"
 *     },
 *     {
 *       policyId: "name/example-policy-2",
 *       policyStoreId: "ERZeDpRc34dkYZeb6FZRVC"
 *     }
 *   ]
 * };
 * const command = new BatchGetPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   errors:   [],
 *   results: [
 *     {
 *       createdDate: "2024-10-18T18:53:39.258153Z",
 *       definition: {
 *         static: {
 *           description: "Users can manage account resources in any account they own",
 *           statement: `permit (principal, action in PhotoFlash::Action::"ManageAccount",resource) when { resource in principal.Account };`
 *         }
 *       },
 *       lastUpdatedDate: "2024-10-18T18:53:39.258153Z",
 *       name: "name/example-policy",
 *       policyId: "PWv5M6d5HePx3gVVLKY1nK",
 *       policyStoreId: "ERZeDpRc34dkYZeb6FZRVC",
 *       policyType: "STATIC"
 *     },
 *     {
 *       createdDate: "2024-10-18T18:57:03.305027Z",
 *       definition: {
 *         static: {
 *           description: "User alice can't delete any photos.",
 *           statement: `forbid (principal == PhotoFlash::User::"alice", action in [PhotoFlash::Action::"DeletePhoto"], resource);`
 *         }
 *       },
 *       lastUpdatedDate: "2024-10-18T18:57:03.305027Z",
 *       name: "name/example-policy-2",
 *       policyId: "LzFn6KgLWvv4Mbegus35jn",
 *       policyStoreId: "ERZeDpRc34dkYZeb6FZRVC",
 *       policyType: "STATIC"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetPolicyCommand extends command<BatchGetPolicyCommandInput, BatchGetPolicyCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetPolicy",
  BatchGetPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetPolicyInput;
      output: BatchGetPolicyOutput;
    };
    sdk: {
      input: BatchGetPolicyCommandInput;
      output: BatchGetPolicyCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPoliciesInput, ListPoliciesOutput } from "../models/models_0";
import { ListPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandInput extends ListPoliciesInput {}
/**
 * @public
 *
 * The output of {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandOutput extends ListPoliciesOutput, __MetadataBearer {}

/**
 * Returns a paginated list of all policies stored in the specified policy store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, ListPoliciesCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, ListPoliciesCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // ListPoliciesInput
 *   policyStoreId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filter: { // PolicyFilter
 *     principal: { // EntityReference Union: only one key present
 *       unspecified: true || false,
 *       identifier: { // EntityIdentifier
 *         entityType: "STRING_VALUE", // required
 *         entityId: "STRING_VALUE", // required
 *       },
 *     },
 *     resource: {//  Union: only one key present
 *       unspecified: true || false,
 *       identifier: {
 *         entityType: "STRING_VALUE", // required
 *         entityId: "STRING_VALUE", // required
 *       },
 *     },
 *     policyType: "STATIC" || "TEMPLATE_LINKED",
 *     policyTemplateId: "STRING_VALUE",
 *   },
 * };
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListPoliciesOutput
 * //   nextToken: "STRING_VALUE",
 * //   policies: [ // PolicyList // required
 * //     { // PolicyItem
 * //       policyStoreId: "STRING_VALUE", // required
 * //       policyId: "STRING_VALUE", // required
 * //       policyType: "STATIC" || "TEMPLATE_LINKED", // required
 * //       principal: { // EntityIdentifier
 * //         entityType: "STRING_VALUE", // required
 * //         entityId: "STRING_VALUE", // required
 * //       },
 * //       resource: {
 * //         entityType: "STRING_VALUE", // required
 * //         entityId: "STRING_VALUE", // required
 * //       },
 * //       actions: [ // ActionIdentifierList
 * //         { // ActionIdentifier
 * //           actionType: "STRING_VALUE", // required
 * //           actionId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       definition: { // PolicyDefinitionItem Union: only one key present
 * //         static: { // StaticPolicyDefinitionItem
 * //           description: "STRING_VALUE",
 * //         },
 * //         templateLinked: { // TemplateLinkedPolicyDefinitionItem
 * //           policyTemplateId: "STRING_VALUE", // required
 * //           principal: {
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
 * //       effect: "Permit" || "Forbid",
 * //       name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPoliciesCommandInput - {@link ListPoliciesCommandInput}
 * @returns {@link ListPoliciesCommandOutput}
 * @see {@link ListPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesCommandOutput} for command's `response` shape.
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
 * @example ListPolicies - Example 1
 * ```javascript
 * // The following example lists all policies in the policy store.
 * const input = {
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policies: [
 *     {
 *       createdDate: "2024-08-12T18:20:50.99Z",
 *       definition: {
 *         static: {
 *           description: "Grant members of janeFriends UserGroup access to the vacationFolder Album"
 *         }
 *       },
 *       lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *       name: "name/example-policy",
 *       policyId: "9wYxMpljbbZQb5fcZHyJhY",
 *       policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *       policyType: "STATIC",
 *       principal: {
 *         entityId: "janeFriends",
 *         entityType: "UserGroup"
 *       },
 *       resource: {
 *         entityId: "vacationFolder",
 *         entityType: "Album"
 *       }
 *     },
 *     {
 *       createdDate: "2024-08-12T18:20:50.99Z",
 *       definition: {
 *         static: {
 *           description: "Grant everyone access to the publicFolder Album"
 *         }
 *       },
 *       lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *       name: "name/example-policy-2",
 *       policyId: "Et9KxMplyaDdyurDw8TeFa",
 *       policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *       policyType: "STATIC",
 *       resource: {
 *         entityId: "publicFolder",
 *         entityType: "Album"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListPolicies - Example 2
 * ```javascript
 * // The following example lists all policies for a specified principal.
 * const input = {
 *   filter: {
 *     principal: {
 *       identifier: {
 *         entityId: "alice",
 *         entityType: "User"
 *       }
 *     }
 *   },
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policies: [
 *     {
 *       createdDate: "2022-12-09T22:55:16.067533Z",
 *       definition: {
 *         static: {
 *           description: "An example policy"
 *         }
 *       },
 *       lastUpdatedDate: "2022-12-09T22:55:16.067533Z",
 *       policyId: "Et9KxMplyaDdyurDw8TeFa",
 *       policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *       policyType: "STATIC",
 *       principal: {
 *         entityId: "alice",
 *         entityType: "User"
 *       },
 *       resource: {
 *         entityId: "bob_folder",
 *         entityType: "Album"
 *       }
 *     },
 *     {
 *       createdDate: "2022-12-09T23:00:24.66266Z",
 *       definition: {
 *         static:         { /* empty *\/ }
 *       },
 *       lastUpdatedDate: "2022-12-09T23:00:24.66266Z",
 *       policyId: "9wYxMpljbbZQb5fcZHyJhY",
 *       policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *       policyType: "STATIC",
 *       principal: {
 *         entityId: "alice",
 *         entityType: "User"
 *       },
 *       resource: {
 *         entityId: "alice_folder",
 *         entityType: "Album"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListPolicies - Example 3
 * ```javascript
 * // The following example uses the Filter parameter to list only the template-linked policies in the specified policy store.
 * const input = {
 *   filter: {
 *     policyType: "TEMPLATE_LINKED"
 *   },
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policies: [
 *     {
 *       createdDate: "2023-06-13T16:03:07.620867Z",
 *       definition: {
 *         templateLinked: {
 *           policyTemplateId: "PTEXAMPLEabcdefg111111",
 *           principal: {
 *             entityId: "alice",
 *             entityType: "User"
 *           },
 *           resource: {
 *             entityId: "pic.jpg",
 *             entityType: "Photo"
 *           }
 *         }
 *       },
 *       lastUpdatedDate: "2023-06-13T16:03:07.620867Z",
 *       policyId: "9wYxMpljbbZQb5fcZHyJhY",
 *       policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *       policyType: "TEMPLATE_LINKED",
 *       principal: {
 *         entityId: "alice",
 *         entityType: "User"
 *       },
 *       resource: {
 *         entityId: "pic.jpg",
 *         entityType: "Photo"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListPoliciesCommand extends command<ListPoliciesCommandInput, ListPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListPolicies",
  ListPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPoliciesInput;
      output: ListPoliciesOutput;
    };
    sdk: {
      input: ListPoliciesCommandInput;
      output: ListPoliciesCommandOutput;
    };
  };
}

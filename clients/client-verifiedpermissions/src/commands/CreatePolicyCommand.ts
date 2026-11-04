// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePolicyInput, CreatePolicyOutput } from "../models/models_0";
import { CreatePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePolicyCommand}.
 */
export interface CreatePolicyCommandInput extends CreatePolicyInput {}
/**
 * @public
 *
 * The output of {@link CreatePolicyCommand}.
 */
export interface CreatePolicyCommandOutput extends CreatePolicyOutput, __MetadataBearer {}

/**
 * Creates a Cedar policy and saves it in the specified policy store. You can create either a static policy or a policy linked to a policy template.
 *
 * - To create a static policy, provide the Cedar policy text in the `StaticPolicy` section of the `PolicyDefinition`.
 * - To create a policy that is dynamically linked to a policy template, specify the policy template ID and the principal and resource to associate with this policy in the `templateLinked` section of the `PolicyDefinition`. If the policy template is ever updated, any policies linked to the policy template automatically use the updated template.
 *
 * > **Note:** Creating a policy causes it to be validated against the schema in the policy store. If the policy doesn't pass validation, the operation fails and the policy isn't stored.
 *
 * > **Note:** Verified Permissions is *[eventually consistent](https://wikipedia.org/wiki/Eventual_consistency)* . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, CreatePolicyCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, CreatePolicyCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // CreatePolicyInput
 *   clientToken: "STRING_VALUE",
 *   policyStoreId: "STRING_VALUE", // required
 *   definition: { // PolicyDefinition Union: only one key present
 *     static: { // StaticPolicyDefinition
 *       description: "STRING_VALUE",
 *       statement: "STRING_VALUE", // required
 *     },
 *     templateLinked: { // TemplateLinkedPolicyDefinition
 *       policyTemplateId: "STRING_VALUE", // required
 *       principal: { // EntityIdentifier
 *         entityType: "STRING_VALUE", // required
 *         entityId: "STRING_VALUE", // required
 *       },
 *       resource: {
 *         entityType: "STRING_VALUE", // required
 *         entityId: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   name: "STRING_VALUE",
 * };
 * const command = new CreatePolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicyOutput
 * //   policyStoreId: "STRING_VALUE", // required
 * //   policyId: "STRING_VALUE", // required
 * //   policyType: "STATIC" || "TEMPLATE_LINKED", // required
 * //   principal: { // EntityIdentifier
 * //     entityType: "STRING_VALUE", // required
 * //     entityId: "STRING_VALUE", // required
 * //   },
 * //   resource: {
 * //     entityType: "STRING_VALUE", // required
 * //     entityId: "STRING_VALUE", // required
 * //   },
 * //   actions: [ // ActionIdentifierList
 * //     { // ActionIdentifier
 * //       actionType: "STRING_VALUE", // required
 * //       actionId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * //   effect: "Permit" || "Forbid",
 * // };
 *
 * ```
 *
 * @param CreatePolicyCommandInput - {@link CreatePolicyCommandInput}
 * @returns {@link CreatePolicyCommandOutput}
 * @see {@link CreatePolicyCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyCommandOutput} for command's `response` shape.
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
 * @example To create a static policy
 * ```javascript
 * // The following example request creates a static policy with a policy scope that specifies both a principal and a resource. The response includes both the Principal and Resource elements because both were specified in the request policy scope.
 * const input = {
 *   clientToken: "a1b2c3d4-e5f6-a1b2-c3d4-TOKEN1111111",
 *   definition: {
 *     static: {
 *       description: "Grant members of janeFriends UserGroup access to the vacationFolder Album",
 *       statement: `permit( principal in UserGroup::"janeFriends", action, resource in Album::"vacationFolder" );`
 *     }
 *   },
 *   name: "name/example-policy",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new CreatePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdDate: "2024-08-12T18:20:50.99Z",
 *   lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *   policyId: "9wYxMpljbbZQb5fcZHyJhY",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   policyType: "STATIC",
 *   principal: {
 *     entityId: "janeFriends",
 *     entityType: "UserGroup"
 *   },
 *   resource: {
 *     entityId: "vacationFolder",
 *     entityType: "Album"
 *   }
 * }
 * *\/
 * ```
 *
 * @example To create a template-linked policy
 * ```javascript
 * // The following example creates a template-linked policy using the specified policy template and associates the specified principal to use with the new template-linked policy.
 * const input = {
 *   clientToken: "a1b2c3d4-e5f6-a1b2-c3d4-TOKEN1111111",
 *   definition: {
 *     templateLinked: {
 *       policyTemplateId: "PTEXAMPLEabcdefg111111",
 *       principal: {
 *         entityId: "alice",
 *         entityType: "User"
 *       }
 *     }
 *   },
 *   name: "name/example-template-linked-policy",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new CreatePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdDate: "2024-08-12T18:20:50.99Z",
 *   lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *   policyId: "Et9KxMplyaDdyurDw8TeFa",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   policyType: "TEMPLATE_LINKED",
 *   principal: {
 *     entityId: "alice",
 *     entityType: "User"
 *   },
 *   resource: {
 *     entityId: "VacationPhoto94.jpg",
 *     entityType: "Photo"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreatePolicyCommand extends command<CreatePolicyCommandInput, CreatePolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreatePolicy",
  CreatePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicyInput;
      output: CreatePolicyOutput;
    };
    sdk: {
      input: CreatePolicyCommandInput;
      output: CreatePolicyCommandOutput;
    };
  };
}

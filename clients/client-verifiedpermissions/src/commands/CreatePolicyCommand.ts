// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreatePolicyInput,
  CreatePolicyInputFilterSensitiveLog,
  CreatePolicyOutput,
  CreatePolicyOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreatePolicyCommand, se_CreatePolicyCommand } from "../protocols/Aws_json1_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  VerifiedPermissionsClientResolvedConfig,
} from "../VerifiedPermissionsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a Cedar policy and saves it in the specified policy store. You can create either a static policy or a policy linked to a policy template.</p> <ul> <li> <p>To create a static policy, provide the Cedar policy text in the <code>StaticPolicy</code> section of the <code>PolicyDefinition</code>.</p> </li> <li> <p>To create a policy that is dynamically linked to a policy template, specify the policy template ID and the principal and resource to associate with this policy in the <code>templateLinked</code> section of the <code>PolicyDefinition</code>. If the policy template is ever updated, any policies linked to the policy template automatically use the updated template.</p> </li> </ul> <note> <p>Creating a policy causes it to be validated against the schema in the policy store. If the policy doesn't pass validation, the operation fails and the policy isn't stored.</p> </note> <note> <p>Verified Permissions is <i> <a href="https://wikipedia.org/wiki/Eventual_consistency">eventually consistent</a> </i>. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, CreatePolicyCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, CreatePolicyCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
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
 *  <p>The request failed because another request to modify a resource occurred at the same.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request failed because it references a resource that doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because it would cause a service quota to be exceeded.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of an internal error. Try your request again later</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because it exceeded a throttling quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because one or more input parameters don't satisfy their constraint requirements. The output is provided as a list of fields and a reason for each field that isn't valid.</p> <p>The possible reasons include the following:</p> <ul> <li> <p> <b>UnrecognizedEntityType</b> </p> <p>The policy includes an entity type that isn't found in the schema.</p> </li> <li> <p> <b>UnrecognizedActionId</b> </p> <p>The policy includes an action id that isn't found in the schema.</p> </li> <li> <p> <b>InvalidActionApplication</b> </p> <p>The policy includes an action that, according to the schema, doesn't support the specified principal and resource.</p> </li> <li> <p> <b>UnexpectedType</b> </p> <p>The policy included an operand that isn't a valid type for the specified operation.</p> </li> <li> <p> <b>IncompatibleTypes</b> </p> <p>The types of elements included in a <code>set</code>, or the types of expressions used in an <code>if...then...else</code> clause aren't compatible in this context.</p> </li> <li> <p> <b>MissingAttribute</b> </p> <p>The policy attempts to access a record or entity attribute that isn't specified in the schema. Test for the existence of the attribute first before attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the <i>Cedar Policy Language Guide</i>.</p> </li> <li> <p> <b>UnsafeOptionalAttributeAccess</b> </p> <p>The policy attempts to access a record or entity attribute that is optional and isn't guaranteed to be present. Test for the existence of the attribute first before attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the <i>Cedar Policy Language Guide</i>.</p> </li> <li> <p> <b>ImpossiblePolicy</b> </p> <p>Cedar has determined that a policy condition always evaluates to false. If the policy is always false, it can never apply to any query, and so it can never affect an authorization decision.</p> </li> <li> <p> <b>WrongNumberArguments</b> </p> <p>The policy references an extension type with the wrong number of arguments.</p> </li> <li> <p> <b>FunctionArgumentValidationError</b> </p> <p>Cedar couldn't parse the argument passed to an extension type. For example, a string that is to be parsed as an IPv4 address can contain only digits and the period character.</p> </li> </ul>
 *
 * @throws {@link VerifiedPermissionsServiceException}
 * <p>Base exception class for all service exceptions from VerifiedPermissions service.</p>
 *
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
export class CreatePolicyCommand extends $Command
  .classBuilder<
    CreatePolicyCommandInput,
    CreatePolicyCommandOutput,
    VerifiedPermissionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VerifiedPermissionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VerifiedPermissions", "CreatePolicy", {})
  .n("VerifiedPermissionsClient", "CreatePolicyCommand")
  .f(CreatePolicyInputFilterSensitiveLog, CreatePolicyOutputFilterSensitiveLog)
  .ser(se_CreatePolicyCommand)
  .de(de_CreatePolicyCommand)
  .build() {
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

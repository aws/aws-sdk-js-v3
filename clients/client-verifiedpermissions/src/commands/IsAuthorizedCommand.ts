// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { IsAuthorizedInput, IsAuthorizedOutput } from "../models/models_0";
import { IsAuthorized$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link IsAuthorizedCommand}.
 */
export interface IsAuthorizedCommandInput extends IsAuthorizedInput {}
/**
 * @public
 *
 * The output of {@link IsAuthorizedCommand}.
 */
export interface IsAuthorizedCommandOutput extends IsAuthorizedOutput, __MetadataBearer {}

/**
 * Makes an authorization decision about a service request described in the parameters. The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either `Allow` or `Deny`, along with a list of the policies that resulted in the decision.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, IsAuthorizedCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, IsAuthorizedCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // IsAuthorizedInput
 *   policyStoreId: "STRING_VALUE", // required
 *   principal: { // EntityIdentifier
 *     entityType: "STRING_VALUE", // required
 *     entityId: "STRING_VALUE", // required
 *   },
 *   action: { // ActionIdentifier
 *     actionType: "STRING_VALUE", // required
 *     actionId: "STRING_VALUE", // required
 *   },
 *   resource: {
 *     entityType: "STRING_VALUE", // required
 *     entityId: "STRING_VALUE", // required
 *   },
 *   context: { // ContextDefinition Union: only one key present
 *     contextMap: { // ContextMap
 *       "<keys>": { // AttributeValue Union: only one key present
 *         boolean: true || false,
 *         entityIdentifier: {
 *           entityType: "STRING_VALUE", // required
 *           entityId: "STRING_VALUE", // required
 *         },
 *         long: Number("long"),
 *         string: "STRING_VALUE",
 *         set: [ // SetAttribute
 *           {//  Union: only one key present
 *             boolean: true || false,
 *             entityIdentifier: "<EntityIdentifier>",
 *             long: Number("long"),
 *             string: "STRING_VALUE",
 *             set: [
 *               "<AttributeValue>",
 *             ],
 *             record: { // RecordAttribute
 *               "<keys>": "<AttributeValue>",
 *             },
 *             ipaddr: "STRING_VALUE",
 *             decimal: "STRING_VALUE",
 *             datetime: "STRING_VALUE",
 *             duration: "STRING_VALUE",
 *           },
 *         ],
 *         record: {
 *           "<keys>": "<AttributeValue>",
 *         },
 *         ipaddr: "STRING_VALUE",
 *         decimal: "STRING_VALUE",
 *         datetime: "STRING_VALUE",
 *         duration: "STRING_VALUE",
 *       },
 *     },
 *     cedarJson: "STRING_VALUE",
 *   },
 *   entities: { // EntitiesDefinition Union: only one key present
 *     entityList: [ // EntityList
 *       { // EntityItem
 *         identifier: "<EntityIdentifier>", // required
 *         attributes: { // EntityAttributes
 *           "<keys>": "<AttributeValue>",
 *         },
 *         parents: [ // ParentList
 *           "<EntityIdentifier>",
 *         ],
 *         tags: { // EntityCedarTags
 *           "<keys>": { // CedarTagValue Union: only one key present
 *             boolean: true || false,
 *             entityIdentifier: "<EntityIdentifier>",
 *             long: Number("long"),
 *             string: "STRING_VALUE",
 *             set: [ // CedarTagSetAttribute
 *               {//  Union: only one key present
 *                 boolean: true || false,
 *                 entityIdentifier: "<EntityIdentifier>",
 *                 long: Number("long"),
 *                 string: "STRING_VALUE",
 *                 set: [
 *                   "<CedarTagValue>",
 *                 ],
 *                 record: { // CedarTagRecordAttribute
 *                   "<keys>": "<CedarTagValue>",
 *                 },
 *                 ipaddr: "STRING_VALUE",
 *                 decimal: "STRING_VALUE",
 *                 datetime: "STRING_VALUE",
 *                 duration: "STRING_VALUE",
 *               },
 *             ],
 *             record: {
 *               "<keys>": "<CedarTagValue>",
 *             },
 *             ipaddr: "STRING_VALUE",
 *             decimal: "STRING_VALUE",
 *             datetime: "STRING_VALUE",
 *             duration: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *     cedarJson: "STRING_VALUE",
 *   },
 * };
 * const command = new IsAuthorizedCommand(input);
 * const response = await client.send(command);
 * // { // IsAuthorizedOutput
 * //   decision: "ALLOW" || "DENY", // required
 * //   determiningPolicies: [ // DeterminingPolicyList // required
 * //     { // DeterminingPolicyItem
 * //       policyId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   errors: [ // EvaluationErrorList // required
 * //     { // EvaluationErrorItem
 * //       errorDescription: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param IsAuthorizedCommandInput - {@link IsAuthorizedCommandInput}
 * @returns {@link IsAuthorizedCommandOutput}
 * @see {@link IsAuthorizedCommandInput} for command's `input` shape.
 * @see {@link IsAuthorizedCommandOutput} for command's `response` shape.
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
 * @example IsAuthorized - Example 1
 * ```javascript
 * // The following example requests an authorization decision for a principal of type User named Alice, who wants to perform the updatePhoto operation, on a resource of type Photo named VacationPhoto94.jpg.
 *
 * The response shows that the request was allowed by one policy.
 * const input = {
 *   action: {
 *     actionId: "updatePhoto",
 *     actionType: "Action"
 *   },
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   principal: {
 *     entityId: "alice",
 *     entityType: "User"
 *   },
 *   resource: {
 *     entityId: "VacationPhoto94.jpg",
 *     entityType: "Photo"
 *   }
 * };
 * const command = new IsAuthorizedCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   decision: "ALLOW",
 *   determiningPolicies: [
 *     {
 *       policyId: "9wYxMpljbbZQb5fcZHyJhY"
 *     }
 *   ],
 *   errors:   []
 * }
 * *\/
 * ```
 *
 * @example IsAuthorized - Example 2
 * ```javascript
 * // The following example is the same as the previous example, except that the principal is User::"bob", and the policy store doesn't contain any policy that allows that user access to Album::"alice_folder". The output infers that the Deny was implicit because the list of DeterminingPolicies is empty.
 * const input = {
 *   action: {
 *     actionId: "view",
 *     actionType: "Action"
 *   },
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   principal: {
 *     entityId: "bob",
 *     entityType: "User"
 *   },
 *   resource: {
 *     entityId: "VacationPhoto94.jpg",
 *     entityType: "Photo"
 *   }
 * };
 * const command = new IsAuthorizedCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   decision: "DENY",
 *   determiningPolicies:   [],
 *   errors:   []
 * }
 * *\/
 * ```
 *
 * @public
 */
export class IsAuthorizedCommand extends command<IsAuthorizedCommandInput, IsAuthorizedCommandOutput>(
  _ep0,
  _mw0,
  "IsAuthorized",
  IsAuthorized$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: IsAuthorizedInput;
      output: IsAuthorizedOutput;
    };
    sdk: {
      input: IsAuthorizedCommandInput;
      output: IsAuthorizedCommandOutput;
    };
  };
}

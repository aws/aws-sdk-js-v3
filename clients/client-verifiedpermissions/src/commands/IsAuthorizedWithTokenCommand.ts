// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IsAuthorizedWithTokenInput,
  IsAuthorizedWithTokenInputFilterSensitiveLog,
  IsAuthorizedWithTokenOutput,
  IsAuthorizedWithTokenOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_IsAuthorizedWithTokenCommand, se_IsAuthorizedWithTokenCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link IsAuthorizedWithTokenCommand}.
 */
export interface IsAuthorizedWithTokenCommandInput extends IsAuthorizedWithTokenInput {}
/**
 * @public
 *
 * The output of {@link IsAuthorizedWithTokenCommand}.
 */
export interface IsAuthorizedWithTokenCommandOutput extends IsAuthorizedWithTokenOutput, __MetadataBearer {}

/**
 * <p>Makes an authorization decision about a service request described in the parameters.
 *             The principal in this request comes from an external identity source in the form of an identity
 *             token formatted as a <a href="https://wikipedia.org/wiki/JSON_Web_Token">JSON web
 *                 token (JWT)</a>. The information in the parameters can also define additional
 *             context that Verified Permissions can include in the evaluation. The request is evaluated against all
 *             matching policies in the specified policy store. The result of the decision is either
 *                 <code>Allow</code> or <code>Deny</code>, along with a list of the policies that
 *             resulted in the decision.</p>
 *          <p>At this time, Verified Permissions accepts tokens from only Amazon Cognito.</p>
 *          <p>Verified Permissions validates each token that is specified in a request by checking its expiration
 *             date and its signature.</p>
 *          <important>
 *             <p>If you delete a Amazon Cognito user pool or user, tokens from that deleted pool or that deleted user continue to be usable until they expire.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, IsAuthorizedWithTokenCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, IsAuthorizedWithTokenCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // IsAuthorizedWithTokenInput
 *   policyStoreId: "STRING_VALUE", // required
 *   identityToken: "STRING_VALUE",
 *   accessToken: "STRING_VALUE",
 *   action: { // ActionIdentifier
 *     actionType: "STRING_VALUE", // required
 *     actionId: "STRING_VALUE", // required
 *   },
 *   resource: { // EntityIdentifier
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
 *           },
 *         ],
 *         record: {
 *           "<keys>": "<AttributeValue>",
 *         },
 *       },
 *     },
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
 *       },
 *     ],
 *   },
 * };
 * const command = new IsAuthorizedWithTokenCommand(input);
 * const response = await client.send(command);
 * // { // IsAuthorizedWithTokenOutput
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
 * //   principal: { // EntityIdentifier
 * //     entityType: "STRING_VALUE", // required
 * //     entityId: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param IsAuthorizedWithTokenCommandInput - {@link IsAuthorizedWithTokenCommandInput}
 * @returns {@link IsAuthorizedWithTokenCommandOutput}
 * @see {@link IsAuthorizedWithTokenCommandInput} for command's `input` shape.
 * @see {@link IsAuthorizedWithTokenCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request failed because it references a resource that doesn't exist.</p>
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
 *  <p>The request failed because one or more input parameters don't satisfy their constraint
 *             requirements. The output is provided as a list of fields and a reason for each field that
 *             isn't valid.</p>
 *          <p>The possible reasons include the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>UnrecognizedEntityType</b>
 *                </p>
 *                <p>The policy includes an entity type that isn't found in the schema.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnrecognizedActionId</b>
 *                </p>
 *                <p>The policy includes an action id that isn't found in the schema.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>InvalidActionApplication</b>
 *                </p>
 *                <p>The policy includes an action that, according to the schema, doesn't support
 *                     the specified principal and resource.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnexpectedType</b>
 *                </p>
 *                <p>The policy included an operand that isn't a valid type for the specified
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>IncompatibleTypes</b>
 *                </p>
 *                <p>The types of elements included in a <code>set</code>, or the types of
 *                     expressions used in an <code>if...then...else</code> clause aren't compatible in
 *                     this context.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>MissingAttribute</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that isn't
 *                     specified in the schema. Test for the existence of the attribute first before
 *                     attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>UnsafeOptionalAttributeAccess</b>
 *                </p>
 *                <p>The policy attempts to access a record or entity attribute that is optional
 *                     and isn't guaranteed to be present. Test for the existence of the attribute
 *                     first before attempting to access its value. For more information, see the
 *                         <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the
 *                         <i>Cedar Policy Language Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>ImpossiblePolicy</b>
 *                </p>
 *                <p>Cedar has determined that a policy condition always evaluates to false. If
 *                     the policy is always false, it can never apply to any query, and so it can never
 *                     affect an authorization decision.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>WrongNumberArguments</b>
 *                </p>
 *                <p>The policy references an extension type with the wrong number of
 *                     arguments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>FunctionArgumentValidationError</b>
 *                </p>
 *                <p>Cedar couldn't parse the argument passed to an extension type. For example,
 *                     a string that is to be parsed as an IPv4 address can contain only digits and the
 *                     period character.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link VerifiedPermissionsServiceException}
 * <p>Base exception class for all service exceptions from VerifiedPermissions service.</p>
 *
 * @public
 */
export class IsAuthorizedWithTokenCommand extends $Command
  .classBuilder<
    IsAuthorizedWithTokenCommandInput,
    IsAuthorizedWithTokenCommandOutput,
    VerifiedPermissionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: VerifiedPermissionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("VerifiedPermissions", "IsAuthorizedWithToken", {})
  .n("VerifiedPermissionsClient", "IsAuthorizedWithTokenCommand")
  .f(IsAuthorizedWithTokenInputFilterSensitiveLog, IsAuthorizedWithTokenOutputFilterSensitiveLog)
  .ser(se_IsAuthorizedWithTokenCommand)
  .de(de_IsAuthorizedWithTokenCommand)
  .build() {}

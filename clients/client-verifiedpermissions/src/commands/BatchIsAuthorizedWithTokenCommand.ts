// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchIsAuthorizedWithTokenInput,
  BatchIsAuthorizedWithTokenInputFilterSensitiveLog,
  BatchIsAuthorizedWithTokenOutput,
  BatchIsAuthorizedWithTokenOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_BatchIsAuthorizedWithTokenCommand, se_BatchIsAuthorizedWithTokenCommand } from "../protocols/Aws_json1_0";
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
 * The input for {@link BatchIsAuthorizedWithTokenCommand}.
 */
export interface BatchIsAuthorizedWithTokenCommandInput extends BatchIsAuthorizedWithTokenInput {}
/**
 * @public
 *
 * The output of {@link BatchIsAuthorizedWithTokenCommand}.
 */
export interface BatchIsAuthorizedWithTokenCommandOutput extends BatchIsAuthorizedWithTokenOutput, __MetadataBearer {}

/**
 * <p>Makes a series of decisions about multiple authorization requests for one token. The principal in this request comes from an external identity source in the form of an identity or access token, formatted as a <a href="https://wikipedia.org/wiki/JSON_Web_Token">JSON web token (JWT)</a>. The information in the parameters can also define additional context that Verified Permissions can include in the evaluations.</p> <p>The request is evaluated against all policies in the specified policy store that match the entities that you provide in the entities declaration and in the token. The result of the decisions is a series of <code>Allow</code> or <code>Deny</code> responses, along with the IDs of the policies that produced each decision.</p> <p>The <code>entities</code> of a <code>BatchIsAuthorizedWithToken</code> API request can contain up to 100 resources and up to 99 user groups. The <code>requests</code> of a <code>BatchIsAuthorizedWithToken</code> API request can contain up to 30 requests.</p> <note> <p>The <code>BatchIsAuthorizedWithToken</code> operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission <code>verifiedpermissions:IsAuthorizedWithToken</code> in their IAM policies.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, BatchIsAuthorizedWithTokenCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, BatchIsAuthorizedWithTokenCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // BatchIsAuthorizedWithTokenInput
 *   policyStoreId: "STRING_VALUE", // required
 *   identityToken: "STRING_VALUE",
 *   accessToken: "STRING_VALUE",
 *   entities: { // EntitiesDefinition Union: only one key present
 *     entityList: [ // EntityList
 *       { // EntityItem
 *         identifier: { // EntityIdentifier
 *           entityType: "STRING_VALUE", // required
 *           entityId: "STRING_VALUE", // required
 *         },
 *         attributes: { // EntityAttributes
 *           "<keys>": { // AttributeValue Union: only one key present
 *             boolean: true || false,
 *             entityIdentifier: {
 *               entityType: "STRING_VALUE", // required
 *               entityId: "STRING_VALUE", // required
 *             },
 *             long: Number("long"),
 *             string: "STRING_VALUE",
 *             set: [ // SetAttribute
 *               {//  Union: only one key present
 *                 boolean: true || false,
 *                 entityIdentifier: "<EntityIdentifier>",
 *                 long: Number("long"),
 *                 string: "STRING_VALUE",
 *                 set: [
 *                   "<AttributeValue>",
 *                 ],
 *                 record: { // RecordAttribute
 *                   "<keys>": "<AttributeValue>",
 *                 },
 *                 ipaddr: "STRING_VALUE",
 *                 decimal: "STRING_VALUE",
 *               },
 *             ],
 *             record: {
 *               "<keys>": "<AttributeValue>",
 *             },
 *             ipaddr: "STRING_VALUE",
 *             decimal: "STRING_VALUE",
 *           },
 *         },
 *         parents: [ // ParentList
 *           "<EntityIdentifier>",
 *         ],
 *       },
 *     ],
 *     cedarJson: "STRING_VALUE",
 *   },
 *   requests: [ // BatchIsAuthorizedWithTokenInputList // required
 *     { // BatchIsAuthorizedWithTokenInputItem
 *       action: { // ActionIdentifier
 *         actionType: "STRING_VALUE", // required
 *         actionId: "STRING_VALUE", // required
 *       },
 *       resource: "<EntityIdentifier>",
 *       context: { // ContextDefinition Union: only one key present
 *         contextMap: { // ContextMap
 *           "<keys>": "<AttributeValue>",
 *         },
 *         cedarJson: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchIsAuthorizedWithTokenCommand(input);
 * const response = await client.send(command);
 * // { // BatchIsAuthorizedWithTokenOutput
 * //   principal: { // EntityIdentifier
 * //     entityType: "STRING_VALUE", // required
 * //     entityId: "STRING_VALUE", // required
 * //   },
 * //   results: [ // BatchIsAuthorizedWithTokenOutputList // required
 * //     { // BatchIsAuthorizedWithTokenOutputItem
 * //       request: { // BatchIsAuthorizedWithTokenInputItem
 * //         action: { // ActionIdentifier
 * //           actionType: "STRING_VALUE", // required
 * //           actionId: "STRING_VALUE", // required
 * //         },
 * //         resource: {
 * //           entityType: "STRING_VALUE", // required
 * //           entityId: "STRING_VALUE", // required
 * //         },
 * //         context: { // ContextDefinition Union: only one key present
 * //           contextMap: { // ContextMap
 * //             "<keys>": { // AttributeValue Union: only one key present
 * //               boolean: true || false,
 * //               entityIdentifier: "<EntityIdentifier>",
 * //               long: Number("long"),
 * //               string: "STRING_VALUE",
 * //               set: [ // SetAttribute
 * //                 {//  Union: only one key present
 * //                   boolean: true || false,
 * //                   entityIdentifier: "<EntityIdentifier>",
 * //                   long: Number("long"),
 * //                   string: "STRING_VALUE",
 * //                   set: [
 * //                     "<AttributeValue>",
 * //                   ],
 * //                   record: { // RecordAttribute
 * //                     "<keys>": "<AttributeValue>",
 * //                   },
 * //                   ipaddr: "STRING_VALUE",
 * //                   decimal: "STRING_VALUE",
 * //                 },
 * //               ],
 * //               record: {
 * //                 "<keys>": "<AttributeValue>",
 * //               },
 * //               ipaddr: "STRING_VALUE",
 * //               decimal: "STRING_VALUE",
 * //             },
 * //           },
 * //           cedarJson: "STRING_VALUE",
 * //         },
 * //       },
 * //       decision: "ALLOW" || "DENY", // required
 * //       determiningPolicies: [ // DeterminingPolicyList // required
 * //         { // DeterminingPolicyItem
 * //           policyId: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       errors: [ // EvaluationErrorList // required
 * //         { // EvaluationErrorItem
 * //           errorDescription: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchIsAuthorizedWithTokenCommandInput - {@link BatchIsAuthorizedWithTokenCommandInput}
 * @returns {@link BatchIsAuthorizedWithTokenCommandOutput}
 * @see {@link BatchIsAuthorizedWithTokenCommandInput} for command's `input` shape.
 * @see {@link BatchIsAuthorizedWithTokenCommandOutput} for command's `response` shape.
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
 *  <p>The request failed because one or more input parameters don't satisfy their constraint requirements. The output is provided as a list of fields and a reason for each field that isn't valid.</p> <p>The possible reasons include the following:</p> <ul> <li> <p> <b>UnrecognizedEntityType</b> </p> <p>The policy includes an entity type that isn't found in the schema.</p> </li> <li> <p> <b>UnrecognizedActionId</b> </p> <p>The policy includes an action id that isn't found in the schema.</p> </li> <li> <p> <b>InvalidActionApplication</b> </p> <p>The policy includes an action that, according to the schema, doesn't support the specified principal and resource.</p> </li> <li> <p> <b>UnexpectedType</b> </p> <p>The policy included an operand that isn't a valid type for the specified operation.</p> </li> <li> <p> <b>IncompatibleTypes</b> </p> <p>The types of elements included in a <code>set</code>, or the types of expressions used in an <code>if...then...else</code> clause aren't compatible in this context.</p> </li> <li> <p> <b>MissingAttribute</b> </p> <p>The policy attempts to access a record or entity attribute that isn't specified in the schema. Test for the existence of the attribute first before attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the <i>Cedar Policy Language Guide</i>.</p> </li> <li> <p> <b>UnsafeOptionalAttributeAccess</b> </p> <p>The policy attempts to access a record or entity attribute that is optional and isn't guaranteed to be present. Test for the existence of the attribute first before attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the <i>Cedar Policy Language Guide</i>.</p> </li> <li> <p> <b>ImpossiblePolicy</b> </p> <p>Cedar has determined that a policy condition always evaluates to false. If the policy is always false, it can never apply to any query, and so it can never affect an authorization decision.</p> </li> <li> <p> <b>WrongNumberArguments</b> </p> <p>The policy references an extension type with the wrong number of arguments.</p> </li> <li> <p> <b>FunctionArgumentValidationError</b> </p> <p>Cedar couldn't parse the argument passed to an extension type. For example, a string that is to be parsed as an IPv4 address can contain only digits and the period character.</p> </li> </ul>
 *
 * @throws {@link VerifiedPermissionsServiceException}
 * <p>Base exception class for all service exceptions from VerifiedPermissions service.</p>
 *
 *
 * @example Batch - Example 1
 * ```javascript
 * // The following example requests three authorization decisions for two resources                     and two actions in different photo albums.
 * const input = {
 *   entities: {
 *     entityList: [
 *       {
 *         identifier: {
 *           entityId: "VacationPhoto94.jpg",
 *           entityType: "PhotoFlash::Photo"
 *         },
 *         parents: [
 *           {
 *             entityId: "MyExampleAlbum1",
 *             entityType: "PhotoFlash::Album"
 *           }
 *         ]
 *       },
 *       {
 *         identifier: {
 *           entityId: "OfficePhoto94.jpg",
 *           entityType: "PhotoFlash::Photo"
 *         },
 *         parents: [
 *           {
 *             entityId: "MyExampleAlbum2",
 *             entityType: "PhotoFlash::Album"
 *           }
 *         ]
 *       }
 *     ]
 *   },
 *   identityToken: "eyJra12345EXAMPLE",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   requests: [
 *     {
 *       action: {
 *         actionId: "ViewPhoto",
 *         actionType: "PhotoFlash::Action"
 *       },
 *       resource: {
 *         entityId: "VacationPhoto94.jpg",
 *         entityType: "PhotoFlash::Photo"
 *       }
 *     },
 *     {
 *       action: {
 *         actionId: "SharePhoto",
 *         actionType: "PhotoFlash::Action"
 *       },
 *       resource: {
 *         entityId: "VacationPhoto94.jpg",
 *         entityType: "PhotoFlash::Photo"
 *       }
 *     },
 *     {
 *       action: {
 *         actionId: "ViewPhoto",
 *         actionType: "PhotoFlash::Action"
 *       },
 *       resource: {
 *         entityId: "OfficePhoto94.jpg",
 *         entityType: "PhotoFlash::Photo"
 *       }
 *     }
 *   ]
 * };
 * const command = new BatchIsAuthorizedWithTokenCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   principal: {
 *     entityId: "us-east-1_EXAMPLE|a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *     entityType: "PhotoFlash::User"
 *   },
 *   results: [
 *     {
 *       decision: "ALLOW",
 *       determiningPolicies: [
 *         {
 *           policyId: "9wYixMplbbZQb5fcZHyJhY"
 *         }
 *       ],
 *       errors:       [],
 *       request: {
 *         action: {
 *           actionId: "ViewPhoto",
 *           actionType: "PhotoFlash::Action"
 *         },
 *         resource: {
 *           entityId: "VacationPhoto94.jpg",
 *           entityType: "PhotoFlash::Photo"
 *         }
 *       }
 *     },
 *     {
 *       decision: "ALLOW",
 *       determiningPolicies: [
 *         {
 *           policyId: "9wYixMplbbZQb5fcZHyJhY"
 *         }
 *       ],
 *       errors:       [],
 *       request: {
 *         action: {
 *           actionId: "SharePhoto",
 *           actionType: "PhotoFlash::Action"
 *         },
 *         resource: {
 *           entityId: "VacationPhoto94.jpg",
 *           entityType: "PhotoFlash::Photo"
 *         }
 *       }
 *     },
 *     {
 *       decision: "DENY",
 *       determiningPolicies:       [],
 *       errors:       [],
 *       request: {
 *         action: {
 *           actionId: "ViewPhoto",
 *           actionType: "PhotoFlash::Action"
 *         },
 *         resource: {
 *           entityId: "OfficePhoto94.jpg",
 *           entityType: "PhotoFlash::Photo"
 *         }
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchIsAuthorizedWithTokenCommand extends $Command
  .classBuilder<
    BatchIsAuthorizedWithTokenCommandInput,
    BatchIsAuthorizedWithTokenCommandOutput,
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
  .s("VerifiedPermissions", "BatchIsAuthorizedWithToken", {})
  .n("VerifiedPermissionsClient", "BatchIsAuthorizedWithTokenCommand")
  .f(BatchIsAuthorizedWithTokenInputFilterSensitiveLog, BatchIsAuthorizedWithTokenOutputFilterSensitiveLog)
  .ser(se_BatchIsAuthorizedWithTokenCommand)
  .de(de_BatchIsAuthorizedWithTokenCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchIsAuthorizedWithTokenInput;
      output: BatchIsAuthorizedWithTokenOutput;
    };
    sdk: {
      input: BatchIsAuthorizedWithTokenCommandInput;
      output: BatchIsAuthorizedWithTokenCommandOutput;
    };
  };
}

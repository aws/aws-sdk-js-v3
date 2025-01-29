// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { UpdateTrafficPolicyRequest, UpdateTrafficPolicyResponse } from "../models/models_0";
import { de_UpdateTrafficPolicyCommand, se_UpdateTrafficPolicyCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTrafficPolicyCommand}.
 */
export interface UpdateTrafficPolicyCommandInput extends UpdateTrafficPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrafficPolicyCommand}.
 */
export interface UpdateTrafficPolicyCommandOutput extends UpdateTrafficPolicyResponse, __MetadataBearer {}

/**
 * <p>Update attributes of an already provisioned traffic policy resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, UpdateTrafficPolicyCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, UpdateTrafficPolicyCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // UpdateTrafficPolicyRequest
 *   TrafficPolicyId: "STRING_VALUE", // required
 *   TrafficPolicyName: "STRING_VALUE",
 *   PolicyStatements: [ // PolicyStatementList
 *     { // PolicyStatement
 *       Conditions: [ // PolicyConditions // required
 *         { // PolicyCondition Union: only one key present
 *           StringExpression: { // IngressStringExpression
 *             Evaluate: { // IngressStringToEvaluate Union: only one key present
 *               Attribute: "RECIPIENT",
 *             },
 *             Operator: "EQUALS" || "NOT_EQUALS" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS", // required
 *             Values: [ // StringList // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *           IpExpression: { // IngressIpv4Expression
 *             Evaluate: { // IngressIpToEvaluate Union: only one key present
 *               Attribute: "SENDER_IP",
 *             },
 *             Operator: "CIDR_MATCHES" || "NOT_CIDR_MATCHES", // required
 *             Values: [ // Ipv4Cidrs // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *           TlsExpression: { // IngressTlsProtocolExpression
 *             Evaluate: { // IngressTlsProtocolToEvaluate Union: only one key present
 *               Attribute: "TLS_PROTOCOL",
 *             },
 *             Operator: "MINIMUM_TLS_VERSION" || "IS", // required
 *             Value: "TLS1_2" || "TLS1_3", // required
 *           },
 *           BooleanExpression: { // IngressBooleanExpression
 *             Evaluate: { // IngressBooleanToEvaluate Union: only one key present
 *               Analysis: { // IngressAnalysis
 *                 Analyzer: "STRING_VALUE", // required
 *                 ResultField: "STRING_VALUE", // required
 *               },
 *               IsInAddressList: { // IngressIsInAddressList
 *                 Attribute: "RECIPIENT", // required
 *                 AddressLists: [ // IngressAddressListArnList // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *             Operator: "IS_TRUE" || "IS_FALSE", // required
 *           },
 *         },
 *       ],
 *       Action: "ALLOW" || "DENY", // required
 *     },
 *   ],
 *   DefaultAction: "ALLOW" || "DENY",
 *   MaxMessageSizeBytes: Number("int"),
 * };
 * const command = new UpdateTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTrafficPolicyCommandInput - {@link UpdateTrafficPolicyCommandInput}
 * @returns {@link UpdateTrafficPolicyCommandOutput}
 * @see {@link UpdateTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 * @public
 */
export class UpdateTrafficPolicyCommand extends $Command
  .classBuilder<
    UpdateTrafficPolicyCommandInput,
    UpdateTrafficPolicyCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "UpdateTrafficPolicy", {})
  .n("MailManagerClient", "UpdateTrafficPolicyCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTrafficPolicyCommand)
  .de(de_UpdateTrafficPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTrafficPolicyRequest;
      output: {};
    };
    sdk: {
      input: UpdateTrafficPolicyCommandInput;
      output: UpdateTrafficPolicyCommandOutput;
    };
  };
}

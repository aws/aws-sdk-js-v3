// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import type { UpdateTrafficPolicyRequest, UpdateTrafficPolicyResponse } from "../models/models_0";
import { UpdateTrafficPolicy$ } from "../schemas/schemas_0";

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
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
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
 *               Analysis: { // IngressAnalysis
 *                 Analyzer: "STRING_VALUE", // required
 *                 ResultField: "STRING_VALUE", // required
 *               },
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
 *           Ipv6Expression: { // IngressIpv6Expression
 *             Evaluate: { // IngressIpv6ToEvaluate Union: only one key present
 *               Attribute: "SENDER_IPV6",
 *             },
 *             Operator: "CIDR_MATCHES" || "NOT_CIDR_MATCHES", // required
 *             Values: [ // Ipv6Cidrs // required
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
 *               Analysis: {
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
 *
 * @example Update TrafficPolicy with new Name
 * ```javascript
 * //
 * const input = {
 *   TrafficPolicyId: "tp-12345",
 *   TrafficPolicyName: "trafficPolicyNewName"
 * };
 * const command = new UpdateTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example Update TrafficPolicy with new PolicyStatements
 * ```javascript
 * //
 * const input = {
 *   PolicyStatements: [
 *     {
 *       Action: "ALLOW",
 *       Conditions: [
 *         {
 *           StringExpression: {
 *             Evaluate: {
 *               Attribute: "RECIPIENT"
 *             },
 *             Operator: "EQUALS",
 *             Values: [
 *               "example@amazon.com",
 *               "example@gmail.com"
 *             ]
 *           }
 *         }
 *       ]
 *     }
 *   ],
 *   TrafficPolicyId: "tp-12345"
 * };
 * const command = new UpdateTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example Update TrafficPolicy with new DefaultAction
 * ```javascript
 * //
 * const input = {
 *   DefaultAction: "ALLOW",
 *   TrafficPolicyId: "tp-12345"
 * };
 * const command = new UpdateTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "UpdateTrafficPolicy", {})
  .n("MailManagerClient", "UpdateTrafficPolicyCommand")
  .sc(UpdateTrafficPolicy$)
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

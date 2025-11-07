// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { CreateTrafficPolicyRequest, CreateTrafficPolicyResponse } from "../models/models_0";
import { CreateTrafficPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrafficPolicyCommand}.
 */
export interface CreateTrafficPolicyCommandInput extends CreateTrafficPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficPolicyCommand}.
 */
export interface CreateTrafficPolicyCommandOutput extends CreateTrafficPolicyResponse, __MetadataBearer {}

/**
 * <p>Provision a new traffic policy resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, CreateTrafficPolicyCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, CreateTrafficPolicyCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // CreateTrafficPolicyRequest
 *   ClientToken: "STRING_VALUE",
 *   TrafficPolicyName: "STRING_VALUE", // required
 *   PolicyStatements: [ // PolicyStatementList // required
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
 *   DefaultAction: "ALLOW" || "DENY", // required
 *   MaxMessageSizeBytes: Number("int"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficPolicyResponse
 * //   TrafficPolicyId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrafficPolicyCommandInput - {@link CreateTrafficPolicyCommandInput}
 * @returns {@link CreateTrafficPolicyCommandOutput}
 * @see {@link CreateTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Occurs when an operation exceeds a predefined service quota or limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @example Create TrafficPolicy
 * ```javascript
 * //
 * const input = {
 *   DefaultAction: "DENY",
 *   PolicyStatements: [
 *     {
 *       Action: "ALLOW",
 *       Conditions: [
 *         {
 *           IpExpression: {
 *             Evaluate: {
 *               Attribute: "SENDER_IP"
 *             },
 *             Operator: "CIDR_MATCHES",
 *             Values: [
 *               "0.0.0.0/12"
 *             ]
 *           }
 *         }
 *       ]
 *     }
 *   ],
 *   TrafficPolicyName: "trafficPolicyName"
 * };
 * const command = new CreateTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TrafficPolicyId: "tp-13245"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateTrafficPolicyCommand extends $Command
  .classBuilder<
    CreateTrafficPolicyCommandInput,
    CreateTrafficPolicyCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "CreateTrafficPolicy", {})
  .n("MailManagerClient", "CreateTrafficPolicyCommand")
  .sc(CreateTrafficPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrafficPolicyRequest;
      output: CreateTrafficPolicyResponse;
    };
    sdk: {
      input: CreateTrafficPolicyCommandInput;
      output: CreateTrafficPolicyCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { GetTrafficPolicyRequest, GetTrafficPolicyResponse } from "../models/models_0";
import { GetTrafficPolicy } from "../schemas/schemas_6_Traffic";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrafficPolicyCommand}.
 */
export interface GetTrafficPolicyCommandInput extends GetTrafficPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetTrafficPolicyCommand}.
 */
export interface GetTrafficPolicyCommandOutput extends GetTrafficPolicyResponse, __MetadataBearer {}

/**
 * <p>Fetch attributes of a traffic policy resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetTrafficPolicyCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetTrafficPolicyCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // import type { MailManagerClientConfig } from "@aws-sdk/client-mailmanager";
 * const config = {}; // type is MailManagerClientConfig
 * const client = new MailManagerClient(config);
 * const input = { // GetTrafficPolicyRequest
 *   TrafficPolicyId: "STRING_VALUE", // required
 * };
 * const command = new GetTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetTrafficPolicyResponse
 * //   TrafficPolicyName: "STRING_VALUE", // required
 * //   TrafficPolicyId: "STRING_VALUE", // required
 * //   TrafficPolicyArn: "STRING_VALUE",
 * //   PolicyStatements: [ // PolicyStatementList
 * //     { // PolicyStatement
 * //       Conditions: [ // PolicyConditions // required
 * //         { // PolicyCondition Union: only one key present
 * //           StringExpression: { // IngressStringExpression
 * //             Evaluate: { // IngressStringToEvaluate Union: only one key present
 * //               Attribute: "RECIPIENT",
 * //               Analysis: { // IngressAnalysis
 * //                 Analyzer: "STRING_VALUE", // required
 * //                 ResultField: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             Operator: "EQUALS" || "NOT_EQUALS" || "STARTS_WITH" || "ENDS_WITH" || "CONTAINS", // required
 * //             Values: [ // StringList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           IpExpression: { // IngressIpv4Expression
 * //             Evaluate: { // IngressIpToEvaluate Union: only one key present
 * //               Attribute: "SENDER_IP",
 * //             },
 * //             Operator: "CIDR_MATCHES" || "NOT_CIDR_MATCHES", // required
 * //             Values: [ // Ipv4Cidrs // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           Ipv6Expression: { // IngressIpv6Expression
 * //             Evaluate: { // IngressIpv6ToEvaluate Union: only one key present
 * //               Attribute: "SENDER_IPV6",
 * //             },
 * //             Operator: "CIDR_MATCHES" || "NOT_CIDR_MATCHES", // required
 * //             Values: [ // Ipv6Cidrs // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           TlsExpression: { // IngressTlsProtocolExpression
 * //             Evaluate: { // IngressTlsProtocolToEvaluate Union: only one key present
 * //               Attribute: "TLS_PROTOCOL",
 * //             },
 * //             Operator: "MINIMUM_TLS_VERSION" || "IS", // required
 * //             Value: "TLS1_2" || "TLS1_3", // required
 * //           },
 * //           BooleanExpression: { // IngressBooleanExpression
 * //             Evaluate: { // IngressBooleanToEvaluate Union: only one key present
 * //               Analysis: {
 * //                 Analyzer: "STRING_VALUE", // required
 * //                 ResultField: "STRING_VALUE", // required
 * //               },
 * //               IsInAddressList: { // IngressIsInAddressList
 * //                 Attribute: "RECIPIENT", // required
 * //                 AddressLists: [ // IngressAddressListArnList // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //             Operator: "IS_TRUE" || "IS_FALSE", // required
 * //           },
 * //         },
 * //       ],
 * //       Action: "ALLOW" || "DENY", // required
 * //     },
 * //   ],
 * //   MaxMessageSizeBytes: Number("int"),
 * //   DefaultAction: "ALLOW" || "DENY",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetTrafficPolicyCommandInput - {@link GetTrafficPolicyCommandInput}
 * @returns {@link GetTrafficPolicyCommandOutput}
 * @see {@link GetTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
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
 * @example Get TrafficPolicy
 * ```javascript
 * //
 * const input = {
 *   TrafficPolicyId: "tp-12345"
 * };
 * const command = new GetTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DefaultAction: "DENY",
 *   MaxMessageSizeBytes: 1000,
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
 *   TrafficPolicyArn: "arn:aws:ses:us-east-1:123456789012:mailmanager-traffic-policy/tp-12345",
 *   TrafficPolicyId: "tp-12345",
 *   TrafficPolicyName: "trafficPolicyName"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTrafficPolicyCommand extends $Command
  .classBuilder<
    GetTrafficPolicyCommandInput,
    GetTrafficPolicyCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MailManagerSvc", "GetTrafficPolicy", {})
  .n("MailManagerClient", "GetTrafficPolicyCommand")
  .sc(GetTrafficPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrafficPolicyRequest;
      output: GetTrafficPolicyResponse;
    };
    sdk: {
      input: GetTrafficPolicyCommandInput;
      output: GetTrafficPolicyCommandOutput;
    };
  };
}

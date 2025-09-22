// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTrafficPolicyRequest, CreateTrafficPolicyResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateTrafficPolicy } from "../schemas/schemas_14_Create";

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
 * <p>Creates a traffic policy, which you use to create multiple DNS resource record sets
 * 			for one domain name (such as example.com) or one subdomain name (such as
 * 			www.example.com).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateTrafficPolicyRequest
 *   Name: "STRING_VALUE", // required
 *   Document: "STRING_VALUE", // required
 *   Comment: "STRING_VALUE",
 * };
 * const command = new CreateTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficPolicyResponse
 * //   TrafficPolicy: { // TrafficPolicy
 * //     Id: "STRING_VALUE", // required
 * //     Version: Number("int"), // required
 * //     Name: "STRING_VALUE", // required
 * //     Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //     Document: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrafficPolicyCommandInput - {@link CreateTrafficPolicyCommandInput}
 * @returns {@link CreateTrafficPolicyCommandOutput}
 * @see {@link CreateTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidTrafficPolicyDocument} (client fault)
 *  <p>The format of the traffic policy document that you specified in the
 * 				<code>Document</code> element is not valid.</p>
 *
 * @throws {@link TooManyTrafficPolicies} (client fault)
 *  <p>This traffic policy can't be created because the current account has reached the limit
 * 			on the number of traffic policies.</p>
 *          <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>To get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. </p>
 *          <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a
 * 				case</a> with the Amazon Web Services Support Center.</p>
 *
 * @throws {@link TrafficPolicyAlreadyExists} (client fault)
 *  <p>A traffic policy that has the same value for <code>Name</code> already exists.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class CreateTrafficPolicyCommand extends $Command
  .classBuilder<
    CreateTrafficPolicyCommandInput,
    CreateTrafficPolicyCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "CreateTrafficPolicy", {})
  .n("Route53Client", "CreateTrafficPolicyCommand")
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

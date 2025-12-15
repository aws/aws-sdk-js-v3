// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTrafficPolicyRequest, GetTrafficPolicyResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetTrafficPolicy$ } from "../schemas/schemas_0";

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
 * <p>Gets information about a specific traffic policy version.</p>
 *          <p>For information about how of deleting a traffic policy affects the response from
 * 				<code>GetTrafficPolicy</code>, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // GetTrafficPolicyRequest
 *   Id: "STRING_VALUE", // required
 *   Version: Number("int"), // required
 * };
 * const command = new GetTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetTrafficPolicyResponse
 * //   TrafficPolicy: { // TrafficPolicy
 * //     Id: "STRING_VALUE", // required
 * //     Version: Number("int"), // required
 * //     Name: "STRING_VALUE", // required
 * //     Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //     Document: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrafficPolicyCommandInput - {@link GetTrafficPolicyCommandInput}
 * @returns {@link GetTrafficPolicyCommandOutput}
 * @see {@link GetTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicy} (client fault)
 *  <p>No traffic policy exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class GetTrafficPolicyCommand extends $Command
  .classBuilder<
    GetTrafficPolicyCommandInput,
    GetTrafficPolicyCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "GetTrafficPolicy", {})
  .n("Route53Client", "GetTrafficPolicyCommand")
  .sc(GetTrafficPolicy$)
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

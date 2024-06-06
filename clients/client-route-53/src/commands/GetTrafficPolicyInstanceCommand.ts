// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTrafficPolicyInstanceRequest, GetTrafficPolicyInstanceResponse } from "../models/models_0";
import { de_GetTrafficPolicyInstanceCommand, se_GetTrafficPolicyInstanceCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrafficPolicyInstanceCommand}.
 */
export interface GetTrafficPolicyInstanceCommandInput extends GetTrafficPolicyInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetTrafficPolicyInstanceCommand}.
 */
export interface GetTrafficPolicyInstanceCommandOutput extends GetTrafficPolicyInstanceResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specified traffic policy instance.</p>
 *          <note>
 *             <p>
 * 				Use <code>GetTrafficPolicyInstance</code> with the <code>id</code> of new traffic policy instance to confirm that the
 * 				<code>CreateTrafficPolicyInstance</code> or an <code>UpdateTrafficPolicyInstance</code> request completed successfully.
 * 				For more information, see the <code>State</code> response
 * 				element.</p>
 *          </note>
 *          <note>
 *             <p>In the Route 53 console, traffic policy instances are known as policy
 * 				records.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // GetTrafficPolicyInstanceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetTrafficPolicyInstanceResponse
 * //   TrafficPolicyInstance: { // TrafficPolicyInstance
 * //     Id: "STRING_VALUE", // required
 * //     HostedZoneId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     TTL: Number("long"), // required
 * //     State: "STRING_VALUE", // required
 * //     Message: "STRING_VALUE", // required
 * //     TrafficPolicyId: "STRING_VALUE", // required
 * //     TrafficPolicyVersion: Number("int"), // required
 * //     TrafficPolicyType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrafficPolicyInstanceCommandInput - {@link GetTrafficPolicyInstanceCommandInput}
 * @returns {@link GetTrafficPolicyInstanceCommandOutput}
 * @see {@link GetTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicyInstance} (client fault)
 *  <p>No traffic policy instance exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @public
 */
export class GetTrafficPolicyInstanceCommand extends $Command
  .classBuilder<
    GetTrafficPolicyInstanceCommandInput,
    GetTrafficPolicyInstanceCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "GetTrafficPolicyInstance", {})
  .n("Route53Client", "GetTrafficPolicyInstanceCommand")
  .f(void 0, void 0)
  .ser(se_GetTrafficPolicyInstanceCommand)
  .de(de_GetTrafficPolicyInstanceCommand)
  .build() {}

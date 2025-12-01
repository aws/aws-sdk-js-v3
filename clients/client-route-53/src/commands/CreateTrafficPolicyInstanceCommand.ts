// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateTrafficPolicyInstanceRequest, CreateTrafficPolicyInstanceResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { CreateTrafficPolicyInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrafficPolicyInstanceCommand}.
 */
export interface CreateTrafficPolicyInstanceCommandInput extends CreateTrafficPolicyInstanceRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficPolicyInstanceCommand}.
 */
export interface CreateTrafficPolicyInstanceCommandOutput
  extends CreateTrafficPolicyInstanceResponse,
    __MetadataBearer {}

/**
 * <p>Creates resource record sets in a specified hosted zone based on the settings in a
 * 			specified traffic policy version. In addition, <code>CreateTrafficPolicyInstance</code>
 * 			associates the resource record sets with a specified domain name (such as example.com)
 * 			or subdomain name (such as www.example.com). Amazon Route 53 responds to DNS queries for
 * 			the domain or subdomain name by using the resource record sets that
 * 				<code>CreateTrafficPolicyInstance</code> created.</p>
 *          <note>
 *             <p>After you submit an <code>CreateTrafficPolicyInstance</code> request, there's a
 * 				brief delay while Amazon Route 53 creates the resource record sets that are
 * 				specified in the traffic policy definition.
 * 				Use <code>GetTrafficPolicyInstance</code> with the <code>id</code> of new traffic policy instance to confirm that the <code>CreateTrafficPolicyInstance</code>
 * 				request completed successfully. For more information, see the
 * 				<code>State</code> response element.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // CreateTrafficPolicyInstanceRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   TTL: Number("long"), // required
 *   TrafficPolicyId: "STRING_VALUE", // required
 *   TrafficPolicyVersion: Number("int"), // required
 * };
 * const command = new CreateTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficPolicyInstanceResponse
 * //   TrafficPolicyInstance: { // TrafficPolicyInstance
 * //     Id: "STRING_VALUE", // required
 * //     HostedZoneId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     TTL: Number("long"), // required
 * //     State: "STRING_VALUE", // required
 * //     Message: "STRING_VALUE", // required
 * //     TrafficPolicyId: "STRING_VALUE", // required
 * //     TrafficPolicyVersion: Number("int"), // required
 * //     TrafficPolicyType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrafficPolicyInstanceCommandInput - {@link CreateTrafficPolicyInstanceCommandInput}
 * @returns {@link CreateTrafficPolicyInstanceCommandOutput}
 * @see {@link CreateTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link NoSuchTrafficPolicy} (client fault)
 *  <p>No traffic policy exists with the specified ID.</p>
 *
 * @throws {@link TooManyTrafficPolicyInstances} (client fault)
 *  <p>This traffic policy instance can't be created because the current account has reached
 * 			the limit on the number of traffic policy instances.</p>
 *          <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>For information about how to get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.</p>
 *          <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a
 * 				case</a> with the Amazon Web Services Support Center.</p>
 *
 * @throws {@link TrafficPolicyInstanceAlreadyExists} (client fault)
 *  <p>There is already a traffic policy instance with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class CreateTrafficPolicyInstanceCommand extends $Command
  .classBuilder<
    CreateTrafficPolicyInstanceCommandInput,
    CreateTrafficPolicyInstanceCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "CreateTrafficPolicyInstance", {})
  .n("Route53Client", "CreateTrafficPolicyInstanceCommand")
  .sc(CreateTrafficPolicyInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrafficPolicyInstanceRequest;
      output: CreateTrafficPolicyInstanceResponse;
    };
    sdk: {
      input: CreateTrafficPolicyInstanceCommandInput;
      output: CreateTrafficPolicyInstanceCommandOutput;
    };
  };
}

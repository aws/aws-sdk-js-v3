// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTrafficPolicyInstancesRequest, ListTrafficPolicyInstancesResponse } from "../models/models_0";
import { de_ListTrafficPolicyInstancesCommand, se_ListTrafficPolicyInstancesCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrafficPolicyInstancesCommand}.
 */
export interface ListTrafficPolicyInstancesCommandInput extends ListTrafficPolicyInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficPolicyInstancesCommand}.
 */
export interface ListTrafficPolicyInstancesCommandOutput extends ListTrafficPolicyInstancesResponse, __MetadataBearer {}

/**
 * <p>Gets information about the traffic policy instances that you created by using the
 * 			current Amazon Web Services account.</p>
 *          <note>
 *             <p>After you submit an <code>UpdateTrafficPolicyInstance</code> request, there's a
 * 				brief delay while Amazon Route 53 creates the resource record sets that are
 * 				specified in the traffic policy definition. For more information, see the
 * 					<code>State</code> response element.</p>
 *          </note>
 *          <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic
 * 			policy instances, you can use the <code>MaxItems</code> parameter to list them in groups
 * 			of up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyInstancesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyInstancesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ListTrafficPolicyInstancesRequest
 *   HostedZoneIdMarker: "STRING_VALUE",
 *   TrafficPolicyInstanceNameMarker: "STRING_VALUE",
 *   TrafficPolicyInstanceTypeMarker: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListTrafficPolicyInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficPolicyInstancesResponse
 * //   TrafficPolicyInstances: [ // TrafficPolicyInstances // required
 * //     { // TrafficPolicyInstance
 * //       Id: "STRING_VALUE", // required
 * //       HostedZoneId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       TTL: Number("long"), // required
 * //       State: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //       TrafficPolicyId: "STRING_VALUE", // required
 * //       TrafficPolicyVersion: Number("int"), // required
 * //       TrafficPolicyType: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //     },
 * //   ],
 * //   HostedZoneIdMarker: "STRING_VALUE",
 * //   TrafficPolicyInstanceNameMarker: "STRING_VALUE",
 * //   TrafficPolicyInstanceTypeMarker: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS",
 * //   IsTruncated: true || false, // required
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListTrafficPolicyInstancesCommandInput - {@link ListTrafficPolicyInstancesCommandInput}
 * @returns {@link ListTrafficPolicyInstancesCommandOutput}
 * @see {@link ListTrafficPolicyInstancesCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyInstancesCommandOutput} for command's `response` shape.
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
export class ListTrafficPolicyInstancesCommand extends $Command
  .classBuilder<
    ListTrafficPolicyInstancesCommandInput,
    ListTrafficPolicyInstancesCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDnsV20130401", "ListTrafficPolicyInstances", {})
  .n("Route53Client", "ListTrafficPolicyInstancesCommand")
  .f(void 0, void 0)
  .ser(se_ListTrafficPolicyInstancesCommand)
  .de(de_ListTrafficPolicyInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrafficPolicyInstancesRequest;
      output: ListTrafficPolicyInstancesResponse;
    };
    sdk: {
      input: ListTrafficPolicyInstancesCommandInput;
      output: ListTrafficPolicyInstancesCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTrafficPoliciesRequest, ListTrafficPoliciesResponse } from "../models/models_0";
import { de_ListTrafficPoliciesCommand, se_ListTrafficPoliciesCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrafficPoliciesCommand}.
 */
export interface ListTrafficPoliciesCommandInput extends ListTrafficPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficPoliciesCommand}.
 */
export interface ListTrafficPoliciesCommandOutput extends ListTrafficPoliciesResponse, __MetadataBearer {}

/**
 * <p>Gets information about the latest version for every traffic policy that is associated
 * 			with the current Amazon Web Services account. Policies are listed in the order that they
 * 			were created in. </p>
 *          <p>For information about how of deleting a traffic policy affects the response from
 * 				<code>ListTrafficPolicies</code>, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteTrafficPolicy.html">DeleteTrafficPolicy</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPoliciesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPoliciesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListTrafficPoliciesRequest
 *   TrafficPolicyIdMarker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListTrafficPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficPoliciesResponse
 * //   TrafficPolicySummaries: [ // TrafficPolicySummaries // required
 * //     { // TrafficPolicySummary
 * //       Id: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Type: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS", // required
 * //       LatestVersion: Number("int"), // required
 * //       TrafficPolicyCount: Number("int"), // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false, // required
 * //   TrafficPolicyIdMarker: "STRING_VALUE", // required
 * //   MaxItems: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param ListTrafficPoliciesCommandInput - {@link ListTrafficPoliciesCommandInput}
 * @returns {@link ListTrafficPoliciesCommandOutput}
 * @see {@link ListTrafficPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPoliciesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListTrafficPoliciesCommand extends $Command
  .classBuilder<
    ListTrafficPoliciesCommandInput,
    ListTrafficPoliciesCommandOutput,
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
  .s("AWSDnsV20130401", "ListTrafficPolicies", {})
  .n("Route53Client", "ListTrafficPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListTrafficPoliciesCommand)
  .de(de_ListTrafficPoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrafficPoliciesRequest;
      output: ListTrafficPoliciesResponse;
    };
    sdk: {
      input: ListTrafficPoliciesCommandInput;
      output: ListTrafficPoliciesCommandOutput;
    };
  };
}

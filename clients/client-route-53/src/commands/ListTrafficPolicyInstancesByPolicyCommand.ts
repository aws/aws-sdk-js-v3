// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type {
  ListTrafficPolicyInstancesByPolicyRequest,
  ListTrafficPolicyInstancesByPolicyResponse,
} from "../models/models_0";
import { ListTrafficPolicyInstancesByPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTrafficPolicyInstancesByPolicyCommand}.
 */
export interface ListTrafficPolicyInstancesByPolicyCommandInput extends ListTrafficPolicyInstancesByPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ListTrafficPolicyInstancesByPolicyCommand}.
 */
export interface ListTrafficPolicyInstancesByPolicyCommandOutput extends ListTrafficPolicyInstancesByPolicyResponse, __MetadataBearer {}

/**
 * <p>Gets information about the traffic policy instances that you created by using a
 * 			specify traffic policy version.</p>
 *          <note>
 *             <p>After you submit a <code>CreateTrafficPolicyInstance</code> or an
 * 					<code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while
 * 				Amazon Route 53 creates the resource record sets that are specified in the traffic
 * 				policy definition. For more information, see the <code>State</code> response
 * 				element.</p>
 *          </note>
 *          <p>Route 53 returns a maximum of 100 items in each response. If you have a lot of traffic
 * 			policy instances, you can use the <code>MaxItems</code> parameter to list them in groups
 * 			of up to 100.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListTrafficPolicyInstancesByPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListTrafficPolicyInstancesByPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // ListTrafficPolicyInstancesByPolicyRequest
 *   TrafficPolicyId: "STRING_VALUE", // required
 *   TrafficPolicyVersion: Number("int"), // required
 *   HostedZoneIdMarker: "STRING_VALUE",
 *   TrafficPolicyInstanceNameMarker: "STRING_VALUE",
 *   TrafficPolicyInstanceTypeMarker: "SOA" || "A" || "TXT" || "NS" || "CNAME" || "MX" || "NAPTR" || "PTR" || "SRV" || "SPF" || "AAAA" || "CAA" || "DS" || "TLSA" || "SSHFP" || "SVCB" || "HTTPS",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListTrafficPolicyInstancesByPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ListTrafficPolicyInstancesByPolicyResponse
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
 * @param ListTrafficPolicyInstancesByPolicyCommandInput - {@link ListTrafficPolicyInstancesByPolicyCommandInput}
 * @returns {@link ListTrafficPolicyInstancesByPolicyCommandOutput}
 * @see {@link ListTrafficPolicyInstancesByPolicyCommandInput} for command's `input` shape.
 * @see {@link ListTrafficPolicyInstancesByPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicy} (client fault)
 *  <p>No traffic policy exists with the specified ID.</p>
 *
 * @throws {@link NoSuchTrafficPolicyInstance} (client fault)
 *  <p>No traffic policy instance exists with the specified ID.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class ListTrafficPolicyInstancesByPolicyCommand extends command<ListTrafficPolicyInstancesByPolicyCommandInput, ListTrafficPolicyInstancesByPolicyCommandOutput>(
  _ep0,
  _mw2,
  "ListTrafficPolicyInstancesByPolicy",
  ListTrafficPolicyInstancesByPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrafficPolicyInstancesByPolicyRequest;
      output: ListTrafficPolicyInstancesByPolicyResponse;
    };
    sdk: {
      input: ListTrafficPolicyInstancesByPolicyCommandInput;
      output: ListTrafficPolicyInstancesByPolicyCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateTrafficPolicyInstanceRequest, UpdateTrafficPolicyInstanceResponse } from "../models/models_0";
import type { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateTrafficPolicyInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTrafficPolicyInstanceCommand}.
 */
export interface UpdateTrafficPolicyInstanceCommandInput extends UpdateTrafficPolicyInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrafficPolicyInstanceCommand}.
 */
export interface UpdateTrafficPolicyInstanceCommandOutput
  extends UpdateTrafficPolicyInstanceResponse,
    __MetadataBearer {}

/**
 * <note>
 *             <p>After you submit a <code>UpdateTrafficPolicyInstance</code> request, there's a brief delay while Route 53 creates the resource record sets
 * 			that are specified in the traffic policy definition. Use <code>GetTrafficPolicyInstance</code> with the <code>id</code> of updated traffic policy instance confirm
 * 			that the
 * 			<code>UpdateTrafficPolicyInstance</code> request completed successfully. For more information, see the <code>State</code> response element.</p>
 *          </note>
 *          <p>Updates the resource record sets in a specified hosted zone that were created based on
 * 			the settings in a specified traffic policy version.</p>
 *          <p>When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS
 * 			queries for the root resource record set name (such as example.com) while it replaces
 * 			one group of resource record sets with another. Route 53 performs the following
 * 			operations:</p>
 *          <ol>
 *             <li>
 *                <p>Route 53 creates a new group of resource record sets based on the specified
 * 					traffic policy. This is true regardless of how significant the differences are
 * 					between the existing resource record sets and the new resource record sets.
 * 				</p>
 *             </li>
 *             <li>
 *                <p>When all of the new resource record sets have been created, Route 53 starts to
 * 					respond to DNS queries for the root resource record set name (such as
 * 					example.com) by using the new resource record sets.</p>
 *             </li>
 *             <li>
 *                <p>Route 53 deletes the old group of resource record sets that are associated
 * 					with the root resource record set name.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // UpdateTrafficPolicyInstanceRequest
 *   Id: "STRING_VALUE", // required
 *   TTL: Number("long"), // required
 *   TrafficPolicyId: "STRING_VALUE", // required
 *   TrafficPolicyVersion: Number("int"), // required
 * };
 * const command = new UpdateTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTrafficPolicyInstanceResponse
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
 * // };
 *
 * ```
 *
 * @param UpdateTrafficPolicyInstanceCommandInput - {@link UpdateTrafficPolicyInstanceCommandInput}
 * @returns {@link UpdateTrafficPolicyInstanceCommandOutput}
 * @see {@link UpdateTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConflictingTypes} (client fault)
 *  <p>You tried to update a traffic policy instance by using a traffic policy version that
 * 			has a different DNS type than the current type for the instance. You specified the type
 * 			in the JSON document in the <code>CreateTrafficPolicy</code> or
 * 				<code>CreateTrafficPolicyVersion</code>request. </p>
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
 * @throws {@link PriorRequestNotComplete} (client fault)
 *  <p>If Amazon Route 53 can't process a request before the next request arrives, it will
 * 			reject subsequent requests for the same hosted zone and return an <code>HTTP 400
 * 				error</code> (<code>Bad request</code>). If Route 53 returns this error repeatedly
 * 			for the same request, we recommend that you wait, in intervals of increasing duration,
 * 			before you try the request again.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class UpdateTrafficPolicyInstanceCommand extends $Command
  .classBuilder<
    UpdateTrafficPolicyInstanceCommandInput,
    UpdateTrafficPolicyInstanceCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "UpdateTrafficPolicyInstance", {})
  .n("Route53Client", "UpdateTrafficPolicyInstanceCommand")
  .sc(UpdateTrafficPolicyInstance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTrafficPolicyInstanceRequest;
      output: UpdateTrafficPolicyInstanceResponse;
    };
    sdk: {
      input: UpdateTrafficPolicyInstanceCommandInput;
      output: UpdateTrafficPolicyInstanceCommandOutput;
    };
  };
}

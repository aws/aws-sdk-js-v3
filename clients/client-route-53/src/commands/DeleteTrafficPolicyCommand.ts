// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrafficPolicyRequest, DeleteTrafficPolicyResponse } from "../models/models_0";
import { de_DeleteTrafficPolicyCommand, se_DeleteTrafficPolicyCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrafficPolicyCommand}.
 */
export interface DeleteTrafficPolicyCommandInput extends DeleteTrafficPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrafficPolicyCommand}.
 */
export interface DeleteTrafficPolicyCommandOutput extends DeleteTrafficPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes a traffic policy.</p>
 *          <p>When you delete a traffic policy, Route 53 sets a flag on the policy to indicate that
 * 			it has been deleted. However, Route 53 never fully deletes the traffic policy. Note the
 * 			following:</p>
 *          <ul>
 *             <li>
 *                <p>Deleted traffic policies aren't listed if you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListTrafficPolicies.html">ListTrafficPolicies</a>.</p>
 *             </li>
 *             <li>
 *                <p> There's no way to get a list of deleted policies.</p>
 *             </li>
 *             <li>
 *                <p>If you retain the ID of the policy, you can get information about the policy,
 * 					including the traffic policy document, by running <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetTrafficPolicy.html">GetTrafficPolicy</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteTrafficPolicyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteTrafficPolicyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // DeleteTrafficPolicyRequest
 *   Id: "STRING_VALUE", // required
 *   Version: Number("int"), // required
 * };
 * const command = new DeleteTrafficPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrafficPolicyCommandInput - {@link DeleteTrafficPolicyCommandInput}
 * @returns {@link DeleteTrafficPolicyCommandOutput}
 * @see {@link DeleteTrafficPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficPolicyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchTrafficPolicy} (client fault)
 *  <p>No traffic policy exists with the specified ID.</p>
 *
 * @throws {@link TrafficPolicyInUse} (client fault)
 *  <p>One or more traffic policy instances were created by using the specified traffic
 * 			policy.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 *
 * @public
 */
export class DeleteTrafficPolicyCommand extends $Command
  .classBuilder<
    DeleteTrafficPolicyCommandInput,
    DeleteTrafficPolicyCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getIdNormalizerPlugin(config),
    ];
  })
  .s("AWSDnsV20130401", "DeleteTrafficPolicy", {})
  .n("Route53Client", "DeleteTrafficPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTrafficPolicyCommand)
  .de(de_DeleteTrafficPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrafficPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrafficPolicyCommandInput;
      output: DeleteTrafficPolicyCommandOutput;
    };
  };
}

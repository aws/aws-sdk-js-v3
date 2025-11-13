// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrafficPolicyInstanceRequest, DeleteTrafficPolicyInstanceResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteTrafficPolicyInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTrafficPolicyInstanceCommand}.
 */
export interface DeleteTrafficPolicyInstanceCommandInput extends DeleteTrafficPolicyInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrafficPolicyInstanceCommand}.
 */
export interface DeleteTrafficPolicyInstanceCommandOutput
  extends DeleteTrafficPolicyInstanceResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a traffic policy instance and all of the resource record sets that Amazon
 * 			Route 53 created when you created the instance.</p>
 *          <note>
 *             <p>In the Route 53 console, traffic policy instances are known as policy
 * 				records.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = { // DeleteTrafficPolicyInstanceRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrafficPolicyInstanceCommandInput - {@link DeleteTrafficPolicyInstanceCommandInput}
 * @returns {@link DeleteTrafficPolicyInstanceCommandOutput}
 * @see {@link DeleteTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
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
export class DeleteTrafficPolicyInstanceCommand extends $Command
  .classBuilder<
    DeleteTrafficPolicyInstanceCommandInput,
    DeleteTrafficPolicyInstanceCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getIdNormalizerPlugin(config)];
  })
  .s("AWSDnsV20130401", "DeleteTrafficPolicyInstance", {})
  .n("Route53Client", "DeleteTrafficPolicyInstanceCommand")
  .sc(DeleteTrafficPolicyInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrafficPolicyInstanceRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrafficPolicyInstanceCommandInput;
      output: DeleteTrafficPolicyInstanceCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTrafficPolicyInstanceRequest, DeleteTrafficPolicyInstanceResponse } from "../models/models_0";
import { de_DeleteTrafficPolicyInstanceCommand, se_DeleteTrafficPolicyInstanceCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

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
  .s("AWSDnsV20130401", "DeleteTrafficPolicyInstance", {})
  .n("Route53Client", "DeleteTrafficPolicyInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTrafficPolicyInstanceCommand)
  .de(de_DeleteTrafficPolicyInstanceCommand)
  .build() {}

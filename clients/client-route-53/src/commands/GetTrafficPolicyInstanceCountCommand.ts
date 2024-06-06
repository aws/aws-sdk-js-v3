// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTrafficPolicyInstanceCountRequest, GetTrafficPolicyInstanceCountResponse } from "../models/models_0";
import {
  de_GetTrafficPolicyInstanceCountCommand,
  se_GetTrafficPolicyInstanceCountCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrafficPolicyInstanceCountCommand}.
 */
export interface GetTrafficPolicyInstanceCountCommandInput extends GetTrafficPolicyInstanceCountRequest {}
/**
 * @public
 *
 * The output of {@link GetTrafficPolicyInstanceCountCommand}.
 */
export interface GetTrafficPolicyInstanceCountCommandOutput
  extends GetTrafficPolicyInstanceCountResponse,
    __MetadataBearer {}

/**
 * <p>Gets the number of traffic policy instances that are associated with the current
 * 				Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetTrafficPolicyInstanceCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetTrafficPolicyInstanceCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = {};
 * const command = new GetTrafficPolicyInstanceCountCommand(input);
 * const response = await client.send(command);
 * // { // GetTrafficPolicyInstanceCountResponse
 * //   TrafficPolicyInstanceCount: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetTrafficPolicyInstanceCountCommandInput - {@link GetTrafficPolicyInstanceCountCommandInput}
 * @returns {@link GetTrafficPolicyInstanceCountCommandOutput}
 * @see {@link GetTrafficPolicyInstanceCountCommandInput} for command's `input` shape.
 * @see {@link GetTrafficPolicyInstanceCountCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 * @public
 */
export class GetTrafficPolicyInstanceCountCommand extends $Command
  .classBuilder<
    GetTrafficPolicyInstanceCountCommandInput,
    GetTrafficPolicyInstanceCountCommandOutput,
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
    ];
  })
  .s("AWSDnsV20130401", "GetTrafficPolicyInstanceCount", {})
  .n("Route53Client", "GetTrafficPolicyInstanceCountCommand")
  .f(void 0, void 0)
  .ser(se_GetTrafficPolicyInstanceCountCommand)
  .de(de_GetTrafficPolicyInstanceCountCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetHostedZoneCountRequest, GetHostedZoneCountResponse } from "../models/models_0";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHostedZoneCount } from "../schemas/schemas_22_GetHostedZoneCount";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHostedZoneCountCommand}.
 */
export interface GetHostedZoneCountCommandInput extends GetHostedZoneCountRequest {}
/**
 * @public
 *
 * The output of {@link GetHostedZoneCountCommand}.
 */
export interface GetHostedZoneCountCommandOutput extends GetHostedZoneCountResponse, __MetadataBearer {}

/**
 * <p>Retrieves the number of hosted zones that are associated with the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneCountCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneCountCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * // import type { Route53ClientConfig } from "@aws-sdk/client-route-53";
 * const config = {}; // type is Route53ClientConfig
 * const client = new Route53Client(config);
 * const input = {};
 * const command = new GetHostedZoneCountCommand(input);
 * const response = await client.send(command);
 * // { // GetHostedZoneCountResponse
 * //   HostedZoneCount: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetHostedZoneCountCommandInput - {@link GetHostedZoneCountCommandInput}
 * @returns {@link GetHostedZoneCountCommandOutput}
 * @see {@link GetHostedZoneCountCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneCountCommandOutput} for command's `response` shape.
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
export class GetHostedZoneCountCommand extends $Command
  .classBuilder<
    GetHostedZoneCountCommandInput,
    GetHostedZoneCountCommandOutput,
    Route53ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDnsV20130401", "GetHostedZoneCount", {})
  .n("Route53Client", "GetHostedZoneCountCommand")
  .sc(GetHostedZoneCount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetHostedZoneCountResponse;
    };
    sdk: {
      input: GetHostedZoneCountCommandInput;
      output: GetHostedZoneCountCommandOutput;
    };
  };
}

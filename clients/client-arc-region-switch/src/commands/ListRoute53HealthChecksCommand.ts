// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCRegionSwitchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRoute53HealthChecksRequest, ListRoute53HealthChecksResponse } from "../models/models_0";
import { de_ListRoute53HealthChecksCommand, se_ListRoute53HealthChecksCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRoute53HealthChecksCommand}.
 */
export interface ListRoute53HealthChecksCommandInput extends ListRoute53HealthChecksRequest {}
/**
 * @public
 *
 * The output of {@link ListRoute53HealthChecksCommand}.
 */
export interface ListRoute53HealthChecksCommandOutput extends ListRoute53HealthChecksResponse, __MetadataBearer {}

/**
 * <p>List the Amazon Route 53 health checks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, ListRoute53HealthChecksCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, ListRoute53HealthChecksCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // ListRoute53HealthChecksRequest
 *   arn: "STRING_VALUE", // required
 *   hostedZoneId: "STRING_VALUE",
 *   recordName: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRoute53HealthChecksCommand(input);
 * const response = await client.send(command);
 * // { // ListRoute53HealthChecksResponse
 * //   healthChecks: [ // Route53HealthCheckList
 * //     { // Route53HealthCheck
 * //       hostedZoneId: "STRING_VALUE", // required
 * //       recordName: "STRING_VALUE", // required
 * //       healthCheckId: "STRING_VALUE",
 * //       region: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoute53HealthChecksCommandInput - {@link ListRoute53HealthChecksCommandInput}
 * @returns {@link ListRoute53HealthChecksCommandOutput}
 * @see {@link ListRoute53HealthChecksCommandInput} for command's `input` shape.
 * @see {@link ListRoute53HealthChecksCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p>HTTP Status Code: 403</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p> <p>HTTP Status Code: 500</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p> <p>HTTP Status Code: 404</p>
 *
 * @throws {@link ARCRegionSwitchServiceException}
 * <p>Base exception class for all service exceptions from ARCRegionSwitch service.</p>
 *
 *
 * @public
 */
export class ListRoute53HealthChecksCommand extends $Command
  .classBuilder<
    ListRoute53HealthChecksCommandInput,
    ListRoute53HealthChecksCommandOutput,
    ARCRegionSwitchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    UseControlPlaneEndpoint: { type: "staticContextParams", value: true },
  })
  .m(function (this: any, Command: any, cs: any, config: ARCRegionSwitchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ArcRegionSwitch", "ListRoute53HealthChecks", {})
  .n("ARCRegionSwitchClient", "ListRoute53HealthChecksCommand")
  .f(void 0, void 0)
  .ser(se_ListRoute53HealthChecksCommand)
  .de(de_ListRoute53HealthChecksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoute53HealthChecksRequest;
      output: ListRoute53HealthChecksResponse;
    };
    sdk: {
      input: ListRoute53HealthChecksCommandInput;
      output: ListRoute53HealthChecksCommandOutput;
    };
  };
}

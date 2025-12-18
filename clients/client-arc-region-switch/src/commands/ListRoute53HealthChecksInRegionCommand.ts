// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ARCRegionSwitchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ARCRegionSwitchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListRoute53HealthChecksInRegionRequest,
  ListRoute53HealthChecksInRegionResponse,
} from "../models/models_0";
import { ListRoute53HealthChecksInRegion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRoute53HealthChecksInRegionCommand}.
 */
export interface ListRoute53HealthChecksInRegionCommandInput extends ListRoute53HealthChecksInRegionRequest {}
/**
 * @public
 *
 * The output of {@link ListRoute53HealthChecksInRegionCommand}.
 */
export interface ListRoute53HealthChecksInRegionCommandOutput
  extends ListRoute53HealthChecksInRegionResponse,
    __MetadataBearer {}

/**
 * <p>List the Amazon Route 53 health checks in a specific Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, ListRoute53HealthChecksInRegionCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, ListRoute53HealthChecksInRegionCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // ListRoute53HealthChecksInRegionRequest
 *   arn: "STRING_VALUE", // required
 *   hostedZoneId: "STRING_VALUE",
 *   recordName: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRoute53HealthChecksInRegionCommand(input);
 * const response = await client.send(command);
 * // { // ListRoute53HealthChecksInRegionResponse
 * //   healthChecks: [ // Route53HealthCheckList
 * //     { // Route53HealthCheck
 * //       hostedZoneId: "STRING_VALUE", // required
 * //       recordName: "STRING_VALUE", // required
 * //       healthCheckId: "STRING_VALUE",
 * //       status: "healthy" || "unhealthy" || "unknown",
 * //       region: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoute53HealthChecksInRegionCommandInput - {@link ListRoute53HealthChecksInRegionCommandInput}
 * @returns {@link ListRoute53HealthChecksInRegionCommandOutput}
 * @see {@link ListRoute53HealthChecksInRegionCommandInput} for command's `input` shape.
 * @see {@link ListRoute53HealthChecksInRegionCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p>HTTP Status Code: 403</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>The request processing has an invalid argument.</p>
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
 * @example Example ListRoute53HealthChecksInRegion
 * ```javascript
 * //
 * const input = {
 *   arn: "arn:aws:arc-region-switch::123456789012:plan/example:000000",
 *   hostedZoneId: "Z0123456789ABCDEFGHI",
 *   maxResults: 10,
 *   nextToken: "eyJNYXJrZXIiOiBudWxsLCAiYm90b190cnVuY2F0ZV9hbW91bnQiOiAxfQ",
 *   recordName: "my.record.name"
 * };
 * const command = new ListRoute53HealthChecksInRegionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   healthChecks: [
 *     {
 *       healthCheckId: "01234567-8901-abcd-efgh-ijklmnop0123",
 *       hostedZoneId: "Z0123456789ABCDEFGHI",
 *       recordName: "my.record.name",
 *       region: "us-west-2",
 *       status: "healthy"
 *     },
 *     {
 *       healthCheckId: "zyxwvuts-rqpo-9876-5432-10nmlkji0123",
 *       hostedZoneId: "Z0123456789ABCDEFGHI",
 *       recordName: "my.record.name",
 *       region: "us-east-1",
 *       status: "healthy"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRoute53HealthChecksInRegionCommand extends $Command
  .classBuilder<
    ListRoute53HealthChecksInRegionCommandInput,
    ListRoute53HealthChecksInRegionCommandOutput,
    ARCRegionSwitchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCRegionSwitchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ArcRegionSwitch", "ListRoute53HealthChecksInRegion", {})
  .n("ARCRegionSwitchClient", "ListRoute53HealthChecksInRegionCommand")
  .sc(ListRoute53HealthChecksInRegion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoute53HealthChecksInRegionRequest;
      output: ListRoute53HealthChecksInRegionResponse;
    };
    sdk: {
      input: ListRoute53HealthChecksInRegionCommandInput;
      output: ListRoute53HealthChecksInRegionCommandOutput;
    };
  };
}

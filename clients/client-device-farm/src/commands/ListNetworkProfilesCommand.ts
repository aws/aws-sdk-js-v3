// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListNetworkProfilesRequest, ListNetworkProfilesResult } from "../models/models_0";
import { ListNetworkProfiles } from "../schemas/schemas_11_Network";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNetworkProfilesCommand}.
 */
export interface ListNetworkProfilesCommandInput extends ListNetworkProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkProfilesCommand}.
 */
export interface ListNetworkProfilesCommandOutput extends ListNetworkProfilesResult, __MetadataBearer {}

/**
 * <p>Returns the list of available network profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListNetworkProfilesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListNetworkProfilesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // ListNetworkProfilesRequest
 *   arn: "STRING_VALUE", // required
 *   type: "CURATED" || "PRIVATE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListNetworkProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkProfilesResult
 * //   networkProfiles: [ // NetworkProfiles
 * //     { // NetworkProfile
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       type: "CURATED" || "PRIVATE",
 * //       uplinkBandwidthBits: Number("long"),
 * //       downlinkBandwidthBits: Number("long"),
 * //       uplinkDelayMs: Number("long"),
 * //       downlinkDelayMs: Number("long"),
 * //       uplinkJitterMs: Number("long"),
 * //       downlinkJitterMs: Number("long"),
 * //       uplinkLossPercent: Number("int"),
 * //       downlinkLossPercent: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkProfilesCommandInput - {@link ListNetworkProfilesCommandInput}
 * @returns {@link ListNetworkProfilesCommandOutput}
 * @see {@link ListNetworkProfilesCommandInput} for command's `input` shape.
 * @see {@link ListNetworkProfilesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @public
 */
export class ListNetworkProfilesCommand extends $Command
  .classBuilder<
    ListNetworkProfilesCommandInput,
    ListNetworkProfilesCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "ListNetworkProfiles", {})
  .n("DeviceFarmClient", "ListNetworkProfilesCommand")
  .sc(ListNetworkProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkProfilesRequest;
      output: ListNetworkProfilesResult;
    };
    sdk: {
      input: ListNetworkProfilesCommandInput;
      output: ListNetworkProfilesCommandOutput;
    };
  };
}

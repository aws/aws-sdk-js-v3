// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateNetworkProfileRequest, UpdateNetworkProfileResult } from "../models/models_0";
import { UpdateNetworkProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNetworkProfileCommand}.
 */
export interface UpdateNetworkProfileCommandInput extends UpdateNetworkProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateNetworkProfileCommand}.
 */
export interface UpdateNetworkProfileCommandOutput extends UpdateNetworkProfileResult, __MetadataBearer {}

/**
 * <p>Updates the network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateNetworkProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateNetworkProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // UpdateNetworkProfileRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   type: "CURATED" || "PRIVATE",
 *   uplinkBandwidthBits: Number("long"),
 *   downlinkBandwidthBits: Number("long"),
 *   uplinkDelayMs: Number("long"),
 *   downlinkDelayMs: Number("long"),
 *   uplinkJitterMs: Number("long"),
 *   downlinkJitterMs: Number("long"),
 *   uplinkLossPercent: Number("int"),
 *   downlinkLossPercent: Number("int"),
 * };
 * const command = new UpdateNetworkProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNetworkProfileResult
 * //   networkProfile: { // NetworkProfile
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     type: "CURATED" || "PRIVATE",
 * //     uplinkBandwidthBits: Number("long"),
 * //     downlinkBandwidthBits: Number("long"),
 * //     uplinkDelayMs: Number("long"),
 * //     downlinkDelayMs: Number("long"),
 * //     uplinkJitterMs: Number("long"),
 * //     downlinkJitterMs: Number("long"),
 * //     uplinkLossPercent: Number("int"),
 * //     downlinkLossPercent: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateNetworkProfileCommandInput - {@link UpdateNetworkProfileCommandInput}
 * @returns {@link UpdateNetworkProfileCommandOutput}
 * @see {@link UpdateNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateNetworkProfileCommandOutput} for command's `response` shape.
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
export class UpdateNetworkProfileCommand extends $Command
  .classBuilder<
    UpdateNetworkProfileCommandInput,
    UpdateNetworkProfileCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "UpdateNetworkProfile", {})
  .n("DeviceFarmClient", "UpdateNetworkProfileCommand")
  .sc(UpdateNetworkProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNetworkProfileRequest;
      output: UpdateNetworkProfileResult;
    };
    sdk: {
      input: UpdateNetworkProfileCommandInput;
      output: UpdateNetworkProfileCommandOutput;
    };
  };
}

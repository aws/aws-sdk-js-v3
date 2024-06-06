// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNetworkProfileRequest, CreateNetworkProfileResult } from "../models/models_0";
import { de_CreateNetworkProfileCommand, se_CreateNetworkProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkProfileCommand}.
 */
export interface CreateNetworkProfileCommandInput extends CreateNetworkProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkProfileCommand}.
 */
export interface CreateNetworkProfileCommandOutput extends CreateNetworkProfileResult, __MetadataBearer {}

/**
 * <p>Creates a network profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateNetworkProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateNetworkProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateNetworkProfileRequest
 *   projectArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
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
 * const command = new CreateNetworkProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkProfileResult
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
 * @param CreateNetworkProfileCommandInput - {@link CreateNetworkProfileCommandInput}
 * @returns {@link CreateNetworkProfileCommandOutput}
 * @see {@link CreateNetworkProfileCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkProfileCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateNetworkProfileCommand extends $Command
  .classBuilder<
    CreateNetworkProfileCommandInput,
    CreateNetworkProfileCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "CreateNetworkProfile", {})
  .n("DeviceFarmClient", "CreateNetworkProfileCommand")
  .f(void 0, void 0)
  .ser(se_CreateNetworkProfileCommand)
  .de(de_CreateNetworkProfileCommand)
  .build() {}

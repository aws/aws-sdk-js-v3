// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDeviceInstanceRequest, UpdateDeviceInstanceResult } from "../models/models_0";
import { UpdateDeviceInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeviceInstanceCommand}.
 */
export interface UpdateDeviceInstanceCommandInput extends UpdateDeviceInstanceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeviceInstanceCommand}.
 */
export interface UpdateDeviceInstanceCommandOutput extends UpdateDeviceInstanceResult, __MetadataBearer {}

/**
 * <p>Updates information about a private device instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateDeviceInstanceCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateDeviceInstanceCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // UpdateDeviceInstanceRequest
 *   arn: "STRING_VALUE", // required
 *   profileArn: "STRING_VALUE",
 *   labels: [ // InstanceLabels
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateDeviceInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDeviceInstanceResult
 * //   deviceInstance: { // DeviceInstance
 * //     arn: "STRING_VALUE",
 * //     deviceArn: "STRING_VALUE",
 * //     labels: [ // InstanceLabels
 * //       "STRING_VALUE",
 * //     ],
 * //     status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //     udid: "STRING_VALUE",
 * //     instanceProfile: { // InstanceProfile
 * //       arn: "STRING_VALUE",
 * //       packageCleanup: true || false,
 * //       excludeAppPackagesFromCleanup: [ // PackageIds
 * //         "STRING_VALUE",
 * //       ],
 * //       rebootAfterUse: true || false,
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDeviceInstanceCommandInput - {@link UpdateDeviceInstanceCommandInput}
 * @returns {@link UpdateDeviceInstanceCommandOutput}
 * @see {@link UpdateDeviceInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceInstanceCommandOutput} for command's `response` shape.
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
export class UpdateDeviceInstanceCommand extends $Command
  .classBuilder<
    UpdateDeviceInstanceCommandInput,
    UpdateDeviceInstanceCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "UpdateDeviceInstance", {})
  .n("DeviceFarmClient", "UpdateDeviceInstanceCommand")
  .sc(UpdateDeviceInstance$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeviceInstanceRequest;
      output: UpdateDeviceInstanceResult;
    };
    sdk: {
      input: UpdateDeviceInstanceCommandInput;
      output: UpdateDeviceInstanceCommandOutput;
    };
  };
}

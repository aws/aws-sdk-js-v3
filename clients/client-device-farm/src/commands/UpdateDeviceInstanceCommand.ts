// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDeviceInstanceRequest, UpdateDeviceInstanceResult } from "../models/models_0";
import { de_UpdateDeviceInstanceCommand, se_UpdateDeviceInstanceCommand } from "../protocols/Aws_json1_1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "UpdateDeviceInstance", {})
  .n("DeviceFarmClient", "UpdateDeviceInstanceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDeviceInstanceCommand)
  .de(de_UpdateDeviceInstanceCommand)
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

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeviceInstanceRequest, GetDeviceInstanceResult } from "../models/models_0";
import { de_GetDeviceInstanceCommand, se_GetDeviceInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceInstanceCommand}.
 */
export interface GetDeviceInstanceCommandInput extends GetDeviceInstanceRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceInstanceCommand}.
 */
export interface GetDeviceInstanceCommandOutput extends GetDeviceInstanceResult, __MetadataBearer {}

/**
 * <p>Returns information about a device instance that belongs to a private device fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDeviceInstanceCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDeviceInstanceCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeviceFarmClient(config);
 * const input = { // GetDeviceInstanceRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceInstanceCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceInstanceResult
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
 * @param GetDeviceInstanceCommandInput - {@link GetDeviceInstanceCommandInput}
 * @returns {@link GetDeviceInstanceCommandOutput}
 * @see {@link GetDeviceInstanceCommandInput} for command's `input` shape.
 * @see {@link GetDeviceInstanceCommandOutput} for command's `response` shape.
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
export class GetDeviceInstanceCommand extends $Command
  .classBuilder<
    GetDeviceInstanceCommandInput,
    GetDeviceInstanceCommandOutput,
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
  .s("DeviceFarm_20150623", "GetDeviceInstance", {})
  .n("DeviceFarmClient", "GetDeviceInstanceCommand")
  .f(void 0, void 0)
  .ser(se_GetDeviceInstanceCommand)
  .de(de_GetDeviceInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeviceInstanceRequest;
      output: GetDeviceInstanceResult;
    };
    sdk: {
      input: GetDeviceInstanceCommandInput;
      output: GetDeviceInstanceCommandOutput;
    };
  };
}

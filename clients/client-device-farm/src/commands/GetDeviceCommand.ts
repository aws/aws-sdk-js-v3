// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeviceRequest, GetDeviceResult } from "../models/models_0";
import { de_GetDeviceCommand, se_GetDeviceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceCommand}.
 */
export interface GetDeviceCommandInput extends GetDeviceRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceCommand}.
 */
export interface GetDeviceCommandOutput extends GetDeviceResult, __MetadataBearer {}

/**
 * <p>Gets information about a unique device type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDeviceCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDeviceCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeviceFarmClient(config);
 * const input = { // GetDeviceRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceResult
 * //   device: { // Device
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     manufacturer: "STRING_VALUE",
 * //     model: "STRING_VALUE",
 * //     modelId: "STRING_VALUE",
 * //     formFactor: "PHONE" || "TABLET",
 * //     platform: "ANDROID" || "IOS",
 * //     os: "STRING_VALUE",
 * //     cpu: { // CPU
 * //       frequency: "STRING_VALUE",
 * //       architecture: "STRING_VALUE",
 * //       clock: Number("double"),
 * //     },
 * //     resolution: { // Resolution
 * //       width: Number("int"),
 * //       height: Number("int"),
 * //     },
 * //     heapSize: Number("long"),
 * //     memory: Number("long"),
 * //     image: "STRING_VALUE",
 * //     carrier: "STRING_VALUE",
 * //     radio: "STRING_VALUE",
 * //     remoteAccessEnabled: true || false,
 * //     remoteDebugEnabled: true || false,
 * //     fleetType: "STRING_VALUE",
 * //     fleetName: "STRING_VALUE",
 * //     instances: [ // DeviceInstances
 * //       { // DeviceInstance
 * //         arn: "STRING_VALUE",
 * //         deviceArn: "STRING_VALUE",
 * //         labels: [ // InstanceLabels
 * //           "STRING_VALUE",
 * //         ],
 * //         status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //         udid: "STRING_VALUE",
 * //         instanceProfile: { // InstanceProfile
 * //           arn: "STRING_VALUE",
 * //           packageCleanup: true || false,
 * //           excludeAppPackagesFromCleanup: [ // PackageIds
 * //             "STRING_VALUE",
 * //           ],
 * //           rebootAfterUse: true || false,
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     availability: "TEMPORARY_NOT_AVAILABLE" || "BUSY" || "AVAILABLE" || "HIGHLY_AVAILABLE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeviceCommandInput - {@link GetDeviceCommandInput}
 * @returns {@link GetDeviceCommandOutput}
 * @see {@link GetDeviceCommandInput} for command's `input` shape.
 * @see {@link GetDeviceCommandOutput} for command's `response` shape.
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
 * @example To get information about a device
 * ```javascript
 * // The following example returns information about a specific device.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2::device:123EXAMPLE"
 * };
 * const command = new GetDeviceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "device": {
 *     "name": "LG G2 (Sprint)",
 *     "arn": "arn:aws:devicefarm:us-west-2::device:A0E6E6E1059E45918208DF75B2B7EF6C",
 *     "cpu": {
 *       "architecture": "armeabi-v7a",
 *       "clock": 2265.6,
 *       "frequency": "MHz"
 *     },
 *     "formFactor": "PHONE",
 *     "heapSize": 256000000,
 *     "image": "75B2B7EF6C12345EXAMPLE",
 *     "manufacturer": "LG",
 *     "memory": 16000000000,
 *     "model": "G2 (Sprint)",
 *     "os": "4.2.2",
 *     "platform": "ANDROID",
 *     "resolution": {
 *       "height": 1920,
 *       "width": 1080
 *     }
 *   }
 * }
 * *\/
 * // example id: getdevice-example-1470870602173
 * ```
 *
 */
export class GetDeviceCommand extends $Command
  .classBuilder<
    GetDeviceCommandInput,
    GetDeviceCommandOutput,
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
  .s("DeviceFarm_20150623", "GetDevice", {})
  .n("DeviceFarmClient", "GetDeviceCommand")
  .f(void 0, void 0)
  .ser(se_GetDeviceCommand)
  .de(de_GetDeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeviceRequest;
      output: GetDeviceResult;
    };
    sdk: {
      input: GetDeviceCommandInput;
      output: GetDeviceCommandOutput;
    };
  };
}

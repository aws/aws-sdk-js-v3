// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDevicePoolCompatibilityRequest, GetDevicePoolCompatibilityResult } from "../models/models_0";
import { de_GetDevicePoolCompatibilityCommand, se_GetDevicePoolCompatibilityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDevicePoolCompatibilityCommand}.
 */
export interface GetDevicePoolCompatibilityCommandInput extends GetDevicePoolCompatibilityRequest {}
/**
 * @public
 *
 * The output of {@link GetDevicePoolCompatibilityCommand}.
 */
export interface GetDevicePoolCompatibilityCommandOutput extends GetDevicePoolCompatibilityResult, __MetadataBearer {}

/**
 * <p>Gets information about compatibility with a device pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDevicePoolCompatibilityCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDevicePoolCompatibilityCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // GetDevicePoolCompatibilityRequest
 *   devicePoolArn: "STRING_VALUE", // required
 *   appArn: "STRING_VALUE",
 *   testType: "BUILTIN_FUZZ" || "APPIUM_JAVA_JUNIT" || "APPIUM_JAVA_TESTNG" || "APPIUM_PYTHON" || "APPIUM_NODE" || "APPIUM_RUBY" || "APPIUM_WEB_JAVA_JUNIT" || "APPIUM_WEB_JAVA_TESTNG" || "APPIUM_WEB_PYTHON" || "APPIUM_WEB_NODE" || "APPIUM_WEB_RUBY" || "INSTRUMENTATION" || "XCTEST" || "XCTEST_UI",
 *   test: { // ScheduleRunTest
 *     type: "BUILTIN_FUZZ" || "APPIUM_JAVA_JUNIT" || "APPIUM_JAVA_TESTNG" || "APPIUM_PYTHON" || "APPIUM_NODE" || "APPIUM_RUBY" || "APPIUM_WEB_JAVA_JUNIT" || "APPIUM_WEB_JAVA_TESTNG" || "APPIUM_WEB_PYTHON" || "APPIUM_WEB_NODE" || "APPIUM_WEB_RUBY" || "INSTRUMENTATION" || "XCTEST" || "XCTEST_UI", // required
 *     testPackageArn: "STRING_VALUE",
 *     testSpecArn: "STRING_VALUE",
 *     filter: "STRING_VALUE",
 *     parameters: { // TestParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   configuration: { // ScheduleRunConfiguration
 *     extraDataPackageArn: "STRING_VALUE",
 *     networkProfileArn: "STRING_VALUE",
 *     locale: "STRING_VALUE",
 *     location: { // Location
 *       latitude: Number("double"), // required
 *       longitude: Number("double"), // required
 *     },
 *     vpceConfigurationArns: [ // AmazonResourceNames
 *       "STRING_VALUE",
 *     ],
 *     deviceProxy: { // DeviceProxy
 *       host: "STRING_VALUE", // required
 *       port: Number("int"), // required
 *     },
 *     customerArtifactPaths: { // CustomerArtifactPaths
 *       iosPaths: [ // IosPaths
 *         "STRING_VALUE",
 *       ],
 *       androidPaths: [ // AndroidPaths
 *         "STRING_VALUE",
 *       ],
 *       deviceHostPaths: [ // DeviceHostPaths
 *         "STRING_VALUE",
 *       ],
 *     },
 *     radios: { // Radios
 *       wifi: true || false,
 *       bluetooth: true || false,
 *       nfc: true || false,
 *       gps: true || false,
 *     },
 *     auxiliaryApps: [
 *       "STRING_VALUE",
 *     ],
 *     billingMethod: "METERED" || "UNMETERED",
 *   },
 * };
 * const command = new GetDevicePoolCompatibilityCommand(input);
 * const response = await client.send(command);
 * // { // GetDevicePoolCompatibilityResult
 * //   compatibleDevices: [ // DevicePoolCompatibilityResults
 * //     { // DevicePoolCompatibilityResult
 * //       device: { // Device
 * //         arn: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         manufacturer: "STRING_VALUE",
 * //         model: "STRING_VALUE",
 * //         modelId: "STRING_VALUE",
 * //         formFactor: "PHONE" || "TABLET",
 * //         platform: "ANDROID" || "IOS",
 * //         os: "STRING_VALUE",
 * //         cpu: { // CPU
 * //           frequency: "STRING_VALUE",
 * //           architecture: "STRING_VALUE",
 * //           clock: Number("double"),
 * //         },
 * //         resolution: { // Resolution
 * //           width: Number("int"),
 * //           height: Number("int"),
 * //         },
 * //         heapSize: Number("long"),
 * //         memory: Number("long"),
 * //         image: "STRING_VALUE",
 * //         carrier: "STRING_VALUE",
 * //         radio: "STRING_VALUE",
 * //         remoteAccessEnabled: true || false,
 * //         remoteDebugEnabled: true || false,
 * //         fleetType: "STRING_VALUE",
 * //         fleetName: "STRING_VALUE",
 * //         instances: [ // DeviceInstances
 * //           { // DeviceInstance
 * //             arn: "STRING_VALUE",
 * //             deviceArn: "STRING_VALUE",
 * //             labels: [ // InstanceLabels
 * //               "STRING_VALUE",
 * //             ],
 * //             status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //             udid: "STRING_VALUE",
 * //             instanceProfile: { // InstanceProfile
 * //               arn: "STRING_VALUE",
 * //               packageCleanup: true || false,
 * //               excludeAppPackagesFromCleanup: [ // PackageIds
 * //                 "STRING_VALUE",
 * //               ],
 * //               rebootAfterUse: true || false,
 * //               name: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         availability: "TEMPORARY_NOT_AVAILABLE" || "BUSY" || "AVAILABLE" || "HIGHLY_AVAILABLE",
 * //       },
 * //       compatible: true || false,
 * //       incompatibilityMessages: [ // IncompatibilityMessages
 * //         { // IncompatibilityMessage
 * //           message: "STRING_VALUE",
 * //           type: "ARN" || "PLATFORM" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "APPIUM_VERSION" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE" || "OS_VERSION" || "MODEL" || "AVAILABILITY",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   incompatibleDevices: [
 * //     {
 * //       device: {
 * //         arn: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         manufacturer: "STRING_VALUE",
 * //         model: "STRING_VALUE",
 * //         modelId: "STRING_VALUE",
 * //         formFactor: "PHONE" || "TABLET",
 * //         platform: "ANDROID" || "IOS",
 * //         os: "STRING_VALUE",
 * //         cpu: {
 * //           frequency: "STRING_VALUE",
 * //           architecture: "STRING_VALUE",
 * //           clock: Number("double"),
 * //         },
 * //         resolution: {
 * //           width: Number("int"),
 * //           height: Number("int"),
 * //         },
 * //         heapSize: Number("long"),
 * //         memory: Number("long"),
 * //         image: "STRING_VALUE",
 * //         carrier: "STRING_VALUE",
 * //         radio: "STRING_VALUE",
 * //         remoteAccessEnabled: true || false,
 * //         remoteDebugEnabled: true || false,
 * //         fleetType: "STRING_VALUE",
 * //         fleetName: "STRING_VALUE",
 * //         instances: [
 * //           {
 * //             arn: "STRING_VALUE",
 * //             deviceArn: "STRING_VALUE",
 * //             labels: [
 * //               "STRING_VALUE",
 * //             ],
 * //             status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //             udid: "STRING_VALUE",
 * //             instanceProfile: {
 * //               arn: "STRING_VALUE",
 * //               packageCleanup: true || false,
 * //               excludeAppPackagesFromCleanup: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               rebootAfterUse: true || false,
 * //               name: "STRING_VALUE",
 * //               description: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         availability: "TEMPORARY_NOT_AVAILABLE" || "BUSY" || "AVAILABLE" || "HIGHLY_AVAILABLE",
 * //       },
 * //       compatible: true || false,
 * //       incompatibilityMessages: [
 * //         {
 * //           message: "STRING_VALUE",
 * //           type: "ARN" || "PLATFORM" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "APPIUM_VERSION" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE" || "OS_VERSION" || "MODEL" || "AVAILABILITY",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDevicePoolCompatibilityCommandInput - {@link GetDevicePoolCompatibilityCommandInput}
 * @returns {@link GetDevicePoolCompatibilityCommandOutput}
 * @see {@link GetDevicePoolCompatibilityCommandInput} for command's `input` shape.
 * @see {@link GetDevicePoolCompatibilityCommandOutput} for command's `response` shape.
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
 * @example To get information about the compatibility of a device pool
 * ```javascript
 * // The following example returns information about the compatibility of a specific device pool, given its ARN.
 * const input = {
 *   "appArn": "arn:aws:devicefarm:us-west-2::app:123-456-EXAMPLE-GUID",
 *   "devicePoolArn": "arn:aws:devicefarm:us-west-2::devicepool:123-456-EXAMPLE-GUID",
 *   "testType": "APPIUM_PYTHON"
 * };
 * const command = new GetDevicePoolCompatibilityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "compatibleDevices": [],
 *   "incompatibleDevices": []
 * }
 * *\/
 * // example id: getdevicepoolcompatibility-example-1470925003466
 * ```
 *
 */
export class GetDevicePoolCompatibilityCommand extends $Command
  .classBuilder<
    GetDevicePoolCompatibilityCommandInput,
    GetDevicePoolCompatibilityCommandOutput,
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
  .s("DeviceFarm_20150623", "GetDevicePoolCompatibility", {})
  .n("DeviceFarmClient", "GetDevicePoolCompatibilityCommand")
  .f(void 0, void 0)
  .ser(se_GetDevicePoolCompatibilityCommand)
  .de(de_GetDevicePoolCompatibilityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDevicePoolCompatibilityRequest;
      output: GetDevicePoolCompatibilityResult;
    };
    sdk: {
      input: GetDevicePoolCompatibilityCommandInput;
      output: GetDevicePoolCompatibilityCommandOutput;
    };
  };
}

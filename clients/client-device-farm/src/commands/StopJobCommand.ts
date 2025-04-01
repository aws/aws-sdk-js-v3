// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopJobRequest, StopJobResult } from "../models/models_0";
import { de_StopJobCommand, se_StopJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopJobCommand}.
 */
export interface StopJobCommandInput extends StopJobRequest {}
/**
 * @public
 *
 * The output of {@link StopJobCommand}.
 */
export interface StopJobCommandOutput extends StopJobResult, __MetadataBearer {}

/**
 * <p>Initiates a stop request for the current job. AWS Device Farm immediately stops the job on the device
 *             where tests have not started. You are not billed for this device. On the device where tests have started,
 *             setup suite and teardown suite tests run to completion on the device. You are billed for setup, teardown,
 *             and any tests that were in progress or already completed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, StopJobCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, StopJobCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // StopJobRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new StopJobCommand(input);
 * const response = await client.send(command);
 * // { // StopJobResult
 * //   job: { // Job
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     type: "BUILTIN_FUZZ" || "APPIUM_JAVA_JUNIT" || "APPIUM_JAVA_TESTNG" || "APPIUM_PYTHON" || "APPIUM_NODE" || "APPIUM_RUBY" || "APPIUM_WEB_JAVA_JUNIT" || "APPIUM_WEB_JAVA_TESTNG" || "APPIUM_WEB_PYTHON" || "APPIUM_WEB_NODE" || "APPIUM_WEB_RUBY" || "INSTRUMENTATION" || "XCTEST" || "XCTEST_UI",
 * //     created: new Date("TIMESTAMP"),
 * //     status: "PENDING" || "PENDING_CONCURRENCY" || "PENDING_DEVICE" || "PROCESSING" || "SCHEDULING" || "PREPARING" || "RUNNING" || "COMPLETED" || "STOPPING",
 * //     result: "PENDING" || "PASSED" || "WARNED" || "FAILED" || "SKIPPED" || "ERRORED" || "STOPPED",
 * //     started: new Date("TIMESTAMP"),
 * //     stopped: new Date("TIMESTAMP"),
 * //     counters: { // Counters
 * //       total: Number("int"),
 * //       passed: Number("int"),
 * //       failed: Number("int"),
 * //       warned: Number("int"),
 * //       errored: Number("int"),
 * //       stopped: Number("int"),
 * //       skipped: Number("int"),
 * //     },
 * //     message: "STRING_VALUE",
 * //     device: { // Device
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       manufacturer: "STRING_VALUE",
 * //       model: "STRING_VALUE",
 * //       modelId: "STRING_VALUE",
 * //       formFactor: "PHONE" || "TABLET",
 * //       platform: "ANDROID" || "IOS",
 * //       os: "STRING_VALUE",
 * //       cpu: { // CPU
 * //         frequency: "STRING_VALUE",
 * //         architecture: "STRING_VALUE",
 * //         clock: Number("double"),
 * //       },
 * //       resolution: { // Resolution
 * //         width: Number("int"),
 * //         height: Number("int"),
 * //       },
 * //       heapSize: Number("long"),
 * //       memory: Number("long"),
 * //       image: "STRING_VALUE",
 * //       carrier: "STRING_VALUE",
 * //       radio: "STRING_VALUE",
 * //       remoteAccessEnabled: true || false,
 * //       remoteDebugEnabled: true || false,
 * //       fleetType: "STRING_VALUE",
 * //       fleetName: "STRING_VALUE",
 * //       instances: [ // DeviceInstances
 * //         { // DeviceInstance
 * //           arn: "STRING_VALUE",
 * //           deviceArn: "STRING_VALUE",
 * //           labels: [ // InstanceLabels
 * //             "STRING_VALUE",
 * //           ],
 * //           status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //           udid: "STRING_VALUE",
 * //           instanceProfile: { // InstanceProfile
 * //             arn: "STRING_VALUE",
 * //             packageCleanup: true || false,
 * //             excludeAppPackagesFromCleanup: [ // PackageIds
 * //               "STRING_VALUE",
 * //             ],
 * //             rebootAfterUse: true || false,
 * //             name: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       availability: "TEMPORARY_NOT_AVAILABLE" || "BUSY" || "AVAILABLE" || "HIGHLY_AVAILABLE",
 * //     },
 * //     instanceArn: "STRING_VALUE",
 * //     deviceMinutes: { // DeviceMinutes
 * //       total: Number("double"),
 * //       metered: Number("double"),
 * //       unmetered: Number("double"),
 * //     },
 * //     videoEndpoint: "STRING_VALUE",
 * //     videoCapture: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param StopJobCommandInput - {@link StopJobCommandInput}
 * @returns {@link StopJobCommandOutput}
 * @see {@link StopJobCommandInput} for command's `input` shape.
 * @see {@link StopJobCommandOutput} for command's `response` shape.
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
export class StopJobCommand extends $Command
  .classBuilder<
    StopJobCommandInput,
    StopJobCommandOutput,
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
  .s("DeviceFarm_20150623", "StopJob", {})
  .n("DeviceFarmClient", "StopJobCommand")
  .f(void 0, void 0)
  .ser(se_StopJobCommand)
  .de(de_StopJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopJobRequest;
      output: StopJobResult;
    };
    sdk: {
      input: StopJobCommandInput;
      output: StopJobCommandOutput;
    };
  };
}

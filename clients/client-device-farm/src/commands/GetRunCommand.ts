// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRunRequest, GetRunResult } from "../models/models_0";
import { GetRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRunCommand}.
 */
export interface GetRunCommandInput extends GetRunRequest {}
/**
 * @public
 *
 * The output of {@link GetRunCommand}.
 */
export interface GetRunCommandOutput extends GetRunResult, __MetadataBearer {}

/**
 * <p>Gets information about a run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetRunCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetRunCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // GetRunRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetRunCommand(input);
 * const response = await client.send(command);
 * // { // GetRunResult
 * //   run: { // Run
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     type: "BUILTIN_FUZZ" || "APPIUM_JAVA_JUNIT" || "APPIUM_JAVA_TESTNG" || "APPIUM_PYTHON" || "APPIUM_NODE" || "APPIUM_RUBY" || "APPIUM_WEB_JAVA_JUNIT" || "APPIUM_WEB_JAVA_TESTNG" || "APPIUM_WEB_PYTHON" || "APPIUM_WEB_NODE" || "APPIUM_WEB_RUBY" || "INSTRUMENTATION" || "XCTEST" || "XCTEST_UI",
 * //     platform: "ANDROID" || "IOS",
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
 * //     totalJobs: Number("int"),
 * //     completedJobs: Number("int"),
 * //     billingMethod: "METERED" || "UNMETERED",
 * //     deviceMinutes: { // DeviceMinutes
 * //       total: Number("double"),
 * //       metered: Number("double"),
 * //       unmetered: Number("double"),
 * //     },
 * //     networkProfile: { // NetworkProfile
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
 * //     deviceProxy: { // DeviceProxy
 * //       host: "STRING_VALUE", // required
 * //       port: Number("int"), // required
 * //     },
 * //     parsingResultUrl: "STRING_VALUE",
 * //     resultCode: "PARSING_FAILED" || "VPC_ENDPOINT_SETUP_FAILED",
 * //     seed: Number("int"),
 * //     appUpload: "STRING_VALUE",
 * //     eventCount: Number("int"),
 * //     jobTimeoutMinutes: Number("int"),
 * //     devicePoolArn: "STRING_VALUE",
 * //     locale: "STRING_VALUE",
 * //     radios: { // Radios
 * //       wifi: true || false,
 * //       bluetooth: true || false,
 * //       nfc: true || false,
 * //       gps: true || false,
 * //     },
 * //     location: { // Location
 * //       latitude: Number("double"), // required
 * //       longitude: Number("double"), // required
 * //     },
 * //     customerArtifactPaths: { // CustomerArtifactPaths
 * //       iosPaths: [ // IosPaths
 * //         "STRING_VALUE",
 * //       ],
 * //       androidPaths: [ // AndroidPaths
 * //         "STRING_VALUE",
 * //       ],
 * //       deviceHostPaths: [ // DeviceHostPaths
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     webUrl: "STRING_VALUE",
 * //     skipAppResign: true || false,
 * //     testSpecArn: "STRING_VALUE",
 * //     deviceSelectionResult: { // DeviceSelectionResult
 * //       filters: [ // DeviceFilters
 * //         { // DeviceFilter
 * //           attribute: "ARN" || "PLATFORM" || "OS_VERSION" || "MODEL" || "AVAILABILITY" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE", // required
 * //           operator: "EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "IN" || "NOT_IN" || "CONTAINS", // required
 * //           values: [ // DeviceFilterValues // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       matchedDevicesCount: Number("int"),
 * //       maxDevices: Number("int"),
 * //     },
 * //     vpcConfig: { // VpcConfig
 * //       securityGroupIds: [ // VpcSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // VpcSubnetIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       vpcId: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRunCommandInput - {@link GetRunCommandInput}
 * @returns {@link GetRunCommandOutput}
 * @see {@link GetRunCommandInput} for command's `input` shape.
 * @see {@link GetRunCommandOutput} for command's `response` shape.
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
export class GetRunCommand extends $Command
  .classBuilder<
    GetRunCommandInput,
    GetRunCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "GetRun", {})
  .n("DeviceFarmClient", "GetRunCommand")
  .sc(GetRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRunRequest;
      output: GetRunResult;
    };
    sdk: {
      input: GetRunCommandInput;
      output: GetRunCommandOutput;
    };
  };
}

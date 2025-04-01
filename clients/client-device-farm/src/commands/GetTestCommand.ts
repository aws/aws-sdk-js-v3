// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTestRequest, GetTestResult } from "../models/models_0";
import { de_GetTestCommand, se_GetTestCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTestCommand}.
 */
export interface GetTestCommandInput extends GetTestRequest {}
/**
 * @public
 *
 * The output of {@link GetTestCommand}.
 */
export interface GetTestCommandOutput extends GetTestResult, __MetadataBearer {}

/**
 * <p>Gets information about a test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetTestCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetTestCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // GetTestRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetTestCommand(input);
 * const response = await client.send(command);
 * // { // GetTestResult
 * //   test: { // Test
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
 * //     deviceMinutes: { // DeviceMinutes
 * //       total: Number("double"),
 * //       metered: Number("double"),
 * //       unmetered: Number("double"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTestCommandInput - {@link GetTestCommandInput}
 * @returns {@link GetTestCommandOutput}
 * @see {@link GetTestCommandInput} for command's `input` shape.
 * @see {@link GetTestCommandOutput} for command's `response` shape.
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
 * @example To get information about a specific test
 * ```javascript
 * // The following example gets information about a specific test.
 * const input = {
 *   arn: "arn:aws:devicefarm:us-west-2:123456789101:test:EXAMPLE-GUID-123-456"
 * };
 * const command = new GetTestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   test:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTestCommand extends $Command
  .classBuilder<
    GetTestCommandInput,
    GetTestCommandOutput,
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
  .s("DeviceFarm_20150623", "GetTest", {})
  .n("DeviceFarmClient", "GetTestCommand")
  .f(void 0, void 0)
  .ser(se_GetTestCommand)
  .de(de_GetTestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTestRequest;
      output: GetTestResult;
    };
    sdk: {
      input: GetTestCommandInput;
      output: GetTestCommandOutput;
    };
  };
}

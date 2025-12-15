// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { InstallToRemoteAccessSessionRequest, InstallToRemoteAccessSessionResult } from "../models/models_0";
import { InstallToRemoteAccessSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InstallToRemoteAccessSessionCommand}.
 */
export interface InstallToRemoteAccessSessionCommandInput extends InstallToRemoteAccessSessionRequest {}
/**
 * @public
 *
 * The output of {@link InstallToRemoteAccessSessionCommand}.
 */
export interface InstallToRemoteAccessSessionCommandOutput
  extends InstallToRemoteAccessSessionResult,
    __MetadataBearer {}

/**
 * <p>Installs an application to the device in a remote access session. For Android
 *             applications, the file must be in .apk format. For iOS applications, the file must be in
 *             .ipa format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, InstallToRemoteAccessSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, InstallToRemoteAccessSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // InstallToRemoteAccessSessionRequest
 *   remoteAccessSessionArn: "STRING_VALUE", // required
 *   appArn: "STRING_VALUE", // required
 * };
 * const command = new InstallToRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * // { // InstallToRemoteAccessSessionResult
 * //   appUpload: { // Upload
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"),
 * //     type: "ANDROID_APP" || "IOS_APP" || "WEB_APP" || "EXTERNAL_DATA" || "APPIUM_JAVA_JUNIT_TEST_PACKAGE" || "APPIUM_JAVA_TESTNG_TEST_PACKAGE" || "APPIUM_PYTHON_TEST_PACKAGE" || "APPIUM_NODE_TEST_PACKAGE" || "APPIUM_RUBY_TEST_PACKAGE" || "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE" || "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE" || "APPIUM_WEB_PYTHON_TEST_PACKAGE" || "APPIUM_WEB_NODE_TEST_PACKAGE" || "APPIUM_WEB_RUBY_TEST_PACKAGE" || "CALABASH_TEST_PACKAGE" || "INSTRUMENTATION_TEST_PACKAGE" || "UIAUTOMATION_TEST_PACKAGE" || "UIAUTOMATOR_TEST_PACKAGE" || "XCTEST_TEST_PACKAGE" || "XCTEST_UI_TEST_PACKAGE" || "APPIUM_JAVA_JUNIT_TEST_SPEC" || "APPIUM_JAVA_TESTNG_TEST_SPEC" || "APPIUM_PYTHON_TEST_SPEC" || "APPIUM_NODE_TEST_SPEC" || "APPIUM_RUBY_TEST_SPEC" || "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC" || "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC" || "APPIUM_WEB_PYTHON_TEST_SPEC" || "APPIUM_WEB_NODE_TEST_SPEC" || "APPIUM_WEB_RUBY_TEST_SPEC" || "INSTRUMENTATION_TEST_SPEC" || "XCTEST_UI_TEST_SPEC",
 * //     status: "INITIALIZED" || "PROCESSING" || "SUCCEEDED" || "FAILED",
 * //     url: "STRING_VALUE",
 * //     metadata: "STRING_VALUE",
 * //     contentType: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //     category: "CURATED" || "PRIVATE",
 * //   },
 * // };
 *
 * ```
 *
 * @param InstallToRemoteAccessSessionCommandInput - {@link InstallToRemoteAccessSessionCommandInput}
 * @returns {@link InstallToRemoteAccessSessionCommandOutput}
 * @see {@link InstallToRemoteAccessSessionCommandInput} for command's `input` shape.
 * @see {@link InstallToRemoteAccessSessionCommandOutput} for command's `response` shape.
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
 * @example To install to a remote access session
 * ```javascript
 * // The following example installs a specific app to a device in a specific remote access session.
 * const input = {
 *   appArn: "arn:aws:devicefarm:us-west-2:123456789101:app:EXAMPLE-GUID-123-456",
 *   remoteAccessSessionArn: "arn:aws:devicefarm:us-west-2:123456789101:session:EXAMPLE-GUID-123-456"
 * };
 * const command = new InstallToRemoteAccessSessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   appUpload:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class InstallToRemoteAccessSessionCommand extends $Command
  .classBuilder<
    InstallToRemoteAccessSessionCommandInput,
    InstallToRemoteAccessSessionCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "InstallToRemoteAccessSession", {})
  .n("DeviceFarmClient", "InstallToRemoteAccessSessionCommand")
  .sc(InstallToRemoteAccessSession$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InstallToRemoteAccessSessionRequest;
      output: InstallToRemoteAccessSessionResult;
    };
    sdk: {
      input: InstallToRemoteAccessSessionCommandInput;
      output: InstallToRemoteAccessSessionCommandOutput;
    };
  };
}

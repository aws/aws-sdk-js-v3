// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateUploadRequest, CreateUploadResult, CreateUploadResultFilterSensitiveLog } from "../models/models_0";
import { de_CreateUploadCommand, se_CreateUploadCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUploadCommand}.
 */
export interface CreateUploadCommandInput extends CreateUploadRequest {}
/**
 * @public
 *
 * The output of {@link CreateUploadCommand}.
 */
export interface CreateUploadCommandOutput extends CreateUploadResult, __MetadataBearer {}

/**
 * <p>Uploads an app or test scripts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateUploadCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateUploadCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateUploadRequest
 *   projectArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   type: "ANDROID_APP" || "IOS_APP" || "WEB_APP" || "EXTERNAL_DATA" || "APPIUM_JAVA_JUNIT_TEST_PACKAGE" || "APPIUM_JAVA_TESTNG_TEST_PACKAGE" || "APPIUM_PYTHON_TEST_PACKAGE" || "APPIUM_NODE_TEST_PACKAGE" || "APPIUM_RUBY_TEST_PACKAGE" || "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE" || "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE" || "APPIUM_WEB_PYTHON_TEST_PACKAGE" || "APPIUM_WEB_NODE_TEST_PACKAGE" || "APPIUM_WEB_RUBY_TEST_PACKAGE" || "CALABASH_TEST_PACKAGE" || "INSTRUMENTATION_TEST_PACKAGE" || "UIAUTOMATION_TEST_PACKAGE" || "UIAUTOMATOR_TEST_PACKAGE" || "XCTEST_TEST_PACKAGE" || "XCTEST_UI_TEST_PACKAGE" || "APPIUM_JAVA_JUNIT_TEST_SPEC" || "APPIUM_JAVA_TESTNG_TEST_SPEC" || "APPIUM_PYTHON_TEST_SPEC" || "APPIUM_NODE_TEST_SPEC" || "APPIUM_RUBY_TEST_SPEC" || "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC" || "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC" || "APPIUM_WEB_PYTHON_TEST_SPEC" || "APPIUM_WEB_NODE_TEST_SPEC" || "APPIUM_WEB_RUBY_TEST_SPEC" || "INSTRUMENTATION_TEST_SPEC" || "XCTEST_UI_TEST_SPEC", // required
 *   contentType: "STRING_VALUE",
 * };
 * const command = new CreateUploadCommand(input);
 * const response = await client.send(command);
 * // { // CreateUploadResult
 * //   upload: { // Upload
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
 * @param CreateUploadCommandInput - {@link CreateUploadCommandInput}
 * @returns {@link CreateUploadCommandOutput}
 * @see {@link CreateUploadCommandInput} for command's `input` shape.
 * @see {@link CreateUploadCommandOutput} for command's `response` shape.
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
export class CreateUploadCommand extends $Command
  .classBuilder<
    CreateUploadCommandInput,
    CreateUploadCommandOutput,
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
  .s("DeviceFarm_20150623", "CreateUpload", {})
  .n("DeviceFarmClient", "CreateUploadCommand")
  .f(void 0, CreateUploadResultFilterSensitiveLog)
  .ser(se_CreateUploadCommand)
  .de(de_CreateUploadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUploadRequest;
      output: CreateUploadResult;
    };
    sdk: {
      input: CreateUploadCommandInput;
      output: CreateUploadCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListUploadsRequest, ListUploadsResult, ListUploadsResultFilterSensitiveLog } from "../models/models_0";
import { de_ListUploadsCommand, se_ListUploadsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUploadsCommand}.
 */
export interface ListUploadsCommandInput extends ListUploadsRequest {}
/**
 * @public
 *
 * The output of {@link ListUploadsCommand}.
 */
export interface ListUploadsCommandOutput extends ListUploadsResult, __MetadataBearer {}

/**
 * <p>Gets information about uploads, given an AWS Device Farm project ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListUploadsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListUploadsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListUploadsRequest
 *   arn: "STRING_VALUE", // required
 *   type: "ANDROID_APP" || "IOS_APP" || "WEB_APP" || "EXTERNAL_DATA" || "APPIUM_JAVA_JUNIT_TEST_PACKAGE" || "APPIUM_JAVA_TESTNG_TEST_PACKAGE" || "APPIUM_PYTHON_TEST_PACKAGE" || "APPIUM_NODE_TEST_PACKAGE" || "APPIUM_RUBY_TEST_PACKAGE" || "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE" || "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE" || "APPIUM_WEB_PYTHON_TEST_PACKAGE" || "APPIUM_WEB_NODE_TEST_PACKAGE" || "APPIUM_WEB_RUBY_TEST_PACKAGE" || "CALABASH_TEST_PACKAGE" || "INSTRUMENTATION_TEST_PACKAGE" || "UIAUTOMATION_TEST_PACKAGE" || "UIAUTOMATOR_TEST_PACKAGE" || "XCTEST_TEST_PACKAGE" || "XCTEST_UI_TEST_PACKAGE" || "APPIUM_JAVA_JUNIT_TEST_SPEC" || "APPIUM_JAVA_TESTNG_TEST_SPEC" || "APPIUM_PYTHON_TEST_SPEC" || "APPIUM_NODE_TEST_SPEC" || "APPIUM_RUBY_TEST_SPEC" || "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC" || "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC" || "APPIUM_WEB_PYTHON_TEST_SPEC" || "APPIUM_WEB_NODE_TEST_SPEC" || "APPIUM_WEB_RUBY_TEST_SPEC" || "INSTRUMENTATION_TEST_SPEC" || "XCTEST_UI_TEST_SPEC",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListUploadsCommand(input);
 * const response = await client.send(command);
 * // { // ListUploadsResult
 * //   uploads: [ // Uploads
 * //     { // Upload
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       created: new Date("TIMESTAMP"),
 * //       type: "ANDROID_APP" || "IOS_APP" || "WEB_APP" || "EXTERNAL_DATA" || "APPIUM_JAVA_JUNIT_TEST_PACKAGE" || "APPIUM_JAVA_TESTNG_TEST_PACKAGE" || "APPIUM_PYTHON_TEST_PACKAGE" || "APPIUM_NODE_TEST_PACKAGE" || "APPIUM_RUBY_TEST_PACKAGE" || "APPIUM_WEB_JAVA_JUNIT_TEST_PACKAGE" || "APPIUM_WEB_JAVA_TESTNG_TEST_PACKAGE" || "APPIUM_WEB_PYTHON_TEST_PACKAGE" || "APPIUM_WEB_NODE_TEST_PACKAGE" || "APPIUM_WEB_RUBY_TEST_PACKAGE" || "CALABASH_TEST_PACKAGE" || "INSTRUMENTATION_TEST_PACKAGE" || "UIAUTOMATION_TEST_PACKAGE" || "UIAUTOMATOR_TEST_PACKAGE" || "XCTEST_TEST_PACKAGE" || "XCTEST_UI_TEST_PACKAGE" || "APPIUM_JAVA_JUNIT_TEST_SPEC" || "APPIUM_JAVA_TESTNG_TEST_SPEC" || "APPIUM_PYTHON_TEST_SPEC" || "APPIUM_NODE_TEST_SPEC" || "APPIUM_RUBY_TEST_SPEC" || "APPIUM_WEB_JAVA_JUNIT_TEST_SPEC" || "APPIUM_WEB_JAVA_TESTNG_TEST_SPEC" || "APPIUM_WEB_PYTHON_TEST_SPEC" || "APPIUM_WEB_NODE_TEST_SPEC" || "APPIUM_WEB_RUBY_TEST_SPEC" || "INSTRUMENTATION_TEST_SPEC" || "XCTEST_UI_TEST_SPEC",
 * //       status: "INITIALIZED" || "PROCESSING" || "SUCCEEDED" || "FAILED",
 * //       url: "STRING_VALUE",
 * //       metadata: "STRING_VALUE",
 * //       contentType: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //       category: "CURATED" || "PRIVATE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUploadsCommandInput - {@link ListUploadsCommandInput}
 * @returns {@link ListUploadsCommandOutput}
 * @see {@link ListUploadsCommandInput} for command's `input` shape.
 * @see {@link ListUploadsCommandOutput} for command's `response` shape.
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
 * @example To get information about uploads
 * ```javascript
 * // The following example returns information about uploads, given a specific Device Farm project.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456",
 *   "nextToken": "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE"
 * };
 * const command = new ListUploadsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "uploads": []
 * }
 * *\/
 * // example id: to-get-information-about-uploads-1472617943090
 * ```
 *
 */
export class ListUploadsCommand extends $Command
  .classBuilder<
    ListUploadsCommandInput,
    ListUploadsCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "ListUploads", {})
  .n("DeviceFarmClient", "ListUploadsCommand")
  .f(void 0, ListUploadsResultFilterSensitiveLog)
  .ser(se_ListUploadsCommand)
  .de(de_ListUploadsCommand)
  .build() {}

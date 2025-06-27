// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListArtifactsRequest, ListArtifactsResult } from "../models/models_0";
import { de_ListArtifactsCommand, se_ListArtifactsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListArtifactsCommand}.
 */
export interface ListArtifactsCommandInput extends ListArtifactsRequest {}
/**
 * @public
 *
 * The output of {@link ListArtifactsCommand}.
 */
export interface ListArtifactsCommandOutput extends ListArtifactsResult, __MetadataBearer {}

/**
 * <p>Gets information about artifacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListArtifactsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListArtifactsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListArtifactsRequest
 *   arn: "STRING_VALUE", // required
 *   type: "SCREENSHOT" || "FILE" || "LOG", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListArtifactsResult
 * //   artifacts: [ // Artifacts
 * //     { // Artifact
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "UNKNOWN" || "SCREENSHOT" || "DEVICE_LOG" || "MESSAGE_LOG" || "VIDEO_LOG" || "RESULT_LOG" || "SERVICE_LOG" || "WEBKIT_LOG" || "INSTRUMENTATION_OUTPUT" || "EXERCISER_MONKEY_OUTPUT" || "CALABASH_JSON_OUTPUT" || "CALABASH_PRETTY_OUTPUT" || "CALABASH_STANDARD_OUTPUT" || "CALABASH_JAVA_XML_OUTPUT" || "AUTOMATION_OUTPUT" || "APPIUM_SERVER_OUTPUT" || "APPIUM_JAVA_OUTPUT" || "APPIUM_JAVA_XML_OUTPUT" || "APPIUM_PYTHON_OUTPUT" || "APPIUM_PYTHON_XML_OUTPUT" || "EXPLORER_EVENT_LOG" || "EXPLORER_SUMMARY_LOG" || "APPLICATION_CRASH_REPORT" || "XCTEST_LOG" || "VIDEO" || "CUSTOMER_ARTIFACT" || "CUSTOMER_ARTIFACT_LOG" || "TESTSPEC_OUTPUT",
 * //       extension: "STRING_VALUE",
 * //       url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListArtifactsCommandInput - {@link ListArtifactsCommandInput}
 * @returns {@link ListArtifactsCommandOutput}
 * @see {@link ListArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListArtifactsCommandOutput} for command's `response` shape.
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
 * @example To list artifacts for a resource
 * ```javascript
 * // The following example lists screenshot artifacts for a specific run.
 * const input = {
 *   arn: "arn:aws:devicefarm:us-west-2:123456789101:run:EXAMPLE-GUID-123-456",
 *   type: "SCREENSHOT"
 * };
 * const command = new ListArtifactsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ListArtifactsCommand extends $Command
  .classBuilder<
    ListArtifactsCommandInput,
    ListArtifactsCommandOutput,
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
  .s("DeviceFarm_20150623", "ListArtifacts", {})
  .n("DeviceFarmClient", "ListArtifactsCommand")
  .f(void 0, void 0)
  .ser(se_ListArtifactsCommand)
  .de(de_ListArtifactsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListArtifactsRequest;
      output: ListArtifactsResult;
    };
    sdk: {
      input: ListArtifactsCommandInput;
      output: ListArtifactsCommandOutput;
    };
  };
}

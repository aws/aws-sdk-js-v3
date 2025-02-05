// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSamplesRequest, ListSamplesResult } from "../models/models_0";
import { de_ListSamplesCommand, se_ListSamplesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSamplesCommand}.
 */
export interface ListSamplesCommandInput extends ListSamplesRequest {}
/**
 * @public
 *
 * The output of {@link ListSamplesCommand}.
 */
export interface ListSamplesCommandOutput extends ListSamplesResult, __MetadataBearer {}

/**
 * <p>Gets information about samples, given an AWS Device Farm job ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListSamplesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListSamplesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeviceFarmClient(config);
 * const input = { // ListSamplesRequest
 *   arn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSamplesCommand(input);
 * const response = await client.send(command);
 * // { // ListSamplesResult
 * //   samples: [ // Samples
 * //     { // Sample
 * //       arn: "STRING_VALUE",
 * //       type: "CPU" || "MEMORY" || "THREADS" || "RX_RATE" || "TX_RATE" || "RX" || "TX" || "NATIVE_FRAMES" || "NATIVE_FPS" || "NATIVE_MIN_DRAWTIME" || "NATIVE_AVG_DRAWTIME" || "NATIVE_MAX_DRAWTIME" || "OPENGL_FRAMES" || "OPENGL_FPS" || "OPENGL_MIN_DRAWTIME" || "OPENGL_AVG_DRAWTIME" || "OPENGL_MAX_DRAWTIME",
 * //       url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSamplesCommandInput - {@link ListSamplesCommandInput}
 * @returns {@link ListSamplesCommandOutput}
 * @see {@link ListSamplesCommandInput} for command's `input` shape.
 * @see {@link ListSamplesCommandOutput} for command's `response` shape.
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
 * @example To get information about samples
 * ```javascript
 * // The following example returns information about samples, given a specific Device Farm project.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456",
 *   "nextToken": "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE"
 * };
 * const command = new ListSamplesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "samples": []
 * }
 * *\/
 * // example id: to-get-information-about-samples-1472582847534
 * ```
 *
 */
export class ListSamplesCommand extends $Command
  .classBuilder<
    ListSamplesCommandInput,
    ListSamplesCommandOutput,
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
  .s("DeviceFarm_20150623", "ListSamples", {})
  .n("DeviceFarmClient", "ListSamplesCommand")
  .f(void 0, void 0)
  .ser(se_ListSamplesCommand)
  .de(de_ListSamplesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSamplesRequest;
      output: ListSamplesResult;
    };
    sdk: {
      input: ListSamplesCommandInput;
      output: ListSamplesCommandOutput;
    };
  };
}

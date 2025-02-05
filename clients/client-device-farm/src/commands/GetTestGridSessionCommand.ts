// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTestGridSessionRequest, GetTestGridSessionResult } from "../models/models_0";
import { de_GetTestGridSessionCommand, se_GetTestGridSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTestGridSessionCommand}.
 */
export interface GetTestGridSessionCommandInput extends GetTestGridSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetTestGridSessionCommand}.
 */
export interface GetTestGridSessionCommandOutput extends GetTestGridSessionResult, __MetadataBearer {}

/**
 * <p>A session is an instance of a browser created through a <code>RemoteWebDriver</code> with the URL from <a>CreateTestGridUrlResult$url</a>. You can use the following to look up sessions:</p>
 *          <ul>
 *             <li>
 *                <p>The session ARN (<a>GetTestGridSessionRequest$sessionArn</a>).</p>
 *             </li>
 *             <li>
 *                <p>The project ARN and a session ID (<a>GetTestGridSessionRequest$projectArn</a> and <a>GetTestGridSessionRequest$sessionId</a>).</p>
 *             </li>
 *          </ul>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetTestGridSessionCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetTestGridSessionCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeviceFarmClient(config);
 * const input = { // GetTestGridSessionRequest
 *   projectArn: "STRING_VALUE",
 *   sessionId: "STRING_VALUE",
 *   sessionArn: "STRING_VALUE",
 * };
 * const command = new GetTestGridSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetTestGridSessionResult
 * //   testGridSession: { // TestGridSession
 * //     arn: "STRING_VALUE",
 * //     status: "ACTIVE" || "CLOSED" || "ERRORED",
 * //     created: new Date("TIMESTAMP"),
 * //     ended: new Date("TIMESTAMP"),
 * //     billingMinutes: Number("double"),
 * //     seleniumProperties: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTestGridSessionCommandInput - {@link GetTestGridSessionCommandInput}
 * @returns {@link GetTestGridSessionCommandOutput}
 * @see {@link GetTestGridSessionCommandInput} for command's `input` shape.
 * @see {@link GetTestGridSessionCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal exception was raised in the service. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you see this
 *          error. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 * @public
 */
export class GetTestGridSessionCommand extends $Command
  .classBuilder<
    GetTestGridSessionCommandInput,
    GetTestGridSessionCommandOutput,
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
  .s("DeviceFarm_20150623", "GetTestGridSession", {})
  .n("DeviceFarmClient", "GetTestGridSessionCommand")
  .f(void 0, void 0)
  .ser(se_GetTestGridSessionCommand)
  .de(de_GetTestGridSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTestGridSessionRequest;
      output: GetTestGridSessionResult;
    };
    sdk: {
      input: GetTestGridSessionCommandInput;
      output: GetTestGridSessionCommandOutput;
    };
  };
}

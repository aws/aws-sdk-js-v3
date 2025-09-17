// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartAvailabilityMonitorTestInput, StartAvailabilityMonitorTestOutput } from "../models/models_0";
import {
  de_StartAvailabilityMonitorTestCommand,
  se_StartAvailabilityMonitorTestCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAvailabilityMonitorTestCommand}.
 */
export interface StartAvailabilityMonitorTestCommandInput extends StartAvailabilityMonitorTestInput {}
/**
 * @public
 *
 * The output of {@link StartAvailabilityMonitorTestCommand}.
 */
export interface StartAvailabilityMonitorTestCommandOutput
  extends StartAvailabilityMonitorTestOutput,
    __MetadataBearer {}

/**
 * <p>Start a test that verifies that the specified gateway is configured for High
 *          Availability monitoring in your host environment. This request only initiates the test and
 *          that a successful response only indicates that the test was started. It doesn't
 *          indicate that the test passed. For the status of the test, invoke the
 *             <code>DescribeAvailabilityMonitorTest</code> API.</p>
 *          <note>
 *             <p>Starting this test will cause your gateway to go offline for a brief period.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, StartAvailabilityMonitorTestCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, StartAvailabilityMonitorTestCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // StartAvailabilityMonitorTestInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new StartAvailabilityMonitorTestCommand(input);
 * const response = await client.send(command);
 * // { // StartAvailabilityMonitorTestOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAvailabilityMonitorTestCommandInput - {@link StartAvailabilityMonitorTestCommandInput}
 * @returns {@link StartAvailabilityMonitorTestCommandOutput}
 * @see {@link StartAvailabilityMonitorTestCommandInput} for command's `input` shape.
 * @see {@link StartAvailabilityMonitorTestCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @public
 */
export class StartAvailabilityMonitorTestCommand extends $Command
  .classBuilder<
    StartAvailabilityMonitorTestCommandInput,
    StartAvailabilityMonitorTestCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "StartAvailabilityMonitorTest", {})
  .n("StorageGatewayClient", "StartAvailabilityMonitorTestCommand")
  .f(void 0, void 0)
  .ser(se_StartAvailabilityMonitorTestCommand)
  .de(de_StartAvailabilityMonitorTestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAvailabilityMonitorTestInput;
      output: StartAvailabilityMonitorTestOutput;
    };
    sdk: {
      input: StartAvailabilityMonitorTestCommandInput;
      output: StartAvailabilityMonitorTestCommandOutput;
    };
  };
}

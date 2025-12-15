// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SendAutomationSignalRequest, SendAutomationSignalResult } from "../models/models_1";
import { SendAutomationSignal$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendAutomationSignalCommand}.
 */
export interface SendAutomationSignalCommandInput extends SendAutomationSignalRequest {}
/**
 * @public
 *
 * The output of {@link SendAutomationSignalCommand}.
 */
export interface SendAutomationSignalCommandOutput extends SendAutomationSignalResult, __MetadataBearer {}

/**
 * <p>Sends a signal to an Automation execution to change the current behavior or status of the
 *    execution. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, SendAutomationSignalCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, SendAutomationSignalCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // SendAutomationSignalRequest
 *   AutomationExecutionId: "STRING_VALUE", // required
 *   SignalType: "Approve" || "Reject" || "StartStep" || "StopStep" || "Resume" || "Revoke", // required
 *   Payload: { // AutomationParameterMap
 *     "<keys>": [ // AutomationParameterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new SendAutomationSignalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendAutomationSignalCommandInput - {@link SendAutomationSignalCommandInput}
 * @returns {@link SendAutomationSignalCommandOutput}
 * @see {@link SendAutomationSignalCommandInput} for command's `input` shape.
 * @see {@link SendAutomationSignalCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AutomationExecutionNotFoundException} (client fault)
 *  <p>There is no automation execution information for the requested automation execution
 *    ID.</p>
 *
 * @throws {@link AutomationStepNotFoundException} (client fault)
 *  <p>The specified step name and execution ID don't exist. Verify the information and try
 *    again.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidAutomationSignalException} (client fault)
 *  <p>The signal isn't valid for the current Automation execution.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class SendAutomationSignalCommand extends $Command
  .classBuilder<
    SendAutomationSignalCommandInput,
    SendAutomationSignalCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "SendAutomationSignal", {})
  .n("SSMClient", "SendAutomationSignalCommand")
  .sc(SendAutomationSignal$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendAutomationSignalRequest;
      output: {};
    };
    sdk: {
      input: SendAutomationSignalCommandInput;
      output: SendAutomationSignalCommandOutput;
    };
  };
}

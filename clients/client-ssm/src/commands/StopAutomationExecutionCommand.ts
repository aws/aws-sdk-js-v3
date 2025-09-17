// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopAutomationExecutionRequest, StopAutomationExecutionResult } from "../models/models_2";
import { de_StopAutomationExecutionCommand, se_StopAutomationExecutionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopAutomationExecutionCommand}.
 */
export interface StopAutomationExecutionCommandInput extends StopAutomationExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StopAutomationExecutionCommand}.
 */
export interface StopAutomationExecutionCommandOutput extends StopAutomationExecutionResult, __MetadataBearer {}

/**
 * <p>Stop an Automation that is currently running.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, StopAutomationExecutionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, StopAutomationExecutionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // StopAutomationExecutionRequest
 *   AutomationExecutionId: "STRING_VALUE", // required
 *   Type: "Complete" || "Cancel",
 * };
 * const command = new StopAutomationExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAutomationExecutionCommandInput - {@link StopAutomationExecutionCommandInput}
 * @returns {@link StopAutomationExecutionCommandOutput}
 * @see {@link StopAutomationExecutionCommandInput} for command's `input` shape.
 * @see {@link StopAutomationExecutionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AutomationExecutionNotFoundException} (client fault)
 *  <p>There is no automation execution information for the requested automation execution
 *    ID.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidAutomationStatusUpdateException} (client fault)
 *  <p>The specified update status operation isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class StopAutomationExecutionCommand extends $Command
  .classBuilder<
    StopAutomationExecutionCommandInput,
    StopAutomationExecutionCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "StopAutomationExecution", {})
  .n("SSMClient", "StopAutomationExecutionCommand")
  .f(void 0, void 0)
  .ser(se_StopAutomationExecutionCommand)
  .de(de_StopAutomationExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopAutomationExecutionRequest;
      output: {};
    };
    sdk: {
      input: StopAutomationExecutionCommandInput;
      output: StopAutomationExecutionCommandOutput;
    };
  };
}

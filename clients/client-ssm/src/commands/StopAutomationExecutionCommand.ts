// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StopAutomationExecutionRequest, StopAutomationExecutionResult } from "../models/models_1";
import { StopAutomationExecution$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "StopAutomationExecution", {})
  .n("SSMClient", "StopAutomationExecutionCommand")
  .sc(StopAutomationExecution$)
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

// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StopCodeReviewJobInput, StopCodeReviewJobOutput } from "../models/models_0";
import { StopCodeReviewJob$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopCodeReviewJobCommand}.
 */
export interface StopCodeReviewJobCommandInput extends StopCodeReviewJobInput {}
/**
 * @public
 *
 * The output of {@link StopCodeReviewJobCommand}.
 */
export interface StopCodeReviewJobCommandOutput extends StopCodeReviewJobOutput, __MetadataBearer {}

/**
 * <p>Stops a running code review job. The job transitions to a stopping state and then to stopped after cleanup completes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, StopCodeReviewJobCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, StopCodeReviewJobCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // StopCodeReviewJobInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   codeReviewJobId: "STRING_VALUE", // required
 * };
 * const command = new StopCodeReviewJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopCodeReviewJobCommandInput - {@link StopCodeReviewJobCommandInput}
 * @returns {@link StopCodeReviewJobCommandOutput}
 * @see {@link StopCodeReviewJobCommandInput} for command's `input` shape.
 * @see {@link StopCodeReviewJobCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class StopCodeReviewJobCommand extends $Command
  .classBuilder<
    StopCodeReviewJobCommandInput,
    StopCodeReviewJobCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "StopCodeReviewJob", {})
  .n("SecurityAgentClient", "StopCodeReviewJobCommand")
  .sc(StopCodeReviewJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopCodeReviewJobInput;
      output: {};
    };
    sdk: {
      input: StopCodeReviewJobCommandInput;
      output: StopCodeReviewJobCommandOutput;
    };
  };
}

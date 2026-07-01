// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopCodeReviewJobInput, StopCodeReviewJobOutput } from "../models/models_0";
import { StopCodeReviewJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class StopCodeReviewJobCommand extends command<StopCodeReviewJobCommandInput, StopCodeReviewJobCommandOutput>(
  _ep0,
  _mw0,
  "StopCodeReviewJob",
  StopCodeReviewJob$
) {
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

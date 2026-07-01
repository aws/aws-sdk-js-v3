// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopThreatModelJobInput, StopThreatModelJobOutput } from "../models/models_0";
import { StopThreatModelJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopThreatModelJobCommand}.
 */
export interface StopThreatModelJobCommandInput extends StopThreatModelJobInput {}
/**
 * @public
 *
 * The output of {@link StopThreatModelJobCommand}.
 */
export interface StopThreatModelJobCommandOutput extends StopThreatModelJobOutput, __MetadataBearer {}

/**
 * <p>Stops a running threat model job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, StopThreatModelJobCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, StopThreatModelJobCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // StopThreatModelJobInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   threatModelJobId: "STRING_VALUE", // required
 * };
 * const command = new StopThreatModelJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopThreatModelJobCommandInput - {@link StopThreatModelJobCommandInput}
 * @returns {@link StopThreatModelJobCommandOutput}
 * @see {@link StopThreatModelJobCommandInput} for command's `input` shape.
 * @see {@link StopThreatModelJobCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class StopThreatModelJobCommand extends command<StopThreatModelJobCommandInput, StopThreatModelJobCommandOutput>(
  _ep0,
  _mw0,
  "StopThreatModelJob",
  StopThreatModelJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopThreatModelJobInput;
      output: {};
    };
    sdk: {
      input: StopThreatModelJobCommandInput;
      output: StopThreatModelJobCommandOutput;
    };
  };
}

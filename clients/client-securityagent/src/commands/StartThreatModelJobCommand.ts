// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartThreatModelJobInput, StartThreatModelJobOutput } from "../models/models_0";
import { StartThreatModelJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartThreatModelJobCommand}.
 */
export interface StartThreatModelJobCommandInput extends StartThreatModelJobInput {}
/**
 * @public
 *
 * The output of {@link StartThreatModelJobCommand}.
 */
export interface StartThreatModelJobCommandOutput extends StartThreatModelJobOutput, __MetadataBearer {}

/**
 * <p>Starts a new threat model job for a threat model configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, StartThreatModelJobCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, StartThreatModelJobCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // StartThreatModelJobInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   threatModelId: "STRING_VALUE", // required
 * };
 * const command = new StartThreatModelJobCommand(input);
 * const response = await client.send(command);
 * // { // StartThreatModelJobOutput
 * //   title: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "STOPPING" || "STOPPED" || "FAILED" || "COMPLETED",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   threatModelId: "STRING_VALUE",
 * //   threatModelJobId: "STRING_VALUE", // required
 * //   agentSpaceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartThreatModelJobCommandInput - {@link StartThreatModelJobCommandInput}
 * @returns {@link StartThreatModelJobCommandOutput}
 * @see {@link StartThreatModelJobCommandInput} for command's `input` shape.
 * @see {@link StartThreatModelJobCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class StartThreatModelJobCommand extends command<StartThreatModelJobCommandInput, StartThreatModelJobCommandOutput>(
  _ep0,
  _mw0,
  "StartThreatModelJob",
  StartThreatModelJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartThreatModelJobInput;
      output: StartThreatModelJobOutput;
    };
    sdk: {
      input: StartThreatModelJobCommandInput;
      output: StartThreatModelJobCommandOutput;
    };
  };
}

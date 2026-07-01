// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFindingInput, UpdateFindingOutput } from "../models/models_0";
import { UpdateFinding$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFindingCommand}.
 */
export interface UpdateFindingCommandInput extends UpdateFindingInput {}
/**
 * @public
 *
 * The output of {@link UpdateFindingCommand}.
 */
export interface UpdateFindingCommandOutput extends UpdateFindingOutput, __MetadataBearer {}

/**
 * <p>Updates the status or risk level of a security finding.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdateFindingCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdateFindingCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdateFindingInput
 *   findingId: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   riskType: "STRING_VALUE",
 *   riskLevel: "UNKNOWN" || "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 *   riskScore: "STRING_VALUE",
 *   attackScript: "STRING_VALUE",
 *   reasoning: "STRING_VALUE",
 *   status: "ACTIVE" || "RESOLVED" || "ACCEPTED" || "FALSE_POSITIVE",
 *   customerNote: "STRING_VALUE",
 * };
 * const command = new UpdateFindingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateFindingCommandInput - {@link UpdateFindingCommandInput}
 * @returns {@link UpdateFindingCommandOutput}
 * @see {@link UpdateFindingCommandInput} for command's `input` shape.
 * @see {@link UpdateFindingCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class UpdateFindingCommand extends command<UpdateFindingCommandInput, UpdateFindingCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFinding",
  UpdateFinding$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFindingInput;
      output: {};
    };
    sdk: {
      input: UpdateFindingCommandInput;
      output: UpdateFindingCommandOutput;
    };
  };
}

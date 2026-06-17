// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateFindingInput, UpdateFindingOutput } from "../models/models_0";
import { UpdateFinding$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class UpdateFindingCommand extends $Command
  .classBuilder<
    UpdateFindingCommandInput,
    UpdateFindingCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "UpdateFinding", {})
  .n("SecurityAgentClient", "UpdateFindingCommand")
  .sc(UpdateFinding$)
  .build() {
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

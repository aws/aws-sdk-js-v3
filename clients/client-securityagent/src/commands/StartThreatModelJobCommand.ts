// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartThreatModelJobInput, StartThreatModelJobOutput } from "../models/models_0";
import { StartThreatModelJob$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class StartThreatModelJobCommand extends $Command
  .classBuilder<
    StartThreatModelJobCommandInput,
    StartThreatModelJobCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "StartThreatModelJob", {})
  .n("SecurityAgentClient", "StartThreatModelJobCommand")
  .sc(StartThreatModelJob$)
  .build() {
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

// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartCodeRemediationInput, StartCodeRemediationOutput } from "../models/models_0";
import { StartCodeRemediation$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCodeRemediationCommand}.
 */
export interface StartCodeRemediationCommandInput extends StartCodeRemediationInput {}
/**
 * @public
 *
 * The output of {@link StartCodeRemediationCommand}.
 */
export interface StartCodeRemediationCommandOutput extends StartCodeRemediationOutput, __MetadataBearer {}

/**
 * <p>Initiates code remediation for one or more security findings. This creates pull requests in integrated repositories to fix the identified vulnerabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, StartCodeRemediationCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, StartCodeRemediationCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // StartCodeRemediationInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   pentestJobId: "STRING_VALUE", // required
 *   findingIds: [ // FindingIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartCodeRemediationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartCodeRemediationCommandInput - {@link StartCodeRemediationCommandInput}
 * @returns {@link StartCodeRemediationCommandOutput}
 * @see {@link StartCodeRemediationCommandInput} for command's `input` shape.
 * @see {@link StartCodeRemediationCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class StartCodeRemediationCommand extends $Command
  .classBuilder<
    StartCodeRemediationCommandInput,
    StartCodeRemediationCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "StartCodeRemediation", {})
  .n("SecurityAgentClient", "StartCodeRemediationCommand")
  .sc(StartCodeRemediation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCodeRemediationInput;
      output: {};
    };
    sdk: {
      input: StartCodeRemediationCommandInput;
      output: StartCodeRemediationCommandOutput;
    };
  };
}

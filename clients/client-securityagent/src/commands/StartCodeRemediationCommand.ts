// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartCodeRemediationInput, StartCodeRemediationOutput } from "../models/models_0";
import { StartCodeRemediation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *   pentestJobId: "STRING_VALUE",
 *   codeReviewJobId: "STRING_VALUE",
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
export class StartCodeRemediationCommand extends command<StartCodeRemediationCommandInput, StartCodeRemediationCommandOutput>(
  _ep0,
  _mw0,
  "StartCodeRemediation",
  StartCodeRemediation$
) {
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

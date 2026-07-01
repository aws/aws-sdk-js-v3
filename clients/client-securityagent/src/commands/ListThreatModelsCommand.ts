// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListThreatModelsInput, ListThreatModelsOutput } from "../models/models_0";
import { ListThreatModels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListThreatModelsCommand}.
 */
export interface ListThreatModelsCommandInput extends ListThreatModelsInput {}
/**
 * @public
 *
 * The output of {@link ListThreatModelsCommand}.
 */
export interface ListThreatModelsCommandOutput extends ListThreatModelsOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of threat model summaries for the specified agent space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListThreatModelsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListThreatModelsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListThreatModelsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   agentSpaceId: "STRING_VALUE", // required
 * };
 * const command = new ListThreatModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListThreatModelsOutput
 * //   threatModelSummaries: [ // ThreatModelSummaryList
 * //     { // ThreatModelSummary
 * //       threatModelId: "STRING_VALUE", // required
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       title: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThreatModelsCommandInput - {@link ListThreatModelsCommandInput}
 * @returns {@link ListThreatModelsCommandOutput}
 * @see {@link ListThreatModelsCommandInput} for command's `input` shape.
 * @see {@link ListThreatModelsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListThreatModelsCommand extends command<ListThreatModelsCommandInput, ListThreatModelsCommandOutput>(
  _ep0,
  _mw0,
  "ListThreatModels",
  ListThreatModels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThreatModelsInput;
      output: ListThreatModelsOutput;
    };
    sdk: {
      input: ListThreatModelsCommandInput;
      output: ListThreatModelsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgentSpacesInput, ListAgentSpacesOutput } from "../models/models_0";
import { ListAgentSpaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentSpacesCommand}.
 */
export interface ListAgentSpacesCommandInput extends ListAgentSpacesInput {}
/**
 * @public
 *
 * The output of {@link ListAgentSpacesCommand}.
 */
export interface ListAgentSpacesCommandOutput extends ListAgentSpacesOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of agent space summaries in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListAgentSpacesCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListAgentSpacesCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListAgentSpacesInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAgentSpacesCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentSpacesOutput
 * //   agentSpaceSummaries: [ // AgentSpaceSummaryList
 * //     { // AgentSpaceSummary
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentSpacesCommandInput - {@link ListAgentSpacesCommandInput}
 * @returns {@link ListAgentSpacesCommandOutput}
 * @see {@link ListAgentSpacesCommandInput} for command's `input` shape.
 * @see {@link ListAgentSpacesCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListAgentSpacesCommand extends command<ListAgentSpacesCommandInput, ListAgentSpacesCommandOutput>(
  _ep0,
  _mw0,
  "ListAgentSpaces",
  ListAgentSpaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentSpacesInput;
      output: ListAgentSpacesOutput;
    };
    sdk: {
      input: ListAgentSpacesCommandInput;
      output: ListAgentSpacesCommandOutput;
    };
  };
}

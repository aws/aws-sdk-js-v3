// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDiscoveredEndpointsInput, ListDiscoveredEndpointsOutput } from "../models/models_0";
import { ListDiscoveredEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDiscoveredEndpointsCommand}.
 */
export interface ListDiscoveredEndpointsCommandInput extends ListDiscoveredEndpointsInput {}
/**
 * @public
 *
 * The output of {@link ListDiscoveredEndpointsCommand}.
 */
export interface ListDiscoveredEndpointsCommandOutput extends ListDiscoveredEndpointsOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of endpoints discovered during a pentest job execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, ListDiscoveredEndpointsCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, ListDiscoveredEndpointsCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // ListDiscoveredEndpointsInput
 *   maxResults: Number("int"),
 *   pentestJobId: "STRING_VALUE", // required
 *   agentSpaceId: "STRING_VALUE", // required
 *   prefix: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDiscoveredEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListDiscoveredEndpointsOutput
 * //   discoveredEndpoints: [ // DiscoveredEndpointList
 * //     { // DiscoveredEndpoint
 * //       uri: "STRING_VALUE", // required
 * //       pentestJobId: "STRING_VALUE", // required
 * //       taskId: "STRING_VALUE", // required
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       evidence: "STRING_VALUE",
 * //       operation: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDiscoveredEndpointsCommandInput - {@link ListDiscoveredEndpointsCommandInput}
 * @returns {@link ListDiscoveredEndpointsCommandOutput}
 * @see {@link ListDiscoveredEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListDiscoveredEndpointsCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class ListDiscoveredEndpointsCommand extends command<ListDiscoveredEndpointsCommandInput, ListDiscoveredEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ListDiscoveredEndpoints",
  ListDiscoveredEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDiscoveredEndpointsInput;
      output: ListDiscoveredEndpointsOutput;
    };
    sdk: {
      input: ListDiscoveredEndpointsCommandInput;
      output: ListDiscoveredEndpointsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAgentRuntimeVersionsByCapacityProviderInput,
  ListAgentRuntimeVersionsByCapacityProviderOutput,
} from "../models/models_0";
import { ListAgentRuntimeVersionsByCapacityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentRuntimeVersionsByCapacityProviderCommand}.
 */
export interface ListAgentRuntimeVersionsByCapacityProviderCommandInput extends ListAgentRuntimeVersionsByCapacityProviderInput {}
/**
 * @public
 *
 * The output of {@link ListAgentRuntimeVersionsByCapacityProviderCommand}.
 */
export interface ListAgentRuntimeVersionsByCapacityProviderCommandOutput extends ListAgentRuntimeVersionsByCapacityProviderOutput, __MetadataBearer {}

/**
 * <p>Lists the agent runtime versions that are associated with a capacity provider. Use this operation to identify the runtimes you must disassociate before you can delete the capacity provider. Results are paginated; use the <code>nextToken</code> parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListAgentRuntimeVersionsByCapacityProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListAgentRuntimeVersionsByCapacityProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListAgentRuntimeVersionsByCapacityProviderInput
 *   capacityProviderId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentRuntimeVersionsByCapacityProviderCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentRuntimeVersionsByCapacityProviderOutput
 * //   agentRuntimes: [ // AgentRuntimeVersionSummaryList // required
 * //     { // AgentRuntimeVersionSummary
 * //       agentRuntimeArn: "STRING_VALUE", // required
 * //       agentRuntimeVersion: "STRING_VALUE", // required
 * //       status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentRuntimeVersionsByCapacityProviderCommandInput - {@link ListAgentRuntimeVersionsByCapacityProviderCommandInput}
 * @returns {@link ListAgentRuntimeVersionsByCapacityProviderCommandOutput}
 * @see {@link ListAgentRuntimeVersionsByCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link ListAgentRuntimeVersionsByCapacityProviderCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class ListAgentRuntimeVersionsByCapacityProviderCommand extends command<ListAgentRuntimeVersionsByCapacityProviderCommandInput, ListAgentRuntimeVersionsByCapacityProviderCommandOutput>(
  _ep0,
  _mw0,
  "ListAgentRuntimeVersionsByCapacityProvider",
  ListAgentRuntimeVersionsByCapacityProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentRuntimeVersionsByCapacityProviderInput;
      output: ListAgentRuntimeVersionsByCapacityProviderOutput;
    };
    sdk: {
      input: ListAgentRuntimeVersionsByCapacityProviderCommandInput;
      output: ListAgentRuntimeVersionsByCapacityProviderCommandOutput;
    };
  };
}

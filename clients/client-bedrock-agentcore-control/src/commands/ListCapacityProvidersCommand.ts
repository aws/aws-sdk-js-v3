// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCapacityProvidersInput, ListCapacityProvidersOutput } from "../models/models_0";
import { ListCapacityProviders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCapacityProvidersCommand}.
 */
export interface ListCapacityProvidersCommandInput extends ListCapacityProvidersInput {}
/**
 * @public
 *
 * The output of {@link ListCapacityProvidersCommand}.
 */
export interface ListCapacityProvidersCommandOutput extends ListCapacityProvidersOutput, __MetadataBearer {}

/**
 * <p>Lists the capacity providers in your account and returns summary information for each one. To retrieve the full configuration for a specific capacity provider, use <code>GetCapacityProvider</code>. Results are paginated; use the <code>nextToken</code> parameter to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListCapacityProvidersCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListCapacityProvidersCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListCapacityProvidersInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCapacityProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListCapacityProvidersOutput
 * //   capacityProviders: [ // CapacityProviderList // required
 * //     { // CapacityProviderSummary
 * //       capacityProviderId: "STRING_VALUE", // required
 * //       capacityProviderArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED", // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCapacityProvidersCommandInput - {@link ListCapacityProvidersCommandInput}
 * @returns {@link ListCapacityProvidersCommandOutput}
 * @see {@link ListCapacityProvidersCommandInput} for command's `input` shape.
 * @see {@link ListCapacityProvidersCommandOutput} for command's `response` shape.
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
export class ListCapacityProvidersCommand extends command<ListCapacityProvidersCommandInput, ListCapacityProvidersCommandOutput>(
  _ep0,
  _mw0,
  "ListCapacityProviders",
  ListCapacityProviders$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCapacityProvidersInput;
      output: ListCapacityProvidersOutput;
    };
    sdk: {
      input: ListCapacityProvidersCommandInput;
      output: ListCapacityProvidersCommandOutput;
    };
  };
}

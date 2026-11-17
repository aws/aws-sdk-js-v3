// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgentInsightStoresRequest, ListAgentInsightStoresResponse } from "../models/models_0";
import { ListAgentInsightStores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgentInsightStoresCommand}.
 */
export interface ListAgentInsightStoresCommandInput extends ListAgentInsightStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentInsightStoresCommand}.
 */
export interface ListAgentInsightStoresCommandOutput extends ListAgentInsightStoresResponse, __MetadataBearer {}

/**
 * Lists the account's service-defined default Agent Insight Store. The
 * singleton backing state may be initialized on first access.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListAgentInsightStoresCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListAgentInsightStoresCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListAgentInsightStoresRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAgentInsightStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentInsightStoresResponse
 * //   agentInsightStores: [ // AgentInsightStoreSummaryList // required
 * //     { // AgentInsightStoreSummary
 * //       agentInsightStoreArn: "STRING_VALUE", // required
 * //       agentInsightStoreId: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "UPDATING" || "INACTIVE" || "ERROR", // required
 * //       enablementStatus: "ENABLED" || "DISABLED", // required
 * //       encryptionConfiguration: { // AgentInsightStoreEncryptionConfiguration
 * //         mode: "AWS_OWNED_KMS_KEY" || "CUSTOMER_MANAGED_KMS", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentInsightStoresCommandInput - {@link ListAgentInsightStoresCommandInput}
 * @returns {@link ListAgentInsightStoresCommandOutput}
 * @see {@link ListAgentInsightStoresCommandInput} for command's `input` shape.
 * @see {@link ListAgentInsightStoresCommandOutput} for command's `response` shape.
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
export class ListAgentInsightStoresCommand extends command<ListAgentInsightStoresCommandInput, ListAgentInsightStoresCommandOutput>(
  _ep0,
  _mw0,
  "ListAgentInsightStores",
  ListAgentInsightStores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentInsightStoresRequest;
      output: ListAgentInsightStoresResponse;
    };
    sdk: {
      input: ListAgentInsightStoresCommandInput;
      output: ListAgentInsightStoresCommandOutput;
    };
  };
}

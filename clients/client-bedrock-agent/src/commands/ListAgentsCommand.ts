// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BedrockAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockAgentClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAgentsRequest, ListAgentsResponse } from "../models/models_0";
import { ListAgents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgentsCommand}.
 */
export interface ListAgentsCommandInput extends ListAgentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentsCommand}.
 */
export interface ListAgentsCommandOutput extends ListAgentsResponse, __MetadataBearer {}

/**
 * <p>Lists the agents belonging to an account and information about each agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, ListAgentsCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, ListAgentsCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // ListAgentsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentsResponse
 * //   agentSummaries: [ // AgentSummaries // required
 * //     { // AgentSummary
 * //       agentId: "STRING_VALUE", // required
 * //       agentName: "STRING_VALUE", // required
 * //       agentStatus: "CREATING" || "PREPARING" || "PREPARED" || "NOT_PREPARED" || "DELETING" || "FAILED" || "VERSIONING" || "UPDATING", // required
 * //       description: "STRING_VALUE",
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       latestAgentVersion: "STRING_VALUE",
 * //       guardrailConfiguration: { // GuardrailConfiguration
 * //         guardrailIdentifier: "STRING_VALUE",
 * //         guardrailVersion: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentsCommandInput - {@link ListAgentsCommandInput}
 * @returns {@link ListAgentsCommandOutput}
 * @see {@link ListAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAgentsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class ListAgentsCommand extends $Command
  .classBuilder<
    ListAgentsCommandInput,
    ListAgentsCommandOutput,
    BedrockAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentBuildTimeLambda", "ListAgents", {})
  .n("BedrockAgentClient", "ListAgentsCommand")
  .sc(ListAgents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentsRequest;
      output: ListAgentsResponse;
    };
    sdk: {
      input: ListAgentsCommandInput;
      output: ListAgentsCommandOutput;
    };
  };
}

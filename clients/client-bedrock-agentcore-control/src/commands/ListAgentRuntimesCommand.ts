// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAgentRuntimesRequest, ListAgentRuntimesResponse } from "../models/models_0";
import { ListAgentRuntimes } from "../schemas/schemas_4_Agent";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgentRuntimesCommand}.
 */
export interface ListAgentRuntimesCommandInput extends ListAgentRuntimesRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentRuntimesCommand}.
 */
export interface ListAgentRuntimesCommandOutput extends ListAgentRuntimesResponse, __MetadataBearer {}

/**
 * <p>Lists all Amazon Secure Agents in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListAgentRuntimesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListAgentRuntimesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListAgentRuntimesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentRuntimesCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentRuntimesResponse
 * //   agentRuntimes: [ // AgentRuntimes // required
 * //     { // AgentRuntime
 * //       agentRuntimeArn: "STRING_VALUE", // required
 * //       agentRuntimeId: "STRING_VALUE", // required
 * //       agentRuntimeVersion: "STRING_VALUE", // required
 * //       agentRuntimeName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentRuntimesCommandInput - {@link ListAgentRuntimesCommandInput}
 * @returns {@link ListAgentRuntimesCommandOutput}
 * @see {@link ListAgentRuntimesCommandInput} for command's `input` shape.
 * @see {@link ListAgentRuntimesCommandOutput} for command's `response` shape.
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
export class ListAgentRuntimesCommand extends $Command
  .classBuilder<
    ListAgentRuntimesCommandInput,
    ListAgentRuntimesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListAgentRuntimes", {})
  .n("BedrockAgentCoreControlClient", "ListAgentRuntimesCommand")
  .sc(ListAgentRuntimes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentRuntimesRequest;
      output: ListAgentRuntimesResponse;
    };
    sdk: {
      input: ListAgentRuntimesCommandInput;
      output: ListAgentRuntimesCommandOutput;
    };
  };
}

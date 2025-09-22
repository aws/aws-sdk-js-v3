// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentRuntimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAgentMemoryRequest, GetAgentMemoryResponse } from "../models/models_0";
import { GetAgentMemory } from "../schemas/schemas_5_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgentMemoryCommand}.
 */
export interface GetAgentMemoryCommandInput extends GetAgentMemoryRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentMemoryCommand}.
 */
export interface GetAgentMemoryCommandOutput extends GetAgentMemoryResponse, __MetadataBearer {}

/**
 * <p>Gets the sessions stored in the memory of the agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentRuntimeClient, GetAgentMemoryCommand } from "@aws-sdk/client-bedrock-agent-runtime"; // ES Modules import
 * // const { BedrockAgentRuntimeClient, GetAgentMemoryCommand } = require("@aws-sdk/client-bedrock-agent-runtime"); // CommonJS import
 * // import type { BedrockAgentRuntimeClientConfig } from "@aws-sdk/client-bedrock-agent-runtime";
 * const config = {}; // type is BedrockAgentRuntimeClientConfig
 * const client = new BedrockAgentRuntimeClient(config);
 * const input = { // GetAgentMemoryRequest
 *   nextToken: "STRING_VALUE",
 *   maxItems: Number("int"),
 *   agentId: "STRING_VALUE", // required
 *   agentAliasId: "STRING_VALUE", // required
 *   memoryType: "SESSION_SUMMARY", // required
 *   memoryId: "STRING_VALUE", // required
 * };
 * const command = new GetAgentMemoryCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentMemoryResponse
 * //   nextToken: "STRING_VALUE",
 * //   memoryContents: [ // Memories
 * //     { // Memory Union: only one key present
 * //       sessionSummary: { // MemorySessionSummary
 * //         memoryId: "STRING_VALUE",
 * //         sessionId: "STRING_VALUE",
 * //         sessionStartTime: new Date("TIMESTAMP"),
 * //         sessionExpiryTime: new Date("TIMESTAMP"),
 * //         summaryText: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAgentMemoryCommandInput - {@link GetAgentMemoryCommandInput}
 * @returns {@link GetAgentMemoryCommandOutput}
 * @see {@link GetAgentMemoryCommandInput} for command's `input` shape.
 * @see {@link GetAgentMemoryCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentRuntimeClientResolvedConfig | config} for BedrockAgentRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions. Check your permissions and retry your request.</p>
 *
 * @throws {@link BadGatewayException} (server fault)
 *  <p>There was an issue with a dependency due to a server issue. Retry your request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict performing an operation. Resolve the conflict and retry your request.</p>
 *
 * @throws {@link DependencyFailedException} (client fault)
 *  <p>There was an issue with a dependency. Check the resource configurations and retry the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentRuntimeServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentRuntime service.</p>
 *
 *
 * @public
 */
export class GetAgentMemoryCommand extends $Command
  .classBuilder<
    GetAgentMemoryCommandInput,
    GetAgentMemoryCommandOutput,
    BedrockAgentRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentRunTimeService", "GetAgentMemory", {})
  .n("BedrockAgentRuntimeClient", "GetAgentMemoryCommand")
  .sc(GetAgentMemory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentMemoryRequest;
      output: GetAgentMemoryResponse;
    };
    sdk: {
      input: GetAgentMemoryCommandInput;
      output: GetAgentMemoryCommandOutput;
    };
  };
}

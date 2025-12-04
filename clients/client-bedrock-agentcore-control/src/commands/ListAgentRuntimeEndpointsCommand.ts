// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAgentRuntimeEndpointsRequest, ListAgentRuntimeEndpointsResponse } from "../models/models_0";
import { ListAgentRuntimeEndpoints } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgentRuntimeEndpointsCommand}.
 */
export interface ListAgentRuntimeEndpointsCommandInput extends ListAgentRuntimeEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentRuntimeEndpointsCommand}.
 */
export interface ListAgentRuntimeEndpointsCommandOutput extends ListAgentRuntimeEndpointsResponse, __MetadataBearer {}

/**
 * <p>Lists all endpoints for a specific Amazon Secure Agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListAgentRuntimeEndpointsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListAgentRuntimeEndpointsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListAgentRuntimeEndpointsRequest
 *   agentRuntimeId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgentRuntimeEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgentRuntimeEndpointsResponse
 * //   runtimeEndpoints: [ // AgentRuntimeEndpoints // required
 * //     { // AgentRuntimeEndpoint
 * //       name: "STRING_VALUE", // required
 * //       liveVersion: "STRING_VALUE",
 * //       targetVersion: "STRING_VALUE",
 * //       agentRuntimeEndpointArn: "STRING_VALUE", // required
 * //       agentRuntimeArn: "STRING_VALUE", // required
 * //       status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING", // required
 * //       id: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgentRuntimeEndpointsCommandInput - {@link ListAgentRuntimeEndpointsCommandInput}
 * @returns {@link ListAgentRuntimeEndpointsCommandOutput}
 * @see {@link ListAgentRuntimeEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListAgentRuntimeEndpointsCommandOutput} for command's `response` shape.
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
export class ListAgentRuntimeEndpointsCommand extends $Command
  .classBuilder<
    ListAgentRuntimeEndpointsCommandInput,
    ListAgentRuntimeEndpointsCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListAgentRuntimeEndpoints", {})
  .n("BedrockAgentCoreControlClient", "ListAgentRuntimeEndpointsCommand")
  .sc(ListAgentRuntimeEndpoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgentRuntimeEndpointsRequest;
      output: ListAgentRuntimeEndpointsResponse;
    };
    sdk: {
      input: ListAgentRuntimeEndpointsCommandInput;
      output: ListAgentRuntimeEndpointsCommandOutput;
    };
  };
}

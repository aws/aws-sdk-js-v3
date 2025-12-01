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
import type { UpdateAgentRuntimeEndpointRequest, UpdateAgentRuntimeEndpointResponse } from "../models/models_0";
import { UpdateAgentRuntimeEndpoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAgentRuntimeEndpointCommand}.
 */
export interface UpdateAgentRuntimeEndpointCommandInput extends UpdateAgentRuntimeEndpointRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentRuntimeEndpointCommand}.
 */
export interface UpdateAgentRuntimeEndpointCommandOutput extends UpdateAgentRuntimeEndpointResponse, __MetadataBearer {}

/**
 * <p>Updates an existing Amazon Bedrock AgentCore Runtime endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateAgentRuntimeEndpointCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateAgentRuntimeEndpointCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateAgentRuntimeEndpointRequest
 *   agentRuntimeId: "STRING_VALUE", // required
 *   endpointName: "STRING_VALUE", // required
 *   agentRuntimeVersion: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateAgentRuntimeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentRuntimeEndpointResponse
 * //   liveVersion: "STRING_VALUE",
 * //   targetVersion: "STRING_VALUE",
 * //   agentRuntimeEndpointArn: "STRING_VALUE", // required
 * //   agentRuntimeArn: "STRING_VALUE", // required
 * //   status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateAgentRuntimeEndpointCommandInput - {@link UpdateAgentRuntimeEndpointCommandInput}
 * @returns {@link UpdateAgentRuntimeEndpointCommandOutput}
 * @see {@link UpdateAgentRuntimeEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentRuntimeEndpointCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
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
export class UpdateAgentRuntimeEndpointCommand extends $Command
  .classBuilder<
    UpdateAgentRuntimeEndpointCommandInput,
    UpdateAgentRuntimeEndpointCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdateAgentRuntimeEndpoint", {})
  .n("BedrockAgentCoreControlClient", "UpdateAgentRuntimeEndpointCommand")
  .sc(UpdateAgentRuntimeEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentRuntimeEndpointRequest;
      output: UpdateAgentRuntimeEndpointResponse;
    };
    sdk: {
      input: UpdateAgentRuntimeEndpointCommandInput;
      output: UpdateAgentRuntimeEndpointCommandOutput;
    };
  };
}

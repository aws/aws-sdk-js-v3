// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAgentRuntimeEndpointRequest,
  CreateAgentRuntimeEndpointRequestFilterSensitiveLog,
  CreateAgentRuntimeEndpointResponse,
} from "../models/models_0";
import { de_CreateAgentRuntimeEndpointCommand, se_CreateAgentRuntimeEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAgentRuntimeEndpointCommand}.
 */
export interface CreateAgentRuntimeEndpointCommandInput extends CreateAgentRuntimeEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentRuntimeEndpointCommand}.
 */
export interface CreateAgentRuntimeEndpointCommandOutput extends CreateAgentRuntimeEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Secure AgentEndpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateAgentRuntimeEndpointCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateAgentRuntimeEndpointCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateAgentRuntimeEndpointRequest
 *   agentRuntimeId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   agentRuntimeVersion: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAgentRuntimeEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentRuntimeEndpointResponse
 * //   targetVersion: "STRING_VALUE", // required
 * //   agentRuntimeEndpointArn: "STRING_VALUE", // required
 * //   agentRuntimeArn: "STRING_VALUE", // required
 * //   status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateAgentRuntimeEndpointCommandInput - {@link CreateAgentRuntimeEndpointCommandInput}
 * @returns {@link CreateAgentRuntimeEndpointCommandOutput}
 * @see {@link CreateAgentRuntimeEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateAgentRuntimeEndpointCommandOutput} for command's `response` shape.
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
export class CreateAgentRuntimeEndpointCommand extends $Command
  .classBuilder<
    CreateAgentRuntimeEndpointCommandInput,
    CreateAgentRuntimeEndpointCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateAgentRuntimeEndpoint", {})
  .n("BedrockAgentCoreControlClient", "CreateAgentRuntimeEndpointCommand")
  .f(CreateAgentRuntimeEndpointRequestFilterSensitiveLog, void 0)
  .ser(se_CreateAgentRuntimeEndpointCommand)
  .de(de_CreateAgentRuntimeEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentRuntimeEndpointRequest;
      output: CreateAgentRuntimeEndpointResponse;
    };
    sdk: {
      input: CreateAgentRuntimeEndpointCommandInput;
      output: CreateAgentRuntimeEndpointCommandOutput;
    };
  };
}

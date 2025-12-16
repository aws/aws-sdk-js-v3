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
import type { CreatePolicyEngineRequest, CreatePolicyEngineResponse } from "../models/models_0";
import { CreatePolicyEngine } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePolicyEngineCommand}.
 */
export interface CreatePolicyEngineCommandInput extends CreatePolicyEngineRequest {}
/**
 * @public
 *
 * The output of {@link CreatePolicyEngineCommand}.
 */
export interface CreatePolicyEngineCommandOutput extends CreatePolicyEngineResponse, __MetadataBearer {}

/**
 * <p>Creates a new policy engine within the AgentCore Policy system. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with Gateways (each Gateway can be associated with at most one policy engine, but multiple Gateways can be associated with the same engine), the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies. This is an asynchronous operation. Use the <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_GetPolicyEngine.html">GetPolicyEngine</a> operation to poll the <code>status</code> field to track completion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreatePolicyEngineCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreatePolicyEngineCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreatePolicyEngineRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePolicyEngineCommand(input);
 * const response = await client.send(command);
 * // { // CreatePolicyEngineResponse
 * //   policyEngineId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   policyEngineArn: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * //   statusReasons: [ // PolicyStatusReasons // required
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreatePolicyEngineCommandInput - {@link CreatePolicyEngineCommandInput}
 * @returns {@link CreatePolicyEngineCommandOutput}
 * @see {@link CreatePolicyEngineCommandInput} for command's `input` shape.
 * @see {@link CreatePolicyEngineCommandOutput} for command's `response` shape.
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
export class CreatePolicyEngineCommand extends $Command
  .classBuilder<
    CreatePolicyEngineCommandInput,
    CreatePolicyEngineCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreatePolicyEngine", {})
  .n("BedrockAgentCoreControlClient", "CreatePolicyEngineCommand")
  .sc(CreatePolicyEngine)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePolicyEngineRequest;
      output: CreatePolicyEngineResponse;
    };
    sdk: {
      input: CreatePolicyEngineCommandInput;
      output: CreatePolicyEngineCommandOutput;
    };
  };
}

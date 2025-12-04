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
import type { StartPolicyGenerationRequest, StartPolicyGenerationResponse } from "../models/models_0";
import { StartPolicyGeneration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartPolicyGenerationCommand}.
 */
export interface StartPolicyGenerationCommandInput extends StartPolicyGenerationRequest {}
/**
 * @public
 *
 * The output of {@link StartPolicyGenerationCommand}.
 */
export interface StartPolicyGenerationCommandOutput extends StartPolicyGenerationResponse, __MetadataBearer {}

/**
 * <p>Initiates the AI-powered generation of Cedar policies from natural language descriptions within the AgentCore Policy system. This feature enables both technical and non-technical users to create policies by describing their authorization requirements in plain English, which is then automatically translated into formal Cedar policy statements. The generation process analyzes the natural language input along with the Gateway's tool context to produce validated policy options. Generated policy assets are automatically deleted after 7 days, so you should review and create policies from the generated assets within this timeframe. Once created, policies are permanent and not subject to this expiration. Generated policies should be reviewed and tested in log-only mode before deploying to production. Use this when you want to describe policy intent naturally rather than learning Cedar syntax, though generated policies may require refinement for complex scenarios.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, StartPolicyGenerationCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, StartPolicyGenerationCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // StartPolicyGenerationRequest
 *   policyEngineId: "STRING_VALUE", // required
 *   resource: { // Resource Union: only one key present
 *     arn: "STRING_VALUE",
 *   },
 *   content: { // Content Union: only one key present
 *     rawText: "STRING_VALUE",
 *   },
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartPolicyGenerationCommand(input);
 * const response = await client.send(command);
 * // { // StartPolicyGenerationResponse
 * //   policyEngineId: "STRING_VALUE", // required
 * //   policyGenerationId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   policyGenerationArn: "STRING_VALUE", // required
 * //   resource: { // Resource Union: only one key present
 * //     arn: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "GENERATING" || "GENERATED" || "GENERATE_FAILED" || "DELETE_FAILED", // required
 * //   statusReasons: [ // PolicyStatusReasons // required
 * //     "STRING_VALUE",
 * //   ],
 * //   findings: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartPolicyGenerationCommandInput - {@link StartPolicyGenerationCommandInput}
 * @returns {@link StartPolicyGenerationCommandOutput}
 * @see {@link StartPolicyGenerationCommandInput} for command's `input` shape.
 * @see {@link StartPolicyGenerationCommandOutput} for command's `response` shape.
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
export class StartPolicyGenerationCommand extends $Command
  .classBuilder<
    StartPolicyGenerationCommandInput,
    StartPolicyGenerationCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "StartPolicyGeneration", {})
  .n("BedrockAgentCoreControlClient", "StartPolicyGenerationCommand")
  .sc(StartPolicyGeneration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPolicyGenerationRequest;
      output: StartPolicyGenerationResponse;
    };
    sdk: {
      input: StartPolicyGenerationCommandInput;
      output: StartPolicyGenerationCommandOutput;
    };
  };
}

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
import type { GetPolicyGenerationRequest, GetPolicyGenerationResponse } from "../models/models_0";
import { GetPolicyGeneration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPolicyGenerationCommand}.
 */
export interface GetPolicyGenerationCommandInput extends GetPolicyGenerationRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyGenerationCommand}.
 */
export interface GetPolicyGenerationCommandOutput extends GetPolicyGenerationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a policy generation request within the AgentCore Policy system. Policy generation converts natural language descriptions into Cedar policy statements using AI-powered translation, enabling non-technical users to create policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetPolicyGenerationCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetPolicyGenerationCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetPolicyGenerationRequest
 *   policyGenerationId: "STRING_VALUE", // required
 *   policyEngineId: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyGenerationCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyGenerationResponse
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
 * @param GetPolicyGenerationCommandInput - {@link GetPolicyGenerationCommandInput}
 * @returns {@link GetPolicyGenerationCommandOutput}
 * @see {@link GetPolicyGenerationCommandInput} for command's `input` shape.
 * @see {@link GetPolicyGenerationCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
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
export class GetPolicyGenerationCommand extends $Command
  .classBuilder<
    GetPolicyGenerationCommandInput,
    GetPolicyGenerationCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetPolicyGeneration", {})
  .n("BedrockAgentCoreControlClient", "GetPolicyGenerationCommand")
  .sc(GetPolicyGeneration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyGenerationRequest;
      output: GetPolicyGenerationResponse;
    };
    sdk: {
      input: GetPolicyGenerationCommandInput;
      output: GetPolicyGenerationCommandOutput;
    };
  };
}

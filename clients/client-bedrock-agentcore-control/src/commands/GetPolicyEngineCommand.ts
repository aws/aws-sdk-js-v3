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
import { GetPolicyEngineRequest, GetPolicyEngineResponse } from "../models/models_0";
import { GetPolicyEngine } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPolicyEngineCommand}.
 */
export interface GetPolicyEngineCommandInput extends GetPolicyEngineRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyEngineCommand}.
 */
export interface GetPolicyEngineCommandOutput extends GetPolicyEngineResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific policy engine within the AgentCore Policy system. This operation returns the complete policy engine configuration, metadata, and current status, allowing administrators to review and manage policy engine settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetPolicyEngineCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetPolicyEngineCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetPolicyEngineRequest
 *   policyEngineId: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyEngineCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyEngineResponse
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
 * @param GetPolicyEngineCommandInput - {@link GetPolicyEngineCommandInput}
 * @returns {@link GetPolicyEngineCommandOutput}
 * @see {@link GetPolicyEngineCommandInput} for command's `input` shape.
 * @see {@link GetPolicyEngineCommandOutput} for command's `response` shape.
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
export class GetPolicyEngineCommand extends $Command
  .classBuilder<
    GetPolicyEngineCommandInput,
    GetPolicyEngineCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetPolicyEngine", {})
  .n("BedrockAgentCoreControlClient", "GetPolicyEngineCommand")
  .sc(GetPolicyEngine)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyEngineRequest;
      output: GetPolicyEngineResponse;
    };
    sdk: {
      input: GetPolicyEngineCommandInput;
      output: GetPolicyEngineCommandOutput;
    };
  };
}

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
import type { DeleteOnlineEvaluationConfigRequest, DeleteOnlineEvaluationConfigResponse } from "../models/models_0";
import { DeleteOnlineEvaluationConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOnlineEvaluationConfigCommand}.
 */
export interface DeleteOnlineEvaluationConfigCommandInput extends DeleteOnlineEvaluationConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOnlineEvaluationConfigCommand}.
 */
export interface DeleteOnlineEvaluationConfigCommandOutput
  extends DeleteOnlineEvaluationConfigResponse,
    __MetadataBearer {}

/**
 * <p> Deletes an online evaluation configuration and stops any ongoing evaluation processes associated with it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteOnlineEvaluationConfigCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteOnlineEvaluationConfigCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteOnlineEvaluationConfigRequest
 *   onlineEvaluationConfigId: "STRING_VALUE", // required
 * };
 * const command = new DeleteOnlineEvaluationConfigCommand(input);
 * const response = await client.send(command);
 * // { // DeleteOnlineEvaluationConfigResponse
 * //   onlineEvaluationConfigArn: "STRING_VALUE", // required
 * //   onlineEvaluationConfigId: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param DeleteOnlineEvaluationConfigCommandInput - {@link DeleteOnlineEvaluationConfigCommandInput}
 * @returns {@link DeleteOnlineEvaluationConfigCommandOutput}
 * @see {@link DeleteOnlineEvaluationConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteOnlineEvaluationConfigCommandOutput} for command's `response` shape.
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
export class DeleteOnlineEvaluationConfigCommand extends $Command
  .classBuilder<
    DeleteOnlineEvaluationConfigCommandInput,
    DeleteOnlineEvaluationConfigCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "DeleteOnlineEvaluationConfig", {})
  .n("BedrockAgentCoreControlClient", "DeleteOnlineEvaluationConfigCommand")
  .sc(DeleteOnlineEvaluationConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOnlineEvaluationConfigRequest;
      output: DeleteOnlineEvaluationConfigResponse;
    };
    sdk: {
      input: DeleteOnlineEvaluationConfigCommandInput;
      output: DeleteOnlineEvaluationConfigCommandOutput;
    };
  };
}

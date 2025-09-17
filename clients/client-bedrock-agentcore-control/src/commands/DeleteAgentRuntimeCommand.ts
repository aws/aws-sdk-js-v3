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
import { DeleteAgentRuntimeRequest, DeleteAgentRuntimeResponse } from "../models/models_0";
import { de_DeleteAgentRuntimeCommand, se_DeleteAgentRuntimeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAgentRuntimeCommand}.
 */
export interface DeleteAgentRuntimeCommandInput extends DeleteAgentRuntimeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentRuntimeCommand}.
 */
export interface DeleteAgentRuntimeCommandOutput extends DeleteAgentRuntimeResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon Secure Agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, DeleteAgentRuntimeCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, DeleteAgentRuntimeCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // DeleteAgentRuntimeRequest
 *   agentRuntimeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgentRuntimeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAgentRuntimeResponse
 * //   status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param DeleteAgentRuntimeCommandInput - {@link DeleteAgentRuntimeCommandInput}
 * @returns {@link DeleteAgentRuntimeCommandOutput}
 * @see {@link DeleteAgentRuntimeCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentRuntimeCommandOutput} for command's `response` shape.
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
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class DeleteAgentRuntimeCommand extends $Command
  .classBuilder<
    DeleteAgentRuntimeCommandInput,
    DeleteAgentRuntimeCommandOutput,
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
  .s("AmazonBedrockAgentCoreControl", "DeleteAgentRuntime", {})
  .n("BedrockAgentCoreControlClient", "DeleteAgentRuntimeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAgentRuntimeCommand)
  .de(de_DeleteAgentRuntimeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentRuntimeRequest;
      output: DeleteAgentRuntimeResponse;
    };
    sdk: {
      input: DeleteAgentRuntimeCommandInput;
      output: DeleteAgentRuntimeCommandOutput;
    };
  };
}

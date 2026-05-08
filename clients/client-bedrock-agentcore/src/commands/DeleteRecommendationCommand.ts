// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteRecommendationRequest, DeleteRecommendationResponse } from "../models/models_0";
import { DeleteRecommendation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRecommendationCommand}.
 */
export interface DeleteRecommendationCommandInput extends DeleteRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecommendationCommand}.
 */
export interface DeleteRecommendationCommandOutput extends DeleteRecommendationResponse, __MetadataBearer {}

/**
 * <p>Deletes a recommendation and its associated results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, DeleteRecommendationCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, DeleteRecommendationCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // DeleteRecommendationRequest
 *   recommendationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRecommendationResponse
 * //   recommendationId: "STRING_VALUE", // required
 * //   status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param DeleteRecommendationCommandInput - {@link DeleteRecommendationCommandInput}
 * @returns {@link DeleteRecommendationCommandOutput}
 * @see {@link DeleteRecommendationCommandInput} for command's `input` shape.
 * @see {@link DeleteRecommendationCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The exception that occurs when the request conflicts with the current state of the resource. This can happen when trying to modify a resource that is currently being modified by another request, or when trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception that occurs when the request was denied due to request throttling. This happens when you exceed the allowed request rate for an operation. Reduce the frequency of requests or implement exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The exception that occurs when the input fails to satisfy the constraints specified by the service. Check the error message for details about which input parameter is invalid and correct your request.</p>
 *
 * @throws {@link BedrockAgentCoreServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCore service.</p>
 *
 *
 * @public
 */
export class DeleteRecommendationCommand extends $Command
  .classBuilder<
    DeleteRecommendationCommandInput,
    DeleteRecommendationCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "DeleteRecommendation", {})
  .n("BedrockAgentCoreClient", "DeleteRecommendationCommand")
  .sc(DeleteRecommendation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecommendationRequest;
      output: DeleteRecommendationResponse;
    };
    sdk: {
      input: DeleteRecommendationCommandInput;
      output: DeleteRecommendationCommandOutput;
    };
  };
}

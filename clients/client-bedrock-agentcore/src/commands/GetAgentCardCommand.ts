// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAgentCardRequest, GetAgentCardResponse } from "../models/models_0";
import { GetAgentCard$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgentCardCommand}.
 */
export interface GetAgentCardCommandInput extends GetAgentCardRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentCardCommand}.
 */
export interface GetAgentCardCommandOutput extends GetAgentCardResponse, __MetadataBearer {}

/**
 * <p>Retrieves the A2A agent card associated with an AgentCore Runtime agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetAgentCardCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetAgentCardCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetAgentCardRequest
 *   runtimeSessionId: "STRING_VALUE",
 *   agentRuntimeArn: "STRING_VALUE", // required
 *   qualifier: "STRING_VALUE",
 * };
 * const command = new GetAgentCardCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentCardResponse
 * //   runtimeSessionId: "STRING_VALUE",
 * //   agentCard: "DOCUMENT_VALUE", // required
 * //   statusCode: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetAgentCardCommandInput - {@link GetAgentCardCommandInput}
 * @returns {@link GetAgentCardCommandOutput}
 * @see {@link GetAgentCardCommandInput} for command's `input` shape.
 * @see {@link GetAgentCardCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreClientResolvedConfig | config} for BedrockAgentCoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The exception that occurs when you do not have sufficient permissions to perform an action. Verify that your IAM policy includes the necessary permissions for the operation you are trying to perform.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The exception that occurs when the service encounters an unexpected internal error. This is a temporary condition that will resolve itself with retries. We recommend implementing exponential backoff retry logic in your application.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The exception that occurs when the specified resource does not exist. This can happen when using an invalid identifier or when trying to access a resource that has been deleted.</p>
 *
 * @throws {@link RuntimeClientError} (client fault)
 *  <p>The exception that occurs when there is an error in the runtime client. This can happen due to network issues, invalid configuration, or other client-side problems. Check the error message for specific details about the error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The exception that occurs when the request would cause a service quota to be exceeded. Review your service quotas and either reduce your request rate or request a quota increase.</p>
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
export class GetAgentCardCommand extends $Command
  .classBuilder<
    GetAgentCardCommandInput,
    GetAgentCardCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "GetAgentCard", {})
  .n("BedrockAgentCoreClient", "GetAgentCardCommand")
  .sc(GetAgentCard$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentCardRequest;
      output: GetAgentCardResponse;
    };
    sdk: {
      input: GetAgentCardCommandInput;
      output: GetAgentCardCommandOutput;
    };
  };
}

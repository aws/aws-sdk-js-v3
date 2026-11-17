// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAgentInsightRequest, UpdateAgentInsightResponse } from "../models/models_0";
import { UpdateAgentInsight$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAgentInsightCommand}.
 */
export interface UpdateAgentInsightCommandInput extends UpdateAgentInsightRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAgentInsightCommand}.
 */
export interface UpdateAgentInsightCommandOutput extends UpdateAgentInsightResponse, __MetadataBearer {}

/**
 * <p>Updates the archive status of an Amazon Bedrock AgentCore Agent Insight.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, UpdateAgentInsightCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, UpdateAgentInsightCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // UpdateAgentInsightRequest
 *   applicationName: "STRING_VALUE", // required
 *   agentInsightId: "STRING_VALUE", // required
 *   archiveStatus: "ACTIVE" || "ARCHIVED", // required
 * };
 * const command = new UpdateAgentInsightCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentInsightResponse
 * //   agentInsightId: "STRING_VALUE", // required
 * //   archiveStatus: "ACTIVE" || "ARCHIVED", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateAgentInsightCommandInput - {@link UpdateAgentInsightCommandInput}
 * @returns {@link UpdateAgentInsightCommandOutput}
 * @see {@link UpdateAgentInsightCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentInsightCommandOutput} for command's `response` shape.
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
export class UpdateAgentInsightCommand extends command<UpdateAgentInsightCommandInput, UpdateAgentInsightCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAgentInsight",
  UpdateAgentInsight$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentInsightRequest;
      output: UpdateAgentInsightResponse;
    };
    sdk: {
      input: UpdateAgentInsightCommandInput;
      output: UpdateAgentInsightCommandOutput;
    };
  };
}

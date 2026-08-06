// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCapacityProviderSessionRequest, DeleteCapacityProviderSessionResponse } from "../models/models_0";
import { DeleteCapacityProviderSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCapacityProviderSessionCommand}.
 */
export interface DeleteCapacityProviderSessionCommandInput extends DeleteCapacityProviderSessionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCapacityProviderSessionCommand}.
 */
export interface DeleteCapacityProviderSessionCommandOutput extends DeleteCapacityProviderSessionResponse, __MetadataBearer {}

/**
 * <p>Deletes a session associated with a capacity provider in Amazon Bedrock AgentCore and makes the session unavailable for further use. To delete a capacity provider session, specify both the capacity provider identifier and the session ID. After you delete a session, you cannot restart it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, DeleteCapacityProviderSessionCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, DeleteCapacityProviderSessionCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // DeleteCapacityProviderSessionRequest
 *   capacityProviderId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCapacityProviderSessionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCapacityProviderSessionResponse
 * //   capacityProviderArn: "STRING_VALUE", // required
 * //   sessionId: "STRING_VALUE", // required
 * //   status: "Provisioning" || "Deprovisioning" || "Active" || "Deleting" || "Deleted" || "Stopped", // required
 * // };
 *
 * ```
 *
 * @param DeleteCapacityProviderSessionCommandInput - {@link DeleteCapacityProviderSessionCommandInput}
 * @returns {@link DeleteCapacityProviderSessionCommandOutput}
 * @see {@link DeleteCapacityProviderSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteCapacityProviderSessionCommandOutput} for command's `response` shape.
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
export class DeleteCapacityProviderSessionCommand extends command<DeleteCapacityProviderSessionCommandInput, DeleteCapacityProviderSessionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCapacityProviderSession",
  DeleteCapacityProviderSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCapacityProviderSessionRequest;
      output: DeleteCapacityProviderSessionResponse;
    };
    sdk: {
      input: DeleteCapacityProviderSessionCommandInput;
      output: DeleteCapacityProviderSessionCommandOutput;
    };
  };
}

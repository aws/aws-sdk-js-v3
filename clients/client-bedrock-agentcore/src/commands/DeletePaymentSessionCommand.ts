// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePaymentSessionRequest, DeletePaymentSessionResponse } from "../models/models_1";
import { DeletePaymentSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePaymentSessionCommand}.
 */
export interface DeletePaymentSessionCommandInput extends DeletePaymentSessionRequest {}
/**
 * @public
 *
 * The output of {@link DeletePaymentSessionCommand}.
 */
export interface DeletePaymentSessionCommandOutput extends DeletePaymentSessionResponse, __MetadataBearer {}

/**
 * <p>Deletes a payment session. This permanently removes the payment session record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, DeletePaymentSessionCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, DeletePaymentSessionCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // DeletePaymentSessionRequest
 *   userId: "STRING_VALUE",
 *   paymentManagerArn: "STRING_VALUE", // required
 *   paymentSessionId: "STRING_VALUE", // required
 * };
 * const command = new DeletePaymentSessionCommand(input);
 * const response = await client.send(command);
 * // { // DeletePaymentSessionResponse
 * //   status: "ACTIVE" || "EXPIRED" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param DeletePaymentSessionCommandInput - {@link DeletePaymentSessionCommandInput}
 * @returns {@link DeletePaymentSessionCommandOutput}
 * @see {@link DeletePaymentSessionCommandInput} for command's `input` shape.
 * @see {@link DeletePaymentSessionCommandOutput} for command's `response` shape.
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
export class DeletePaymentSessionCommand extends command<DeletePaymentSessionCommandInput, DeletePaymentSessionCommandOutput>(
  _ep0,
  _mw0,
  "DeletePaymentSession",
  DeletePaymentSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePaymentSessionRequest;
      output: DeletePaymentSessionResponse;
    };
    sdk: {
      input: DeletePaymentSessionCommandInput;
      output: DeletePaymentSessionCommandOutput;
    };
  };
}

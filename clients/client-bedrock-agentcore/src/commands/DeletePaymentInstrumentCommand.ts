// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePaymentInstrumentRequest, DeletePaymentInstrumentResponse } from "../models/models_1";
import { DeletePaymentInstrument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePaymentInstrumentCommand}.
 */
export interface DeletePaymentInstrumentCommandInput extends DeletePaymentInstrumentRequest {}
/**
 * @public
 *
 * The output of {@link DeletePaymentInstrumentCommand}.
 */
export interface DeletePaymentInstrumentCommandOutput extends DeletePaymentInstrumentResponse, __MetadataBearer {}

/**
 * <p>Deletes a payment instrument. This is a soft delete operation that preserves the record for audit and compliance purposes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, DeletePaymentInstrumentCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, DeletePaymentInstrumentCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // DeletePaymentInstrumentRequest
 *   userId: "STRING_VALUE",
 *   paymentManagerArn: "STRING_VALUE", // required
 *   paymentConnectorId: "STRING_VALUE", // required
 *   paymentInstrumentId: "STRING_VALUE", // required
 * };
 * const command = new DeletePaymentInstrumentCommand(input);
 * const response = await client.send(command);
 * // { // DeletePaymentInstrumentResponse
 * //   status: "INITIATED" || "ACTIVE" || "FAILED" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param DeletePaymentInstrumentCommandInput - {@link DeletePaymentInstrumentCommandInput}
 * @returns {@link DeletePaymentInstrumentCommandOutput}
 * @see {@link DeletePaymentInstrumentCommandInput} for command's `input` shape.
 * @see {@link DeletePaymentInstrumentCommandOutput} for command's `response` shape.
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
export class DeletePaymentInstrumentCommand extends command<DeletePaymentInstrumentCommandInput, DeletePaymentInstrumentCommandOutput>(
  _ep0,
  _mw0,
  "DeletePaymentInstrument",
  DeletePaymentInstrument$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePaymentInstrumentRequest;
      output: DeletePaymentInstrumentResponse;
    };
    sdk: {
      input: DeletePaymentInstrumentCommandInput;
      output: DeletePaymentInstrumentCommandOutput;
    };
  };
}

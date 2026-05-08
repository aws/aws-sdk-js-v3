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
import type { DeletePaymentInstrumentRequest, DeletePaymentInstrumentResponse } from "../models/models_1";
import { DeletePaymentInstrument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * Delete a payment instrument
 *
 * Marks a payment instrument as deleted by updating its status to DELETED. This is a soft delete
 * operation that preserves the record in the database for audit and compliance purposes. The record
 * remains queryable for audit purposes but is excluded from normal list and get operations.
 *
 * Deleting an already-deleted or non-existent instrument returns ResourceNotFoundException (404).
 *
 * Authorization: The caller must own the instrument (accountId, userId, and paymentManagerId must match).
 * If authorization fails, a 403 Forbidden error is returned.
 *
 * Timestamp Management: The updatedAt timestamp is set to the current time, while createdAt is preserved.
 * The version field is incremented for optimistic locking.
 *
 * Errors:
 * - ResourceNotFoundException: The instrument does not exist or is already deleted
 * - AccessDeniedException: The caller is not authorized to delete this instrument
 * - ValidationException: Required fields are missing or invalid
 * - InternalServerException: An unexpected server error occurred
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
export class DeletePaymentInstrumentCommand extends $Command
  .classBuilder<
    DeletePaymentInstrumentCommandInput,
    DeletePaymentInstrumentCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "DeletePaymentInstrument", {})
  .n("BedrockAgentCoreClient", "DeletePaymentInstrumentCommand")
  .sc(DeletePaymentInstrument$)
  .build() {
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

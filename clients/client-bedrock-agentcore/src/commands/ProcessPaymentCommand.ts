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
import type { ProcessPaymentRequest, ProcessPaymentResponse } from "../models/models_1";
import { ProcessPayment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ProcessPaymentCommand}.
 */
export interface ProcessPaymentCommandInput extends ProcessPaymentRequest {}
/**
 * @public
 *
 * The output of {@link ProcessPaymentCommand}.
 */
export interface ProcessPaymentCommandOutput extends ProcessPaymentResponse, __MetadataBearer {}

/**
 * Process a payment transaction
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, ProcessPaymentCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, ProcessPaymentCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // ProcessPaymentRequest
 *   userId: "STRING_VALUE",
 *   agentName: "STRING_VALUE",
 *   paymentManagerArn: "STRING_VALUE", // required
 *   paymentSessionId: "STRING_VALUE", // required
 *   paymentInstrumentId: "STRING_VALUE", // required
 *   paymentType: "CRYPTO_X402", // required
 *   paymentInput: { // PaymentInput Union: only one key present
 *     cryptoX402: { // CryptoX402PaymentInput
 *       version: "STRING_VALUE", // required
 *       payload: "DOCUMENT_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new ProcessPaymentCommand(input);
 * const response = await client.send(command);
 * // { // ProcessPaymentResponse
 * //   processPaymentId: "STRING_VALUE", // required
 * //   paymentManagerArn: "STRING_VALUE", // required
 * //   paymentSessionId: "STRING_VALUE", // required
 * //   paymentInstrumentId: "STRING_VALUE", // required
 * //   paymentType: "CRYPTO_X402", // required
 * //   status: "PROOF_GENERATED", // required
 * //   paymentOutput: { // PaymentOutput Union: only one key present
 * //     cryptoX402: { // CryptoX402PaymentOutput
 * //       version: "STRING_VALUE", // required
 * //       payload: "DOCUMENT_VALUE", // required
 * //     },
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param ProcessPaymentCommandInput - {@link ProcessPaymentCommandInput}
 * @returns {@link ProcessPaymentCommandOutput}
 * @see {@link ProcessPaymentCommandInput} for command's `input` shape.
 * @see {@link ProcessPaymentCommandOutput} for command's `response` shape.
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
export class ProcessPaymentCommand extends $Command
  .classBuilder<
    ProcessPaymentCommandInput,
    ProcessPaymentCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "ProcessPayment", {})
  .n("BedrockAgentCoreClient", "ProcessPaymentCommand")
  .sc(ProcessPayment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ProcessPaymentRequest;
      output: ProcessPaymentResponse;
    };
    sdk: {
      input: ProcessPaymentCommandInput;
      output: ProcessPaymentCommandOutput;
    };
  };
}

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
import type { GetPaymentSessionRequest, GetPaymentSessionResponse } from "../models/models_1";
import { GetPaymentSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPaymentSessionCommand}.
 */
export interface GetPaymentSessionCommandInput extends GetPaymentSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetPaymentSessionCommand}.
 */
export interface GetPaymentSessionCommandOutput extends GetPaymentSessionResponse, __MetadataBearer {}

/**
 * <p>Get a payment session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetPaymentSessionCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetPaymentSessionCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetPaymentSessionRequest
 *   userId: "STRING_VALUE",
 *   agentName: "STRING_VALUE",
 *   paymentManagerArn: "STRING_VALUE", // required
 *   paymentSessionId: "STRING_VALUE", // required
 * };
 * const command = new GetPaymentSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetPaymentSessionResponse
 * //   paymentSession: { // PaymentSession
 * //     paymentSessionId: "STRING_VALUE", // required
 * //     paymentManagerArn: "STRING_VALUE", // required
 * //     limits: { // SessionLimits
 * //       maxSpendAmount: { // Amount
 * //         value: "STRING_VALUE", // required
 * //         currency: "USD", // required
 * //       },
 * //     },
 * //     userId: "STRING_VALUE", // required
 * //     expiryTimeInMinutes: Number("int"), // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     availableLimits: { // AvailableLimits
 * //       availableSpendAmount: {
 * //         value: "STRING_VALUE", // required
 * //         currency: "USD", // required
 * //       },
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPaymentSessionCommandInput - {@link GetPaymentSessionCommandInput}
 * @returns {@link GetPaymentSessionCommandOutput}
 * @see {@link GetPaymentSessionCommandInput} for command's `input` shape.
 * @see {@link GetPaymentSessionCommandOutput} for command's `response` shape.
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
export class GetPaymentSessionCommand extends $Command
  .classBuilder<
    GetPaymentSessionCommandInput,
    GetPaymentSessionCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "GetPaymentSession", {})
  .n("BedrockAgentCoreClient", "GetPaymentSessionCommand")
  .sc(GetPaymentSession$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPaymentSessionRequest;
      output: GetPaymentSessionResponse;
    };
    sdk: {
      input: GetPaymentSessionCommandInput;
      output: GetPaymentSessionCommandOutput;
    };
  };
}

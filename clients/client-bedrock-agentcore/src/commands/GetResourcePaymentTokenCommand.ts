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
import type { GetResourcePaymentTokenRequest, GetResourcePaymentTokenResponse } from "../models/models_0";
import { GetResourcePaymentToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourcePaymentTokenCommand}.
 */
export interface GetResourcePaymentTokenCommandInput extends GetResourcePaymentTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetResourcePaymentTokenCommand}.
 */
export interface GetResourcePaymentTokenCommandOutput extends GetResourcePaymentTokenResponse, __MetadataBearer {}

/**
 * <p>Generates authentication tokens for payment providers that use vendor-specific authentication mechanisms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetResourcePaymentTokenCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetResourcePaymentTokenCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetResourcePaymentTokenRequest
 *   workloadIdentityToken: "STRING_VALUE", // required
 *   resourceCredentialProviderName: "STRING_VALUE", // required
 *   paymentTokenRequest: { // PaymentTokenRequestInput Union: only one key present
 *     coinbaseCdpTokenRequest: { // CoinbaseCdpTokenRequestInput
 *       requestMethod: "GET" || "POST" || "PUT" || "DELETE" || "PATCH", // required
 *       requestHost: "STRING_VALUE",
 *       requestPath: "STRING_VALUE", // required
 *       includeWalletAuthToken: true || false,
 *       requestBody: "STRING_VALUE",
 *     },
 *     stripePrivyTokenRequest: { // StripePrivyTokenRequestInput
 *       requestHost: "STRING_VALUE",
 *       requestPath: "STRING_VALUE", // required
 *       requestBody: "STRING_VALUE", // required
 *       includeAuthorizationSignature: true || false,
 *     },
 *   },
 * };
 * const command = new GetResourcePaymentTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcePaymentTokenResponse
 * //   paymentTokenResponse: { // PaymentTokenResponseOutput Union: only one key present
 * //     coinbaseCdpTokenResponse: { // CoinbaseCdpTokenResponseOutput
 * //       bearerToken: "STRING_VALUE", // required
 * //       walletAuthToken: "STRING_VALUE",
 * //     },
 * //     stripePrivyTokenResponse: { // StripePrivyTokenResponseOutput
 * //       authorizationSignature: "STRING_VALUE",
 * //       requestExpiry: Number("long"),
 * //       appId: "STRING_VALUE", // required
 * //       basicAuthToken: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourcePaymentTokenCommandInput - {@link GetResourcePaymentTokenCommandInput}
 * @returns {@link GetResourcePaymentTokenCommandOutput}
 * @see {@link GetResourcePaymentTokenCommandInput} for command's `input` shape.
 * @see {@link GetResourcePaymentTokenCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
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
export class GetResourcePaymentTokenCommand extends $Command
  .classBuilder<
    GetResourcePaymentTokenCommandInput,
    GetResourcePaymentTokenCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "GetResourcePaymentToken", {})
  .n("BedrockAgentCoreClient", "GetResourcePaymentTokenCommand")
  .sc(GetResourcePaymentToken$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcePaymentTokenRequest;
      output: GetResourcePaymentTokenResponse;
    };
    sdk: {
      input: GetResourcePaymentTokenCommandInput;
      output: GetResourcePaymentTokenCommandOutput;
    };
  };
}

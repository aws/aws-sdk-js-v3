// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPaymentInstrumentBalanceRequest, GetPaymentInstrumentBalanceResponse } from "../models/models_1";
import { GetPaymentInstrumentBalance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPaymentInstrumentBalanceCommand}.
 */
export interface GetPaymentInstrumentBalanceCommandInput extends GetPaymentInstrumentBalanceRequest {}
/**
 * @public
 *
 * The output of {@link GetPaymentInstrumentBalanceCommand}.
 */
export interface GetPaymentInstrumentBalanceCommandOutput extends GetPaymentInstrumentBalanceResponse, __MetadataBearer {}

/**
 * <p>Get the balance of a payment instrument.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetPaymentInstrumentBalanceCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetPaymentInstrumentBalanceCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetPaymentInstrumentBalanceRequest
 *   userId: "STRING_VALUE",
 *   agentName: "STRING_VALUE",
 *   paymentManagerArn: "STRING_VALUE", // required
 *   paymentConnectorId: "STRING_VALUE", // required
 *   paymentInstrumentId: "STRING_VALUE", // required
 *   chain: "BASE" || "BASE_SEPOLIA" || "ETHEREUM" || "SOLANA" || "SOLANA_DEVNET", // required
 *   token: "USDC", // required
 * };
 * const command = new GetPaymentInstrumentBalanceCommand(input);
 * const response = await client.send(command);
 * // { // GetPaymentInstrumentBalanceResponse
 * //   paymentInstrumentId: "STRING_VALUE", // required
 * //   tokenBalance: { // TokenBalance
 * //     amount: "STRING_VALUE", // required
 * //     decimals: Number("int"), // required
 * //     token: "USDC", // required
 * //     network: "ETHEREUM" || "SOLANA", // required
 * //     chain: "BASE" || "BASE_SEPOLIA" || "ETHEREUM" || "SOLANA" || "SOLANA_DEVNET", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPaymentInstrumentBalanceCommandInput - {@link GetPaymentInstrumentBalanceCommandInput}
 * @returns {@link GetPaymentInstrumentBalanceCommandOutput}
 * @see {@link GetPaymentInstrumentBalanceCommandInput} for command's `input` shape.
 * @see {@link GetPaymentInstrumentBalanceCommandOutput} for command's `response` shape.
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
export class GetPaymentInstrumentBalanceCommand extends command<GetPaymentInstrumentBalanceCommandInput, GetPaymentInstrumentBalanceCommandOutput>(
  _ep0,
  _mw0,
  "GetPaymentInstrumentBalance",
  GetPaymentInstrumentBalance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPaymentInstrumentBalanceRequest;
      output: GetPaymentInstrumentBalanceResponse;
    };
    sdk: {
      input: GetPaymentInstrumentBalanceCommandInput;
      output: GetPaymentInstrumentBalanceCommandOutput;
    };
  };
}

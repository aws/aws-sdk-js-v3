// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPaymentInstrumentRequest, GetPaymentInstrumentResponse } from "../models/models_1";
import { GetPaymentInstrument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPaymentInstrumentCommand}.
 */
export interface GetPaymentInstrumentCommandInput extends GetPaymentInstrumentRequest {}
/**
 * @public
 *
 * The output of {@link GetPaymentInstrumentCommand}.
 */
export interface GetPaymentInstrumentCommandOutput extends GetPaymentInstrumentResponse, __MetadataBearer {}

/**
 * <p>Get a payment instrument by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, GetPaymentInstrumentCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, GetPaymentInstrumentCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // GetPaymentInstrumentRequest
 *   userId: "STRING_VALUE",
 *   agentName: "STRING_VALUE",
 *   paymentManagerArn: "STRING_VALUE", // required
 *   paymentConnectorId: "STRING_VALUE",
 *   paymentInstrumentId: "STRING_VALUE", // required
 * };
 * const command = new GetPaymentInstrumentCommand(input);
 * const response = await client.send(command);
 * // { // GetPaymentInstrumentResponse
 * //   paymentInstrument: { // PaymentInstrument
 * //     paymentInstrumentId: "STRING_VALUE", // required
 * //     paymentManagerArn: "STRING_VALUE", // required
 * //     paymentConnectorId: "STRING_VALUE", // required
 * //     userId: "STRING_VALUE", // required
 * //     paymentInstrumentType: "EMBEDDED_CRYPTO_WALLET", // required
 * //     paymentInstrumentDetails: { // PaymentInstrumentDetails Union: only one key present
 * //       embeddedCryptoWallet: { // EmbeddedCryptoWallet
 * //         network: "ETHEREUM" || "SOLANA", // required
 * //         linkedAccounts: [ // LinkedAccountList // required
 * //           { // LinkedAccount Union: only one key present
 * //             email: { // LinkedAccountEmail
 * //               emailAddress: "STRING_VALUE", // required
 * //             },
 * //             sms: { // LinkedAccountSms
 * //               phoneNumber: "STRING_VALUE", // required
 * //             },
 * //             developerJwt: { // LinkedAccountDeveloperJwt
 * //               kid: "STRING_VALUE", // required
 * //               sub: "STRING_VALUE", // required
 * //             },
 * //             oAuth2: { // LinkedAccountOAuth2 Union: only one key present
 * //               google: { // OAuth2Authentication
 * //                 sub: "STRING_VALUE", // required
 * //                 emailAddress: "STRING_VALUE",
 * //                 name: "STRING_VALUE",
 * //                 username: "STRING_VALUE",
 * //               },
 * //               apple: {
 * //                 sub: "STRING_VALUE", // required
 * //                 emailAddress: "STRING_VALUE",
 * //                 name: "STRING_VALUE",
 * //                 username: "STRING_VALUE",
 * //               },
 * //               x: {
 * //                 sub: "STRING_VALUE", // required
 * //                 emailAddress: "STRING_VALUE",
 * //                 name: "STRING_VALUE",
 * //                 username: "STRING_VALUE",
 * //               },
 * //               telegram: {
 * //                 sub: "STRING_VALUE", // required
 * //                 emailAddress: "STRING_VALUE",
 * //                 name: "STRING_VALUE",
 * //                 username: "STRING_VALUE",
 * //               },
 * //               github: {
 * //                 sub: "STRING_VALUE", // required
 * //                 emailAddress: "STRING_VALUE",
 * //                 name: "STRING_VALUE",
 * //                 username: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         walletAddress: "STRING_VALUE",
 * //         redirectUrl: "STRING_VALUE",
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     status: "INITIATED" || "ACTIVE" || "FAILED" || "DELETED", // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPaymentInstrumentCommandInput - {@link GetPaymentInstrumentCommandInput}
 * @returns {@link GetPaymentInstrumentCommandOutput}
 * @see {@link GetPaymentInstrumentCommandInput} for command's `input` shape.
 * @see {@link GetPaymentInstrumentCommandOutput} for command's `response` shape.
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
export class GetPaymentInstrumentCommand extends command<GetPaymentInstrumentCommandInput, GetPaymentInstrumentCommandOutput>(
  _ep0,
  _mw0,
  "GetPaymentInstrument",
  GetPaymentInstrument$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPaymentInstrumentRequest;
      output: GetPaymentInstrumentResponse;
    };
    sdk: {
      input: GetPaymentInstrumentCommandInput;
      output: GetPaymentInstrumentCommandOutput;
    };
  };
}

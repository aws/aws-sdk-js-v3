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
import type { CreatePaymentInstrumentRequest, CreatePaymentInstrumentResponse } from "../models/models_1";
import { CreatePaymentInstrument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePaymentInstrumentCommand}.
 */
export interface CreatePaymentInstrumentCommandInput extends CreatePaymentInstrumentRequest {}
/**
 * @public
 *
 * The output of {@link CreatePaymentInstrumentCommand}.
 */
export interface CreatePaymentInstrumentCommandOutput extends CreatePaymentInstrumentResponse, __MetadataBearer {}

/**
 * Create a new payment instrument for a connector
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreClient, CreatePaymentInstrumentCommand } from "@aws-sdk/client-bedrock-agentcore"; // ES Modules import
 * // const { BedrockAgentCoreClient, CreatePaymentInstrumentCommand } = require("@aws-sdk/client-bedrock-agentcore"); // CommonJS import
 * // import type { BedrockAgentCoreClientConfig } from "@aws-sdk/client-bedrock-agentcore";
 * const config = {}; // type is BedrockAgentCoreClientConfig
 * const client = new BedrockAgentCoreClient(config);
 * const input = { // CreatePaymentInstrumentRequest
 *   userId: "STRING_VALUE",
 *   agentName: "STRING_VALUE",
 *   paymentManagerArn: "STRING_VALUE", // required
 *   paymentConnectorId: "STRING_VALUE", // required
 *   paymentInstrumentType: "EMBEDDED_CRYPTO_WALLET", // required
 *   paymentInstrumentDetails: { // PaymentInstrumentDetails Union: only one key present
 *     embeddedCryptoWallet: { // EmbeddedCryptoWallet
 *       network: "ETHEREUM" || "SOLANA", // required
 *       linkedAccounts: [ // LinkedAccountList // required
 *         { // LinkedAccount Union: only one key present
 *           email: { // LinkedAccountEmail
 *             emailAddress: "STRING_VALUE", // required
 *           },
 *           sms: { // LinkedAccountSms
 *             phoneNumber: "STRING_VALUE", // required
 *           },
 *           developerJwt: { // LinkedAccountDeveloperJwt
 *             kid: "STRING_VALUE", // required
 *             sub: "STRING_VALUE", // required
 *           },
 *           oAuth2: { // LinkedAccountOAuth2 Union: only one key present
 *             google: { // OAuth2Authentication
 *               sub: "STRING_VALUE", // required
 *               emailAddress: "STRING_VALUE",
 *               name: "STRING_VALUE",
 *               username: "STRING_VALUE",
 *             },
 *             apple: {
 *               sub: "STRING_VALUE", // required
 *               emailAddress: "STRING_VALUE",
 *               name: "STRING_VALUE",
 *               username: "STRING_VALUE",
 *             },
 *             x: {
 *               sub: "STRING_VALUE", // required
 *               emailAddress: "STRING_VALUE",
 *               name: "STRING_VALUE",
 *               username: "STRING_VALUE",
 *             },
 *             telegram: {
 *               sub: "STRING_VALUE", // required
 *               emailAddress: "STRING_VALUE",
 *               name: "STRING_VALUE",
 *               username: "STRING_VALUE",
 *             },
 *             github: {
 *               sub: "STRING_VALUE", // required
 *               emailAddress: "STRING_VALUE",
 *               name: "STRING_VALUE",
 *               username: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       ],
 *       walletAddress: "STRING_VALUE",
 *       redirectUrl: "STRING_VALUE",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePaymentInstrumentCommand(input);
 * const response = await client.send(command);
 * // { // CreatePaymentInstrumentResponse
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
 * @param CreatePaymentInstrumentCommandInput - {@link CreatePaymentInstrumentCommandInput}
 * @returns {@link CreatePaymentInstrumentCommandOutput}
 * @see {@link CreatePaymentInstrumentCommandInput} for command's `input` shape.
 * @see {@link CreatePaymentInstrumentCommandOutput} for command's `response` shape.
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
export class CreatePaymentInstrumentCommand extends $Command
  .classBuilder<
    CreatePaymentInstrumentCommandInput,
    CreatePaymentInstrumentCommandOutput,
    BedrockAgentCoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCore", "CreatePaymentInstrument", {})
  .n("BedrockAgentCoreClient", "CreatePaymentInstrumentCommand")
  .sc(CreatePaymentInstrument$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePaymentInstrumentRequest;
      output: CreatePaymentInstrumentResponse;
    };
    sdk: {
      input: CreatePaymentInstrumentCommandInput;
      output: CreatePaymentInstrumentCommandOutput;
    };
  };
}

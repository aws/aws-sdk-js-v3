// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePaymentConnectorRequest, CreatePaymentConnectorResponse } from "../models/models_1";
import { CreatePaymentConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePaymentConnectorCommand}.
 */
export interface CreatePaymentConnectorCommandInput extends CreatePaymentConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreatePaymentConnectorCommand}.
 */
export interface CreatePaymentConnectorCommandOutput extends CreatePaymentConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates a new payment connector for a payment manager. A payment connector integrates with a supported payment provider to enable payment processing capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreatePaymentConnectorCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreatePaymentConnectorCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreatePaymentConnectorRequest
 *   paymentManagerId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   type: "CoinbaseCDP" || "StripePrivy", // required
 *   credentialProviderConfigurations: [ // CredentialsProviderConfigurations // required
 *     { // CredentialsProviderConfiguration Union: only one key present
 *       coinbaseCDP: { // PaymentCredentialProviderConfiguration
 *         credentialProviderArn: "STRING_VALUE", // required
 *       },
 *       stripePrivy: {
 *         credentialProviderArn: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePaymentConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreatePaymentConnectorResponse
 * //   paymentConnectorId: "STRING_VALUE", // required
 * //   paymentManagerId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   type: "CoinbaseCDP" || "StripePrivy", // required
 * //   credentialProviderConfigurations: [ // CredentialsProviderConfigurations // required
 * //     { // CredentialsProviderConfiguration Union: only one key present
 * //       coinbaseCDP: { // PaymentCredentialProviderConfiguration
 * //         credentialProviderArn: "STRING_VALUE", // required
 * //       },
 * //       stripePrivy: {
 * //         credentialProviderArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "READY" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param CreatePaymentConnectorCommandInput - {@link CreatePaymentConnectorCommandInput}
 * @returns {@link CreatePaymentConnectorCommandOutput}
 * @see {@link CreatePaymentConnectorCommandInput} for command's `input` shape.
 * @see {@link CreatePaymentConnectorCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class CreatePaymentConnectorCommand extends $Command
  .classBuilder<
    CreatePaymentConnectorCommandInput,
    CreatePaymentConnectorCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreatePaymentConnector", {})
  .n("BedrockAgentCoreControlClient", "CreatePaymentConnectorCommand")
  .sc(CreatePaymentConnector$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePaymentConnectorRequest;
      output: CreatePaymentConnectorResponse;
    };
    sdk: {
      input: CreatePaymentConnectorCommandInput;
      output: CreatePaymentConnectorCommandOutput;
    };
  };
}

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
import type {
  CreatePaymentCredentialProviderRequest,
  CreatePaymentCredentialProviderResponse,
} from "../models/models_1";
import { CreatePaymentCredentialProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePaymentCredentialProviderCommand}.
 */
export interface CreatePaymentCredentialProviderCommandInput extends CreatePaymentCredentialProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreatePaymentCredentialProviderCommand}.
 */
export interface CreatePaymentCredentialProviderCommandOutput extends CreatePaymentCredentialProviderResponse, __MetadataBearer {}

/**
 * <p>Creates a new payment credential provider for storing authentication credentials used by payment connectors to communicate with external payment providers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreatePaymentCredentialProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreatePaymentCredentialProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreatePaymentCredentialProviderRequest
 *   name: "STRING_VALUE", // required
 *   credentialProviderVendor: "CoinbaseCDP" || "StripePrivy", // required
 *   providerConfigurationInput: { // PaymentProviderConfigurationInput Union: only one key present
 *     coinbaseCdpConfiguration: { // CoinbaseCdpConfigurationInput
 *       apiKeyId: "STRING_VALUE", // required
 *       apiKeySecret: "STRING_VALUE",
 *       apiKeySecretSource: "MANAGED" || "EXTERNAL",
 *       apiKeySecretConfig: { // SecretReference
 *         secretId: "STRING_VALUE", // required
 *         jsonKey: "STRING_VALUE", // required
 *       },
 *       walletSecret: "STRING_VALUE",
 *       walletSecretSource: "MANAGED" || "EXTERNAL",
 *       walletSecretConfig: {
 *         secretId: "STRING_VALUE", // required
 *         jsonKey: "STRING_VALUE", // required
 *       },
 *     },
 *     stripePrivyConfiguration: { // StripePrivyConfigurationInput
 *       appId: "STRING_VALUE", // required
 *       appSecret: "STRING_VALUE",
 *       appSecretSource: "MANAGED" || "EXTERNAL",
 *       appSecretConfig: {
 *         secretId: "STRING_VALUE", // required
 *         jsonKey: "STRING_VALUE", // required
 *       },
 *       authorizationPrivateKey: "STRING_VALUE",
 *       authorizationPrivateKeySource: "MANAGED" || "EXTERNAL",
 *       authorizationPrivateKeyConfig: {
 *         secretId: "STRING_VALUE", // required
 *         jsonKey: "STRING_VALUE", // required
 *       },
 *       authorizationId: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePaymentCredentialProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreatePaymentCredentialProviderResponse
 * //   name: "STRING_VALUE", // required
 * //   credentialProviderVendor: "CoinbaseCDP" || "StripePrivy", // required
 * //   credentialProviderArn: "STRING_VALUE", // required
 * //   providerConfigurationOutput: { // PaymentProviderConfigurationOutput Union: only one key present
 * //     coinbaseCdpConfiguration: { // CoinbaseCdpConfigurationOutput
 * //       apiKeyId: "STRING_VALUE", // required
 * //       apiKeySecretArn: { // Secret
 * //         secretArn: "STRING_VALUE", // required
 * //       },
 * //       apiKeySecretJsonKey: "STRING_VALUE",
 * //       apiKeySecretSource: "MANAGED" || "EXTERNAL",
 * //       walletSecretArn: {
 * //         secretArn: "STRING_VALUE", // required
 * //       },
 * //       walletSecretJsonKey: "STRING_VALUE",
 * //       walletSecretSource: "MANAGED" || "EXTERNAL",
 * //     },
 * //     stripePrivyConfiguration: { // StripePrivyConfigurationOutput
 * //       appId: "STRING_VALUE", // required
 * //       appSecretArn: {
 * //         secretArn: "STRING_VALUE", // required
 * //       },
 * //       appSecretJsonKey: "STRING_VALUE",
 * //       appSecretSource: "MANAGED" || "EXTERNAL",
 * //       authorizationPrivateKeyArn: {
 * //         secretArn: "STRING_VALUE", // required
 * //       },
 * //       authorizationPrivateKeyJsonKey: "STRING_VALUE",
 * //       authorizationPrivateKeySource: "MANAGED" || "EXTERNAL",
 * //       authorizationId: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePaymentCredentialProviderCommandInput - {@link CreatePaymentCredentialProviderCommandInput}
 * @returns {@link CreatePaymentCredentialProviderCommandOutput}
 * @see {@link CreatePaymentCredentialProviderCommandInput} for command's `input` shape.
 * @see {@link CreatePaymentCredentialProviderCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link DecryptionFailure} (client fault)
 *  <p>Exception thrown when decryption of a secret fails.</p>
 *
 * @throws {@link EncryptionFailure} (client fault)
 *  <p>Exception thrown when encryption of a secret fails.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Exception thrown when a resource limit is exceeded.</p>
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
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
export class CreatePaymentCredentialProviderCommand extends $Command
  .classBuilder<
    CreatePaymentCredentialProviderCommandInput,
    CreatePaymentCredentialProviderCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreatePaymentCredentialProvider", {})
  .n("BedrockAgentCoreControlClient", "CreatePaymentCredentialProviderCommand")
  .sc(CreatePaymentCredentialProvider$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePaymentCredentialProviderRequest;
      output: CreatePaymentCredentialProviderResponse;
    };
    sdk: {
      input: CreatePaymentCredentialProviderCommandInput;
      output: CreatePaymentCredentialProviderCommandOutput;
    };
  };
}

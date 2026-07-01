// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPaymentCredentialProviderRequest, GetPaymentCredentialProviderResponse } from "../models/models_1";
import { GetPaymentCredentialProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPaymentCredentialProviderCommand}.
 */
export interface GetPaymentCredentialProviderCommandInput extends GetPaymentCredentialProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetPaymentCredentialProviderCommand}.
 */
export interface GetPaymentCredentialProviderCommandOutput extends GetPaymentCredentialProviderResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific payment credential provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetPaymentCredentialProviderCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetPaymentCredentialProviderCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetPaymentCredentialProviderRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetPaymentCredentialProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetPaymentCredentialProviderResponse
 * //   name: "STRING_VALUE", // required
 * //   credentialProviderArn: "STRING_VALUE", // required
 * //   credentialProviderVendor: "CoinbaseCDP" || "StripePrivy", // required
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
 * //   createdTime: new Date("TIMESTAMP"), // required
 * //   lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPaymentCredentialProviderCommandInput - {@link GetPaymentCredentialProviderCommandInput}
 * @returns {@link GetPaymentCredentialProviderCommandOutput}
 * @see {@link GetPaymentCredentialProviderCommandInput} for command's `input` shape.
 * @see {@link GetPaymentCredentialProviderCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link DecryptionFailure} (client fault)
 *  <p>Exception thrown when decryption of a secret fails.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
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
export class GetPaymentCredentialProviderCommand extends command<GetPaymentCredentialProviderCommandInput, GetPaymentCredentialProviderCommandOutput>(
  _ep0,
  _mw0,
  "GetPaymentCredentialProvider",
  GetPaymentCredentialProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPaymentCredentialProviderRequest;
      output: GetPaymentCredentialProviderResponse;
    };
    sdk: {
      input: GetPaymentCredentialProviderCommandInput;
      output: GetPaymentCredentialProviderCommandOutput;
    };
  };
}

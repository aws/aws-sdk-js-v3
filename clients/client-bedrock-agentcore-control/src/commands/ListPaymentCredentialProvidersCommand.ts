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
import type { ListPaymentCredentialProvidersRequest, ListPaymentCredentialProvidersResponse } from "../models/models_1";
import { ListPaymentCredentialProviders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPaymentCredentialProvidersCommand}.
 */
export interface ListPaymentCredentialProvidersCommandInput extends ListPaymentCredentialProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListPaymentCredentialProvidersCommand}.
 */
export interface ListPaymentCredentialProvidersCommandOutput extends ListPaymentCredentialProvidersResponse, __MetadataBearer {}

/**
 * <p>Lists all payment credential providers in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListPaymentCredentialProvidersCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListPaymentCredentialProvidersCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListPaymentCredentialProvidersRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPaymentCredentialProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListPaymentCredentialProvidersResponse
 * //   credentialProviders: [ // PaymentCredentialProviders // required
 * //     { // PaymentCredentialProviderItem
 * //       name: "STRING_VALUE", // required
 * //       credentialProviderVendor: "CoinbaseCDP" || "StripePrivy", // required
 * //       credentialProviderArn: "STRING_VALUE", // required
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPaymentCredentialProvidersCommandInput - {@link ListPaymentCredentialProvidersCommandInput}
 * @returns {@link ListPaymentCredentialProvidersCommandOutput}
 * @see {@link ListPaymentCredentialProvidersCommandInput} for command's `input` shape.
 * @see {@link ListPaymentCredentialProvidersCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
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
export class ListPaymentCredentialProvidersCommand extends $Command
  .classBuilder<
    ListPaymentCredentialProvidersCommandInput,
    ListPaymentCredentialProvidersCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "ListPaymentCredentialProviders", {})
  .n("BedrockAgentCoreControlClient", "ListPaymentCredentialProvidersCommand")
  .sc(ListPaymentCredentialProviders$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPaymentCredentialProvidersRequest;
      output: ListPaymentCredentialProvidersResponse;
    };
    sdk: {
      input: ListPaymentCredentialProvidersCommandInput;
      output: ListPaymentCredentialProvidersCommandOutput;
    };
  };
}

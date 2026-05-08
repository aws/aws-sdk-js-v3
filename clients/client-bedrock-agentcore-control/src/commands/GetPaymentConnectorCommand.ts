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
import type { GetPaymentConnectorRequest, GetPaymentConnectorResponse } from "../models/models_1";
import { GetPaymentConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPaymentConnectorCommand}.
 */
export interface GetPaymentConnectorCommandInput extends GetPaymentConnectorRequest {}
/**
 * @public
 *
 * The output of {@link GetPaymentConnectorCommand}.
 */
export interface GetPaymentConnectorCommandOutput extends GetPaymentConnectorResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific payment connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetPaymentConnectorCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetPaymentConnectorCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetPaymentConnectorRequest
 *   paymentManagerId: "STRING_VALUE", // required
 *   paymentConnectorId: "STRING_VALUE", // required
 * };
 * const command = new GetPaymentConnectorCommand(input);
 * const response = await client.send(command);
 * // { // GetPaymentConnectorResponse
 * //   paymentConnectorId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
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
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "READY" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param GetPaymentConnectorCommandInput - {@link GetPaymentConnectorCommandInput}
 * @returns {@link GetPaymentConnectorCommandOutput}
 * @see {@link GetPaymentConnectorCommandInput} for command's `input` shape.
 * @see {@link GetPaymentConnectorCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class GetPaymentConnectorCommand extends $Command
  .classBuilder<
    GetPaymentConnectorCommandInput,
    GetPaymentConnectorCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetPaymentConnector", {})
  .n("BedrockAgentCoreControlClient", "GetPaymentConnectorCommand")
  .sc(GetPaymentConnector$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPaymentConnectorRequest;
      output: GetPaymentConnectorResponse;
    };
    sdk: {
      input: GetPaymentConnectorCommandInput;
      output: GetPaymentConnectorCommandOutput;
    };
  };
}

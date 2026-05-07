// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdatePaymentConnectorRequest, UpdatePaymentConnectorResponse } from "../models/models_1";
import { UpdatePaymentConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePaymentConnectorCommand}.
 */
export interface UpdatePaymentConnectorCommandInput extends UpdatePaymentConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePaymentConnectorCommand}.
 */
export interface UpdatePaymentConnectorCommandOutput extends UpdatePaymentConnectorResponse, __MetadataBearer {}

/**
 * <p>Updates an existing payment connector. This operation uses PATCH semantics, so you only need to specify the fields you want to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdatePaymentConnectorCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdatePaymentConnectorCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdatePaymentConnectorRequest
 *   paymentManagerId: "STRING_VALUE", // required
 *   paymentConnectorId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   type: "CoinbaseCDP" || "StripePrivy",
 *   credentialProviderConfigurations: [ // CredentialsProviderConfigurations
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
 * const command = new UpdatePaymentConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePaymentConnectorResponse
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
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "READY" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param UpdatePaymentConnectorCommandInput - {@link UpdatePaymentConnectorCommandInput}
 * @returns {@link UpdatePaymentConnectorCommandOutput}
 * @see {@link UpdatePaymentConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdatePaymentConnectorCommandOutput} for command's `response` shape.
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
export class UpdatePaymentConnectorCommand extends $Command
  .classBuilder<
    UpdatePaymentConnectorCommandInput,
    UpdatePaymentConnectorCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdatePaymentConnector", {})
  .n("BedrockAgentCoreControlClient", "UpdatePaymentConnectorCommand")
  .sc(UpdatePaymentConnector$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePaymentConnectorRequest;
      output: UpdatePaymentConnectorResponse;
    };
    sdk: {
      input: UpdatePaymentConnectorCommandInput;
      output: UpdatePaymentConnectorCommandOutput;
    };
  };
}

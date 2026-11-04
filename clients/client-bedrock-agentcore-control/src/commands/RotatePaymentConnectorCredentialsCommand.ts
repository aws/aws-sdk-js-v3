// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RotatePaymentConnectorCredentialsRequest,
  RotatePaymentConnectorCredentialsResponse,
} from "../models/models_2";
import { RotatePaymentConnectorCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RotatePaymentConnectorCredentialsCommand}.
 */
export interface RotatePaymentConnectorCredentialsCommandInput extends RotatePaymentConnectorCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link RotatePaymentConnectorCredentialsCommand}.
 */
export interface RotatePaymentConnectorCredentialsCommandOutput extends RotatePaymentConnectorCredentialsResponse, __MetadataBearer {}

/**
 * Replaces the service-managed credentials of a payment connector with newly issued credentials.
 *
 * Use this operation only for payment connectors with a `provisionMode` of `QUICK_CREATE`. For payment connectors with a `provisionMode` of `MANUAL`, call `UpdatePaymentCredentialProvider` instead after rotating credentials with the payment provider directly.
 *
 * The rotation finishes before the response is returned, and only one rotation runs at a time for a given payment connector. When it succeeds, the new credential is in effect and the payment connector stays in the `READY` state. When it fails, an error is returned, the payment connector and its existing credential are left unchanged, and you can retry the request.
 *
 * Rotation replaces the credential on the connector's credential provider, so every payment connector that uses that provider is affected. Replace any copy of the previous credential that you use outside AgentCore.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, RotatePaymentConnectorCredentialsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, RotatePaymentConnectorCredentialsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // RotatePaymentConnectorCredentialsRequest
 *   paymentManagerId: "STRING_VALUE", // required
 *   paymentConnectorId: "STRING_VALUE", // required
 *   credentialsToRotate: { // CredentialRotationConfig Union: only one key present
 *     coinbaseCDP: { // CoinbaseCdpRotationTargets
 *       secrets: [ // CoinbaseCdpSecrets // required
 *         "API_KEY" || "WALLET_SECRET",
 *       ],
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RotatePaymentConnectorCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // RotatePaymentConnectorCredentialsResponse
 * //   paymentConnectorId: "STRING_VALUE", // required
 * //   paymentManagerId: "STRING_VALUE", // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "UPDATING" || "DELETING" || "READY" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETE_FAILED" || "AWS_MARKETPLACE_SUBSCRIPTION_REQUIRED" || "PENDING_AUTHENTICATION" || "PROVISIONING" || "AUTHENTICATION_EXPIRED" || "AUTHENTICATION_FAILED", // required
 * // };
 *
 * ```
 *
 * @param RotatePaymentConnectorCredentialsCommandInput - {@link RotatePaymentConnectorCredentialsCommandInput}
 * @returns {@link RotatePaymentConnectorCredentialsCommandOutput}
 * @see {@link RotatePaymentConnectorCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotatePaymentConnectorCredentialsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgentCoreControl service.
 *
 * @public
 */
export class RotatePaymentConnectorCredentialsCommand extends command<RotatePaymentConnectorCredentialsCommandInput, RotatePaymentConnectorCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "RotatePaymentConnectorCredentials",
  RotatePaymentConnectorCredentials$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RotatePaymentConnectorCredentialsRequest;
      output: RotatePaymentConnectorCredentialsResponse;
    };
    sdk: {
      input: RotatePaymentConnectorCredentialsCommandInput;
      output: RotatePaymentConnectorCredentialsCommandOutput;
    };
  };
}

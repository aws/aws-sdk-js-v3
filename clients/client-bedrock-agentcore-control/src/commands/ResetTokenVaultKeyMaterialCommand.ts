// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ResetTokenVaultKeyMaterialRequest, ResetTokenVaultKeyMaterialResponse } from "../models/models_2";
import { ResetTokenVaultKeyMaterial$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ResetTokenVaultKeyMaterialCommand}.
 */
export interface ResetTokenVaultKeyMaterialCommandInput extends ResetTokenVaultKeyMaterialRequest {}
/**
 * @public
 *
 * The output of {@link ResetTokenVaultKeyMaterialCommand}.
 */
export interface ResetTokenVaultKeyMaterialCommandOutput extends ResetTokenVaultKeyMaterialResponse, __MetadataBearer {}

/**
 * <p>Resets the key material for a token vault whose customer managed KMS key has been deleted, and re-encrypts the token vault with an Amazon Web Services managed key so that you can use the token vault again.</p> <important> <p>This operation can't be undone. The reset permanently deletes the OAuth2 access tokens and refresh tokens stored in the token vault, including tokens obtained through all supported flows. After the reset, your agents must complete these flows again to get new tokens, and for user-delegated flows your users must authorize access again. The reset doesn't delete your credential providers or their configuration.</p> </important> <p>You can reset a token vault only if its customer managed key has been deleted. If the key still exists, including when it's disabled or scheduled for deletion, this operation returns a <code>ValidationException</code>. To use the token vault again, enable the key or cancel its scheduled deletion in KMS. To switch to a different key, use <code>SetTokenVaultCMK</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ResetTokenVaultKeyMaterialCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ResetTokenVaultKeyMaterialCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ResetTokenVaultKeyMaterialRequest
 *   tokenVaultId: "STRING_VALUE", // required
 * };
 * const command = new ResetTokenVaultKeyMaterialCommand(input);
 * const response = await client.send(command);
 * // { // ResetTokenVaultKeyMaterialResponse
 * //   tokenVaultId: "STRING_VALUE", // required
 * //   kmsConfiguration: { // KmsConfiguration
 * //     keyType: "CustomerManagedKey" || "ServiceManagedKey", // required
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * //   lastModifiedDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param ResetTokenVaultKeyMaterialCommandInput - {@link ResetTokenVaultKeyMaterialCommandInput}
 * @returns {@link ResetTokenVaultKeyMaterialCommandOutput}
 * @see {@link ResetTokenVaultKeyMaterialCommandInput} for command's `input` shape.
 * @see {@link ResetTokenVaultKeyMaterialCommandOutput} for command's `response` shape.
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
export class ResetTokenVaultKeyMaterialCommand extends command<ResetTokenVaultKeyMaterialCommandInput, ResetTokenVaultKeyMaterialCommandOutput>(
  _ep0,
  _mw0,
  "ResetTokenVaultKeyMaterial",
  ResetTokenVaultKeyMaterial$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetTokenVaultKeyMaterialRequest;
      output: ResetTokenVaultKeyMaterialResponse;
    };
    sdk: {
      input: ResetTokenVaultKeyMaterialCommandInput;
      output: ResetTokenVaultKeyMaterialCommandOutput;
    };
  };
}

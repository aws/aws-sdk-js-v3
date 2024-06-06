// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  RegisterClientRequest,
  RegisterClientResponse,
  RegisterClientResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_RegisterClientCommand, se_RegisterClientCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterClientCommand}.
 */
export interface RegisterClientCommandInput extends RegisterClientRequest {}
/**
 * @public
 *
 * The output of {@link RegisterClientCommand}.
 */
export interface RegisterClientCommandOutput extends RegisterClientResponse, __MetadataBearer {}

/**
 * <p>Registers a client with IAM Identity Center. This allows clients to initiate device authorization.
 *       The output should be persisted for reuse through many authentication requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, RegisterClientCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, RegisterClientCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const input = { // RegisterClientRequest
 *   clientName: "STRING_VALUE", // required
 *   clientType: "STRING_VALUE", // required
 *   scopes: [ // Scopes
 *     "STRING_VALUE",
 *   ],
 *   redirectUris: [ // RedirectUris
 *     "STRING_VALUE",
 *   ],
 *   grantTypes: [ // GrantTypes
 *     "STRING_VALUE",
 *   ],
 *   issuerUrl: "STRING_VALUE",
 *   entitledApplicationArn: "STRING_VALUE",
 * };
 * const command = new RegisterClientCommand(input);
 * const response = await client.send(command);
 * // { // RegisterClientResponse
 * //   clientId: "STRING_VALUE",
 * //   clientSecret: "STRING_VALUE",
 * //   clientIdIssuedAt: Number("long"),
 * //   clientSecretExpiresAt: Number("long"),
 * //   authorizationEndpoint: "STRING_VALUE",
 * //   tokenEndpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterClientCommandInput - {@link RegisterClientCommandInput}
 * @returns {@link RegisterClientCommandOutput}
 * @see {@link RegisterClientCommandInput} for command's `input` shape.
 * @see {@link RegisterClientCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for SSOOIDCClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a
 *       request.</p>
 *
 * @throws {@link InvalidClientMetadataException} (client fault)
 *  <p>Indicates that the client information sent in the request during registration is
 *       invalid.</p>
 *
 * @throws {@link InvalidRedirectUriException} (client fault)
 *  <p>Indicates that one or more redirect URI in the request is not supported for this operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link InvalidScopeException} (client fault)
 *  <p>Indicates that the scope provided in the request is invalid.</p>
 *
 * @throws {@link UnsupportedGrantTypeException} (client fault)
 *  <p>Indicates that the grant type in the request is not supported by the service.</p>
 *
 * @throws {@link SSOOIDCServiceException}
 * <p>Base exception class for all service exceptions from SSOOIDC service.</p>
 *
 * @public
 * @example Call OAuth/OIDC /register-client endpoint
 * ```javascript
 * //
 * const input = {
 *   "clientName": "My IDE Plugin",
 *   "clientType": "public",
 *   "entitledApplicationArn": "arn:aws:sso::ACCOUNTID:application/ssoins-1111111111111111/apl-1111111111111111",
 *   "grantTypes": [
 *     "authorization_code",
 *     "refresh_token"
 *   ],
 *   "issuerUrl": "https://identitycenter.amazonaws.com/ssoins-1111111111111111",
 *   "redirectUris": [
 *     "127.0.0.1:PORT/oauth/callback"
 *   ],
 *   "scopes": [
 *     "sso:account:access",
 *     "codewhisperer:completions"
 *   ]
 * };
 * const command = new RegisterClientCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "clientId": "_yzkThXVzLWVhc3QtMQEXAMPLECLIENTID",
 *   "clientIdIssuedAt": 1579725929,
 *   "clientSecret": "VERYLONGSECRETeyJraWQiOiJrZXktMTU2NDAyODA5OSIsImFsZyI6IkhTMzg0In0",
 *   "clientSecretExpiresAt": 1587584729
 * }
 * *\/
 * // example id: register-client
 * ```
 *
 */
export class RegisterClientCommand extends $Command
  .classBuilder<
    RegisterClientCommandInput,
    RegisterClientCommandOutput,
    SSOOIDCClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSOOIDCClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSSOOIDCService", "RegisterClient", {})
  .n("SSOOIDCClient", "RegisterClientCommand")
  .f(void 0, RegisterClientResponseFilterSensitiveLog)
  .ser(se_RegisterClientCommand)
  .de(de_RegisterClientCommand)
  .build() {}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterClientRequest, RegisterClientResponse } from "../models/models_0";
import { RegisterClient$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Registers a public client with IAM Identity Center. This allows clients to perform authorization using the authorization code grant with Proof Key for Code Exchange (PKCE) or the device code grant.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, RegisterClientCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, RegisterClientCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * // import type { SSOOIDCClientConfig } from "@aws-sdk/client-sso-oidc";
 * const config = {}; // type is SSOOIDCClientConfig
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
 *
 * Indicates that an error from the service occurred while trying to process a request.
 *
 * @throws {@link InvalidClientMetadataException} (client fault)
 *
 * Indicates that the client information sent in the request during registration is invalid.
 *
 * @throws {@link InvalidRedirectUriException} (client fault)
 *
 * Indicates that one or more redirect URI in the request is not supported for this operation.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a required parameter might be missing or out of range.
 *
 * @throws {@link InvalidScopeException} (client fault)
 *
 * Indicates that the scope provided in the request is invalid.
 *
 * @throws {@link SlowDownException} (client fault)
 *
 * Indicates that the client is making the request too frequently and is more than the service can handle.
 *
 * @throws {@link UnsupportedGrantTypeException} (client fault)
 *
 * Indicates that the grant type in the request is not supported by the service.
 *
 * @throws {@link SSOOIDCServiceException}
 *
 * Base exception class for all service exceptions from SSOOIDC service.
 *
 * @example Call OAuth/OIDC /register-client endpoint
 * ```javascript
 * //
 * const input = {
 *   clientName: "My IDE Plugin",
 *   clientType: "public",
 *   entitledApplicationArn: "arn:aws:sso::ACCOUNTID:application/ssoins-1111111111111111/apl-1111111111111111",
 *   grantTypes: [
 *     "authorization_code",
 *     "refresh_token"
 *   ],
 *   issuerUrl: "https://identitycenter.amazonaws.com/ssoins-1111111111111111",
 *   redirectUris: [
 *     "127.0.0.1:PORT/oauth/callback"
 *   ],
 *   scopes: [
 *     "sso:account:access",
 *     "codewhisperer:completions"
 *   ]
 * };
 * const command = new RegisterClientCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientId: "_yzkThXVzLWVhc3QtMQEXAMPLECLIENTID",
 *   clientIdIssuedAt: 1579725929,
 *   clientSecret: "VERYLONGSECRETeyJraWQiOiJrZXktMTU2NDAyODA5OSIsImFsZyI6IkhTMzg0In0",
 *   clientSecretExpiresAt: 1587584729
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RegisterClientCommand extends command<RegisterClientCommandInput, RegisterClientCommandOutput>(
  _ep0,
  _mw0,
  "RegisterClient",
  RegisterClient$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterClientRequest;
      output: RegisterClientResponse;
    };
    sdk: {
      input: RegisterClientCommandInput;
      output: RegisterClientCommandOutput;
    };
  };
}

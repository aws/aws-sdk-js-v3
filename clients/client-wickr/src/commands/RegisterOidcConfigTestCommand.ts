// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RegisterOidcConfigTestRequest, RegisterOidcConfigTestResponse } from "../models/models_0";
import { RegisterOidcConfigTest$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterOidcConfigTestCommand}.
 */
export interface RegisterOidcConfigTestCommandInput extends RegisterOidcConfigTestRequest {}
/**
 * @public
 *
 * The output of {@link RegisterOidcConfigTestCommand}.
 */
export interface RegisterOidcConfigTestCommandOutput extends RegisterOidcConfigTestResponse, __MetadataBearer {}

/**
 * <p>Tests an OpenID Connect (OIDC) configuration for a Wickr network by validating the connection to the identity provider and retrieving its supported capabilities.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, RegisterOidcConfigTestCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, RegisterOidcConfigTestCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // RegisterOidcConfigTestRequest
 *   networkId: "STRING_VALUE", // required
 *   extraAuthParams: "STRING_VALUE",
 *   issuer: "STRING_VALUE", // required
 *   scopes: "STRING_VALUE", // required
 *   certificate: "STRING_VALUE",
 * };
 * const command = new RegisterOidcConfigTestCommand(input);
 * const response = await client.send(command);
 * // { // RegisterOidcConfigTestResponse
 * //   tokenEndpoint: "STRING_VALUE",
 * //   userinfoEndpoint: "STRING_VALUE",
 * //   responseTypesSupported: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   scopesSupported: [
 * //     "STRING_VALUE",
 * //   ],
 * //   issuer: "STRING_VALUE",
 * //   authorizationEndpoint: "STRING_VALUE",
 * //   endSessionEndpoint: "STRING_VALUE",
 * //   logoutEndpoint: "STRING_VALUE",
 * //   grantTypesSupported: [
 * //     "STRING_VALUE",
 * //   ],
 * //   revocationEndpoint: "STRING_VALUE",
 * //   tokenEndpointAuthMethodsSupported: [
 * //     "STRING_VALUE",
 * //   ],
 * //   microsoftMultiRefreshToken: true || false,
 * // };
 *
 * ```
 *
 * @param RegisterOidcConfigTestCommandInput - {@link RegisterOidcConfigTestCommandInput}
 * @returns {@link RegisterOidcConfigTestCommandOutput}
 * @see {@link RegisterOidcConfigTestCommandInput} for command's `input` shape.
 * @see {@link RegisterOidcConfigTestCommandOutput} for command's `response` shape.
 * @see {@link WickrClientResolvedConfig | config} for WickrClient's `config` shape.
 *
 * @throws {@link BadRequestError} (client fault)
 *  <p>The request was invalid or malformed. This error occurs when the request parameters do not meet the API requirements, such as invalid field values, missing required parameters, or improperly formatted data.</p>
 *
 * @throws {@link ForbiddenError} (client fault)
 *  <p>Access to the requested resource is forbidden. This error occurs when the authenticated user does not have the necessary permissions to perform the requested operation, even though they are authenticated.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An unexpected error occurred on the server while processing the request. This indicates a problem with the Wickr service itself rather than with the request. If this error persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link RateLimitError} (client fault)
 *  <p>The request was throttled because too many requests were sent in a short period of time. Wait a moment and retry the request. Consider implementing exponential backoff in your application.</p>
 *
 * @throws {@link ResourceNotFoundError} (client fault)
 *  <p>The requested resource could not be found. This error occurs when you try to access or modify a network, user, bot, security group, or other resource that doesn't exist or has been deleted.</p>
 *
 * @throws {@link UnauthorizedError} (client fault)
 *  <p>The request was not authenticated or the authentication credentials were invalid. This error occurs when the request lacks valid authentication credentials or the credentials have expired.</p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p>One or more fields in the request failed validation. This error provides detailed information about which fields were invalid and why, allowing you to correct the request and retry.</p>
 *
 * @throws {@link WickrServiceException}
 * <p>Base exception class for all service exceptions from Wickr service.</p>
 *
 *
 * @example Test OIDC config successfully
 * ```javascript
 * //
 * const input = {
 *   issuer: "https://login.example.com",
 *   networkId: "12345678",
 *   scopes: "openid profile email"
 * };
 * const command = new RegisterOidcConfigTestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   authorizationEndpoint: "https://login.example.com/authorize",
 *   issuer: "https://login.example.com",
 *   tokenEndpoint: "https://login.example.com/oauth/token",
 *   userinfoEndpoint: "https://login.example.com/userinfo"
 * }
 * *\/
 * ```
 *
 * @example Test OIDC config - missing issuer
 * ```javascript
 * //
 * const input = {
 *   issuer: "",
 *   networkId: "12345678",
 *   scopes: "openid profile email"
 * };
 * const command = new RegisterOidcConfigTestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Test OIDC config - invalid endpoint
 * ```javascript
 * //
 * const input = {
 *   issuer: "https://blocked-endpoint.com",
 *   networkId: "12345678",
 *   scopes: "openid profile email"
 * };
 * const command = new RegisterOidcConfigTestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RegisterOidcConfigTestCommand extends $Command
  .classBuilder<
    RegisterOidcConfigTestCommandInput,
    RegisterOidcConfigTestCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "RegisterOidcConfigTest", {})
  .n("WickrClient", "RegisterOidcConfigTestCommand")
  .sc(RegisterOidcConfigTest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterOidcConfigTestRequest;
      output: RegisterOidcConfigTestResponse;
    };
    sdk: {
      input: RegisterOidcConfigTestCommandInput;
      output: RegisterOidcConfigTestCommandOutput;
    };
  };
}

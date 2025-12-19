// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RegisterOidcConfigRequest, RegisterOidcConfigResponse } from "../models/models_0";
import { RegisterOidcConfig$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterOidcConfigCommand}.
 */
export interface RegisterOidcConfigCommandInput extends RegisterOidcConfigRequest {}
/**
 * @public
 *
 * The output of {@link RegisterOidcConfigCommand}.
 */
export interface RegisterOidcConfigCommandOutput extends RegisterOidcConfigResponse, __MetadataBearer {}

/**
 * <p>Registers and saves an OpenID Connect (OIDC) configuration for a Wickr network, enabling Single Sign-On (SSO) authentication through an identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, RegisterOidcConfigCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, RegisterOidcConfigCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // RegisterOidcConfigRequest
 *   networkId: "STRING_VALUE", // required
 *   companyId: "STRING_VALUE", // required
 *   customUsername: "STRING_VALUE",
 *   extraAuthParams: "STRING_VALUE",
 *   issuer: "STRING_VALUE", // required
 *   scopes: "STRING_VALUE", // required
 *   secret: "STRING_VALUE",
 *   ssoTokenBufferMinutes: Number("int"),
 *   userId: "STRING_VALUE",
 * };
 * const command = new RegisterOidcConfigCommand(input);
 * const response = await client.send(command);
 * // { // RegisterOidcConfigResponse
 * //   applicationName: "STRING_VALUE",
 * //   clientId: "STRING_VALUE",
 * //   companyId: "STRING_VALUE", // required
 * //   scopes: "STRING_VALUE", // required
 * //   issuer: "STRING_VALUE", // required
 * //   clientSecret: "STRING_VALUE",
 * //   secret: "STRING_VALUE",
 * //   redirectUrl: "STRING_VALUE",
 * //   userId: "STRING_VALUE",
 * //   customUsername: "STRING_VALUE",
 * //   caCertificate: "STRING_VALUE",
 * //   applicationId: Number("int"),
 * //   ssoTokenBufferMinutes: Number("int"),
 * //   extraAuthParams: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterOidcConfigCommandInput - {@link RegisterOidcConfigCommandInput}
 * @returns {@link RegisterOidcConfigCommandOutput}
 * @see {@link RegisterOidcConfigCommandInput} for command's `input` shape.
 * @see {@link RegisterOidcConfigCommandOutput} for command's `response` shape.
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
 * @example Save OIDC config successfully
 * ```javascript
 * //
 * const input = {
 *   companyId: "us-east-1-company123",
 *   issuer: "https://login.example.com",
 *   networkId: "12345678",
 *   scopes: "openid profile email",
 *   ssoTokenBufferMinutes: 5,
 *   userId: "email"
 * };
 * const command = new RegisterOidcConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientId: "client123",
 *   companyId: "us-east-1-company123",
 *   issuer: "https://login.example.com",
 *   redirectUrl: "https://app.wickr.com/callback",
 *   scopes: "openid profile email",
 *   ssoTokenBufferMinutes: 5,
 *   userId: "email"
 * }
 * *\/
 * ```
 *
 * @example Save OIDC config - missing company ID
 * ```javascript
 * //
 * const input = {
 *   companyId: "",
 *   issuer: "https://login.example.com",
 *   networkId: "12345678",
 *   scopes: "openid profile email"
 * };
 * const command = new RegisterOidcConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Save OIDC config - invalid company ID prefix
 * ```javascript
 * //
 * const input = {
 *   companyId: "invalid-company123",
 *   issuer: "https://login.example.com",
 *   networkId: "12345678",
 *   scopes: "openid profile email"
 * };
 * const command = new RegisterOidcConfigCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RegisterOidcConfigCommand extends $Command
  .classBuilder<
    RegisterOidcConfigCommandInput,
    RegisterOidcConfigCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "RegisterOidcConfig", {})
  .n("WickrClient", "RegisterOidcConfigCommand")
  .sc(RegisterOidcConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterOidcConfigRequest;
      output: RegisterOidcConfigResponse;
    };
    sdk: {
      input: RegisterOidcConfigCommandInput;
      output: RegisterOidcConfigCommandOutput;
    };
  };
}

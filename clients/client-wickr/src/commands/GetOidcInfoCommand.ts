// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetOidcInfoRequest, GetOidcInfoResponse } from "../models/models_0";
import { GetOidcInfo$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOidcInfoCommand}.
 */
export interface GetOidcInfoCommandInput extends GetOidcInfoRequest {}
/**
 * @public
 *
 * The output of {@link GetOidcInfoCommand}.
 */
export interface GetOidcInfoCommandOutput extends GetOidcInfoResponse, __MetadataBearer {}

/**
 * <p>Retrieves the OpenID Connect (OIDC) configuration for a Wickr network, including SSO settings and optional token information if access token parameters are provided.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, GetOidcInfoCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, GetOidcInfoCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // GetOidcInfoRequest
 *   networkId: "STRING_VALUE", // required
 *   clientId: "STRING_VALUE",
 *   code: "STRING_VALUE",
 *   grantType: "STRING_VALUE",
 *   redirectUri: "STRING_VALUE",
 *   url: "STRING_VALUE",
 *   clientSecret: "STRING_VALUE",
 *   codeVerifier: "STRING_VALUE",
 *   certificate: "STRING_VALUE",
 * };
 * const command = new GetOidcInfoCommand(input);
 * const response = await client.send(command);
 * // { // GetOidcInfoResponse
 * //   openidConnectInfo: { // OidcConfigInfo
 * //     applicationName: "STRING_VALUE",
 * //     clientId: "STRING_VALUE",
 * //     companyId: "STRING_VALUE", // required
 * //     scopes: "STRING_VALUE", // required
 * //     issuer: "STRING_VALUE", // required
 * //     clientSecret: "STRING_VALUE",
 * //     secret: "STRING_VALUE",
 * //     redirectUrl: "STRING_VALUE",
 * //     userId: "STRING_VALUE",
 * //     customUsername: "STRING_VALUE",
 * //     caCertificate: "STRING_VALUE",
 * //     applicationId: Number("int"),
 * //     ssoTokenBufferMinutes: Number("int"),
 * //     extraAuthParams: "STRING_VALUE",
 * //   },
 * //   tokenInfo: { // OidcTokenInfo
 * //     codeVerifier: "STRING_VALUE",
 * //     codeChallenge: "STRING_VALUE",
 * //     accessToken: "STRING_VALUE",
 * //     idToken: "STRING_VALUE",
 * //     refreshToken: "STRING_VALUE",
 * //     tokenType: "STRING_VALUE",
 * //     expiresIn: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOidcInfoCommandInput - {@link GetOidcInfoCommandInput}
 * @returns {@link GetOidcInfoCommandOutput}
 * @see {@link GetOidcInfoCommandInput} for command's `input` shape.
 * @see {@link GetOidcInfoCommandOutput} for command's `response` shape.
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
 * @example Get OIDC info successfully
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new GetOidcInfoCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   openidConnectInfo: {
 *     clientId: "client123",
 *     companyId: "us-east-1-company123",
 *     issuer: "https://login.example.com",
 *     redirectUrl: "https://app.wickr.com/callback",
 *     scopes: "openid profile email",
 *     ssoTokenBufferMinutes: 5,
 *     userId: "email"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Get OIDC info - not configured
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678"
 * };
 * const command = new GetOidcInfoCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   openidConnectInfo: {
 *     companyId: "",
 *     issuer: "",
 *     scopes: ""
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetOidcInfoCommand extends $Command
  .classBuilder<
    GetOidcInfoCommandInput,
    GetOidcInfoCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "GetOidcInfo", {})
  .n("WickrClient", "GetOidcInfoCommand")
  .sc(GetOidcInfo$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOidcInfoRequest;
      output: GetOidcInfoResponse;
    };
    sdk: {
      input: GetOidcInfoCommandInput;
      output: GetOidcInfoCommandOutput;
    };
  };
}

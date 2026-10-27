// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOAuth2TokenRequest, CreateOAuth2TokenResponse } from "../models/models_0";
import { CreateOAuth2Token$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOAuth2TokenCommand}.
 */
export interface CreateOAuth2TokenCommandInput extends CreateOAuth2TokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateOAuth2TokenCommand}.
 */
export interface CreateOAuth2TokenCommandOutput extends CreateOAuth2TokenResponse, __MetadataBearer {}

/**
 * Exchanges an authorization code or refresh token for an OAuth 2.0 access token and refresh token.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SigninClient, CreateOAuth2TokenCommand } from "@aws-sdk/client-signin"; // ES Modules import
 * // const { SigninClient, CreateOAuth2TokenCommand } = require("@aws-sdk/client-signin"); // CommonJS import
 * // import type { SigninClientConfig } from "@aws-sdk/client-signin";
 * const config = {}; // type is SigninClientConfig
 * const client = new SigninClient(config);
 * const input = { // CreateOAuth2TokenRequest
 *   tokenInput: { // CreateOAuth2TokenRequestBody
 *     clientId: "STRING_VALUE", // required
 *     grantType: "STRING_VALUE", // required
 *     code: "STRING_VALUE",
 *     redirectUri: "STRING_VALUE",
 *     codeVerifier: "STRING_VALUE",
 *     refreshToken: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateOAuth2TokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateOAuth2TokenResponse
 * //   tokenOutput: { // CreateOAuth2TokenResponseBody
 * //     accessToken: { // AccessToken
 * //       accessKeyId: "STRING_VALUE", // required
 * //       secretAccessKey: "STRING_VALUE", // required
 * //       sessionToken: "STRING_VALUE", // required
 * //     },
 * //     tokenType: "STRING_VALUE", // required
 * //     expiresIn: Number("int"), // required
 * //     refreshToken: "STRING_VALUE", // required
 * //     idToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateOAuth2TokenCommandInput - {@link CreateOAuth2TokenCommandInput}
 * @returns {@link CreateOAuth2TokenCommandOutput}
 * @see {@link CreateOAuth2TokenCommandInput} for command's `input` shape.
 * @see {@link CreateOAuth2TokenCommandOutput} for command's `response` shape.
 * @see {@link SigninClientResolvedConfig | config} for SigninClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request failed because of an internal server error.
 *
 * @throws {@link TooManyRequestsError} (client fault)
 *  The request failed because you exceeded the request rate limit for this operation.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request failed because it contains a malformed, missing, or invalid parameter.
 *
 * @throws {@link SigninServiceException}
 * <p>Base exception class for all service exceptions from Signin service.</p>
 *
 *
 * @public
 */
export class CreateOAuth2TokenCommand extends command<CreateOAuth2TokenCommandInput, CreateOAuth2TokenCommandOutput>(
  _ep0,
  _mw0,
  "CreateOAuth2Token",
  CreateOAuth2Token$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOAuth2TokenRequest;
      output: CreateOAuth2TokenResponse;
    };
    sdk: {
      input: CreateOAuth2TokenCommandInput;
      output: CreateOAuth2TokenCommandOutput;
    };
  };
}

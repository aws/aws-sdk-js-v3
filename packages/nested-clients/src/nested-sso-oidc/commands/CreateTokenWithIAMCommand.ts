// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateTokenWithIAMRequest,
  CreateTokenWithIAMRequestFilterSensitiveLog,
  CreateTokenWithIAMResponse,
  CreateTokenWithIAMResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateTokenWithIAMCommand, se_CreateTokenWithIAMCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTokenWithIAMCommand}.
 */
export interface CreateTokenWithIAMCommandInput extends CreateTokenWithIAMRequest {}
/**
 * @public
 *
 * The output of {@link CreateTokenWithIAMCommand}.
 */
export interface CreateTokenWithIAMCommandOutput extends CreateTokenWithIAMResponse, __MetadataBearer {}

/**
 * <p>Creates and returns access and refresh tokens for clients and applications that are
 *       authenticated using IAM entities. The access token can be used to fetch short-term credentials
 *       for the assigned Amazon Web Services accounts or to access application APIs using <code>bearer</code>
 *       authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, CreateTokenWithIAMCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, CreateTokenWithIAMCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const input = { // CreateTokenWithIAMRequest
 *   clientId: "STRING_VALUE", // required
 *   grantType: "STRING_VALUE", // required
 *   code: "STRING_VALUE",
 *   refreshToken: "STRING_VALUE",
 *   assertion: "STRING_VALUE",
 *   scope: [ // Scopes
 *     "STRING_VALUE",
 *   ],
 *   redirectUri: "STRING_VALUE",
 *   subjectToken: "STRING_VALUE",
 *   subjectTokenType: "STRING_VALUE",
 *   requestedTokenType: "STRING_VALUE",
 *   codeVerifier: "STRING_VALUE",
 * };
 * const command = new CreateTokenWithIAMCommand(input);
 * const response = await client.send(command);
 * // { // CreateTokenWithIAMResponse
 * //   accessToken: "STRING_VALUE",
 * //   tokenType: "STRING_VALUE",
 * //   expiresIn: Number("int"),
 * //   refreshToken: "STRING_VALUE",
 * //   idToken: "STRING_VALUE",
 * //   issuedTokenType: "STRING_VALUE",
 * //   scope: [ // Scopes
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateTokenWithIAMCommandInput - {@link CreateTokenWithIAMCommandInput}
 * @returns {@link CreateTokenWithIAMCommandOutput}
 * @see {@link CreateTokenWithIAMCommandInput} for command's `input` shape.
 * @see {@link CreateTokenWithIAMCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for SSOOIDCClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link AuthorizationPendingException} (client fault)
 *  <p>Indicates that a request to authorize a client with an access user session token is
 *       pending.</p>
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *  <p>Indicates that the token issued by the service is expired and is no longer valid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a
 *       request.</p>
 *
 * @throws {@link InvalidClientException} (client fault)
 *  <p>Indicates that the <code>clientId</code> or <code>clientSecret</code> in the request is
 *       invalid. For example, this can occur when a client sends an incorrect <code>clientId</code> or
 *       an expired <code>clientSecret</code>.</p>
 *
 * @throws {@link InvalidGrantException} (client fault)
 *  <p>Indicates that a request contains an invalid grant. This can occur if a client makes a
 *         <a>CreateToken</a> request with an invalid grant type.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link InvalidRequestRegionException} (client fault)
 *  <p>Indicates that a token provided as input to the request was issued by and is only usable
 *       by calling IAM Identity Center endpoints in another region.</p>
 *
 * @throws {@link InvalidScopeException} (client fault)
 *  <p>Indicates that the scope provided in the request is invalid.</p>
 *
 * @throws {@link SlowDownException} (client fault)
 *  <p>Indicates that the client is making the request too frequently and is more than the
 *       service can handle. </p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>Indicates that the client is not currently authorized to make the request. This can happen
 *       when a <code>clientId</code> is not issued for a public client.</p>
 *
 * @throws {@link UnsupportedGrantTypeException} (client fault)
 *  <p>Indicates that the grant type in the request is not supported by the service.</p>
 *
 * @throws {@link SSOOIDCServiceException}
 * <p>Base exception class for all service exceptions from SSOOIDC service.</p>
 *
 * @public
 */
export class CreateTokenWithIAMCommand extends $Command
  .classBuilder<
    CreateTokenWithIAMCommandInput,
    CreateTokenWithIAMCommandOutput,
    SSOOIDCClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOOIDCClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSSOOIDCService", "CreateTokenWithIAM", {})
  .n("SSOOIDCClient", "CreateTokenWithIAMCommand")
  .f(CreateTokenWithIAMRequestFilterSensitiveLog, CreateTokenWithIAMResponseFilterSensitiveLog)
  .ser(se_CreateTokenWithIAMCommand)
  .de(de_CreateTokenWithIAMCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTokenWithIAMRequest;
      output: CreateTokenWithIAMResponse;
    };
    sdk: {
      input: CreateTokenWithIAMCommandInput;
      output: CreateTokenWithIAMCommandOutput;
    };
  };
}

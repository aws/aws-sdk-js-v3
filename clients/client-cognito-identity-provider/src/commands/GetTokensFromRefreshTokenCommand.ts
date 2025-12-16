// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTokensFromRefreshTokenRequest, GetTokensFromRefreshTokenResponse } from "../models/models_0";
import { GetTokensFromRefreshToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTokensFromRefreshTokenCommand}.
 */
export interface GetTokensFromRefreshTokenCommandInput extends GetTokensFromRefreshTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetTokensFromRefreshTokenCommand}.
 */
export interface GetTokensFromRefreshTokenCommandOutput extends GetTokensFromRefreshTokenResponse, __MetadataBearer {}

/**
 * <p>Given a refresh token, issues new ID, access, and optionally refresh tokens for the
 *             user who owns the submitted token. This operation issues a new refresh token and
 *             invalidates the original refresh token after an optional grace period when refresh token
 *             rotation is enabled. If refresh token rotation is disabled, issues new ID and access
 *             tokens only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetTokensFromRefreshTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetTokensFromRefreshTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetTokensFromRefreshTokenRequest
 *   RefreshToken: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   ClientSecret: "STRING_VALUE",
 *   DeviceKey: "STRING_VALUE",
 *   ClientMetadata: { // ClientMetadataType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetTokensFromRefreshTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetTokensFromRefreshTokenResponse
 * //   AuthenticationResult: { // AuthenticationResultType
 * //     AccessToken: "STRING_VALUE",
 * //     ExpiresIn: Number("int"),
 * //     TokenType: "STRING_VALUE",
 * //     RefreshToken: "STRING_VALUE",
 * //     IdToken: "STRING_VALUE",
 * //     NewDeviceMetadata: { // NewDeviceMetadataType
 * //       DeviceKey: "STRING_VALUE",
 * //       DeviceGroupKey: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTokensFromRefreshTokenCommandInput - {@link GetTokensFromRefreshTokenCommandInput}
 * @returns {@link GetTokensFromRefreshTokenCommandOutput}
 * @see {@link GetTokensFromRefreshTokenCommandInput} for command's `input` shape.
 * @see {@link GetTokensFromRefreshTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>This exception is thrown when WAF doesn't allow your request based on a web
 *             ACL that's associated with your user pool.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidLambdaResponseException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an invalid Lambda response.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link RefreshTokenReuseException} (client fault)
 *  <p>This exception is throw when your application requests token refresh with a refresh
 *             token that has been invalidated by refresh-token rotation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UnexpectedLambdaException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an unexpected exception with
 *             Lambda.</p>
 *
 * @throws {@link UserLambdaValidationException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception
 *             with the Lambda service.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class GetTokensFromRefreshTokenCommand extends $Command
  .classBuilder<
    GetTokensFromRefreshTokenCommandInput,
    GetTokensFromRefreshTokenCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "GetTokensFromRefreshToken", {})
  .n("CognitoIdentityProviderClient", "GetTokensFromRefreshTokenCommand")
  .sc(GetTokensFromRefreshToken$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTokensFromRefreshTokenRequest;
      output: GetTokensFromRefreshTokenResponse;
    };
    sdk: {
      input: GetTokensFromRefreshTokenCommandInput;
      output: GetTokensFromRefreshTokenCommandOutput;
    };
  };
}

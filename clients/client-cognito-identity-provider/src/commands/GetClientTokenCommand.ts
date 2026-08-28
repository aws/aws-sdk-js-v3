// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetClientTokenRequest, GetClientTokenResponse } from "../models/models_0";
import { GetClientToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetClientTokenCommand}.
 */
export interface GetClientTokenCommandInput extends GetClientTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetClientTokenCommand}.
 */
export interface GetClientTokenCommandOutput extends GetClientTokenResponse, __MetadataBearer {}

/**
 * <p>Issues an access token for machine-to-machine (M2M) authorization. Your app client
 *             provides its client ID and secret, and receives an access token that authorizes requests
 *             to your resource servers. <code>GetClientToken</code> provides the same functionality as
 *             the OAuth2 client-credentials grant; both authorize an application rather than a user.</p>
 *          <p>To use this operation, you must configure the app client with a client secret and
 *             enable the <code>ALLOW_CLIENT_TOKEN_AUTH</code> authentication flow. The
 *             <code>ALLOW_CLIENT_TOKEN_AUTH</code> flow is mutually exclusive with user authentication
 *             flows. It must be the only authentication flow that you configure for the app client. For
 *             more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-define-resource-servers.html">Scopes, M2M, and resource servers</a>.</p>
 *          <note>
 *             <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you can't use IAM credentials to authorize requests, and you can't
 *     grant IAM permissions in policies. For more information about authorization models in
 *     Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetClientTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetClientTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetClientTokenRequest
 *   ClientId: "STRING_VALUE", // required
 *   Secret: "STRING_VALUE", // required
 *   Scopes: [ // ScopeListType
 *     "STRING_VALUE",
 *   ],
 *   ClientMetadata: { // ClientMetadataType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetClientTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetClientTokenResponse
 * //   ClientAuthenticationResult: { // ClientAuthenticationResultType
 * //     AccessToken: "STRING_VALUE",
 * //     ExpiresIn: Number("int"),
 * //     TokenType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetClientTokenCommandInput - {@link GetClientTokenCommandInput}
 * @returns {@link GetClientTokenCommandOutput}
 * @see {@link GetClientTokenCommandInput} for command's `input` shape.
 * @see {@link GetClientTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>This exception is thrown when WAF doesn't allow your request based on a web
 *             ACL that's associated with your user pool.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *  <p>This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @example Example – Get an access token for machine-to-machine authorization
 * ```javascript
 * // The following example gets an access token for the app client 1example23456789 with the custom scope solar-system-data/asteroids.add.
 * const input = {
 *   ClientId: "1example23456789",
 *   Scopes: [
 *     "solar-system-data/asteroids.add"
 *   ],
 *   Secret: "exampleClientSecret123EXAMPLE"
 * };
 * const command = new GetClientTokenCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ClientAuthenticationResult: {
 *     AccessToken: "eyJra456defEXAMPLE",
 *     ExpiresIn: 3600,
 *     TokenType: "Bearer"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetClientTokenCommand extends command<GetClientTokenCommandInput, GetClientTokenCommandOutput>(
  _ep0,
  _mw0,
  "GetClientToken",
  GetClientToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClientTokenRequest;
      output: GetClientTokenResponse;
    };
    sdk: {
      input: GetClientTokenCommandInput;
      output: GetClientTokenCommandOutput;
    };
  };
}

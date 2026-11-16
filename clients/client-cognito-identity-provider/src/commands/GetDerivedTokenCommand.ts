// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDerivedTokenRequest, GetDerivedTokenResponse } from "../models/models_0";
import { GetDerivedToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDerivedTokenCommand}.
 */
export interface GetDerivedTokenCommandInput extends GetDerivedTokenRequest {}
/**
 * @public
 *
 * The output of {@link GetDerivedTokenCommand}.
 */
export interface GetDerivedTokenCommandOutput extends GetDerivedTokenResponse, __MetadataBearer {}

/**
 * <p>Exchanges an existing token for a new token that is scoped and audience-bound for a
 *             specific downstream service, following the OAuth 2.0 Token Exchange grant type. For
 *             more information about the OAuth 2.0 Token Exchange grant type, see
 *             <a href="https://tools.ietf.org/html/rfc8693">RFC 8693 - OAuth 2.0 Token
 *                 Exchange</a> on the IETF website. Present a <code>SubjectToken</code>, the
 *             credential that you already hold, to receive a new token appropriate for calling a
 *             specific resource server or audience.</p>
 *          <p>If you also present an <code>ActorToken</code> that identifies an intermediary
 *             service, the issued token carries an <code>act</code> claim that identifies the
 *             intermediary, and downstream services can distinguish a user acting directly from an
 *             intermediary acting on the user's behalf. If you don't present an
 *                 <code>ActorToken</code>, the issued token appears as if the user acted
 *             directly.</p>
 *          <p>To use this operation, you must have IAM credentials, or you must present the
 *             requesting app client's <code>ClientId</code> and, if the client has a secret,
 *                 <code>ClientSecret</code>, in the request.</p>
 *          <p>The requesting app client must have <code>ALLOW_TOKEN_EXCHANGE_IMPERSONATION</code>
 *             or <code>ALLOW_TOKEN_EXCHANGE_DELEGATION</code> in its <code>ExplicitAuthFlows</code>
 *             (depending on whether you include an <code>ActorToken</code>), or the request
 *             fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetDerivedTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetDerivedTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetDerivedTokenRequest
 *   ClientId: "STRING_VALUE", // required
 *   ClientSecret: "STRING_VALUE",
 *   SubjectToken: "STRING_VALUE", // required
 *   SubjectTokenType: "ACCESS_TOKEN" || "ID_TOKEN" || "SAML2", // required
 *   SubjectTokenProviderName: "STRING_VALUE",
 *   ActorToken: "STRING_VALUE",
 *   ActorTokenType: "ACCESS_TOKEN" || "ID_TOKEN" || "SAML2",
 *   ActorTokenProviderName: "STRING_VALUE",
 *   Scopes: [ // ScopeListType
 *     "STRING_VALUE",
 *   ],
 *   Audiences: [ // AudienceListType
 *     "STRING_VALUE",
 *   ],
 *   Resources: [ // ResourceListType
 *     "STRING_VALUE",
 *   ],
 *   RequestedTokenType: "ACCESS_TOKEN" || "ID_TOKEN",
 * };
 * const command = new GetDerivedTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetDerivedTokenResponse
 * //   IssuedToken: "STRING_VALUE", // required
 * //   IssuedTokenType: "ACCESS_TOKEN" || "ID_TOKEN", // required
 * //   TokenType: "Bearer" || "N_A", // required
 * //   ExpiresIn: Number("int"),
 * //   Scopes: [ // ScopeListType
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDerivedTokenCommandInput - {@link GetDerivedTokenCommandInput}
 * @returns {@link GetDerivedTokenCommandOutput}
 * @see {@link GetDerivedTokenCommandInput} for command's `input` shape.
 * @see {@link GetDerivedTokenCommandOutput} for command's `response` shape.
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
 * @example Example exchange a subject token for an audience-bound access token
 * ```javascript
 * // The following example exchanges an access token for a new access token that is scoped and audience-bound for the solar-system-data resource server.
 * const input = {
 *   Audiences: [
 *     "solar-system-data"
 *   ],
 *   ClientId: "1example23456789",
 *   ClientSecret: "13ka4h7u28d9oo44tqpq9djqsfvhvu8rk4d2ighvpu0k8fj1c2r9",
 *   Scopes: [
 *     "solar-system-data/asteroids.read"
 *   ],
 *   SubjectToken: "eyJra456defEXAMPLE",
 *   SubjectTokenType: "ACCESS_TOKEN"
 * };
 * const command = new GetDerivedTokenCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ExpiresIn: 3600,
 *   IssuedToken: "eyJra789ghiEXAMPLE",
 *   IssuedTokenType: "ACCESS_TOKEN",
 *   Scopes: [
 *     "solar-system-data/asteroids.read"
 *   ],
 *   TokenType: "Bearer"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDerivedTokenCommand extends command<GetDerivedTokenCommandInput, GetDerivedTokenCommandOutput>(
  _ep0,
  _mw0,
  "GetDerivedToken",
  GetDerivedToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDerivedTokenRequest;
      output: GetDerivedTokenResponse;
    };
    sdk: {
      input: GetDerivedTokenCommandInput;
      output: GetDerivedTokenCommandOutput;
    };
  };
}

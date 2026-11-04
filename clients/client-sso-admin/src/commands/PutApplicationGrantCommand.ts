// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutApplicationGrantRequest } from "../models/models_0";
import { PutApplicationGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutApplicationGrantCommand}.
 */
export interface PutApplicationGrantCommandInput extends PutApplicationGrantRequest {}
/**
 * @public
 *
 * The output of {@link PutApplicationGrantCommand}.
 */
export interface PutApplicationGrantCommandOutput extends __MetadataBearer {}

/**
 * Creates a configuration for an application to use grants. Conceptually grants are authorization to request actions related to tokens. This configuration will be used when parties are requesting and receiving tokens during the trusted identity propagation process. For more information on the IAM Identity Center supported grant workflows, see [SAML 2.0 and OAuth 2.0](https://docs.aws.amazon.com/singlesignon/latest/userguide/customermanagedapps-saml2-oauth2.html).
 *
 * A grant is created between your applications and Identity Center instance which enables an application to use specified mechanisms to obtain tokens. These tokens are used by your applications to gain access to Amazon Web Services resources on behalf of users. The following elements are within these exchanges:
 *
 * - **Requester** - The application requesting access to Amazon Web Services resources.
 * - **Subject** - Typically the user that is requesting access to Amazon Web Services resources.
 * - **Grant** - Conceptually, a grant is authorization to access Amazon Web Services resources. These grants authorize token generation for authenticating access to the requester and for the request to make requests on behalf of the subjects. There are four types of grants:
 *
 *   - **AuthorizationCode** - Allows an application to request authorization through a series of user-agent redirects.
 *   - **JWT bearer** - Authorizes an application to exchange a JSON Web Token that came from an external identity provider. To learn more, see [RFC 6479](https://datatracker.ietf.org/doc/html/rfc6749).
 *   - **Refresh token** - Enables application to request new access tokens to replace expiring or expired access tokens.
 *   - **Exchange token** - A grant that requests tokens from the authorization server by providing a ‘subject’ token with access scope authorizing trusted identity propagation to this application. To learn more, see [RFC 8693](https://datatracker.ietf.org/doc/html/rfc8693).
 * - **Authorization server** - IAM Identity Center requests tokens.
 *
 * User credentials are never shared directly within these exchanges. Instead, applications use grants to request access tokens from IAM Identity Center. For more information, see [RFC 6479](https://datatracker.ietf.org/doc/html/rfc6749).
 *
 * **Use cases**
 *
 * - Connecting to custom applications.
 * - Configuring an Amazon Web Services service to make calls to another Amazon Web Services services using JWT tokens.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutApplicationGrantCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutApplicationGrantCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // PutApplicationGrantRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   GrantType: "authorization_code" || "refresh_token" || "urn:ietf:params:oauth:grant-type:jwt-bearer" || "urn:ietf:params:oauth:grant-type:token-exchange", // required
 *   Grant: { // Grant Union: only one key present
 *     AuthorizationCode: { // AuthorizationCodeGrant
 *       RedirectUris: [ // RedirectUris
 *         "STRING_VALUE",
 *       ],
 *     },
 *     JwtBearer: { // JwtBearerGrant
 *       AuthorizedTokenIssuers: [ // AuthorizedTokenIssuers
 *         { // AuthorizedTokenIssuer
 *           TrustedTokenIssuerArn: "STRING_VALUE",
 *           AuthorizedAudiences: [ // TokenIssuerAudiences
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *     RefreshToken: {},
 *     TokenExchange: {},
 *   },
 * };
 * const command = new PutApplicationGrantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutApplicationGrantCommandInput - {@link PutApplicationGrantCommandInput}
 * @returns {@link PutApplicationGrantCommandOutput}
 * @see {@link PutApplicationGrantCommandInput} for command's `input` shape.
 * @see {@link PutApplicationGrantCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class PutApplicationGrantCommand extends command<PutApplicationGrantCommandInput, PutApplicationGrantCommandOutput>(
  _ep0,
  _mw0,
  "PutApplicationGrant",
  PutApplicationGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutApplicationGrantRequest;
      output: {};
    };
    sdk: {
      input: PutApplicationGrantCommandInput;
      output: PutApplicationGrantCommandOutput;
    };
  };
}

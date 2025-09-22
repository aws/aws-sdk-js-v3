// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutApplicationGrantRequest } from "../models/models_0";
import { PutApplicationGrant } from "../schemas/schemas_6_TrustedToken";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a configuration for an application to use grants. Conceptually grants are authorization to request actions related to tokens. This configuration will be used when parties are requesting and receiving tokens during the trusted identity propagation process. For more information on the IAM Identity Center supported grant workflows, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/customermanagedapps-saml2-oauth2.html">SAML 2.0 and OAuth 2.0</a>.</p> <p>A grant is created between your applications and Identity Center instance which enables an application to use specified mechanisms to obtain tokens. These tokens are used by your applications to gain access to Amazon Web Services resources on behalf of users. The following elements are within these exchanges:</p> <ul> <li> <p> <b>Requester</b> - The application requesting access to Amazon Web Services resources.</p> </li> <li> <p> <b>Subject</b> - Typically the user that is requesting access to Amazon Web Services resources.</p> </li> <li> <p> <b>Grant</b> - Conceptually, a grant is authorization to access Amazon Web Services resources. These grants authorize token generation for authenticating access to the requester and for the request to make requests on behalf of the subjects. There are four types of grants:</p> <ul> <li> <p> <b>AuthorizationCode</b> - Allows an application to request authorization through a series of user-agent redirects.</p> </li> <li> <p> <b>JWT bearer </b> - Authorizes an application to exchange a JSON Web Token that came from an external identity provider. To learn more, see <a href="https://datatracker.ietf.org/doc/html/rfc6749">RFC 6479</a>.</p> </li> <li> <p> <b>Refresh token</b> - Enables application to request new access tokens to replace expiring or expired access tokens.</p> </li> <li> <p> <b>Exchange token</b> - A grant that requests tokens from the authorization server by providing a ‘subject’ token with access scope authorizing trusted identity propagation to this application. To learn more, see <a href="https://datatracker.ietf.org/doc/html/rfc8693">RFC 8693</a>.</p> </li> </ul> </li> <li> <p> <b>Authorization server</b> - IAM Identity Center requests tokens.</p> </li> </ul> <p>User credentials are never shared directly within these exchanges. Instead, applications use grants to request access tokens from IAM Identity Center. For more information, see <a href="https://datatracker.ietf.org/doc/html/rfc6749">RFC 6479</a>.</p> <p class="title"> <b>Use cases</b> </p> <ul> <li> <p>Connecting to custom applications.</p> </li> <li> <p>Configuring an Amazon Web Services service to make calls to another Amazon Web Services services using JWT tokens.</p> </li> </ul>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class PutApplicationGrantCommand extends $Command
  .classBuilder<
    PutApplicationGrantCommandInput,
    PutApplicationGrantCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "PutApplicationGrant", {})
  .n("SSOAdminClient", "PutApplicationGrantCommand")
  .sc(PutApplicationGrant)
  .build() {
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

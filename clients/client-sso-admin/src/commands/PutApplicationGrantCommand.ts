// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutApplicationGrantRequest } from "../models/models_0";
import { de_PutApplicationGrantCommand, se_PutApplicationGrantCommand } from "../protocols/Aws_json1_1";
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
 * <p>Adds a grant to an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, PutApplicationGrantCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, PutApplicationGrantCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
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
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *             occurs when the previous write did not have time to propagate to the host serving the
 *             current request. A retry (with appropriate backoff logic) is the recommended response to
 *             this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *             with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *             operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "PutApplicationGrant", {})
  .n("SSOAdminClient", "PutApplicationGrantCommand")
  .f(void 0, void 0)
  .ser(se_PutApplicationGrantCommand)
  .de(de_PutApplicationGrantCommand)
  .build() {}

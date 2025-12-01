// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetApplicationGrantRequest, GetApplicationGrantResponse } from "../models/models_0";
import { GetApplicationGrant } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationGrantCommand}.
 */
export interface GetApplicationGrantCommandInput extends GetApplicationGrantRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationGrantCommand}.
 */
export interface GetApplicationGrantCommandOutput extends GetApplicationGrantResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about an application grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, GetApplicationGrantCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, GetApplicationGrantCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // GetApplicationGrantRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   GrantType: "authorization_code" || "refresh_token" || "urn:ietf:params:oauth:grant-type:jwt-bearer" || "urn:ietf:params:oauth:grant-type:token-exchange", // required
 * };
 * const command = new GetApplicationGrantCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationGrantResponse
 * //   Grant: { // Grant Union: only one key present
 * //     AuthorizationCode: { // AuthorizationCodeGrant
 * //       RedirectUris: [ // RedirectUris
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     JwtBearer: { // JwtBearerGrant
 * //       AuthorizedTokenIssuers: [ // AuthorizedTokenIssuers
 * //         { // AuthorizedTokenIssuer
 * //           TrustedTokenIssuerArn: "STRING_VALUE",
 * //           AuthorizedAudiences: [ // TokenIssuerAudiences
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     RefreshToken: {},
 * //     TokenExchange: {},
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApplicationGrantCommandInput - {@link GetApplicationGrantCommandInput}
 * @returns {@link GetApplicationGrantCommandOutput}
 * @see {@link GetApplicationGrantCommandInput} for command's `input` shape.
 * @see {@link GetApplicationGrantCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetApplicationGrantCommand extends $Command
  .classBuilder<
    GetApplicationGrantCommandInput,
    GetApplicationGrantCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "GetApplicationGrant", {})
  .n("SSOAdminClient", "GetApplicationGrantCommand")
  .sc(GetApplicationGrant)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationGrantRequest;
      output: GetApplicationGrantResponse;
    };
    sdk: {
      input: GetApplicationGrantCommandInput;
      output: GetApplicationGrantCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListApplicationGrantsRequest, ListApplicationGrantsResponse } from "../models/models_0";
import { de_ListApplicationGrantsCommand, se_ListApplicationGrantsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationGrantsCommand}.
 */
export interface ListApplicationGrantsCommandInput extends ListApplicationGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationGrantsCommand}.
 */
export interface ListApplicationGrantsCommandOutput extends ListApplicationGrantsResponse, __MetadataBearer {}

/**
 * <p>List the grants associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationGrantsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationGrantsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // ListApplicationGrantsRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationGrantsResponse
 * //   Grants: [ // Grants // required
 * //     { // GrantItem
 * //       GrantType: "authorization_code" || "refresh_token" || "urn:ietf:params:oauth:grant-type:jwt-bearer" || "urn:ietf:params:oauth:grant-type:token-exchange", // required
 * //       Grant: { // Grant Union: only one key present
 * //         AuthorizationCode: { // AuthorizationCodeGrant
 * //           RedirectUris: [ // RedirectUris
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         JwtBearer: { // JwtBearerGrant
 * //           AuthorizedTokenIssuers: [ // AuthorizedTokenIssuers
 * //             { // AuthorizedTokenIssuer
 * //               TrustedTokenIssuerArn: "STRING_VALUE",
 * //               AuthorizedAudiences: [ // TokenIssuerAudiences
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //         RefreshToken: {},
 * //         TokenExchange: {},
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationGrantsCommandInput - {@link ListApplicationGrantsCommandInput}
 * @returns {@link ListApplicationGrantsCommandOutput}
 * @see {@link ListApplicationGrantsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationGrantsCommandOutput} for command's `response` shape.
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
export class ListApplicationGrantsCommand extends $Command
  .classBuilder<
    ListApplicationGrantsCommandInput,
    ListApplicationGrantsCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SWBExternalService", "ListApplicationGrants", {})
  .n("SSOAdminClient", "ListApplicationGrantsCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationGrantsCommand)
  .de(de_ListApplicationGrantsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationGrantsRequest;
      output: ListApplicationGrantsResponse;
    };
    sdk: {
      input: ListApplicationGrantsCommandInput;
      output: ListApplicationGrantsCommandOutput;
    };
  };
}

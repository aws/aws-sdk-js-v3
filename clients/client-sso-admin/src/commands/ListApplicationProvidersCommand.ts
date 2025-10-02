// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListApplicationProvidersRequest, ListApplicationProvidersResponse } from "../models/models_0";
import { de_ListApplicationProvidersCommand, se_ListApplicationProvidersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationProvidersCommand}.
 */
export interface ListApplicationProvidersCommandInput extends ListApplicationProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationProvidersCommand}.
 */
export interface ListApplicationProvidersCommandOutput extends ListApplicationProvidersResponse, __MetadataBearer {}

/**
 * <p>Lists the application providers configured in the IAM Identity Center identity store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationProvidersCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationProvidersCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListApplicationProvidersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationProvidersResponse
 * //   ApplicationProviders: [ // ApplicationProviderList
 * //     { // ApplicationProvider
 * //       ApplicationProviderArn: "STRING_VALUE", // required
 * //       FederationProtocol: "SAML" || "OAUTH",
 * //       DisplayData: { // DisplayData
 * //         DisplayName: "STRING_VALUE",
 * //         IconUrl: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //       ResourceServerConfig: { // ResourceServerConfig
 * //         Scopes: { // ResourceServerScopes
 * //           "<keys>": { // ResourceServerScopeDetails
 * //             LongDescription: "STRING_VALUE",
 * //             DetailedTitle: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationProvidersCommandInput - {@link ListApplicationProvidersCommandInput}
 * @returns {@link ListApplicationProvidersCommandOutput}
 * @see {@link ListApplicationProvidersCommandInput} for command's `input` shape.
 * @see {@link ListApplicationProvidersCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
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
export class ListApplicationProvidersCommand extends $Command
  .classBuilder<
    ListApplicationProvidersCommandInput,
    ListApplicationProvidersCommandOutput,
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
  .s("SWBExternalService", "ListApplicationProviders", {})
  .n("SSOAdminClient", "ListApplicationProvidersCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationProvidersCommand)
  .de(de_ListApplicationProvidersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationProvidersRequest;
      output: ListApplicationProvidersResponse;
    };
    sdk: {
      input: ListApplicationProvidersCommandInput;
      output: ListApplicationProvidersCommandOutput;
    };
  };
}

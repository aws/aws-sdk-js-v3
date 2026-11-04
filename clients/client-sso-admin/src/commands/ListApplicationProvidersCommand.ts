// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListApplicationProvidersRequest, ListApplicationProvidersResponse } from "../models/models_0";
import { ListApplicationProviders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the application providers configured in the IAM Identity Center identity store.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
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
export class ListApplicationProvidersCommand extends command<ListApplicationProvidersCommandInput, ListApplicationProvidersCommandOutput>(
  _ep0,
  _mw0,
  "ListApplicationProviders",
  ListApplicationProviders$
) {
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

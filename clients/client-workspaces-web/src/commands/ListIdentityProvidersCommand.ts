// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIdentityProvidersRequest, ListIdentityProvidersResponse } from "../models/models_0";
import { ListIdentityProviders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIdentityProvidersCommand}.
 */
export interface ListIdentityProvidersCommandInput extends ListIdentityProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListIdentityProvidersCommand}.
 */
export interface ListIdentityProvidersCommandOutput extends ListIdentityProvidersResponse, __MetadataBearer {}

/**
 * Retrieves a list of identity providers for a specific web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListIdentityProvidersCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListIdentityProvidersCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListIdentityProvidersRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new ListIdentityProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityProvidersResponse
 * //   nextToken: "STRING_VALUE",
 * //   identityProviders: [ // IdentityProviderList
 * //     { // IdentityProviderSummary
 * //       identityProviderArn: "STRING_VALUE", // required
 * //       identityProviderName: "STRING_VALUE",
 * //       identityProviderType: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIdentityProvidersCommandInput - {@link ListIdentityProvidersCommandInput}
 * @returns {@link ListIdentityProvidersCommandOutput}
 * @see {@link ListIdentityProvidersCommandInput} for command's `input` shape.
 * @see {@link ListIdentityProvidersCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class ListIdentityProvidersCommand extends command<ListIdentityProvidersCommandInput, ListIdentityProvidersCommandOutput>(
  _ep0,
  _mw0,
  "ListIdentityProviders",
  ListIdentityProviders$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdentityProvidersRequest;
      output: ListIdentityProvidersResponse;
    };
    sdk: {
      input: ListIdentityProvidersCommandInput;
      output: ListIdentityProvidersCommandOutput;
    };
  };
}

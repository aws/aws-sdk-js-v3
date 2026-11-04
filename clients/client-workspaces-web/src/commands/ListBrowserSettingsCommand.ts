// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListBrowserSettingsRequest, ListBrowserSettingsResponse } from "../models/models_0";
import { ListBrowserSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBrowserSettingsCommand}.
 */
export interface ListBrowserSettingsCommandInput extends ListBrowserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListBrowserSettingsCommand}.
 */
export interface ListBrowserSettingsCommandOutput extends ListBrowserSettingsResponse, __MetadataBearer {}

/**
 * Retrieves a list of browser settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListBrowserSettingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListBrowserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListBrowserSettingsResponse
 * //   browserSettings: [ // BrowserSettingsList
 * //     { // BrowserSettingsSummary
 * //       browserSettingsArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBrowserSettingsCommandInput - {@link ListBrowserSettingsCommandInput}
 * @returns {@link ListBrowserSettingsCommandOutput}
 * @see {@link ListBrowserSettingsCommandInput} for command's `input` shape.
 * @see {@link ListBrowserSettingsCommandOutput} for command's `response` shape.
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
export class ListBrowserSettingsCommand extends command<ListBrowserSettingsCommandInput, ListBrowserSettingsCommandOutput>(
  _ep0,
  _mw0,
  "ListBrowserSettings",
  ListBrowserSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBrowserSettingsRequest;
      output: ListBrowserSettingsResponse;
    };
    sdk: {
      input: ListBrowserSettingsCommandInput;
      output: ListBrowserSettingsCommandOutput;
    };
  };
}

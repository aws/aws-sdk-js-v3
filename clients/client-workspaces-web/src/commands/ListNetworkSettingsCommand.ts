// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListNetworkSettingsRequest, ListNetworkSettingsResponse } from "../models/models_0";
import { ListNetworkSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListNetworkSettingsCommand}.
 */
export interface ListNetworkSettingsCommandInput extends ListNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListNetworkSettingsCommand}.
 */
export interface ListNetworkSettingsCommandOutput extends ListNetworkSettingsResponse, __MetadataBearer {}

/**
 * Retrieves a list of network settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListNetworkSettingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListNetworkSettingsResponse
 * //   networkSettings: [ // NetworkSettingsList
 * //     { // NetworkSettingsSummary
 * //       networkSettingsArn: "STRING_VALUE", // required
 * //       vpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNetworkSettingsCommandInput - {@link ListNetworkSettingsCommandInput}
 * @returns {@link ListNetworkSettingsCommandOutput}
 * @see {@link ListNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link ListNetworkSettingsCommandOutput} for command's `response` shape.
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
export class ListNetworkSettingsCommand extends command<ListNetworkSettingsCommandInput, ListNetworkSettingsCommandOutput>(
  _ep0,
  _mw0,
  "ListNetworkSettings",
  ListNetworkSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNetworkSettingsRequest;
      output: ListNetworkSettingsResponse;
    };
    sdk: {
      input: ListNetworkSettingsCommandInput;
      output: ListNetworkSettingsCommandOutput;
    };
  };
}

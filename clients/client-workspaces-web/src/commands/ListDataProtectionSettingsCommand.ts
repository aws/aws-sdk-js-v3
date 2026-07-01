// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataProtectionSettingsRequest, ListDataProtectionSettingsResponse } from "../models/models_0";
import { ListDataProtectionSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataProtectionSettingsCommand}.
 */
export interface ListDataProtectionSettingsCommandInput extends ListDataProtectionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataProtectionSettingsCommand}.
 */
export interface ListDataProtectionSettingsCommandOutput extends ListDataProtectionSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of data protection settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListDataProtectionSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListDataProtectionSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListDataProtectionSettingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataProtectionSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataProtectionSettingsResponse
 * //   dataProtectionSettings: [ // DataProtectionSettingsList
 * //     { // DataProtectionSettingsSummary
 * //       dataProtectionSettingsArn: "STRING_VALUE", // required
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataProtectionSettingsCommandInput - {@link ListDataProtectionSettingsCommandInput}
 * @returns {@link ListDataProtectionSettingsCommandOutput}
 * @see {@link ListDataProtectionSettingsCommandInput} for command's `input` shape.
 * @see {@link ListDataProtectionSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>There is a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There is a validation error.</p>
 *
 * @throws {@link WorkSpacesWebServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesWeb service.</p>
 *
 *
 * @public
 */
export class ListDataProtectionSettingsCommand extends command<ListDataProtectionSettingsCommandInput, ListDataProtectionSettingsCommandOutput>(
  _ep0,
  _mw0,
  "ListDataProtectionSettings",
  ListDataProtectionSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataProtectionSettingsRequest;
      output: ListDataProtectionSettingsResponse;
    };
    sdk: {
      input: ListDataProtectionSettingsCommandInput;
      output: ListDataProtectionSettingsCommandOutput;
    };
  };
}

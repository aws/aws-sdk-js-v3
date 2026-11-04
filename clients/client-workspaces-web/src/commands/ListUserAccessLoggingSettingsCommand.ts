// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUserAccessLoggingSettingsRequest, ListUserAccessLoggingSettingsResponse } from "../models/models_0";
import { ListUserAccessLoggingSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListUserAccessLoggingSettingsCommand}.
 */
export interface ListUserAccessLoggingSettingsCommandInput extends ListUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserAccessLoggingSettingsCommand}.
 */
export interface ListUserAccessLoggingSettingsCommandOutput extends ListUserAccessLoggingSettingsResponse, __MetadataBearer {}

/**
 * Retrieves a list of user access logging settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListUserAccessLoggingSettingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserAccessLoggingSettingsResponse
 * //   userAccessLoggingSettings: [ // UserAccessLoggingSettingsList
 * //     { // UserAccessLoggingSettingsSummary
 * //       userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * //       kinesisStreamArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserAccessLoggingSettingsCommandInput - {@link ListUserAccessLoggingSettingsCommandInput}
 * @returns {@link ListUserAccessLoggingSettingsCommandOutput}
 * @see {@link ListUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link ListUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
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
export class ListUserAccessLoggingSettingsCommand extends command<ListUserAccessLoggingSettingsCommandInput, ListUserAccessLoggingSettingsCommandOutput>(
  _ep0,
  _mw0,
  "ListUserAccessLoggingSettings",
  ListUserAccessLoggingSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserAccessLoggingSettingsRequest;
      output: ListUserAccessLoggingSettingsResponse;
    };
    sdk: {
      input: ListUserAccessLoggingSettingsCommandInput;
      output: ListUserAccessLoggingSettingsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListBrowserSettingsRequest, ListBrowserSettingsResponse } from "../models/models_0";
import { de_ListBrowserSettingsCommand, se_ListBrowserSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a list of browser settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
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
 * @public
 */
export class ListBrowserSettingsCommand extends $Command
  .classBuilder<
    ListBrowserSettingsCommandInput,
    ListBrowserSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "ListBrowserSettings", {})
  .n("WorkSpacesWebClient", "ListBrowserSettingsCommand")
  .f(void 0, void 0)
  .ser(se_ListBrowserSettingsCommand)
  .de(de_ListBrowserSettingsCommand)
  .build() {}

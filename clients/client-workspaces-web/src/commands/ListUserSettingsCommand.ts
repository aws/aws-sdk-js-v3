// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListUserSettingsRequest,
  ListUserSettingsResponse,
  ListUserSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListUserSettingsCommand, se_ListUserSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUserSettingsCommand}.
 */
export interface ListUserSettingsCommandInput extends ListUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserSettingsCommand}.
 */
export interface ListUserSettingsCommandOutput extends ListUserSettingsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of user settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, ListUserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, ListUserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * const client = new WorkSpacesWebClient(config);
 * const input = { // ListUserSettingsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserSettingsResponse
 * //   userSettings: [ // UserSettingsList
 * //     { // UserSettingsSummary
 * //       userSettingsArn: "STRING_VALUE", // required
 * //       copyAllowed: "STRING_VALUE",
 * //       pasteAllowed: "STRING_VALUE",
 * //       downloadAllowed: "STRING_VALUE",
 * //       uploadAllowed: "STRING_VALUE",
 * //       printAllowed: "STRING_VALUE",
 * //       disconnectTimeoutInMinutes: Number("int"),
 * //       idleDisconnectTimeoutInMinutes: Number("int"),
 * //       cookieSynchronizationConfiguration: { // CookieSynchronizationConfiguration
 * //         allowlist: [ // CookieSpecifications // required
 * //           { // CookieSpecification
 * //             domain: "STRING_VALUE", // required
 * //             name: "STRING_VALUE",
 * //             path: "STRING_VALUE",
 * //           },
 * //         ],
 * //         blocklist: [
 * //           {
 * //             domain: "STRING_VALUE", // required
 * //             name: "STRING_VALUE",
 * //             path: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       deepLinkAllowed: "STRING_VALUE",
 * //       toolbarConfiguration: { // ToolbarConfiguration
 * //         toolbarType: "STRING_VALUE",
 * //         visualMode: "STRING_VALUE",
 * //         hiddenToolbarItems: [ // HiddenToolbarItemList
 * //           "STRING_VALUE",
 * //         ],
 * //         maxDisplayResolution: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserSettingsCommandInput - {@link ListUserSettingsCommandInput}
 * @returns {@link ListUserSettingsCommandOutput}
 * @see {@link ListUserSettingsCommandInput} for command's `input` shape.
 * @see {@link ListUserSettingsCommandOutput} for command's `response` shape.
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
export class ListUserSettingsCommand extends $Command
  .classBuilder<
    ListUserSettingsCommandInput,
    ListUserSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSErmineControlPlaneService", "ListUserSettings", {})
  .n("WorkSpacesWebClient", "ListUserSettingsCommand")
  .f(void 0, ListUserSettingsResponseFilterSensitiveLog)
  .ser(se_ListUserSettingsCommand)
  .de(de_ListUserSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserSettingsRequest;
      output: ListUserSettingsResponse;
    };
    sdk: {
      input: ListUserSettingsCommandInput;
      output: ListUserSettingsCommandOutput;
    };
  };
}

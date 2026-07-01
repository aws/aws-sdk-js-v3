// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUserSettingsRequest, ListUserSettingsResponse } from "../models/models_0";
import { ListUserSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
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
 * //       brandingConfiguration: { // BrandingConfiguration
 * //         logo: { // ImageMetadata
 * //           mimeType: "image/png" || "image/jpeg" || "image/x-icon", // required
 * //           fileExtension: "STRING_VALUE", // required
 * //           lastUploadTimestamp: new Date("TIMESTAMP"), // required
 * //         },
 * //         wallpaper: {
 * //           mimeType: "image/png" || "image/jpeg" || "image/x-icon", // required
 * //           fileExtension: "STRING_VALUE", // required
 * //           lastUploadTimestamp: new Date("TIMESTAMP"), // required
 * //         },
 * //         favicon: {
 * //           mimeType: "image/png" || "image/jpeg" || "image/x-icon", // required
 * //           fileExtension: "STRING_VALUE", // required
 * //           lastUploadTimestamp: new Date("TIMESTAMP"), // required
 * //         },
 * //         localizedStrings: { // LocalizedBrandingStringMap // required
 * //           "<keys>": { // LocalizedBrandingStrings
 * //             browserTabTitle: "STRING_VALUE", // required
 * //             welcomeText: "STRING_VALUE", // required
 * //             loginTitle: "STRING_VALUE",
 * //             loginDescription: "STRING_VALUE",
 * //             loginButtonText: "STRING_VALUE",
 * //             contactLink: "STRING_VALUE",
 * //             contactButtonText: "STRING_VALUE",
 * //             loadingText: "STRING_VALUE",
 * //           },
 * //         },
 * //         colorTheme: "Light" || "Dark", // required
 * //         termsOfService: "STRING_VALUE",
 * //       },
 * //       webAuthnAllowed: "STRING_VALUE",
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
 *
 * @public
 */
export class ListUserSettingsCommand extends command<ListUserSettingsCommandInput, ListUserSettingsCommandOutput>(
  _ep0,
  _mw0,
  "ListUserSettings",
  ListUserSettings$
) {
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

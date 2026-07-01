// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBrowserSettingsRequest, GetBrowserSettingsResponse } from "../models/models_0";
import { GetBrowserSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBrowserSettingsCommand}.
 */
export interface GetBrowserSettingsCommandInput extends GetBrowserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetBrowserSettingsCommand}.
 */
export interface GetBrowserSettingsCommandOutput extends GetBrowserSettingsResponse, __MetadataBearer {}

/**
 * <p>Gets browser settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetBrowserSettingsRequest
 *   browserSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new GetBrowserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetBrowserSettingsResponse
 * //   browserSettings: { // BrowserSettings
 * //     browserSettingsArn: "STRING_VALUE", // required
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     browserPolicy: "STRING_VALUE",
 * //     customerManagedKey: "STRING_VALUE",
 * //     additionalEncryptionContext: { // EncryptionContextMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     webContentFilteringPolicy: { // WebContentFilteringPolicy
 * //       blockedCategories: [ // BlockedCategories
 * //         "Cults" || "Gambling" || "Nudity" || "Pornography" || "SexEducation" || "Tasteless" || "Violence" || "DownloadSites" || "ImageSharing" || "PeerToPeer" || "StreamingMediaAndDownloads" || "GenerativeAI" || "CriminalActivity" || "Hacking" || "HateAndIntolerance" || "IllegalDrug" || "IllegalSoftware" || "SchoolCheating" || "SelfHarm" || "Weapons" || "Chat" || "Games" || "InstantMessaging" || "ProfessionalNetwork" || "SocialNetworking" || "WebBasedEmail" || "ParkedDomains",
 * //       ],
 * //       allowedUrls: [ // UrlPatternList
 * //         "STRING_VALUE",
 * //       ],
 * //       blockedUrls: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBrowserSettingsCommandInput - {@link GetBrowserSettingsCommandInput}
 * @returns {@link GetBrowserSettingsCommandOutput}
 * @see {@link GetBrowserSettingsCommandInput} for command's `input` shape.
 * @see {@link GetBrowserSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
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
export class GetBrowserSettingsCommand extends command<GetBrowserSettingsCommandInput, GetBrowserSettingsCommandOutput>(
  _ep0,
  _mw0,
  "GetBrowserSettings",
  GetBrowserSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBrowserSettingsRequest;
      output: GetBrowserSettingsResponse;
    };
    sdk: {
      input: GetBrowserSettingsCommandInput;
      output: GetBrowserSettingsCommandOutput;
    };
  };
}

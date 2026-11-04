// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStackRequest, UpdateStackResult } from "../models/models_0";
import { UpdateStack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateStackCommand}.
 */
export interface UpdateStackCommandInput extends UpdateStackRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStackCommand}.
 */
export interface UpdateStackCommandOutput extends UpdateStackResult, __MetadataBearer {}

/**
 * Updates the specified fields for the specified stack.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // UpdateStackRequest
 *   DisplayName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   StorageConnectors: [ // StorageConnectorList
 *     { // StorageConnector
 *       ConnectorType: "HOMEFOLDERS" || "GOOGLE_DRIVE" || "ONE_DRIVE", // required
 *       ResourceIdentifier: "STRING_VALUE",
 *       Domains: [ // DomainList
 *         "STRING_VALUE",
 *       ],
 *       DomainsRequireAdminConsent: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DeleteStorageConnectors: true || false,
 *   RedirectURL: "STRING_VALUE",
 *   FeedbackURL: "STRING_VALUE",
 *   AttributesToDelete: [ // StackAttributes
 *     "STORAGE_CONNECTORS" || "STORAGE_CONNECTOR_HOMEFOLDERS" || "STORAGE_CONNECTOR_GOOGLE_DRIVE" || "STORAGE_CONNECTOR_ONE_DRIVE" || "REDIRECT_URL" || "FEEDBACK_URL" || "THEME_NAME" || "USER_SETTINGS" || "EMBED_HOST_DOMAINS" || "IAM_ROLE_ARN" || "ACCESS_ENDPOINTS" || "STREAMING_EXPERIENCE_SETTINGS" || "CONTENT_REDIRECTION" || "AGENT_ACCESS_CONFIG" || "STORAGE_CONNECTOR_AUTHENTICATION",
 *   ],
 *   UserSettings: [ // UserSettingList
 *     { // UserSetting
 *       Action: "CLIPBOARD_COPY_FROM_LOCAL_DEVICE" || "CLIPBOARD_COPY_TO_LOCAL_DEVICE" || "FILE_UPLOAD" || "FILE_DOWNLOAD" || "PRINTING_TO_LOCAL_DEVICE" || "DOMAIN_PASSWORD_SIGNIN" || "DOMAIN_SMART_CARD_SIGNIN" || "AUTO_TIME_ZONE_REDIRECTION", // required
 *       Permission: "ENABLED" || "DISABLED", // required
 *       MaximumLength: Number("int"),
 *     },
 *   ],
 *   ApplicationSettings: { // ApplicationSettings
 *     Enabled: true || false, // required
 *     SettingsGroup: "STRING_VALUE",
 *   },
 *   AccessEndpoints: [ // AccessEndpointList
 *     { // AccessEndpoint
 *       EndpointType: "STREAMING", // required
 *       VpceId: "STRING_VALUE",
 *     },
 *   ],
 *   EmbedHostDomains: [ // EmbedHostDomains
 *     "STRING_VALUE",
 *   ],
 *   StreamingExperienceSettings: { // StreamingExperienceSettings
 *     PreferredProtocol: "TCP" || "UDP",
 *   },
 *   ContentRedirection: { // ContentRedirection
 *     HostToClient: { // UrlRedirectionConfig
 *       Enabled: true || false, // required
 *       AllowedUrls: [ // UrlPatternList
 *         "STRING_VALUE",
 *       ],
 *       DeniedUrls: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   AgentAccessConfig: { // AgentAccessConfigForUpdate
 *     Settings: [ // AgentAccessSettingList
 *       { // AgentAccessSetting
 *         AgentAction: "COMPUTER_VISION" || "COMPUTER_INPUT" || "FORWARD_MCP_TOOLS", // required
 *         Permission: "ENABLED" || "DISABLED", // required
 *       },
 *     ],
 *     S3BucketArn: "STRING_VALUE",
 *     ScreenshotsUploadEnabled: true || false,
 *     ScreenResolution: "W_1280xH_720",
 *     ScreenImageFormat: "PNG" || "JPEG",
 *     UserControlMode: "VIEW_ONLY" || "VIEW_STOP" || "DISABLED",
 *   },
 *   StorageConnectorAuthentication: "FORCE_REAUTHENTICATION" || "REUSE_CREDENTIALS",
 * };
 * const command = new UpdateStackCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStackResult
 * //   Stack: { // Stack
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     StorageConnectors: [ // StorageConnectorList
 * //       { // StorageConnector
 * //         ConnectorType: "HOMEFOLDERS" || "GOOGLE_DRIVE" || "ONE_DRIVE", // required
 * //         ResourceIdentifier: "STRING_VALUE",
 * //         Domains: [ // DomainList
 * //           "STRING_VALUE",
 * //         ],
 * //         DomainsRequireAdminConsent: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     RedirectURL: "STRING_VALUE",
 * //     FeedbackURL: "STRING_VALUE",
 * //     StackErrors: [ // StackErrors
 * //       { // StackError
 * //         ErrorCode: "STORAGE_CONNECTOR_ERROR" || "INTERNAL_SERVICE_ERROR",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     ],
 * //     UserSettings: [ // UserSettingList
 * //       { // UserSetting
 * //         Action: "CLIPBOARD_COPY_FROM_LOCAL_DEVICE" || "CLIPBOARD_COPY_TO_LOCAL_DEVICE" || "FILE_UPLOAD" || "FILE_DOWNLOAD" || "PRINTING_TO_LOCAL_DEVICE" || "DOMAIN_PASSWORD_SIGNIN" || "DOMAIN_SMART_CARD_SIGNIN" || "AUTO_TIME_ZONE_REDIRECTION", // required
 * //         Permission: "ENABLED" || "DISABLED", // required
 * //         MaximumLength: Number("int"),
 * //       },
 * //     ],
 * //     ApplicationSettings: { // ApplicationSettingsResponse
 * //       Enabled: true || false,
 * //       SettingsGroup: "STRING_VALUE",
 * //       S3BucketName: "STRING_VALUE",
 * //     },
 * //     AccessEndpoints: [ // AccessEndpointList
 * //       { // AccessEndpoint
 * //         EndpointType: "STREAMING", // required
 * //         VpceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     EmbedHostDomains: [ // EmbedHostDomains
 * //       "STRING_VALUE",
 * //     ],
 * //     StreamingExperienceSettings: { // StreamingExperienceSettings
 * //       PreferredProtocol: "TCP" || "UDP",
 * //     },
 * //     ContentRedirection: { // ContentRedirection
 * //       HostToClient: { // UrlRedirectionConfig
 * //         Enabled: true || false, // required
 * //         AllowedUrls: [ // UrlPatternList
 * //           "STRING_VALUE",
 * //         ],
 * //         DeniedUrls: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     AgentAccessConfig: { // AgentAccessConfig
 * //       Settings: [ // AgentAccessSettingList // required
 * //         { // AgentAccessSetting
 * //           AgentAction: "COMPUTER_VISION" || "COMPUTER_INPUT" || "FORWARD_MCP_TOOLS", // required
 * //           Permission: "ENABLED" || "DISABLED", // required
 * //         },
 * //       ],
 * //       S3BucketArn: "STRING_VALUE",
 * //       ScreenshotsUploadEnabled: true || false,
 * //       ScreenResolution: "W_1280xH_720", // required
 * //       ScreenImageFormat: "PNG" || "JPEG", // required
 * //       UserControlMode: "VIEW_ONLY" || "VIEW_STOP" || "DISABLED",
 * //     },
 * //     StorageConnectorAuthentication: "FORCE_REAUTHENTICATION" || "REUSE_CREDENTIALS",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateStackCommandInput - {@link UpdateStackCommandInput}
 * @returns {@link UpdateStackCommandOutput}
 * @see {@link UpdateStackCommandInput} for command's `input` shape.
 * @see {@link UpdateStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * An API error occurred. Wait a few minutes and try again.
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *
 * The image can't be updated because it's not compatible for updates.
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *
 * The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Indicates an incorrect combination of parameters, or a missing parameter.
 *
 * @throws {@link InvalidRoleException} (client fault)
 *
 * The specified role is invalid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested limit exceeds the permitted limit for an account.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class UpdateStackCommand extends command<UpdateStackCommandInput, UpdateStackCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStack",
  UpdateStack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStackRequest;
      output: UpdateStackResult;
    };
    sdk: {
      input: UpdateStackCommandInput;
      output: UpdateStackCommandOutput;
    };
  };
}

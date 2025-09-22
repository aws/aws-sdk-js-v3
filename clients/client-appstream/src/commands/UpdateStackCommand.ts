// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateStackRequest, UpdateStackResult } from "../models/models_0";
import { UpdateStack } from "../schemas/schemas_15_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the specified fields for the specified stack.</p>
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
 *     "STORAGE_CONNECTORS" || "STORAGE_CONNECTOR_HOMEFOLDERS" || "STORAGE_CONNECTOR_GOOGLE_DRIVE" || "STORAGE_CONNECTOR_ONE_DRIVE" || "REDIRECT_URL" || "FEEDBACK_URL" || "THEME_NAME" || "USER_SETTINGS" || "EMBED_HOST_DOMAINS" || "IAM_ROLE_ARN" || "ACCESS_ENDPOINTS" || "STREAMING_EXPERIENCE_SETTINGS",
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
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *  <p>The image can't be updated because it's not compatible for updates.</p>
 *
 * @throws {@link InvalidAccountStatusException} (client fault)
 *  <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>The specified role is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested limit exceeds the permitted limit for an account.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class UpdateStackCommand extends $Command
  .classBuilder<
    UpdateStackCommandInput,
    UpdateStackCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "UpdateStack", {})
  .n("AppStreamClient", "UpdateStackCommand")
  .sc(UpdateStack)
  .build() {
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

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateStackRequest, CreateStackResult } from "../models/models_0";
import { CreateStack } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStackCommand}.
 */
export interface CreateStackCommandInput extends CreateStackRequest {}
/**
 * @public
 *
 * The output of {@link CreateStackCommand}.
 */
export interface CreateStackCommandOutput extends CreateStackResult, __MetadataBearer {}

/**
 * <p>Creates a stack to start streaming applications to users. A stack consists of an associated fleet, user access policies, and storage configurations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateStackCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateStackCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CreateStackRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
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
 *   RedirectURL: "STRING_VALUE",
 *   FeedbackURL: "STRING_VALUE",
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
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
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
 * const command = new CreateStackCommand(input);
 * const response = await client.send(command);
 * // { // CreateStackResult
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
 * @param CreateStackCommandInput - {@link CreateStackCommandInput}
 * @returns {@link CreateStackCommandOutput}
 * @see {@link CreateStackCommandInput} for command's `input` shape.
 * @see {@link CreateStackCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
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
export class CreateStackCommand extends $Command
  .classBuilder<
    CreateStackCommandInput,
    CreateStackCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "CreateStack", {})
  .n("AppStreamClient", "CreateStackCommand")
  .sc(CreateStack)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStackRequest;
      output: CreateStackResult;
    };
    sdk: {
      input: CreateStackCommandInput;
      output: CreateStackCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ResetNotificationSettingsRequest, ResetNotificationSettingsResponse } from "../models/models_0";
import { de_ResetNotificationSettingsCommand, se_ResetNotificationSettingsCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetNotificationSettingsCommand}.
 */
export interface ResetNotificationSettingsCommandInput extends ResetNotificationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link ResetNotificationSettingsCommand}.
 */
export interface ResetNotificationSettingsCommandOutput extends ResetNotificationSettingsResponse, __MetadataBearer {}

/**
 * <p>Resets the <i>custom notification setting</i> to IAM Roles Anywhere default setting.
 *       </p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:ResetNotificationSettings</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, ResetNotificationSettingsCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, ResetNotificationSettingsCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const input = { // ResetNotificationSettingsRequest
 *   trustAnchorId: "STRING_VALUE", // required
 *   notificationSettingKeys: [ // NotificationSettingKeys // required
 *     { // NotificationSettingKey
 *       event: "STRING_VALUE", // required
 *       channel: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ResetNotificationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // ResetNotificationSettingsResponse
 * //   trustAnchor: { // TrustAnchorDetail
 * //     trustAnchorId: "STRING_VALUE",
 * //     trustAnchorArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     source: { // Source
 * //       sourceType: "STRING_VALUE",
 * //       sourceData: { // SourceData Union: only one key present
 * //         x509CertificateData: "STRING_VALUE",
 * //         acmPcaArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     enabled: true || false,
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     notificationSettings: [ // NotificationSettingDetails
 * //       { // NotificationSettingDetail
 * //         enabled: true || false, // required
 * //         event: "STRING_VALUE", // required
 * //         threshold: Number("int"),
 * //         channel: "STRING_VALUE",
 * //         configuredBy: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ResetNotificationSettingsCommandInput - {@link ResetNotificationSettingsCommandInput}
 * @returns {@link ResetNotificationSettingsCommandOutput}
 * @see {@link ResetNotificationSettingsCommandInput} for command's `input` shape.
 * @see {@link ResetNotificationSettingsCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link RolesAnywhereServiceException}
 * <p>Base exception class for all service exceptions from RolesAnywhere service.</p>
 *
 * @public
 */
export class ResetNotificationSettingsCommand extends $Command
  .classBuilder<
    ResetNotificationSettingsCommandInput,
    ResetNotificationSettingsCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RolesAnywhere", "ResetNotificationSettings", {})
  .n("RolesAnywhereClient", "ResetNotificationSettingsCommand")
  .f(void 0, void 0)
  .ser(se_ResetNotificationSettingsCommand)
  .de(de_ResetNotificationSettingsCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutNotificationSettingsRequest, PutNotificationSettingsResponse } from "../models/models_0";
import { de_PutNotificationSettingsCommand, se_PutNotificationSettingsCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutNotificationSettingsCommand}.
 */
export interface PutNotificationSettingsCommandInput extends PutNotificationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutNotificationSettingsCommand}.
 */
export interface PutNotificationSettingsCommandOutput extends PutNotificationSettingsResponse, __MetadataBearer {}

/**
 * <p>Attaches a list of <i>notification settings</i> to a trust anchor.</p>
 *          <p>A notification setting includes information such as event name, threshold, status of
 *          the notification setting, and the channel to notify.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:PutNotificationSettings</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, PutNotificationSettingsCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, PutNotificationSettingsCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RolesAnywhereClient(config);
 * const input = { // PutNotificationSettingsRequest
 *   trustAnchorId: "STRING_VALUE", // required
 *   notificationSettings: [ // NotificationSettings // required
 *     { // NotificationSetting
 *       enabled: true || false, // required
 *       event: "STRING_VALUE", // required
 *       threshold: Number("int"),
 *       channel: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutNotificationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // PutNotificationSettingsResponse
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
 * @param PutNotificationSettingsCommandInput - {@link PutNotificationSettingsCommandInput}
 * @returns {@link PutNotificationSettingsCommandOutput}
 * @see {@link PutNotificationSettingsCommandInput} for command's `input` shape.
 * @see {@link PutNotificationSettingsCommandOutput} for command's `response` shape.
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
export class PutNotificationSettingsCommand extends $Command
  .classBuilder<
    PutNotificationSettingsCommandInput,
    PutNotificationSettingsCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RolesAnywhere", "PutNotificationSettings", {})
  .n("RolesAnywhereClient", "PutNotificationSettingsCommand")
  .f(void 0, void 0)
  .ser(se_PutNotificationSettingsCommand)
  .de(de_PutNotificationSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutNotificationSettingsRequest;
      output: PutNotificationSettingsResponse;
    };
    sdk: {
      input: PutNotificationSettingsCommandInput;
      output: PutNotificationSettingsCommandOutput;
    };
  };
}

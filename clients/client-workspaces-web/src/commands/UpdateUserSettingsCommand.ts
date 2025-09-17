// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateUserSettingsRequest,
  UpdateUserSettingsRequestFilterSensitiveLog,
  UpdateUserSettingsResponse,
  UpdateUserSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateUserSettingsCommand, se_UpdateUserSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserSettingsCommand}.
 */
export interface UpdateUserSettingsCommandInput extends UpdateUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserSettingsCommand}.
 */
export interface UpdateUserSettingsCommandOutput extends UpdateUserSettingsResponse, __MetadataBearer {}

/**
 * <p>Updates the user settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateUserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateUserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateUserSettingsRequest
 *   userSettingsArn: "STRING_VALUE", // required
 *   copyAllowed: "STRING_VALUE",
 *   pasteAllowed: "STRING_VALUE",
 *   downloadAllowed: "STRING_VALUE",
 *   uploadAllowed: "STRING_VALUE",
 *   printAllowed: "STRING_VALUE",
 *   disconnectTimeoutInMinutes: Number("int"),
 *   idleDisconnectTimeoutInMinutes: Number("int"),
 *   clientToken: "STRING_VALUE",
 *   cookieSynchronizationConfiguration: { // CookieSynchronizationConfiguration
 *     allowlist: [ // CookieSpecifications // required
 *       { // CookieSpecification
 *         domain: "STRING_VALUE", // required
 *         name: "STRING_VALUE",
 *         path: "STRING_VALUE",
 *       },
 *     ],
 *     blocklist: [
 *       {
 *         domain: "STRING_VALUE", // required
 *         name: "STRING_VALUE",
 *         path: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   deepLinkAllowed: "STRING_VALUE",
 *   toolbarConfiguration: { // ToolbarConfiguration
 *     toolbarType: "STRING_VALUE",
 *     visualMode: "STRING_VALUE",
 *     hiddenToolbarItems: [ // HiddenToolbarItemList
 *       "STRING_VALUE",
 *     ],
 *     maxDisplayResolution: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateUserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserSettingsResponse
 * //   userSettings: { // UserSettings
 * //     userSettingsArn: "STRING_VALUE", // required
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     copyAllowed: "STRING_VALUE",
 * //     pasteAllowed: "STRING_VALUE",
 * //     downloadAllowed: "STRING_VALUE",
 * //     uploadAllowed: "STRING_VALUE",
 * //     printAllowed: "STRING_VALUE",
 * //     disconnectTimeoutInMinutes: Number("int"),
 * //     idleDisconnectTimeoutInMinutes: Number("int"),
 * //     cookieSynchronizationConfiguration: { // CookieSynchronizationConfiguration
 * //       allowlist: [ // CookieSpecifications // required
 * //         { // CookieSpecification
 * //           domain: "STRING_VALUE", // required
 * //           name: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //         },
 * //       ],
 * //       blocklist: [
 * //         {
 * //           domain: "STRING_VALUE", // required
 * //           name: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     customerManagedKey: "STRING_VALUE",
 * //     additionalEncryptionContext: { // EncryptionContextMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     deepLinkAllowed: "STRING_VALUE",
 * //     toolbarConfiguration: { // ToolbarConfiguration
 * //       toolbarType: "STRING_VALUE",
 * //       visualMode: "STRING_VALUE",
 * //       hiddenToolbarItems: [ // HiddenToolbarItemList
 * //         "STRING_VALUE",
 * //       ],
 * //       maxDisplayResolution: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateUserSettingsCommandInput - {@link UpdateUserSettingsCommandInput}
 * @returns {@link UpdateUserSettingsCommandOutput}
 * @see {@link UpdateUserSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateUserSettingsCommandOutput} for command's `response` shape.
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
export class UpdateUserSettingsCommand extends $Command
  .classBuilder<
    UpdateUserSettingsCommandInput,
    UpdateUserSettingsCommandOutput,
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
  .s("AWSErmineControlPlaneService", "UpdateUserSettings", {})
  .n("WorkSpacesWebClient", "UpdateUserSettingsCommand")
  .f(UpdateUserSettingsRequestFilterSensitiveLog, UpdateUserSettingsResponseFilterSensitiveLog)
  .ser(se_UpdateUserSettingsCommand)
  .de(de_UpdateUserSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserSettingsRequest;
      output: UpdateUserSettingsResponse;
    };
    sdk: {
      input: UpdateUserSettingsCommandInput;
      output: UpdateUserSettingsCommandOutput;
    };
  };
}

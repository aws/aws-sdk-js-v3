// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetUserSettingsRequest,
  GetUserSettingsResponse,
  GetUserSettingsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetUserSettingsCommand, se_GetUserSettingsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUserSettingsCommand}.
 */
export interface GetUserSettingsCommandInput extends GetUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetUserSettingsCommand}.
 */
export interface GetUserSettingsCommandOutput extends GetUserSettingsResponse, __MetadataBearer {}

/**
 * <p>Gets user settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, GetUserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, GetUserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // GetUserSettingsRequest
 *   userSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new GetUserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetUserSettingsResponse
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
 * @param GetUserSettingsCommandInput - {@link GetUserSettingsCommandInput}
 * @returns {@link GetUserSettingsCommandOutput}
 * @see {@link GetUserSettingsCommandInput} for command's `input` shape.
 * @see {@link GetUserSettingsCommandOutput} for command's `response` shape.
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
export class GetUserSettingsCommand extends $Command
  .classBuilder<
    GetUserSettingsCommandInput,
    GetUserSettingsCommandOutput,
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
  .s("AWSErmineControlPlaneService", "GetUserSettings", {})
  .n("WorkSpacesWebClient", "GetUserSettingsCommand")
  .f(void 0, GetUserSettingsResponseFilterSensitiveLog)
  .ser(se_GetUserSettingsCommand)
  .de(de_GetUserSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserSettingsRequest;
      output: GetUserSettingsResponse;
    };
    sdk: {
      input: GetUserSettingsCommandInput;
      output: GetUserSettingsCommandOutput;
    };
  };
}

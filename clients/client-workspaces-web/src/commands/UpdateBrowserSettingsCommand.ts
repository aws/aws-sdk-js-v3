// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBrowserSettingsRequest, UpdateBrowserSettingsResponse } from "../models/models_0";
import { UpdateBrowserSettings } from "../schemas/schemas_14_Settings";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesWebClientResolvedConfig } from "../WorkSpacesWebClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBrowserSettingsCommand}.
 */
export interface UpdateBrowserSettingsCommandInput extends UpdateBrowserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBrowserSettingsCommand}.
 */
export interface UpdateBrowserSettingsCommandOutput extends UpdateBrowserSettingsResponse, __MetadataBearer {}

/**
 * <p>Updates browser settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateBrowserSettingsRequest
 *   browserSettingsArn: "STRING_VALUE", // required
 *   browserPolicy: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateBrowserSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBrowserSettingsResponse
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
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBrowserSettingsCommandInput - {@link UpdateBrowserSettingsCommandInput}
 * @returns {@link UpdateBrowserSettingsCommandOutput}
 * @see {@link UpdateBrowserSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateBrowserSettingsCommandOutput} for command's `response` shape.
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
export class UpdateBrowserSettingsCommand extends $Command
  .classBuilder<
    UpdateBrowserSettingsCommandInput,
    UpdateBrowserSettingsCommandOutput,
    WorkSpacesWebClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesWebClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSErmineControlPlaneService", "UpdateBrowserSettings", {})
  .n("WorkSpacesWebClient", "UpdateBrowserSettingsCommand")
  .sc(UpdateBrowserSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBrowserSettingsRequest;
      output: UpdateBrowserSettingsResponse;
    };
    sdk: {
      input: UpdateBrowserSettingsCommandInput;
      output: UpdateBrowserSettingsCommandOutput;
    };
  };
}

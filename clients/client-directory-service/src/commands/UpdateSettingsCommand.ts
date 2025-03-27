// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSettingsRequest, UpdateSettingsResult } from "../models/models_0";
import { de_UpdateSettingsCommand, se_UpdateSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSettingsCommand}.
 */
export interface UpdateSettingsCommandInput extends UpdateSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSettingsCommand}.
 */
export interface UpdateSettingsCommandOutput extends UpdateSettingsResult, __MetadataBearer {}

/**
 * <p>Updates the configurable settings for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateSettingsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateSettingsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const input = { // UpdateSettingsRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   Settings: [ // Settings // required
 *     { // Setting
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSettingsResult
 * //   DirectoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSettingsCommandInput - {@link UpdateSettingsCommandInput}
 * @returns {@link UpdateSettingsCommandOutput}
 * @see {@link UpdateSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateSettingsCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *  <p>The specified directory does not exist in the system.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The specified directory is unavailable.</p>
 *
 * @throws {@link IncompatibleSettingsException} (client fault)
 *  <p>The specified directory setting is not compatible with other settings.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link UnsupportedSettingsException} (client fault)
 *  <p>The specified directory setting is not supported.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @public
 */
export class UpdateSettingsCommand extends $Command
  .classBuilder<
    UpdateSettingsCommandInput,
    UpdateSettingsCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DirectoryService_20150416", "UpdateSettings", {})
  .n("DirectoryServiceClient", "UpdateSettingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSettingsCommand)
  .de(de_UpdateSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSettingsRequest;
      output: UpdateSettingsResult;
    };
    sdk: {
      input: UpdateSettingsCommandInput;
      output: UpdateSettingsCommandOutput;
    };
  };
}

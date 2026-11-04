// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSettingsRequest, UpdateSettingsResult } from "../models/models_0";
import { UpdateSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates the configurable settings for the specified directory.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, UpdateSettingsCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, UpdateSettingsCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
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
 *
 * A client exception has occurred.
 *
 * @throws {@link DirectoryDoesNotExistException} (client fault)
 *
 * The specified directory does not exist in the system.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The specified directory is unavailable.
 *
 * @throws {@link IncompatibleSettingsException} (client fault)
 *
 * The specified directory setting is not compatible with other settings.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link UnsupportedSettingsException} (client fault)
 *
 * The specified directory setting is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class UpdateSettingsCommand extends command<UpdateSettingsCommandInput, UpdateSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSettings",
  UpdateSettings$
) {
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

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateUserAccessLoggingSettingsRequest,
  UpdateUserAccessLoggingSettingsResponse,
} from "../models/models_0";
import { UpdateUserAccessLoggingSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateUserAccessLoggingSettingsCommand}.
 */
export interface UpdateUserAccessLoggingSettingsCommandInput extends UpdateUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserAccessLoggingSettingsCommand}.
 */
export interface UpdateUserAccessLoggingSettingsCommandOutput extends UpdateUserAccessLoggingSettingsResponse, __MetadataBearer {}

/**
 * Updates the user access logging settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, UpdateUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, UpdateUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // UpdateUserAccessLoggingSettingsRequest
 *   userAccessLoggingSettingsArn: "STRING_VALUE", // required
 *   kinesisStreamArn: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserAccessLoggingSettingsResponse
 * //   userAccessLoggingSettings: { // UserAccessLoggingSettings
 * //     userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * //     associatedPortalArns: [ // ArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     kinesisStreamArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateUserAccessLoggingSettingsCommandInput - {@link UpdateUserAccessLoggingSettingsCommandInput}
 * @returns {@link UpdateUserAccessLoggingSettingsCommandOutput}
 * @see {@link UpdateUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @public
 */
export class UpdateUserAccessLoggingSettingsCommand extends command<UpdateUserAccessLoggingSettingsCommandInput, UpdateUserAccessLoggingSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserAccessLoggingSettings",
  UpdateUserAccessLoggingSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserAccessLoggingSettingsRequest;
      output: UpdateUserAccessLoggingSettingsResponse;
    };
    sdk: {
      input: UpdateUserAccessLoggingSettingsCommandInput;
      output: UpdateUserAccessLoggingSettingsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteUserSettingsRequest, DeleteUserSettingsResponse } from "../models/models_0";
import { DeleteUserSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteUserSettingsCommand}.
 */
export interface DeleteUserSettingsCommandInput extends DeleteUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserSettingsCommand}.
 */
export interface DeleteUserSettingsCommandOutput extends DeleteUserSettingsResponse, __MetadataBearer {}

/**
 * Deletes user settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteUserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteUserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteUserSettingsRequest
 *   userSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserSettingsCommandInput - {@link DeleteUserSettingsCommandInput}
 * @returns {@link DeleteUserSettingsCommandOutput}
 * @see {@link DeleteUserSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteUserSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
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
export class DeleteUserSettingsCommand extends command<DeleteUserSettingsCommandInput, DeleteUserSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUserSettings",
  DeleteUserSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserSettingsCommandInput;
      output: DeleteUserSettingsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteUserAccessLoggingSettingsRequest,
  DeleteUserAccessLoggingSettingsResponse,
} from "../models/models_0";
import { DeleteUserAccessLoggingSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteUserAccessLoggingSettingsCommand}.
 */
export interface DeleteUserAccessLoggingSettingsCommandInput extends DeleteUserAccessLoggingSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUserAccessLoggingSettingsCommand}.
 */
export interface DeleteUserAccessLoggingSettingsCommandOutput extends DeleteUserAccessLoggingSettingsResponse, __MetadataBearer {}

/**
 * Deletes user access logging settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteUserAccessLoggingSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteUserAccessLoggingSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteUserAccessLoggingSettingsRequest
 *   userAccessLoggingSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteUserAccessLoggingSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUserAccessLoggingSettingsCommandInput - {@link DeleteUserAccessLoggingSettingsCommandInput}
 * @returns {@link DeleteUserAccessLoggingSettingsCommandOutput}
 * @see {@link DeleteUserAccessLoggingSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteUserAccessLoggingSettingsCommandOutput} for command's `response` shape.
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
export class DeleteUserAccessLoggingSettingsCommand extends command<DeleteUserAccessLoggingSettingsCommandInput, DeleteUserAccessLoggingSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteUserAccessLoggingSettings",
  DeleteUserAccessLoggingSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUserAccessLoggingSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteUserAccessLoggingSettingsCommandInput;
      output: DeleteUserAccessLoggingSettingsCommandOutput;
    };
  };
}

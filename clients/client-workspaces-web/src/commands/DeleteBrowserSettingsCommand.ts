// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBrowserSettingsRequest, DeleteBrowserSettingsResponse } from "../models/models_0";
import { DeleteBrowserSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBrowserSettingsCommand}.
 */
export interface DeleteBrowserSettingsCommandInput extends DeleteBrowserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBrowserSettingsCommand}.
 */
export interface DeleteBrowserSettingsCommandOutput extends DeleteBrowserSettingsResponse, __MetadataBearer {}

/**
 * Deletes browser settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteBrowserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteBrowserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteBrowserSettingsRequest
 *   browserSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteBrowserSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBrowserSettingsCommandInput - {@link DeleteBrowserSettingsCommandInput}
 * @returns {@link DeleteBrowserSettingsCommandOutput}
 * @see {@link DeleteBrowserSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteBrowserSettingsCommandOutput} for command's `response` shape.
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
export class DeleteBrowserSettingsCommand extends command<DeleteBrowserSettingsCommandInput, DeleteBrowserSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBrowserSettings",
  DeleteBrowserSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBrowserSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteBrowserSettingsCommandInput;
      output: DeleteBrowserSettingsCommandOutput;
    };
  };
}

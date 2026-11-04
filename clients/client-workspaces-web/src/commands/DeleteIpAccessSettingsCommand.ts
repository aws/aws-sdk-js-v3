// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIpAccessSettingsRequest, DeleteIpAccessSettingsResponse } from "../models/models_0";
import { DeleteIpAccessSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIpAccessSettingsCommand}.
 */
export interface DeleteIpAccessSettingsCommandInput extends DeleteIpAccessSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIpAccessSettingsCommand}.
 */
export interface DeleteIpAccessSettingsCommandOutput extends DeleteIpAccessSettingsResponse, __MetadataBearer {}

/**
 * Deletes IP access settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteIpAccessSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteIpAccessSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteIpAccessSettingsRequest
 *   ipAccessSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteIpAccessSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIpAccessSettingsCommandInput - {@link DeleteIpAccessSettingsCommandInput}
 * @returns {@link DeleteIpAccessSettingsCommandOutput}
 * @see {@link DeleteIpAccessSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteIpAccessSettingsCommandOutput} for command's `response` shape.
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
export class DeleteIpAccessSettingsCommand extends command<DeleteIpAccessSettingsCommandInput, DeleteIpAccessSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIpAccessSettings",
  DeleteIpAccessSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIpAccessSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteIpAccessSettingsCommandInput;
      output: DeleteIpAccessSettingsCommandOutput;
    };
  };
}

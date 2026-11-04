// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDataProtectionSettingsRequest, DeleteDataProtectionSettingsResponse } from "../models/models_0";
import { DeleteDataProtectionSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDataProtectionSettingsCommand}.
 */
export interface DeleteDataProtectionSettingsCommandInput extends DeleteDataProtectionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataProtectionSettingsCommand}.
 */
export interface DeleteDataProtectionSettingsCommandOutput extends DeleteDataProtectionSettingsResponse, __MetadataBearer {}

/**
 * Deletes data protection settings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteDataProtectionSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteDataProtectionSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteDataProtectionSettingsRequest
 *   dataProtectionSettingsArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataProtectionSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataProtectionSettingsCommandInput - {@link DeleteDataProtectionSettingsCommandInput}
 * @returns {@link DeleteDataProtectionSettingsCommandOutput}
 * @see {@link DeleteDataProtectionSettingsCommandInput} for command's `input` shape.
 * @see {@link DeleteDataProtectionSettingsCommandOutput} for command's `response` shape.
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
export class DeleteDataProtectionSettingsCommand extends command<DeleteDataProtectionSettingsCommandInput, DeleteDataProtectionSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDataProtectionSettings",
  DeleteDataProtectionSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataProtectionSettingsRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataProtectionSettingsCommandInput;
      output: DeleteDataProtectionSettingsCommandOutput;
    };
  };
}

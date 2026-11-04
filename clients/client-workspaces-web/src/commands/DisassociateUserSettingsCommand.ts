// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateUserSettingsRequest, DisassociateUserSettingsResponse } from "../models/models_0";
import { DisassociateUserSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateUserSettingsCommand}.
 */
export interface DisassociateUserSettingsCommandInput extends DisassociateUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateUserSettingsCommand}.
 */
export interface DisassociateUserSettingsCommandOutput extends DisassociateUserSettingsResponse, __MetadataBearer {}

/**
 * Disassociates user settings from a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DisassociateUserSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DisassociateUserSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DisassociateUserSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateUserSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateUserSettingsCommandInput - {@link DisassociateUserSettingsCommandInput}
 * @returns {@link DisassociateUserSettingsCommandOutput}
 * @see {@link DisassociateUserSettingsCommandInput} for command's `input` shape.
 * @see {@link DisassociateUserSettingsCommandOutput} for command's `response` shape.
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
export class DisassociateUserSettingsCommand extends command<DisassociateUserSettingsCommandInput, DisassociateUserSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateUserSettings",
  DisassociateUserSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateUserSettingsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateUserSettingsCommandInput;
      output: DisassociateUserSettingsCommandOutput;
    };
  };
}

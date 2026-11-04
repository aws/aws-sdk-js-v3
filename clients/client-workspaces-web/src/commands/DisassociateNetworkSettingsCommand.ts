// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateNetworkSettingsRequest, DisassociateNetworkSettingsResponse } from "../models/models_0";
import { DisassociateNetworkSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateNetworkSettingsCommand}.
 */
export interface DisassociateNetworkSettingsCommandInput extends DisassociateNetworkSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateNetworkSettingsCommand}.
 */
export interface DisassociateNetworkSettingsCommandOutput extends DisassociateNetworkSettingsResponse, __MetadataBearer {}

/**
 * Disassociates network settings from a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DisassociateNetworkSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DisassociateNetworkSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DisassociateNetworkSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateNetworkSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateNetworkSettingsCommandInput - {@link DisassociateNetworkSettingsCommandInput}
 * @returns {@link DisassociateNetworkSettingsCommandOutput}
 * @see {@link DisassociateNetworkSettingsCommandInput} for command's `input` shape.
 * @see {@link DisassociateNetworkSettingsCommandOutput} for command's `response` shape.
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
export class DisassociateNetworkSettingsCommand extends command<DisassociateNetworkSettingsCommandInput, DisassociateNetworkSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateNetworkSettings",
  DisassociateNetworkSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateNetworkSettingsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateNetworkSettingsCommandInput;
      output: DisassociateNetworkSettingsCommandOutput;
    };
  };
}

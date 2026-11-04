// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateIpAccessSettingsRequest, DisassociateIpAccessSettingsResponse } from "../models/models_0";
import { DisassociateIpAccessSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateIpAccessSettingsCommand}.
 */
export interface DisassociateIpAccessSettingsCommandInput extends DisassociateIpAccessSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateIpAccessSettingsCommand}.
 */
export interface DisassociateIpAccessSettingsCommandOutput extends DisassociateIpAccessSettingsResponse, __MetadataBearer {}

/**
 * Disassociates IP access settings from a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DisassociateIpAccessSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DisassociateIpAccessSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DisassociateIpAccessSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateIpAccessSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateIpAccessSettingsCommandInput - {@link DisassociateIpAccessSettingsCommandInput}
 * @returns {@link DisassociateIpAccessSettingsCommandOutput}
 * @see {@link DisassociateIpAccessSettingsCommandInput} for command's `input` shape.
 * @see {@link DisassociateIpAccessSettingsCommandOutput} for command's `response` shape.
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
export class DisassociateIpAccessSettingsCommand extends command<DisassociateIpAccessSettingsCommandInput, DisassociateIpAccessSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateIpAccessSettings",
  DisassociateIpAccessSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateIpAccessSettingsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateIpAccessSettingsCommandInput;
      output: DisassociateIpAccessSettingsCommandOutput;
    };
  };
}

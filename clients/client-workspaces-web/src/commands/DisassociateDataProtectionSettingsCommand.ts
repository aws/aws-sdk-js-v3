// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateDataProtectionSettingsRequest,
  DisassociateDataProtectionSettingsResponse,
} from "../models/models_0";
import { DisassociateDataProtectionSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateDataProtectionSettingsCommand}.
 */
export interface DisassociateDataProtectionSettingsCommandInput extends DisassociateDataProtectionSettingsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateDataProtectionSettingsCommand}.
 */
export interface DisassociateDataProtectionSettingsCommandOutput extends DisassociateDataProtectionSettingsResponse, __MetadataBearer {}

/**
 * Disassociates data protection settings from a web portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DisassociateDataProtectionSettingsCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DisassociateDataProtectionSettingsCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DisassociateDataProtectionSettingsRequest
 *   portalArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateDataProtectionSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateDataProtectionSettingsCommandInput - {@link DisassociateDataProtectionSettingsCommandInput}
 * @returns {@link DisassociateDataProtectionSettingsCommandOutput}
 * @see {@link DisassociateDataProtectionSettingsCommandInput} for command's `input` shape.
 * @see {@link DisassociateDataProtectionSettingsCommandOutput} for command's `response` shape.
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
export class DisassociateDataProtectionSettingsCommand extends command<DisassociateDataProtectionSettingsCommandInput, DisassociateDataProtectionSettingsCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateDataProtectionSettings",
  DisassociateDataProtectionSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDataProtectionSettingsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateDataProtectionSettingsCommandInput;
      output: DisassociateDataProtectionSettingsCommandOutput;
    };
  };
}

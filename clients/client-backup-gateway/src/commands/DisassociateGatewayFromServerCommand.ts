// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateGatewayFromServerInput, DisassociateGatewayFromServerOutput } from "../models/models_0";
import { DisassociateGatewayFromServer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateGatewayFromServerCommand}.
 */
export interface DisassociateGatewayFromServerCommandInput extends DisassociateGatewayFromServerInput {}
/**
 * @public
 *
 * The output of {@link DisassociateGatewayFromServerCommand}.
 */
export interface DisassociateGatewayFromServerCommandOutput extends DisassociateGatewayFromServerOutput, __MetadataBearer {}

/**
 * <p>Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, DisassociateGatewayFromServerCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, DisassociateGatewayFromServerCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // DisassociateGatewayFromServerInput
 *   GatewayArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateGatewayFromServerCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateGatewayFromServerOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateGatewayFromServerCommandInput - {@link DisassociateGatewayFromServerCommandInput}
 * @returns {@link DisassociateGatewayFromServerCommandOutput}
 * @see {@link DisassociateGatewayFromServerCommandInput} for command's `input` shape.
 * @see {@link DisassociateGatewayFromServerCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The operation cannot proceed because it is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
 *
 *
 * @public
 */
export class DisassociateGatewayFromServerCommand extends command<DisassociateGatewayFromServerCommandInput, DisassociateGatewayFromServerCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateGatewayFromServer",
  DisassociateGatewayFromServer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateGatewayFromServerInput;
      output: DisassociateGatewayFromServerOutput;
    };
    sdk: {
      input: DisassociateGatewayFromServerCommandInput;
      output: DisassociateGatewayFromServerCommandOutput;
    };
  };
}

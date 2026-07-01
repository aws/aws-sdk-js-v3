// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SwitchoverAutonomousDatabaseInput, SwitchoverAutonomousDatabaseOutput } from "../models/models_0";
import { SwitchoverAutonomousDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SwitchoverAutonomousDatabaseCommand}.
 */
export interface SwitchoverAutonomousDatabaseCommandInput extends SwitchoverAutonomousDatabaseInput {}
/**
 * @public
 *
 * The output of {@link SwitchoverAutonomousDatabaseCommand}.
 */
export interface SwitchoverAutonomousDatabaseCommandOutput extends SwitchoverAutonomousDatabaseOutput, __MetadataBearer {}

/**
 * <p>Performs a switchover of the specified Autonomous Database to a standby peer database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, SwitchoverAutonomousDatabaseCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, SwitchoverAutonomousDatabaseCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // SwitchoverAutonomousDatabaseInput
 *   autonomousDatabaseId: "STRING_VALUE", // required
 *   peerDbArn: "STRING_VALUE",
 * };
 * const command = new SwitchoverAutonomousDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // SwitchoverAutonomousDatabaseOutput
 * //   autonomousDatabaseId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS" || "STOPPING" || "STOPPED" || "STARTING" || "UNAVAILABLE" || "RESTORE_IN_PROGRESS" || "RESTORE_FAILED" || "BACKUP_IN_PROGRESS" || "SCALE_IN_PROGRESS" || "AVAILABLE_NEEDS_ATTENTION" || "RESTARTING" || "RECREATING" || "ROLE_CHANGE_IN_PROGRESS" || "UPGRADING" || "INACCESSIBLE" || "STANDBY",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SwitchoverAutonomousDatabaseCommandInput - {@link SwitchoverAutonomousDatabaseCommandInput}
 * @returns {@link SwitchoverAutonomousDatabaseCommandOutput}
 * @see {@link SwitchoverAutonomousDatabaseCommandInput} for command's `input` shape.
 * @see {@link SwitchoverAutonomousDatabaseCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class SwitchoverAutonomousDatabaseCommand extends command<SwitchoverAutonomousDatabaseCommandInput, SwitchoverAutonomousDatabaseCommandOutput>(
  _ep0,
  _mw0,
  "SwitchoverAutonomousDatabase",
  SwitchoverAutonomousDatabase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SwitchoverAutonomousDatabaseInput;
      output: SwitchoverAutonomousDatabaseOutput;
    };
    sdk: {
      input: SwitchoverAutonomousDatabaseCommandInput;
      output: SwitchoverAutonomousDatabaseCommandOutput;
    };
  };
}

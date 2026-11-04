// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAutonomousDatabaseInput, StartAutonomousDatabaseOutput } from "../models/models_0";
import { StartAutonomousDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAutonomousDatabaseCommand}.
 */
export interface StartAutonomousDatabaseCommandInput extends StartAutonomousDatabaseInput {}
/**
 * @public
 *
 * The output of {@link StartAutonomousDatabaseCommand}.
 */
export interface StartAutonomousDatabaseCommandOutput extends StartAutonomousDatabaseOutput, __MetadataBearer {}

/**
 * Starts the specified Autonomous Database.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, StartAutonomousDatabaseCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, StartAutonomousDatabaseCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // StartAutonomousDatabaseInput
 *   autonomousDatabaseId: "STRING_VALUE", // required
 * };
 * const command = new StartAutonomousDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // StartAutonomousDatabaseOutput
 * //   autonomousDatabaseId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS" || "STOPPING" || "STOPPED" || "STARTING" || "UNAVAILABLE" || "RESTORE_IN_PROGRESS" || "RESTORE_FAILED" || "BACKUP_IN_PROGRESS" || "SCALE_IN_PROGRESS" || "AVAILABLE_NEEDS_ATTENTION" || "RESTARTING" || "RECREATING" || "ROLE_CHANGE_IN_PROGRESS" || "UPGRADING" || "INACCESSIBLE" || "STANDBY",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartAutonomousDatabaseCommandInput - {@link StartAutonomousDatabaseCommandInput}
 * @returns {@link StartAutonomousDatabaseCommandOutput}
 * @see {@link StartAutonomousDatabaseCommandInput} for command's `input` shape.
 * @see {@link StartAutonomousDatabaseCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Occurs when a conflict with the current status of your resource. Fix any inconsistencies with your resource and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class StartAutonomousDatabaseCommand extends command<StartAutonomousDatabaseCommandInput, StartAutonomousDatabaseCommandOutput>(
  _ep0,
  _mw0,
  "StartAutonomousDatabase",
  StartAutonomousDatabase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAutonomousDatabaseInput;
      output: StartAutonomousDatabaseOutput;
    };
    sdk: {
      input: StartAutonomousDatabaseCommandInput;
      output: StartAutonomousDatabaseCommandOutput;
    };
  };
}

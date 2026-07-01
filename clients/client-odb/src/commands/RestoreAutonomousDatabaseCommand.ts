// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestoreAutonomousDatabaseInput, RestoreAutonomousDatabaseOutput } from "../models/models_0";
import { RestoreAutonomousDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestoreAutonomousDatabaseCommand}.
 */
export interface RestoreAutonomousDatabaseCommandInput extends RestoreAutonomousDatabaseInput {}
/**
 * @public
 *
 * The output of {@link RestoreAutonomousDatabaseCommand}.
 */
export interface RestoreAutonomousDatabaseCommandOutput extends RestoreAutonomousDatabaseOutput, __MetadataBearer {}

/**
 * <p>Restores the specified Autonomous Database to a point in time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, RestoreAutonomousDatabaseCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, RestoreAutonomousDatabaseCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // RestoreAutonomousDatabaseInput
 *   autonomousDatabaseId: "STRING_VALUE", // required
 *   timestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new RestoreAutonomousDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // RestoreAutonomousDatabaseOutput
 * //   autonomousDatabaseId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS" || "STOPPING" || "STOPPED" || "STARTING" || "UNAVAILABLE" || "RESTORE_IN_PROGRESS" || "RESTORE_FAILED" || "BACKUP_IN_PROGRESS" || "SCALE_IN_PROGRESS" || "AVAILABLE_NEEDS_ATTENTION" || "RESTARTING" || "RECREATING" || "ROLE_CHANGE_IN_PROGRESS" || "UPGRADING" || "INACCESSIBLE" || "STANDBY",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RestoreAutonomousDatabaseCommandInput - {@link RestoreAutonomousDatabaseCommandInput}
 * @returns {@link RestoreAutonomousDatabaseCommandOutput}
 * @see {@link RestoreAutonomousDatabaseCommandInput} for command's `input` shape.
 * @see {@link RestoreAutonomousDatabaseCommandOutput} for command's `response` shape.
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
export class RestoreAutonomousDatabaseCommand extends command<RestoreAutonomousDatabaseCommandInput, RestoreAutonomousDatabaseCommandOutput>(
  _ep0,
  _mw0,
  "RestoreAutonomousDatabase",
  RestoreAutonomousDatabase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreAutonomousDatabaseInput;
      output: RestoreAutonomousDatabaseOutput;
    };
    sdk: {
      input: RestoreAutonomousDatabaseCommandInput;
      output: RestoreAutonomousDatabaseCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAutonomousDatabaseRefreshInput, StartAutonomousDatabaseRefreshOutput } from "../models/models_0";
import { StartAutonomousDatabaseRefresh$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAutonomousDatabaseRefreshCommand}.
 */
export interface StartAutonomousDatabaseRefreshCommandInput extends StartAutonomousDatabaseRefreshInput {}
/**
 * @public
 *
 * The output of {@link StartAutonomousDatabaseRefreshCommand}.
 */
export interface StartAutonomousDatabaseRefreshCommandOutput extends StartAutonomousDatabaseRefreshOutput, __MetadataBearer {}

/**
 * <p>Starts a refresh of the specified refreshable clone Autonomous Database with data from its source database. The refresh runs asynchronously. To track its progress, check the <code>refreshableStatus</code> of the Autonomous Database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, StartAutonomousDatabaseRefreshCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, StartAutonomousDatabaseRefreshCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // StartAutonomousDatabaseRefreshInput
 *   autonomousDatabaseId: "STRING_VALUE", // required
 *   timeOfRefreshCutoff: new Date("TIMESTAMP"),
 * };
 * const command = new StartAutonomousDatabaseRefreshCommand(input);
 * const response = await client.send(command);
 * // { // StartAutonomousDatabaseRefreshOutput
 * //   autonomousDatabaseId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS" || "STOPPING" || "STOPPED" || "STARTING" || "UNAVAILABLE" || "RESTORE_IN_PROGRESS" || "RESTORE_FAILED" || "BACKUP_IN_PROGRESS" || "SCALE_IN_PROGRESS" || "AVAILABLE_NEEDS_ATTENTION" || "RESTARTING" || "RECREATING" || "ROLE_CHANGE_IN_PROGRESS" || "UPGRADING" || "INACCESSIBLE" || "STANDBY",
 * //   statusReason: "STRING_VALUE",
 * //   refreshableStatus: "REFRESHING" || "NOT_REFRESHING",
 * // };
 *
 * ```
 *
 * @param StartAutonomousDatabaseRefreshCommandInput - {@link StartAutonomousDatabaseRefreshCommandInput}
 * @returns {@link StartAutonomousDatabaseRefreshCommandOutput}
 * @see {@link StartAutonomousDatabaseRefreshCommandInput} for command's `input` shape.
 * @see {@link StartAutonomousDatabaseRefreshCommandOutput} for command's `response` shape.
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
export class StartAutonomousDatabaseRefreshCommand extends command<StartAutonomousDatabaseRefreshCommandInput, StartAutonomousDatabaseRefreshCommandOutput>(
  _ep0,
  _mw0,
  "StartAutonomousDatabaseRefresh",
  StartAutonomousDatabaseRefresh$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAutonomousDatabaseRefreshInput;
      output: StartAutonomousDatabaseRefreshOutput;
    };
    sdk: {
      input: StartAutonomousDatabaseRefreshCommandInput;
      output: StartAutonomousDatabaseRefreshCommandOutput;
    };
  };
}

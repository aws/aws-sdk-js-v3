// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAutonomousDatabaseBackupInput, DeleteAutonomousDatabaseBackupOutput } from "../models/models_0";
import { DeleteAutonomousDatabaseBackup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAutonomousDatabaseBackupCommand}.
 */
export interface DeleteAutonomousDatabaseBackupCommandInput extends DeleteAutonomousDatabaseBackupInput {}
/**
 * @public
 *
 * The output of {@link DeleteAutonomousDatabaseBackupCommand}.
 */
export interface DeleteAutonomousDatabaseBackupCommandOutput extends DeleteAutonomousDatabaseBackupOutput, __MetadataBearer {}

/**
 * Deletes the specified Autonomous Database backup.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, DeleteAutonomousDatabaseBackupCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, DeleteAutonomousDatabaseBackupCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // DeleteAutonomousDatabaseBackupInput
 *   autonomousDatabaseBackupId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAutonomousDatabaseBackupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAutonomousDatabaseBackupCommandInput - {@link DeleteAutonomousDatabaseBackupCommandInput}
 * @returns {@link DeleteAutonomousDatabaseBackupCommandOutput}
 * @see {@link DeleteAutonomousDatabaseBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteAutonomousDatabaseBackupCommandOutput} for command's `response` shape.
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
export class DeleteAutonomousDatabaseBackupCommand extends command<DeleteAutonomousDatabaseBackupCommandInput, DeleteAutonomousDatabaseBackupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAutonomousDatabaseBackup",
  DeleteAutonomousDatabaseBackup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAutonomousDatabaseBackupInput;
      output: {};
    };
    sdk: {
      input: DeleteAutonomousDatabaseBackupCommandInput;
      output: DeleteAutonomousDatabaseBackupCommandOutput;
    };
  };
}

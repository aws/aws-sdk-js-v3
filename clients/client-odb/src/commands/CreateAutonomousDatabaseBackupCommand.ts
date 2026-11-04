// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAutonomousDatabaseBackupInput, CreateAutonomousDatabaseBackupOutput } from "../models/models_0";
import { CreateAutonomousDatabaseBackup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAutonomousDatabaseBackupCommand}.
 */
export interface CreateAutonomousDatabaseBackupCommandInput extends CreateAutonomousDatabaseBackupInput {}
/**
 * @public
 *
 * The output of {@link CreateAutonomousDatabaseBackupCommand}.
 */
export interface CreateAutonomousDatabaseBackupCommandOutput extends CreateAutonomousDatabaseBackupOutput, __MetadataBearer {}

/**
 * Creates a new backup of the specified Autonomous Database.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, CreateAutonomousDatabaseBackupCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, CreateAutonomousDatabaseBackupCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // CreateAutonomousDatabaseBackupInput
 *   autonomousDatabaseId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   retentionPeriodInDays: Number("int"),
 *   clientToken: "STRING_VALUE",
 *   tags: { // RequestTagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAutonomousDatabaseBackupCommand(input);
 * const response = await client.send(command);
 * // { // CreateAutonomousDatabaseBackupOutput
 * //   displayName: "STRING_VALUE",
 * //   status: "AVAILABLE" || "FAILED" || "PROVISIONING" || "TERMINATED" || "TERMINATING" || "UPDATING" || "MAINTENANCE_IN_PROGRESS",
 * //   statusReason: "STRING_VALUE",
 * //   autonomousDatabaseBackupId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAutonomousDatabaseBackupCommandInput - {@link CreateAutonomousDatabaseBackupCommandInput}
 * @returns {@link CreateAutonomousDatabaseBackupCommandOutput}
 * @see {@link CreateAutonomousDatabaseBackupCommandInput} for command's `input` shape.
 * @see {@link CreateAutonomousDatabaseBackupCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the service quota.
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
export class CreateAutonomousDatabaseBackupCommand extends command<CreateAutonomousDatabaseBackupCommandInput, CreateAutonomousDatabaseBackupCommandOutput>(
  _ep0,
  _mw0,
  "CreateAutonomousDatabaseBackup",
  CreateAutonomousDatabaseBackup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAutonomousDatabaseBackupInput;
      output: CreateAutonomousDatabaseBackupOutput;
    };
    sdk: {
      input: CreateAutonomousDatabaseBackupCommandInput;
      output: CreateAutonomousDatabaseBackupCommandOutput;
    };
  };
}

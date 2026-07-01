// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAutonomousDatabaseBackupInput, GetAutonomousDatabaseBackupOutput } from "../models/models_0";
import { GetAutonomousDatabaseBackup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAutonomousDatabaseBackupCommand}.
 */
export interface GetAutonomousDatabaseBackupCommandInput extends GetAutonomousDatabaseBackupInput {}
/**
 * @public
 *
 * The output of {@link GetAutonomousDatabaseBackupCommand}.
 */
export interface GetAutonomousDatabaseBackupCommandOutput extends GetAutonomousDatabaseBackupOutput, __MetadataBearer {}

/**
 * <p>Gets information about a specific Autonomous Database backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetAutonomousDatabaseBackupCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetAutonomousDatabaseBackupCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // GetAutonomousDatabaseBackupInput
 *   autonomousDatabaseBackupId: "STRING_VALUE", // required
 * };
 * const command = new GetAutonomousDatabaseBackupCommand(input);
 * const response = await client.send(command);
 * // { // GetAutonomousDatabaseBackupOutput
 * //   autonomousDatabaseBackup: { // AutonomousDatabaseBackup
 * //     autonomousDatabaseBackupId: "STRING_VALUE",
 * //     autonomousDatabaseBackupArn: "STRING_VALUE",
 * //     autonomousDatabaseId: "STRING_VALUE",
 * //     ocid: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     dbVersion: "STRING_VALUE",
 * //     status: "ACTIVE" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * //     statusReason: "STRING_VALUE",
 * //     isAutomatic: true || false,
 * //     retentionPeriodInDays: Number("int"),
 * //     sizeInTBs: Number("double"),
 * //     timeAvailableTill: new Date("TIMESTAMP"),
 * //     timeStarted: new Date("TIMESTAMP"),
 * //     timeEnded: new Date("TIMESTAMP"),
 * //     type: "INCREMENTAL" || "FULL" || "LONGTERM" || "VIRTUAL_FULL" || "CUMULATIVE_INCREMENTAL" || "ROLL_FORWARD_IMAGE_COPY",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAutonomousDatabaseBackupCommandInput - {@link GetAutonomousDatabaseBackupCommandInput}
 * @returns {@link GetAutonomousDatabaseBackupCommandOutput}
 * @see {@link GetAutonomousDatabaseBackupCommandInput} for command's `input` shape.
 * @see {@link GetAutonomousDatabaseBackupCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
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
export class GetAutonomousDatabaseBackupCommand extends command<GetAutonomousDatabaseBackupCommandInput, GetAutonomousDatabaseBackupCommandOutput>(
  _ep0,
  _mw0,
  "GetAutonomousDatabaseBackup",
  GetAutonomousDatabaseBackup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutonomousDatabaseBackupInput;
      output: GetAutonomousDatabaseBackupOutput;
    };
    sdk: {
      input: GetAutonomousDatabaseBackupCommandInput;
      output: GetAutonomousDatabaseBackupCommandOutput;
    };
  };
}

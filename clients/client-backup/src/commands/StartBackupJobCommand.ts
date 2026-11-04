// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartBackupJobInput, StartBackupJobOutput } from "../models/models_0";
import { StartBackupJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartBackupJobCommand}.
 */
export interface StartBackupJobCommandInput extends StartBackupJobInput {}
/**
 * @public
 *
 * The output of {@link StartBackupJobCommand}.
 */
export interface StartBackupJobCommandOutput extends StartBackupJobOutput, __MetadataBearer {}

/**
 * Starts an on-demand backup job for the specified resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartBackupJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartBackupJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // StartBackupJobInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   LogicallyAirGappedBackupVaultArn: "STRING_VALUE",
 *   ResourceArn: "STRING_VALUE", // required
 *   IamRoleArn: "STRING_VALUE", // required
 *   IdempotencyToken: "STRING_VALUE",
 *   StartWindowMinutes: Number("long"),
 *   CompleteWindowMinutes: Number("long"),
 *   Lifecycle: { // Lifecycle
 *     MoveToColdStorageAfterDays: Number("long"),
 *     DeleteAfterDays: Number("long"),
 *     OptInToArchiveForSupportedResources: true || false,
 *     DeleteAfterEvent: "DELETE_AFTER_COPY",
 *   },
 *   RecoveryPointTags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   BackupOptions: { // BackupOptions
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Index: "ENABLED" || "DISABLED",
 * };
 * const command = new StartBackupJobCommand(input);
 * const response = await client.send(command);
 * // { // StartBackupJobOutput
 * //   BackupJobId: "STRING_VALUE",
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   IsParent: true || false,
 * // };
 *
 * ```
 *
 * @param StartBackupJobCommandInput - {@link StartBackupJobCommandInput}
 * @returns {@link StartBackupJobCommandOutput}
 * @see {@link StartBackupJobCommandInput} for command's `input` shape.
 * @see {@link StartBackupJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Indicates that a required parameter is missing.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request failed due to a temporary failure of the server.
 *
 * @throws {@link BackupServiceException}
 *
 * Base exception class for all service exceptions from Backup service.
 *
 * @public
 */
export class StartBackupJobCommand extends command<StartBackupJobCommandInput, StartBackupJobCommandOutput>(
  _ep0,
  _mw0,
  "StartBackupJob",
  StartBackupJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBackupJobInput;
      output: StartBackupJobOutput;
    };
    sdk: {
      input: StartBackupJobCommandInput;
      output: StartBackupJobCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBackupRequest, DeleteBackupResponse } from "../models/models_0";
import { DeleteBackup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBackupCommand}.
 */
export interface DeleteBackupCommandInput extends DeleteBackupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBackupCommand}.
 */
export interface DeleteBackupCommandOutput extends DeleteBackupResponse, __MetadataBearer {}

/**
 * Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and its data is gone.
 *
 * The `DeleteBackup` call returns instantly. The backup won't show up in later `DescribeBackups` calls.
 *
 * > **Important:** The data in a deleted backup is also deleted and can't be recovered by any means.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteBackupCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteBackupCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DeleteBackupRequest
 *   BackupId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new DeleteBackupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBackupResponse
 * //   BackupId: "STRING_VALUE",
 * //   Lifecycle: "AVAILABLE" || "CREATING" || "TRANSFERRING" || "DELETED" || "FAILED" || "PENDING" || "COPYING",
 * // };
 *
 * ```
 *
 * @param DeleteBackupCommandInput - {@link DeleteBackupCommandInput}
 * @returns {@link DeleteBackupCommandOutput}
 * @see {@link DeleteBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BackupBeingCopied} (client fault)
 *
 * You can't delete a backup while it's being copied.
 *
 * @throws {@link BackupInProgress} (client fault)
 *
 * Another backup is already under way. Wait for completion before initiating additional backups of this file system.
 *
 * @throws {@link BackupNotFound} (client fault)
 *
 * No Amazon FSx backups were found based upon the supplied parameters.
 *
 * @throws {@link BackupRestoring} (client fault)
 *
 * You can't delete a backup while it's being used to restore a file system.
 *
 * @throws {@link BadRequest} (client fault)
 *
 * A generic error indicating a failure with a client request.
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *
 * The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * A generic error indicating a server-side failure.
 *
 * @throws {@link FSxServiceException}
 *
 * Base exception class for all service exceptions from FSx service.
 *
 * @example To delete a backup
 * ```javascript
 * // This operation deletes an Amazon FSx file system backup.
 * const input = {
 *   BackupId: "backup-03e3c82e0183b7b6b"
 * };
 * const command = new DeleteBackupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   BackupId: "backup-03e3c82e0183b7b6b",
 *   Lifecycle: "DELETED"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteBackupCommand extends command<DeleteBackupCommandInput, DeleteBackupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBackup",
  DeleteBackup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackupRequest;
      output: DeleteBackupResponse;
    };
    sdk: {
      input: DeleteBackupCommandInput;
      output: DeleteBackupCommandOutput;
    };
  };
}

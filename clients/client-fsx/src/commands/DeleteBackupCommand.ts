// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import type { DeleteBackupRequest, DeleteBackupResponse } from "../models/models_0";
import { DeleteBackup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes an Amazon FSx backup. After deletion, the backup no longer exists, and
 *             its data is gone.</p>
 *          <p>The <code>DeleteBackup</code> call returns instantly. The backup won't show up in
 *             later <code>DescribeBackups</code> calls.</p>
 *          <important>
 *             <p>The data in a deleted backup is also deleted and can't be recovered by any
 *                 means.</p>
 *          </important>
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
 *  <p>You can't delete a backup while it's being copied.</p>
 *
 * @throws {@link BackupInProgress} (client fault)
 *  <p>Another backup is already under way. Wait for completion before initiating
 *             additional backups of this file system.</p>
 *
 * @throws {@link BackupNotFound} (client fault)
 *  <p>No Amazon FSx backups were found based upon the supplied parameters.</p>
 *
 * @throws {@link BackupRestoring} (client fault)
 *  <p>You can't delete a backup while it's being used to restore a file
 *             system.</p>
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
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
export class DeleteBackupCommand extends $Command
  .classBuilder<
    DeleteBackupCommandInput,
    DeleteBackupCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSimbaAPIService_v20180301", "DeleteBackup", {})
  .n("FSxClient", "DeleteBackupCommand")
  .sc(DeleteBackup)
  .build() {
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

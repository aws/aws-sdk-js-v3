// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutBackupVaultNotificationsInput } from "../models/models_0";
import { PutBackupVaultNotifications } from "../schemas/schemas_33_BackupVaultNotifications";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutBackupVaultNotificationsCommand}.
 */
export interface PutBackupVaultNotificationsCommandInput extends PutBackupVaultNotificationsInput {}
/**
 * @public
 *
 * The output of {@link PutBackupVaultNotificationsCommand}.
 */
export interface PutBackupVaultNotificationsCommandOutput extends __MetadataBearer {}

/**
 * <p>Turns on notifications on a backup vault for the specified topic and events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, PutBackupVaultNotificationsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, PutBackupVaultNotificationsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // PutBackupVaultNotificationsInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   SNSTopicArn: "STRING_VALUE", // required
 *   BackupVaultEvents: [ // BackupVaultEvents // required
 *     "BACKUP_JOB_STARTED" || "BACKUP_JOB_COMPLETED" || "BACKUP_JOB_SUCCESSFUL" || "BACKUP_JOB_FAILED" || "BACKUP_JOB_EXPIRED" || "RESTORE_JOB_STARTED" || "RESTORE_JOB_COMPLETED" || "RESTORE_JOB_SUCCESSFUL" || "RESTORE_JOB_FAILED" || "COPY_JOB_STARTED" || "COPY_JOB_SUCCESSFUL" || "COPY_JOB_FAILED" || "RECOVERY_POINT_MODIFIED" || "BACKUP_PLAN_CREATED" || "BACKUP_PLAN_MODIFIED" || "S3_BACKUP_OBJECT_FAILED" || "S3_RESTORE_OBJECT_FAILED" || "CONTINUOUS_BACKUP_INTERRUPTED" || "RECOVERY_POINT_INDEX_COMPLETED" || "RECOVERY_POINT_INDEX_DELETED" || "RECOVERY_POINT_INDEXING_FAILED",
 *   ],
 * };
 * const command = new PutBackupVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBackupVaultNotificationsCommandInput - {@link PutBackupVaultNotificationsCommandInput}
 * @returns {@link PutBackupVaultNotificationsCommandOutput}
 * @see {@link PutBackupVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link PutBackupVaultNotificationsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 *
 * @public
 */
export class PutBackupVaultNotificationsCommand extends $Command
  .classBuilder<
    PutBackupVaultNotificationsCommandInput,
    PutBackupVaultNotificationsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "PutBackupVaultNotifications", {})
  .n("BackupClient", "PutBackupVaultNotificationsCommand")
  .sc(PutBackupVaultNotifications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBackupVaultNotificationsInput;
      output: {};
    };
    sdk: {
      input: PutBackupVaultNotificationsCommandInput;
      output: PutBackupVaultNotificationsCommandOutput;
    };
  };
}

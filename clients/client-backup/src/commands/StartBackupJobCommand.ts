// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartBackupJobInput, StartBackupJobOutput } from "../models/models_0";
import { StartBackupJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts an on-demand backup job for the specified resource.</p>
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
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
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
export class StartBackupJobCommand extends $Command
  .classBuilder<
    StartBackupJobCommandInput,
    StartBackupJobCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "StartBackupJob", {})
  .n("BackupClient", "StartBackupJobCommand")
  .sc(StartBackupJob)
  .build() {
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

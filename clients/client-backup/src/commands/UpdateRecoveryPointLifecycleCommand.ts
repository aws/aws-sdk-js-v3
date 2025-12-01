// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRecoveryPointLifecycleInput, UpdateRecoveryPointLifecycleOutput } from "../models/models_0";
import { UpdateRecoveryPointLifecycle } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecoveryPointLifecycleCommand}.
 */
export interface UpdateRecoveryPointLifecycleCommandInput extends UpdateRecoveryPointLifecycleInput {}
/**
 * @public
 *
 * The output of {@link UpdateRecoveryPointLifecycleCommand}.
 */
export interface UpdateRecoveryPointLifecycleCommandOutput
  extends UpdateRecoveryPointLifecycleOutput,
    __MetadataBearer {}

/**
 * <p>Sets the transition lifecycle of a recovery point.</p>
 *          <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
 *          it expires. Backup transitions and expires backups automatically according to
 *          the lifecycle that you define.</p>
 *          <p>Resource types that can transition to cold storage are listed in the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/backup-feature-availability.html#features-by-resource">Feature availability by resource</a> table. Backup ignores this expression for
 *          other resource types.</p>
 *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
 *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
 *          cold after days” setting. The “transition to cold after days” setting cannot be changed
 *          after a backup has been transitioned to cold.</p>
 *          <important>
 *             <p>If your lifecycle currently uses the parameters <code>DeleteAfterDays</code> and
 *          <code>MoveToColdStorageAfterDays</code>, include these parameters and their values when you call
 *          this operation. Not including them may result in your plan updating with null values.</p>
 *          </important>
 *          <p>This operation does not support continuous backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRecoveryPointLifecycleCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRecoveryPointLifecycleCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // UpdateRecoveryPointLifecycleInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 *   Lifecycle: { // Lifecycle
 *     MoveToColdStorageAfterDays: Number("long"),
 *     DeleteAfterDays: Number("long"),
 *     OptInToArchiveForSupportedResources: true || false,
 *     DeleteAfterEvent: "DELETE_AFTER_COPY",
 *   },
 * };
 * const command = new UpdateRecoveryPointLifecycleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecoveryPointLifecycleOutput
 * //   BackupVaultArn: "STRING_VALUE",
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   Lifecycle: { // Lifecycle
 * //     MoveToColdStorageAfterDays: Number("long"),
 * //     DeleteAfterDays: Number("long"),
 * //     OptInToArchiveForSupportedResources: true || false,
 * //     DeleteAfterEvent: "DELETE_AFTER_COPY",
 * //   },
 * //   CalculatedLifecycle: { // CalculatedLifecycle
 * //     MoveToColdStorageAt: new Date("TIMESTAMP"),
 * //     DeleteAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRecoveryPointLifecycleCommandInput - {@link UpdateRecoveryPointLifecycleCommandInput}
 * @returns {@link UpdateRecoveryPointLifecycleCommandOutput}
 * @see {@link UpdateRecoveryPointLifecycleCommandInput} for command's `input` shape.
 * @see {@link UpdateRecoveryPointLifecycleCommandOutput} for command's `response` shape.
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
export class UpdateRecoveryPointLifecycleCommand extends $Command
  .classBuilder<
    UpdateRecoveryPointLifecycleCommandInput,
    UpdateRecoveryPointLifecycleCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "UpdateRecoveryPointLifecycle", {})
  .n("BackupClient", "UpdateRecoveryPointLifecycleCommand")
  .sc(UpdateRecoveryPointLifecycle)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecoveryPointLifecycleInput;
      output: UpdateRecoveryPointLifecycleOutput;
    };
    sdk: {
      input: UpdateRecoveryPointLifecycleCommandInput;
      output: UpdateRecoveryPointLifecycleCommandOutput;
    };
  };
}

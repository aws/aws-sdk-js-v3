// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRecoveryPointIndexSettingsInput, UpdateRecoveryPointIndexSettingsOutput } from "../models/models_0";
import {
  de_UpdateRecoveryPointIndexSettingsCommand,
  se_UpdateRecoveryPointIndexSettingsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecoveryPointIndexSettingsCommand}.
 */
export interface UpdateRecoveryPointIndexSettingsCommandInput extends UpdateRecoveryPointIndexSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateRecoveryPointIndexSettingsCommand}.
 */
export interface UpdateRecoveryPointIndexSettingsCommandOutput
  extends UpdateRecoveryPointIndexSettingsOutput,
    __MetadataBearer {}

/**
 * <p>This operation updates the settings of a recovery point index.</p>
 *          <p>Required: BackupVaultName, RecoveryPointArn, and IAMRoleArn</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRecoveryPointIndexSettingsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRecoveryPointIndexSettingsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BackupClient(config);
 * const input = { // UpdateRecoveryPointIndexSettingsInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 *   IamRoleArn: "STRING_VALUE",
 *   Index: "ENABLED" || "DISABLED", // required
 * };
 * const command = new UpdateRecoveryPointIndexSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecoveryPointIndexSettingsOutput
 * //   BackupVaultName: "STRING_VALUE",
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   IndexStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING",
 * //   Index: "ENABLED" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param UpdateRecoveryPointIndexSettingsCommandInput - {@link UpdateRecoveryPointIndexSettingsCommandInput}
 * @returns {@link UpdateRecoveryPointIndexSettingsCommandOutput}
 * @see {@link UpdateRecoveryPointIndexSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateRecoveryPointIndexSettingsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateRecoveryPointIndexSettingsCommand extends $Command
  .classBuilder<
    UpdateRecoveryPointIndexSettingsCommandInput,
    UpdateRecoveryPointIndexSettingsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "UpdateRecoveryPointIndexSettings", {})
  .n("BackupClient", "UpdateRecoveryPointIndexSettingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRecoveryPointIndexSettingsCommand)
  .de(de_UpdateRecoveryPointIndexSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecoveryPointIndexSettingsInput;
      output: UpdateRecoveryPointIndexSettingsOutput;
    };
    sdk: {
      input: UpdateRecoveryPointIndexSettingsCommandInput;
      output: UpdateRecoveryPointIndexSettingsCommandOutput;
    };
  };
}

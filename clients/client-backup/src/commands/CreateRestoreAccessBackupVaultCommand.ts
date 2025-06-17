// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateRestoreAccessBackupVaultInput,
  CreateRestoreAccessBackupVaultInputFilterSensitiveLog,
  CreateRestoreAccessBackupVaultOutput,
} from "../models/models_0";
import {
  de_CreateRestoreAccessBackupVaultCommand,
  se_CreateRestoreAccessBackupVaultCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRestoreAccessBackupVaultCommand}.
 */
export interface CreateRestoreAccessBackupVaultCommandInput extends CreateRestoreAccessBackupVaultInput {}
/**
 * @public
 *
 * The output of {@link CreateRestoreAccessBackupVaultCommand}.
 */
export interface CreateRestoreAccessBackupVaultCommandOutput
  extends CreateRestoreAccessBackupVaultOutput,
    __MetadataBearer {}

/**
 * <p>Creates a restore access backup vault that provides temporary access to recovery points in a logically air-gapped backup vault, subject to MPA approval.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateRestoreAccessBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateRestoreAccessBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // CreateRestoreAccessBackupVaultInput
 *   SourceBackupVaultArn: "STRING_VALUE", // required
 *   BackupVaultName: "STRING_VALUE",
 *   BackupVaultTags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   CreatorRequestId: "STRING_VALUE",
 *   RequesterComment: "STRING_VALUE",
 * };
 * const command = new CreateRestoreAccessBackupVaultCommand(input);
 * const response = await client.send(command);
 * // { // CreateRestoreAccessBackupVaultOutput
 * //   RestoreAccessBackupVaultArn: "STRING_VALUE",
 * //   VaultState: "CREATING" || "AVAILABLE" || "FAILED",
 * //   RestoreAccessBackupVaultName: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateRestoreAccessBackupVaultCommandInput - {@link CreateRestoreAccessBackupVaultCommandInput}
 * @returns {@link CreateRestoreAccessBackupVaultCommandOutput}
 * @see {@link CreateRestoreAccessBackupVaultCommandInput} for command's `input` shape.
 * @see {@link CreateRestoreAccessBackupVaultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
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
export class CreateRestoreAccessBackupVaultCommand extends $Command
  .classBuilder<
    CreateRestoreAccessBackupVaultCommandInput,
    CreateRestoreAccessBackupVaultCommandOutput,
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
  .s("CryoControllerUserManager", "CreateRestoreAccessBackupVault", {})
  .n("BackupClient", "CreateRestoreAccessBackupVaultCommand")
  .f(CreateRestoreAccessBackupVaultInputFilterSensitiveLog, void 0)
  .ser(se_CreateRestoreAccessBackupVaultCommand)
  .de(de_CreateRestoreAccessBackupVaultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRestoreAccessBackupVaultInput;
      output: CreateRestoreAccessBackupVaultOutput;
    };
    sdk: {
      input: CreateRestoreAccessBackupVaultCommandInput;
      output: CreateRestoreAccessBackupVaultCommandOutput;
    };
  };
}

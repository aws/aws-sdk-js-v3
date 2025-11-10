// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBackupVaultInput, CreateBackupVaultOutput } from "../models/models_0";
import { CreateBackupVault } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBackupVaultCommand}.
 */
export interface CreateBackupVaultCommandInput extends CreateBackupVaultInput {}
/**
 * @public
 *
 * The output of {@link CreateBackupVaultCommand}.
 */
export interface CreateBackupVaultCommandOutput extends CreateBackupVaultOutput, __MetadataBearer {}

/**
 * <p>Creates a logical container where backups are stored. A <code>CreateBackupVault</code>
 *          request includes a name, optionally one or more resource tags, an encryption key, and a
 *          request ID.</p>
 *          <note>
 *             <p>Do not include sensitive data, such as passport numbers, in the name of a backup
 *             vault.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateBackupVaultInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   BackupVaultTags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   EncryptionKeyArn: "STRING_VALUE",
 *   CreatorRequestId: "STRING_VALUE",
 * };
 * const command = new CreateBackupVaultCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackupVaultOutput
 * //   BackupVaultName: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateBackupVaultCommandInput - {@link CreateBackupVaultCommandInput}
 * @returns {@link CreateBackupVaultCommandOutput}
 * @see {@link CreateBackupVaultCommandInput} for command's `input` shape.
 * @see {@link CreateBackupVaultCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
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
export class CreateBackupVaultCommand extends $Command
  .classBuilder<
    CreateBackupVaultCommandInput,
    CreateBackupVaultCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "CreateBackupVault", {})
  .n("BackupClient", "CreateBackupVaultCommand")
  .sc(CreateBackupVault)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBackupVaultInput;
      output: CreateBackupVaultOutput;
    };
    sdk: {
      input: CreateBackupVaultCommandInput;
      output: CreateBackupVaultCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRestoreAccessBackupVaultInput, CreateRestoreAccessBackupVaultOutput } from "../models/models_0";
import { CreateRestoreAccessBackupVault$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateRestoreAccessBackupVaultCommandOutput extends CreateRestoreAccessBackupVaultOutput, __MetadataBearer {}

/**
 * Creates a restore access backup vault that provides temporary access to recovery points in a logically air-gapped backup vault, subject to MPA approval.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateRestoreAccessBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateRestoreAccessBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
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
 *
 * The required resource already exists.
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
export class CreateRestoreAccessBackupVaultCommand extends command<CreateRestoreAccessBackupVaultCommandInput, CreateRestoreAccessBackupVaultCommandOutput>(
  _ep0,
  _mw0,
  "CreateRestoreAccessBackupVault",
  CreateRestoreAccessBackupVault$
) {
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

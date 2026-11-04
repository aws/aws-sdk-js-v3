// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BackupPolicyDescription, PutBackupPolicyRequest } from "../models/models_0";
import { PutBackupPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutBackupPolicyCommand}.
 */
export interface PutBackupPolicyCommandInput extends PutBackupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutBackupPolicyCommand}.
 */
export interface PutBackupPolicyCommandOutput extends BackupPolicyDescription, __MetadataBearer {}

/**
 * Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutBackupPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutBackupPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // PutBackupPolicyRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   BackupPolicy: { // BackupPolicy
 *     Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING", // required
 *   },
 * };
 * const command = new PutBackupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // BackupPolicyDescription
 * //   BackupPolicy: { // BackupPolicy
 * //     Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutBackupPolicyCommandInput - {@link PutBackupPolicyCommandInput}
 * @returns {@link PutBackupPolicyCommandOutput}
 * @see {@link PutBackupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBackupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *
 * Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *
 * Returned if the specified `FileSystemId` value doesn't exist in the requester's Amazon Web Services account.
 *
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *
 * Returned if the file system's lifecycle state is not "available".
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Returned if the Backup service is not available in the Amazon Web Services Region in which the request was made.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
 *
 * @public
 */
export class PutBackupPolicyCommand extends command<PutBackupPolicyCommandInput, PutBackupPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutBackupPolicy",
  PutBackupPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBackupPolicyRequest;
      output: BackupPolicyDescription;
    };
    sdk: {
      input: PutBackupPolicyCommandInput;
      output: PutBackupPolicyCommandOutput;
    };
  };
}

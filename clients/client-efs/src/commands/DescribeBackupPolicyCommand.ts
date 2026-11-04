// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BackupPolicyDescription, DescribeBackupPolicyRequest } from "../models/models_0";
import { DescribeBackupPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeBackupPolicyCommand}.
 */
export interface DescribeBackupPolicyCommandInput extends DescribeBackupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBackupPolicyCommand}.
 */
export interface DescribeBackupPolicyCommandOutput extends BackupPolicyDescription, __MetadataBearer {}

/**
 * Returns the backup policy for the specified EFS file system.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeBackupPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeBackupPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DescribeBackupPolicyRequest
 *   FileSystemId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBackupPolicyCommand(input);
 * const response = await client.send(command);
 * // { // BackupPolicyDescription
 * //   BackupPolicy: { // BackupPolicy
 * //     Status: "ENABLED" || "ENABLING" || "DISABLED" || "DISABLING", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBackupPolicyCommandInput - {@link DescribeBackupPolicyCommandInput}
 * @returns {@link DescribeBackupPolicyCommandOutput}
 * @see {@link DescribeBackupPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link PolicyNotFound} (client fault)
 *
 * Returned if `no backup` is specified for a One Zone EFS file system.
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
export class DescribeBackupPolicyCommand extends command<DescribeBackupPolicyCommandInput, DescribeBackupPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBackupPolicy",
  DescribeBackupPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBackupPolicyRequest;
      output: BackupPolicyDescription;
    };
    sdk: {
      input: DescribeBackupPolicyCommandInput;
      output: DescribeBackupPolicyCommandOutput;
    };
  };
}

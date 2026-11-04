// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopBackupJobInput } from "../models/models_0";
import { StopBackupJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopBackupJobCommand}.
 */
export interface StopBackupJobCommandInput extends StopBackupJobInput {}
/**
 * @public
 *
 * The output of {@link StopBackupJobCommand}.
 */
export interface StopBackupJobCommandOutput extends __MetadataBearer {}

/**
 * Attempts to cancel a job to create a one-time backup of a resource.
 *
 * This action is not supported for the following services:
 *
 * - Amazon Aurora
 * - Amazon DocumentDB (with MongoDB compatibility)
 * - Amazon FSx for Lustre
 * - Amazon FSx for NetApp ONTAP
 * - Amazon FSx for OpenZFS
 * - Amazon FSx for Windows File Server
 * - Amazon Neptune
 * - SAP HANA databases on Amazon EC2 instances
 * - Amazon RDS
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StopBackupJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StopBackupJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // StopBackupJobInput
 *   BackupJobId: "STRING_VALUE", // required
 * };
 * const command = new StopBackupJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopBackupJobCommandInput - {@link StopBackupJobCommandInput}
 * @returns {@link StopBackupJobCommandOutput}
 * @see {@link StopBackupJobCommandInput} for command's `input` shape.
 * @see {@link StopBackupJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.
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
export class StopBackupJobCommand extends command<StopBackupJobCommandInput, StopBackupJobCommandOutput>(
  _ep0,
  _mw0,
  "StopBackupJob",
  StopBackupJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopBackupJobInput;
      output: {};
    };
    sdk: {
      input: StopBackupJobCommandInput;
      output: StopBackupJobCommandOutput;
    };
  };
}

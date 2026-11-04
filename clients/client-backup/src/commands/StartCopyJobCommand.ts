// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartCopyJobInput, StartCopyJobOutput } from "../models/models_0";
import { StartCopyJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartCopyJobCommand}.
 */
export interface StartCopyJobCommandInput extends StartCopyJobInput {}
/**
 * @public
 *
 * The output of {@link StartCopyJobCommand}.
 */
export interface StartCopyJobCommandOutput extends StartCopyJobOutput, __MetadataBearer {}

/**
 * Starts a job to create a one-time copy of the specified resource.
 *
 * Does not support continuous backups.
 *
 * See [Copy job retry](https://docs.aws.amazon.com/aws-backup/latest/devguide/recov-point-create-a-copy.html#backup-copy-retry) for information on how Backup retries copy job operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartCopyJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartCopyJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // StartCopyJobInput
 *   RecoveryPointArn: "STRING_VALUE", // required
 *   SourceBackupVaultName: "STRING_VALUE", // required
 *   DestinationBackupVaultArn: "STRING_VALUE", // required
 *   IamRoleArn: "STRING_VALUE", // required
 *   IdempotencyToken: "STRING_VALUE",
 *   Lifecycle: { // Lifecycle
 *     MoveToColdStorageAfterDays: Number("long"),
 *     DeleteAfterDays: Number("long"),
 *     OptInToArchiveForSupportedResources: true || false,
 *     DeleteAfterEvent: "DELETE_AFTER_COPY",
 *   },
 * };
 * const command = new StartCopyJobCommand(input);
 * const response = await client.send(command);
 * // { // StartCopyJobOutput
 * //   CopyJobId: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   IsParent: true || false,
 * // };
 *
 * ```
 *
 * @param StartCopyJobCommandInput - {@link StartCopyJobCommandInput}
 * @returns {@link StartCopyJobCommandOutput}
 * @see {@link StartCopyJobCommandInput} for command's `input` shape.
 * @see {@link StartCopyJobCommandOutput} for command's `response` shape.
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
export class StartCopyJobCommand extends command<StartCopyJobCommandInput, StartCopyJobCommandOutput>(
  _ep0,
  _mw0,
  "StartCopyJob",
  StartCopyJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCopyJobInput;
      output: StartCopyJobOutput;
    };
    sdk: {
      input: StartCopyJobCommandInput;
      output: StartCopyJobCommandOutput;
    };
  };
}

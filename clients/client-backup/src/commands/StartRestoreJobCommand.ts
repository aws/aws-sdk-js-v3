// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartRestoreJobInput, StartRestoreJobOutput } from "../models/models_0";
import { StartRestoreJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartRestoreJobCommand}.
 */
export interface StartRestoreJobCommandInput extends StartRestoreJobInput {}
/**
 * @public
 *
 * The output of {@link StartRestoreJobCommand}.
 */
export interface StartRestoreJobCommandOutput extends StartRestoreJobOutput, __MetadataBearer {}

/**
 * Recovers the saved resource identified by an Amazon Resource Name (ARN).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartRestoreJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartRestoreJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // StartRestoreJobInput
 *   RecoveryPointArn: "STRING_VALUE", // required
 *   Metadata: { // Metadata // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   IamRoleArn: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE",
 *   ResourceType: "STRING_VALUE",
 *   CopySourceTagsToRestoredResource: true || false,
 * };
 * const command = new StartRestoreJobCommand(input);
 * const response = await client.send(command);
 * // { // StartRestoreJobOutput
 * //   RestoreJobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartRestoreJobCommandInput - {@link StartRestoreJobCommandInput}
 * @returns {@link StartRestoreJobCommandOutput}
 * @see {@link StartRestoreJobCommandInput} for command's `input` shape.
 * @see {@link StartRestoreJobCommandOutput} for command's `response` shape.
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
export class StartRestoreJobCommand extends command<StartRestoreJobCommandInput, StartRestoreJobCommandOutput>(
  _ep0,
  _mw0,
  "StartRestoreJob",
  StartRestoreJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRestoreJobInput;
      output: StartRestoreJobOutput;
    };
    sdk: {
      input: StartRestoreJobCommandInput;
      output: StartRestoreJobCommandOutput;
    };
  };
}

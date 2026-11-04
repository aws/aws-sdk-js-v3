// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeProtectedResourceInput, DescribeProtectedResourceOutput } from "../models/models_0";
import { DescribeProtectedResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeProtectedResourceCommand}.
 */
export interface DescribeProtectedResourceCommandInput extends DescribeProtectedResourceInput {}
/**
 * @public
 *
 * The output of {@link DescribeProtectedResourceCommand}.
 */
export interface DescribeProtectedResourceCommandOutput extends DescribeProtectedResourceOutput, __MetadataBearer {}

/**
 * Returns information about a saved resource, including the last time it was backed up, its Amazon Resource Name (ARN), and the Amazon Web Services service type of the saved resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeProtectedResourceCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeProtectedResourceCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DescribeProtectedResourceInput
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeProtectedResourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProtectedResourceOutput
 * //   ResourceArn: "STRING_VALUE",
 * //   ResourceType: "STRING_VALUE",
 * //   LastBackupTime: new Date("TIMESTAMP"),
 * //   ResourceName: "STRING_VALUE",
 * //   LastBackupVaultArn: "STRING_VALUE",
 * //   LastRecoveryPointArn: "STRING_VALUE",
 * //   LatestRestoreExecutionTimeMinutes: Number("long"),
 * //   LatestRestoreJobCreationDate: new Date("TIMESTAMP"),
 * //   LatestRestoreRecoveryPointCreationDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeProtectedResourceCommandInput - {@link DescribeProtectedResourceCommandInput}
 * @returns {@link DescribeProtectedResourceCommandOutput}
 * @see {@link DescribeProtectedResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectedResourceCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
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
export class DescribeProtectedResourceCommand extends command<DescribeProtectedResourceCommandInput, DescribeProtectedResourceCommandOutput>(
  _ep0,
  _mw0,
  "DescribeProtectedResource",
  DescribeProtectedResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeProtectedResourceInput;
      output: DescribeProtectedResourceOutput;
    };
    sdk: {
      input: DescribeProtectedResourceCommandInput;
      output: DescribeProtectedResourceCommandOutput;
    };
  };
}

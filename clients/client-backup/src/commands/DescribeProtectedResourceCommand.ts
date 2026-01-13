// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeProtectedResourceInput, DescribeProtectedResourceOutput } from "../models/models_0";
import { DescribeProtectedResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns information about a saved resource, including the last time it was backed up,
 *          its Amazon Resource Name (ARN), and the Amazon Web Services service type of the saved
 *          resource.</p>
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
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
export class DescribeProtectedResourceCommand extends $Command
  .classBuilder<
    DescribeProtectedResourceCommandInput,
    DescribeProtectedResourceCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DescribeProtectedResource", {})
  .n("BackupClient", "DescribeProtectedResourceCommand")
  .sc(DescribeProtectedResource$)
  .build() {
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

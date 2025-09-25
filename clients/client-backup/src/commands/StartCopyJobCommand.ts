// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartCopyJobInput, StartCopyJobOutput } from "../models/models_0";
import { StartCopyJob } from "../schemas/schemas_13_Job";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts a job to create a one-time copy of the specified resource.</p>
 *          <p>Does not support continuous backups.</p>
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
export class StartCopyJobCommand extends $Command
  .classBuilder<
    StartCopyJobCommandInput,
    StartCopyJobCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "StartCopyJob", {})
  .n("BackupClient", "StartCopyJobCommand")
  .sc(StartCopyJob)
  .build() {
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

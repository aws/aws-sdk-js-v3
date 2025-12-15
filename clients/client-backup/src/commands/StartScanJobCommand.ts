// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartScanJobInput, StartScanJobOutput } from "../models/models_0";
import { StartScanJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartScanJobCommand}.
 */
export interface StartScanJobCommandInput extends StartScanJobInput {}
/**
 * @public
 *
 * The output of {@link StartScanJobCommand}.
 */
export interface StartScanJobCommandOutput extends StartScanJobOutput, __MetadataBearer {}

/**
 * <p>Starts scanning jobs for specific resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, StartScanJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, StartScanJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // StartScanJobInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   IamRoleArn: "STRING_VALUE", // required
 *   IdempotencyToken: "STRING_VALUE",
 *   MalwareScanner: "GUARDDUTY", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 *   ScanBaseRecoveryPointArn: "STRING_VALUE",
 *   ScanMode: "FULL_SCAN" || "INCREMENTAL_SCAN", // required
 *   ScannerRoleArn: "STRING_VALUE", // required
 * };
 * const command = new StartScanJobCommand(input);
 * const response = await client.send(command);
 * // { // StartScanJobOutput
 * //   CreationDate: new Date("TIMESTAMP"), // required
 * //   ScanJobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartScanJobCommandInput - {@link StartScanJobCommandInput}
 * @returns {@link StartScanJobCommandOutput}
 * @see {@link StartScanJobCommandInput} for command's `input` shape.
 * @see {@link StartScanJobCommandOutput} for command's `response` shape.
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
export class StartScanJobCommand extends $Command
  .classBuilder<
    StartScanJobCommandInput,
    StartScanJobCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "StartScanJob", {})
  .n("BackupClient", "StartScanJobCommand")
  .sc(StartScanJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartScanJobInput;
      output: StartScanJobOutput;
    };
    sdk: {
      input: StartScanJobCommandInput;
      output: StartScanJobCommandOutput;
    };
  };
}

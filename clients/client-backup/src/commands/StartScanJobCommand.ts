// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartScanJobInput, StartScanJobOutput } from "../models/models_0";
import { StartScanJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts scanning jobs for specific resources.
 *
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
 *   ContinuousScanEndTime: new Date("TIMESTAMP"),
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
export class StartScanJobCommand extends command<StartScanJobCommandInput, StartScanJobCommandOutput>(
  _ep0,
  _mw0,
  "StartScanJob",
  StartScanJob$
) {
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

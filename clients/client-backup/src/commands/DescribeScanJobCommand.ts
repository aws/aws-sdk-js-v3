// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeScanJobInput, DescribeScanJobOutput } from "../models/models_0";
import { DescribeScanJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeScanJobCommand}.
 */
export interface DescribeScanJobCommandInput extends DescribeScanJobInput {}
/**
 * @public
 *
 * The output of {@link DescribeScanJobCommand}.
 */
export interface DescribeScanJobCommandOutput extends DescribeScanJobOutput, __MetadataBearer {}

/**
 * Returns scan job details for the specified ScanJobID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeScanJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeScanJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DescribeScanJobInput
 *   ScanJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeScanJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScanJobOutput
 * //   AccountId: "STRING_VALUE", // required
 * //   BackupVaultArn: "STRING_VALUE", // required
 * //   BackupVaultName: "STRING_VALUE", // required
 * //   CompletionDate: new Date("TIMESTAMP"),
 * //   ContinuousScanEndTime: new Date("TIMESTAMP"),
 * //   ContinuousScanStartTime: new Date("TIMESTAMP"),
 * //   CreatedBy: { // ScanJobCreator
 * //     BackupPlanArn: "STRING_VALUE", // required
 * //     BackupPlanId: "STRING_VALUE", // required
 * //     BackupPlanVersion: "STRING_VALUE", // required
 * //     BackupRuleId: "STRING_VALUE", // required
 * //   },
 * //   CreationDate: new Date("TIMESTAMP"), // required
 * //   IamRoleArn: "STRING_VALUE", // required
 * //   MalwareScanner: "GUARDDUTY", // required
 * //   RecoveryPointArn: "STRING_VALUE", // required
 * //   ResourceArn: "STRING_VALUE", // required
 * //   ResourceName: "STRING_VALUE", // required
 * //   ResourceType: "EBS" || "EC2" || "S3", // required
 * //   ScanBaseRecoveryPointArn: "STRING_VALUE",
 * //   ScanId: "STRING_VALUE",
 * //   ScanJobId: "STRING_VALUE", // required
 * //   ScanMode: "FULL_SCAN" || "INCREMENTAL_SCAN", // required
 * //   ScanResult: { // ScanResultInfo
 * //     ScanResultStatus: "NO_THREATS_FOUND" || "THREATS_FOUND" || "UNKNOWN", // required
 * //   },
 * //   ScannerRoleArn: "STRING_VALUE", // required
 * //   State: "CANCELED" || "COMPLETED" || "COMPLETED_WITH_ISSUES" || "CREATED" || "FAILED" || "RUNNING", // required
 * //   StatusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScanJobCommandInput - {@link DescribeScanJobCommandInput}
 * @returns {@link DescribeScanJobCommandOutput}
 * @see {@link DescribeScanJobCommandInput} for command's `input` shape.
 * @see {@link DescribeScanJobCommandOutput} for command's `response` shape.
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
export class DescribeScanJobCommand extends command<DescribeScanJobCommandInput, DescribeScanJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeScanJob",
  DescribeScanJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScanJobInput;
      output: DescribeScanJobOutput;
    };
    sdk: {
      input: DescribeScanJobCommandInput;
      output: DescribeScanJobCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ConvertRecoveryPointToSnapshotRequest, ConvertRecoveryPointToSnapshotResponse } from "../models/models_0";
import {
  de_ConvertRecoveryPointToSnapshotCommand,
  se_ConvertRecoveryPointToSnapshotCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConvertRecoveryPointToSnapshotCommand}.
 */
export interface ConvertRecoveryPointToSnapshotCommandInput extends ConvertRecoveryPointToSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link ConvertRecoveryPointToSnapshotCommand}.
 */
export interface ConvertRecoveryPointToSnapshotCommandOutput
  extends ConvertRecoveryPointToSnapshotResponse,
    __MetadataBearer {}

/**
 * <p>Converts a recovery point to a snapshot. For more information about recovery points and snapshots,
 *          see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/serverless-snapshots-recovery-points.html">Working with snapshots and recovery points</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ConvertRecoveryPointToSnapshotCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ConvertRecoveryPointToSnapshotCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ConvertRecoveryPointToSnapshotRequest
 *   recoveryPointId: "STRING_VALUE", // required
 *   snapshotName: "STRING_VALUE", // required
 *   retentionPeriod: Number("int"),
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ConvertRecoveryPointToSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // ConvertRecoveryPointToSnapshotResponse
 * //   snapshot: { // Snapshot
 * //     namespaceName: "STRING_VALUE",
 * //     namespaceArn: "STRING_VALUE",
 * //     snapshotName: "STRING_VALUE",
 * //     snapshotCreateTime: new Date("TIMESTAMP"),
 * //     adminUsername: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     kmsKeyId: "STRING_VALUE",
 * //     ownerAccount: "STRING_VALUE",
 * //     totalBackupSizeInMegaBytes: Number("double"),
 * //     actualIncrementalBackupSizeInMegaBytes: Number("double"),
 * //     backupProgressInMegaBytes: Number("double"),
 * //     currentBackupRateInMegaBytesPerSecond: Number("double"),
 * //     estimatedSecondsToCompletion: Number("long"),
 * //     elapsedTimeInSeconds: Number("long"),
 * //     snapshotRetentionPeriod: Number("int"),
 * //     snapshotRemainingDays: Number("int"),
 * //     snapshotRetentionStartTime: new Date("TIMESTAMP"),
 * //     snapshotArn: "STRING_VALUE",
 * //     accountsWithRestoreAccess: [ // AccountIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     accountsWithProvisionedRestoreAccess: [
 * //       "STRING_VALUE",
 * //     ],
 * //     adminPasswordSecretArn: "STRING_VALUE",
 * //     adminPasswordSecretKmsKeyId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ConvertRecoveryPointToSnapshotCommandInput - {@link ConvertRecoveryPointToSnapshotCommandInput}
 * @returns {@link ConvertRecoveryPointToSnapshotCommandOutput}
 * @see {@link ConvertRecoveryPointToSnapshotCommandInput} for command's `input` shape.
 * @see {@link ConvertRecoveryPointToSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service limit was exceeded.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request exceeded the number of tags allowed for a resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class ConvertRecoveryPointToSnapshotCommand extends $Command
  .classBuilder<
    ConvertRecoveryPointToSnapshotCommandInput,
    ConvertRecoveryPointToSnapshotCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "ConvertRecoveryPointToSnapshot", {})
  .n("RedshiftServerlessClient", "ConvertRecoveryPointToSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_ConvertRecoveryPointToSnapshotCommand)
  .de(de_ConvertRecoveryPointToSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConvertRecoveryPointToSnapshotRequest;
      output: ConvertRecoveryPointToSnapshotResponse;
    };
    sdk: {
      input: ConvertRecoveryPointToSnapshotCommandInput;
      output: ConvertRecoveryPointToSnapshotCommandOutput;
    };
  };
}

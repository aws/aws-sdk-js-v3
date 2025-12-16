// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateSnapshotRequest, UpdateSnapshotResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { UpdateSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSnapshotCommand}.
 */
export interface UpdateSnapshotCommandInput extends UpdateSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSnapshotCommand}.
 */
export interface UpdateSnapshotCommandOutput extends UpdateSnapshotResponse, __MetadataBearer {}

/**
 * <p>Updates a snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateSnapshotCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateSnapshotCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateSnapshotRequest
 *   snapshotName: "STRING_VALUE", // required
 *   retentionPeriod: Number("int"),
 * };
 * const command = new UpdateSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSnapshotResponse
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
 * @param UpdateSnapshotCommandInput - {@link UpdateSnapshotCommandInput}
 * @returns {@link UpdateSnapshotCommandOutput}
 * @see {@link UpdateSnapshotCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapshotCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class UpdateSnapshotCommand extends $Command
  .classBuilder<
    UpdateSnapshotCommandInput,
    UpdateSnapshotCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "UpdateSnapshot", {})
  .n("RedshiftServerlessClient", "UpdateSnapshotCommand")
  .sc(UpdateSnapshot$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSnapshotRequest;
      output: UpdateSnapshotResponse;
    };
    sdk: {
      input: UpdateSnapshotCommandInput;
      output: UpdateSnapshotCommandOutput;
    };
  };
}

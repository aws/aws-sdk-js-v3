// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetSnapshotRequest, GetSnapshotResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { GetSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSnapshotCommand}.
 */
export interface GetSnapshotCommandInput extends GetSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link GetSnapshotCommand}.
 */
export interface GetSnapshotCommandOutput extends GetSnapshotResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetSnapshotCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetSnapshotCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetSnapshotRequest
 *   snapshotName: "STRING_VALUE",
 *   ownerAccount: "STRING_VALUE",
 *   snapshotArn: "STRING_VALUE",
 * };
 * const command = new GetSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // GetSnapshotResponse
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
 * @param GetSnapshotCommandInput - {@link GetSnapshotCommandInput}
 * @returns {@link GetSnapshotCommandOutput}
 * @see {@link GetSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
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
export class GetSnapshotCommand extends $Command
  .classBuilder<
    GetSnapshotCommandInput,
    GetSnapshotCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "GetSnapshot", {})
  .n("RedshiftServerlessClient", "GetSnapshotCommand")
  .sc(GetSnapshot$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSnapshotRequest;
      output: GetSnapshotResponse;
    };
    sdk: {
      input: GetSnapshotCommandInput;
      output: GetSnapshotCommandOutput;
    };
  };
}

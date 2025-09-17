// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSnapshotsRequest, ListSnapshotsResponse } from "../models/models_0";
import { de_ListSnapshotsCommand, se_ListSnapshotsCommand } from "../protocols/Aws_json1_1";
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
 * The input for {@link ListSnapshotsCommand}.
 */
export interface ListSnapshotsCommandInput extends ListSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link ListSnapshotsCommand}.
 */
export interface ListSnapshotsCommandOutput extends ListSnapshotsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListSnapshotsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListSnapshotsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListSnapshotsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   namespaceName: "STRING_VALUE",
 *   namespaceArn: "STRING_VALUE",
 *   ownerAccount: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 * };
 * const command = new ListSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // ListSnapshotsResponse
 * //   nextToken: "STRING_VALUE",
 * //   snapshots: [ // SnapshotList
 * //     { // Snapshot
 * //       namespaceName: "STRING_VALUE",
 * //       namespaceArn: "STRING_VALUE",
 * //       snapshotName: "STRING_VALUE",
 * //       snapshotCreateTime: new Date("TIMESTAMP"),
 * //       adminUsername: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       kmsKeyId: "STRING_VALUE",
 * //       ownerAccount: "STRING_VALUE",
 * //       totalBackupSizeInMegaBytes: Number("double"),
 * //       actualIncrementalBackupSizeInMegaBytes: Number("double"),
 * //       backupProgressInMegaBytes: Number("double"),
 * //       currentBackupRateInMegaBytesPerSecond: Number("double"),
 * //       estimatedSecondsToCompletion: Number("long"),
 * //       elapsedTimeInSeconds: Number("long"),
 * //       snapshotRetentionPeriod: Number("int"),
 * //       snapshotRemainingDays: Number("int"),
 * //       snapshotRetentionStartTime: new Date("TIMESTAMP"),
 * //       snapshotArn: "STRING_VALUE",
 * //       accountsWithRestoreAccess: [ // AccountIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       accountsWithProvisionedRestoreAccess: [
 * //         "STRING_VALUE",
 * //       ],
 * //       adminPasswordSecretArn: "STRING_VALUE",
 * //       adminPasswordSecretKmsKeyId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSnapshotsCommandInput - {@link ListSnapshotsCommandInput}
 * @returns {@link ListSnapshotsCommandOutput}
 * @see {@link ListSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
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
export class ListSnapshotsCommand extends $Command
  .classBuilder<
    ListSnapshotsCommandInput,
    ListSnapshotsCommandOutput,
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
  .s("RedshiftServerless", "ListSnapshots", {})
  .n("RedshiftServerlessClient", "ListSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_ListSnapshotsCommand)
  .de(de_ListSnapshotsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSnapshotsRequest;
      output: ListSnapshotsResponse;
    };
    sdk: {
      input: ListSnapshotsCommandInput;
      output: ListSnapshotsCommandOutput;
    };
  };
}

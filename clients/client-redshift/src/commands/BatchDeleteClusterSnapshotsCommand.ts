// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteClusterSnapshotsRequest, BatchDeleteClusterSnapshotsResult } from "../models/models_0";
import { de_BatchDeleteClusterSnapshotsCommand, se_BatchDeleteClusterSnapshotsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteClusterSnapshotsCommand}.
 */
export interface BatchDeleteClusterSnapshotsCommandInput extends BatchDeleteClusterSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteClusterSnapshotsCommand}.
 */
export interface BatchDeleteClusterSnapshotsCommandOutput extends BatchDeleteClusterSnapshotsResult, __MetadataBearer {}

/**
 * <p>Deletes a set of cluster snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, BatchDeleteClusterSnapshotsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, BatchDeleteClusterSnapshotsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // BatchDeleteClusterSnapshotsRequest
 *   Identifiers: [ // DeleteClusterSnapshotMessageList // required
 *     { // DeleteClusterSnapshotMessage
 *       SnapshotIdentifier: "STRING_VALUE", // required
 *       SnapshotClusterIdentifier: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchDeleteClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteClusterSnapshotsResult
 * //   Resources: [ // SnapshotIdentifierList
 * //     "STRING_VALUE",
 * //   ],
 * //   Errors: [ // BatchSnapshotOperationErrorList
 * //     { // SnapshotErrorMessage
 * //       SnapshotIdentifier: "STRING_VALUE",
 * //       SnapshotClusterIdentifier: "STRING_VALUE",
 * //       FailureCode: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteClusterSnapshotsCommandInput - {@link BatchDeleteClusterSnapshotsCommandInput}
 * @returns {@link BatchDeleteClusterSnapshotsCommandOutput}
 * @see {@link BatchDeleteClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link BatchDeleteRequestSizeExceededFault} (client fault)
 *  <p>The maximum number for a batch delete of snapshots has been reached. The limit is
 *             100. </p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class BatchDeleteClusterSnapshotsCommand extends $Command
  .classBuilder<
    BatchDeleteClusterSnapshotsCommandInput,
    BatchDeleteClusterSnapshotsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "BatchDeleteClusterSnapshots", {})
  .n("RedshiftClient", "BatchDeleteClusterSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteClusterSnapshotsCommand)
  .de(de_BatchDeleteClusterSnapshotsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteClusterSnapshotsRequest;
      output: BatchDeleteClusterSnapshotsResult;
    };
    sdk: {
      input: BatchDeleteClusterSnapshotsCommandInput;
      output: BatchDeleteClusterSnapshotsCommandOutput;
    };
  };
}

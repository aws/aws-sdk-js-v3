// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchModifyClusterSnapshotsMessage, BatchModifyClusterSnapshotsOutputMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { BatchModifyClusterSnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchModifyClusterSnapshotsCommand}.
 */
export interface BatchModifyClusterSnapshotsCommandInput extends BatchModifyClusterSnapshotsMessage {}
/**
 * @public
 *
 * The output of {@link BatchModifyClusterSnapshotsCommand}.
 */
export interface BatchModifyClusterSnapshotsCommandOutput
  extends BatchModifyClusterSnapshotsOutputMessage,
    __MetadataBearer {}

/**
 * <p>Modifies the settings for a set of cluster snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, BatchModifyClusterSnapshotsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, BatchModifyClusterSnapshotsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // BatchModifyClusterSnapshotsMessage
 *   SnapshotIdentifierList: [ // SnapshotIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 *   ManualSnapshotRetentionPeriod: Number("int"),
 *   Force: true || false,
 * };
 * const command = new BatchModifyClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // BatchModifyClusterSnapshotsOutputMessage
 * //   Resources: [ // SnapshotIdentifierList
 * //     "STRING_VALUE",
 * //   ],
 * //   Errors: [ // BatchSnapshotOperationErrors
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
 * @param BatchModifyClusterSnapshotsCommandInput - {@link BatchModifyClusterSnapshotsCommandInput}
 * @returns {@link BatchModifyClusterSnapshotsCommandOutput}
 * @see {@link BatchModifyClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link BatchModifyClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link BatchModifyClusterSnapshotsLimitExceededFault} (client fault)
 *  <p>The maximum number for snapshot identifiers has been reached. The limit is 100.
 *         </p>
 *
 * @throws {@link InvalidRetentionPeriodFault} (client fault)
 *  <p>The retention period specified is either in the past or is not a valid value.</p>
 *          <p>The value must be either -1 or an integer between 1 and 3,653.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class BatchModifyClusterSnapshotsCommand extends $Command
  .classBuilder<
    BatchModifyClusterSnapshotsCommandInput,
    BatchModifyClusterSnapshotsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "BatchModifyClusterSnapshots", {})
  .n("RedshiftClient", "BatchModifyClusterSnapshotsCommand")
  .sc(BatchModifyClusterSnapshots$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchModifyClusterSnapshotsMessage;
      output: BatchModifyClusterSnapshotsOutputMessage;
    };
    sdk: {
      input: BatchModifyClusterSnapshotsCommandInput;
      output: BatchModifyClusterSnapshotsCommandOutput;
    };
  };
}

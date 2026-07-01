// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeleteClusterSnapshotsRequest, BatchDeleteClusterSnapshotsResult } from "../models/models_0";
import { BatchDeleteClusterSnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
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
export class BatchDeleteClusterSnapshotsCommand extends command<BatchDeleteClusterSnapshotsCommandInput, BatchDeleteClusterSnapshotsCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteClusterSnapshots",
  BatchDeleteClusterSnapshots$
) {
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

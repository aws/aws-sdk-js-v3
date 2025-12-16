// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RestoreTableFromClusterSnapshotMessage, RestoreTableFromClusterSnapshotResult } from "../models/models_1";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RestoreTableFromClusterSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreTableFromClusterSnapshotCommand}.
 */
export interface RestoreTableFromClusterSnapshotCommandInput extends RestoreTableFromClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link RestoreTableFromClusterSnapshotCommand}.
 */
export interface RestoreTableFromClusterSnapshotCommandOutput
  extends RestoreTableFromClusterSnapshotResult,
    __MetadataBearer {}

/**
 * <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must
 *             create the new table within the Amazon Redshift cluster that the snapshot was taken
 *             from.</p>
 *          <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with
 *             the same name as an existing table in an Amazon Redshift cluster. That is, you cannot
 *             overwrite an existing table in a cluster with a restored table. If you want to replace
 *             your original table with a new, restored table, then rename or drop your original table
 *             before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your
 *             original table, then you can pass the original name of the table as the
 *                 <code>NewTableName</code> parameter value in the call to
 *                 <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original
 *             table with the table created from the snapshot.</p>
 *          <p>You can't use this operation to restore tables with
 *             <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RestoreTableFromClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RestoreTableFromClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // RestoreTableFromClusterSnapshotMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   SnapshotIdentifier: "STRING_VALUE", // required
 *   SourceDatabaseName: "STRING_VALUE", // required
 *   SourceSchemaName: "STRING_VALUE",
 *   SourceTableName: "STRING_VALUE", // required
 *   TargetDatabaseName: "STRING_VALUE",
 *   TargetSchemaName: "STRING_VALUE",
 *   NewTableName: "STRING_VALUE", // required
 *   EnableCaseSensitiveIdentifier: true || false,
 * };
 * const command = new RestoreTableFromClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // RestoreTableFromClusterSnapshotResult
 * //   TableRestoreStatus: { // TableRestoreStatus
 * //     TableRestoreRequestId: "STRING_VALUE",
 * //     Status: "PENDING" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "CANCELED",
 * //     Message: "STRING_VALUE",
 * //     RequestTime: new Date("TIMESTAMP"),
 * //     ProgressInMegaBytes: Number("long"),
 * //     TotalDataInMegaBytes: Number("long"),
 * //     ClusterIdentifier: "STRING_VALUE",
 * //     SnapshotIdentifier: "STRING_VALUE",
 * //     SourceDatabaseName: "STRING_VALUE",
 * //     SourceSchemaName: "STRING_VALUE",
 * //     SourceTableName: "STRING_VALUE",
 * //     TargetDatabaseName: "STRING_VALUE",
 * //     TargetSchemaName: "STRING_VALUE",
 * //     NewTableName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreTableFromClusterSnapshotCommandInput - {@link RestoreTableFromClusterSnapshotCommandInput}
 * @returns {@link RestoreTableFromClusterSnapshotCommandOutput}
 * @see {@link RestoreTableFromClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreTableFromClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *  <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 *
 * @throws {@link InProgressTableRestoreQuotaExceededFault} (client fault)
 *  <p>You have exceeded the allowed number of table restore requests. Wait for your
 *             current table restore requests to complete before making a new request.</p>
 *
 * @throws {@link InvalidClusterSnapshotStateFault} (client fault)
 *  <p>The specified cluster snapshot is not in the <code>available</code> state, or other
 *             accounts are authorized to access the snapshot. </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidTableRestoreArgumentFault} (client fault)
 *  <p>The value specified for the <code>sourceDatabaseName</code>,
 *                 <code>sourceSchemaName</code>, or <code>sourceTableName</code> parameter, or a
 *             combination of these, doesn't exist in the snapshot.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class RestoreTableFromClusterSnapshotCommand extends $Command
  .classBuilder<
    RestoreTableFromClusterSnapshotCommandInput,
    RestoreTableFromClusterSnapshotCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "RestoreTableFromClusterSnapshot", {})
  .n("RedshiftClient", "RestoreTableFromClusterSnapshotCommand")
  .sc(RestoreTableFromClusterSnapshot$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreTableFromClusterSnapshotMessage;
      output: RestoreTableFromClusterSnapshotResult;
    };
    sdk: {
      input: RestoreTableFromClusterSnapshotCommandInput;
      output: RestoreTableFromClusterSnapshotCommandOutput;
    };
  };
}

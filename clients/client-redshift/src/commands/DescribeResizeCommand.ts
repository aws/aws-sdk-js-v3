// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ResizeProgressMessage } from "../models/models_0";
import { DescribeResizeMessage } from "../models/models_1";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeResize } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResizeCommand}.
 */
export interface DescribeResizeCommandInput extends DescribeResizeMessage {}
/**
 * @public
 *
 * The output of {@link DescribeResizeCommand}.
 */
export interface DescribeResizeCommandOutput extends ResizeProgressMessage, __MetadataBearer {}

/**
 * <p>Returns information about the last resize operation for the specified cluster. If
 *             no resize operation has ever been initiated for the specified cluster, a <code>HTTP
 *                 404</code> error is returned. If a resize operation was initiated and completed, the
 *             status of the resize remains as <code>SUCCEEDED</code> until the next resize. </p>
 *          <p>A resize operation can be requested using <a>ModifyCluster</a> and
 *             specifying a different number or type of nodes for the cluster. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeResizeCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeResizeCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeResizeMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeResizeCommand(input);
 * const response = await client.send(command);
 * // { // ResizeProgressMessage
 * //   TargetNodeType: "STRING_VALUE",
 * //   TargetNumberOfNodes: Number("int"),
 * //   TargetClusterType: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   ImportTablesCompleted: [ // ImportTablesCompleted
 * //     "STRING_VALUE",
 * //   ],
 * //   ImportTablesInProgress: [ // ImportTablesInProgress
 * //     "STRING_VALUE",
 * //   ],
 * //   ImportTablesNotStarted: [ // ImportTablesNotStarted
 * //     "STRING_VALUE",
 * //   ],
 * //   AvgResizeRateInMegaBytesPerSecond: Number("double"),
 * //   TotalResizeDataInMegaBytes: Number("long"),
 * //   ProgressInMegaBytes: Number("long"),
 * //   ElapsedTimeInSeconds: Number("long"),
 * //   EstimatedTimeToCompletionInSeconds: Number("long"),
 * //   ResizeType: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   TargetEncryptionType: "STRING_VALUE",
 * //   DataTransferProgressPercent: Number("double"),
 * // };
 *
 * ```
 *
 * @param DescribeResizeCommandInput - {@link DescribeResizeCommandInput}
 * @returns {@link DescribeResizeCommandOutput}
 * @see {@link DescribeResizeCommandInput} for command's `input` shape.
 * @see {@link DescribeResizeCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link ResizeNotFoundFault} (client fault)
 *  <p>A resize operation for the specified cluster is not found.</p>
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
export class DescribeResizeCommand extends $Command
  .classBuilder<
    DescribeResizeCommandInput,
    DescribeResizeCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeResize", {})
  .n("RedshiftClient", "DescribeResizeCommand")
  .sc(DescribeResize)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResizeMessage;
      output: ResizeProgressMessage;
    };
    sdk: {
      input: DescribeResizeCommandInput;
      output: DescribeResizeCommandOutput;
    };
  };
}

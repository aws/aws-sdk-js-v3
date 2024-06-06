// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNodeConfigurationOptionsMessage, NodeConfigurationOptionsMessage } from "../models/models_1";
import {
  de_DescribeNodeConfigurationOptionsCommand,
  se_DescribeNodeConfigurationOptionsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNodeConfigurationOptionsCommand}.
 */
export interface DescribeNodeConfigurationOptionsCommandInput extends DescribeNodeConfigurationOptionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeNodeConfigurationOptionsCommand}.
 */
export interface DescribeNodeConfigurationOptionsCommandOutput
  extends NodeConfigurationOptionsMessage,
    __MetadataBearer {}

/**
 * <p>Returns properties of possible node configurations such as node type, number of nodes, and
 *             disk usage for the specified action type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeNodeConfigurationOptionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeNodeConfigurationOptionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeNodeConfigurationOptionsMessage
 *   ActionType: "restore-cluster" || "recommend-node-config" || "resize-cluster", // required
 *   ClusterIdentifier: "STRING_VALUE",
 *   SnapshotIdentifier: "STRING_VALUE",
 *   SnapshotArn: "STRING_VALUE",
 *   OwnerAccount: "STRING_VALUE",
 *   Filters: [ // NodeConfigurationOptionsFilterList
 *     { // NodeConfigurationOptionsFilter
 *       Name: "NodeType" || "NumberOfNodes" || "EstimatedDiskUtilizationPercent" || "Mode",
 *       Operator: "eq" || "lt" || "gt" || "le" || "ge" || "in" || "between",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeNodeConfigurationOptionsCommand(input);
 * const response = await client.send(command);
 * // { // NodeConfigurationOptionsMessage
 * //   NodeConfigurationOptionList: [ // NodeConfigurationOptionList
 * //     { // NodeConfigurationOption
 * //       NodeType: "STRING_VALUE",
 * //       NumberOfNodes: Number("int"),
 * //       EstimatedDiskUtilizationPercent: Number("double"),
 * //       Mode: "standard" || "high-performance",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNodeConfigurationOptionsCommandInput - {@link DescribeNodeConfigurationOptionsCommandInput}
 * @returns {@link DescribeNodeConfigurationOptionsCommandOutput}
 * @see {@link DescribeNodeConfigurationOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeConfigurationOptionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AccessToSnapshotDeniedFault} (client fault)
 *  <p>The owner of the specified snapshot has not authorized your account to access the
 *             snapshot.</p>
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link ClusterSnapshotNotFoundFault} (client fault)
 *  <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 *
 * @throws {@link InvalidClusterSnapshotStateFault} (client fault)
 *  <p>The specified cluster snapshot is not in the <code>available</code> state, or other
 *             accounts are authorized to access the snapshot. </p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DescribeNodeConfigurationOptionsCommand extends $Command
  .classBuilder<
    DescribeNodeConfigurationOptionsCommandInput,
    DescribeNodeConfigurationOptionsCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeNodeConfigurationOptions", {})
  .n("RedshiftClient", "DescribeNodeConfigurationOptionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeNodeConfigurationOptionsCommand)
  .de(de_DescribeNodeConfigurationOptionsCommand)
  .build() {}

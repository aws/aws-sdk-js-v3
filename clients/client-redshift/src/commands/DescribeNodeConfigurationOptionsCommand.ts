// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeNodeConfigurationOptionsMessage, NodeConfigurationOptionsMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeNodeConfigurationOptions } from "../schemas/schemas_0";

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
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeNodeConfigurationOptions", {})
  .n("RedshiftClient", "DescribeNodeConfigurationOptionsCommand")
  .sc(DescribeNodeConfigurationOptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNodeConfigurationOptionsMessage;
      output: NodeConfigurationOptionsMessage;
    };
    sdk: {
      input: DescribeNodeConfigurationOptionsCommandInput;
      output: DescribeNodeConfigurationOptionsCommandOutput;
    };
  };
}

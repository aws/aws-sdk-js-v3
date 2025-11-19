// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDBProxyTargetGroupsRequest, DescribeDBProxyTargetGroupsResponse } from "../models/models_0";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBProxyTargetGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBProxyTargetGroupsCommand}.
 */
export interface DescribeDBProxyTargetGroupsCommandInput extends DescribeDBProxyTargetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDBProxyTargetGroupsCommand}.
 */
export interface DescribeDBProxyTargetGroupsCommandOutput
  extends DescribeDBProxyTargetGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about DB proxy target groups, represented by <code>DBProxyTargetGroup</code> data structures.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxyTargetGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBProxyTargetGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBProxyTargetGroupsRequest
 *   DBProxyName: "STRING_VALUE", // required
 *   TargetGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeDBProxyTargetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBProxyTargetGroupsResponse
 * //   TargetGroups: [ // TargetGroupList
 * //     { // DBProxyTargetGroup
 * //       DBProxyName: "STRING_VALUE",
 * //       TargetGroupName: "STRING_VALUE",
 * //       TargetGroupArn: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //       Status: "STRING_VALUE",
 * //       ConnectionPoolConfig: { // ConnectionPoolConfigurationInfo
 * //         MaxConnectionsPercent: Number("int"),
 * //         MaxIdleConnectionsPercent: Number("int"),
 * //         ConnectionBorrowTimeout: Number("int"),
 * //         SessionPinningFilters: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         InitQuery: "STRING_VALUE",
 * //       },
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       UpdatedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBProxyTargetGroupsCommandInput - {@link DescribeDBProxyTargetGroupsCommandInput}
 * @returns {@link DescribeDBProxyTargetGroupsCommandOutput}
 * @see {@link DescribeDBProxyTargetGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxyTargetGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyTargetGroupNotFoundFault} (client fault)
 *  <p>The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InvalidDBProxyStateFault} (client fault)
 *  <p>The requested operation can't be performed while the proxy is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class DescribeDBProxyTargetGroupsCommand extends $Command
  .classBuilder<
    DescribeDBProxyTargetGroupsCommandInput,
    DescribeDBProxyTargetGroupsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBProxyTargetGroups", {})
  .n("RDSClient", "DescribeDBProxyTargetGroupsCommand")
  .sc(DescribeDBProxyTargetGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBProxyTargetGroupsRequest;
      output: DescribeDBProxyTargetGroupsResponse;
    };
    sdk: {
      input: DescribeDBProxyTargetGroupsCommandInput;
      output: DescribeDBProxyTargetGroupsCommandOutput;
    };
  };
}

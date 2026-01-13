// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDBProxyTargetsRequest, DescribeDBProxyTargetsResponse } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBProxyTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBProxyTargetsCommand}.
 */
export interface DescribeDBProxyTargetsCommandInput extends DescribeDBProxyTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDBProxyTargetsCommand}.
 */
export interface DescribeDBProxyTargetsCommandOutput extends DescribeDBProxyTargetsResponse, __MetadataBearer {}

/**
 * <p>Returns information about <code>DBProxyTarget</code> objects. This API supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxyTargetsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBProxyTargetsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBProxyTargetsRequest
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
 * const command = new DescribeDBProxyTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBProxyTargetsResponse
 * //   Targets: [ // TargetList
 * //     { // DBProxyTarget
 * //       TargetArn: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //       TrackedClusterId: "STRING_VALUE",
 * //       RdsResourceId: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       Type: "RDS_INSTANCE" || "RDS_SERVERLESS_ENDPOINT" || "TRACKED_CLUSTER",
 * //       Role: "READ_WRITE" || "READ_ONLY" || "UNKNOWN",
 * //       TargetHealth: { // TargetHealth
 * //         State: "REGISTERING" || "AVAILABLE" || "UNAVAILABLE" || "UNUSED",
 * //         Reason: "UNREACHABLE" || "CONNECTION_FAILED" || "AUTH_FAILURE" || "PENDING_PROXY_CAPACITY" || "INVALID_REPLICATION_STATE" || "PROMOTED",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBProxyTargetsCommandInput - {@link DescribeDBProxyTargetsCommandInput}
 * @returns {@link DescribeDBProxyTargetsCommandOutput}
 * @see {@link DescribeDBProxyTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxyTargetsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyTargetGroupNotFoundFault} (client fault)
 *  <p>The specified target group isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyTargetNotFoundFault} (client fault)
 *  <p>The specified RDS DB instance or Aurora DB cluster isn't available for a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
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
export class DescribeDBProxyTargetsCommand extends $Command
  .classBuilder<
    DescribeDBProxyTargetsCommandInput,
    DescribeDBProxyTargetsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBProxyTargets", {})
  .n("RDSClient", "DescribeDBProxyTargetsCommand")
  .sc(DescribeDBProxyTargets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBProxyTargetsRequest;
      output: DescribeDBProxyTargetsResponse;
    };
    sdk: {
      input: DescribeDBProxyTargetsCommandInput;
      output: DescribeDBProxyTargetsCommandOutput;
    };
  };
}

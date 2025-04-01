// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRouteServerPropagationsRequest, GetRouteServerPropagationsResult } from "../models/models_6";
import { de_GetRouteServerPropagationsCommand, se_GetRouteServerPropagationsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRouteServerPropagationsCommand}.
 */
export interface GetRouteServerPropagationsCommandInput extends GetRouteServerPropagationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRouteServerPropagationsCommand}.
 */
export interface GetRouteServerPropagationsCommandOutput extends GetRouteServerPropagationsResult, __MetadataBearer {}

/**
 * <p>Gets information about the route propagations for the specified route server.</p>
 *          <p>When enabled, route server propagation installs the routes in the FIB on the route table you've specified. Route server supports IPv4 and IPv6 route propagation.</p>
 *          <p>Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads.</p>
 *          <p>Route server supports the follow route table types:</p>
 *          <ul>
 *             <li>
 *                <p>VPC route tables</p>
 *             </li>
 *             <li>
 *                <p>Subnet route tables</p>
 *             </li>
 *             <li>
 *                <p>Internet gateway route tables</p>
 *             </li>
 *          </ul>
 *          <p>Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html">Transit Gateway Connect</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetRouteServerPropagationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetRouteServerPropagationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetRouteServerPropagationsRequest
 *   RouteServerId: "STRING_VALUE", // required
 *   RouteTableId: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetRouteServerPropagationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRouteServerPropagationsResult
 * //   RouteServerPropagations: [ // RouteServerPropagationsList
 * //     { // RouteServerPropagation
 * //       RouteServerId: "STRING_VALUE",
 * //       RouteTableId: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRouteServerPropagationsCommandInput - {@link GetRouteServerPropagationsCommandInput}
 * @returns {@link GetRouteServerPropagationsCommandOutput}
 * @see {@link GetRouteServerPropagationsCommandInput} for command's `input` shape.
 * @see {@link GetRouteServerPropagationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetRouteServerPropagationsCommand extends $Command
  .classBuilder<
    GetRouteServerPropagationsCommandInput,
    GetRouteServerPropagationsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "GetRouteServerPropagations", {})
  .n("EC2Client", "GetRouteServerPropagationsCommand")
  .f(void 0, void 0)
  .ser(se_GetRouteServerPropagationsCommand)
  .de(de_GetRouteServerPropagationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRouteServerPropagationsRequest;
      output: GetRouteServerPropagationsResult;
    };
    sdk: {
      input: GetRouteServerPropagationsCommandInput;
      output: GetRouteServerPropagationsCommandOutput;
    };
  };
}

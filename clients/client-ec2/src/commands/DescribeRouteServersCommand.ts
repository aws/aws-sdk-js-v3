// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRouteServersRequest, DescribeRouteServersResult } from "../models/models_5";
import { DescribeRouteServers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeRouteServersCommand}.
 */
export interface DescribeRouteServersCommandInput extends DescribeRouteServersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRouteServersCommand}.
 */
export interface DescribeRouteServersCommandOutput extends DescribeRouteServersResult, __MetadataBearer {}

/**
 * Describes one or more route servers.
 *
 * Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature, VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads.
 *
 * Route server supports the follow route table types:
 *
 * - VPC route tables not associated with subnets
 * - Subnet route tables
 * - Internet gateway route tables
 *
 * Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use [Transit Gateway Connect](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html).
 *
 * For more information see [Dynamic routing in your VPC with VPC Route Server](https://docs.aws.amazon.com/vpc/latest/userguide/dynamic-routing-route-server.html) in the *Amazon VPC User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeRouteServersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeRouteServersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeRouteServersRequest
 *   RouteServerIds: [ // RouteServerIdsList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeRouteServersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRouteServersResult
 * //   RouteServers: [ // RouteServersList
 * //     { // RouteServer
 * //       RouteServerId: "STRING_VALUE",
 * //       AmazonSideAsn: Number("long"),
 * //       State: "pending" || "available" || "modifying" || "deleting" || "deleted",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PersistRoutesState: "enabling" || "enabled" || "resetting" || "disabling" || "disabled" || "modifying",
 * //       PersistRoutesDuration: Number("long"),
 * //       SnsNotificationsEnabled: true || false,
 * //       SnsTopicArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRouteServersCommandInput - {@link DescribeRouteServersCommandInput}
 * @returns {@link DescribeRouteServersCommandOutput}
 * @see {@link DescribeRouteServersCommandInput} for command's `input` shape.
 * @see {@link DescribeRouteServersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DescribeRouteServersCommand extends command<DescribeRouteServersCommandInput, DescribeRouteServersCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRouteServers",
  DescribeRouteServers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRouteServersRequest;
      output: DescribeRouteServersResult;
    };
    sdk: {
      input: DescribeRouteServersCommandInput;
      output: DescribeRouteServersCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteRouteServerRequest, DeleteRouteServerResult } from "../models/models_2";
import { DeleteRouteServer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRouteServerCommand}.
 */
export interface DeleteRouteServerCommandInput extends DeleteRouteServerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRouteServerCommand}.
 */
export interface DeleteRouteServerCommandOutput extends DeleteRouteServerResult, __MetadataBearer {}

/**
 * <p>Deletes the specified route server.</p>
 *          <p>Amazon VPC Route Server simplifies routing for traffic between workloads that are deployed within a VPC and its internet gateways. With this feature,
 * VPC Route Server dynamically updates VPC and internet gateway route tables with your preferred IPv4 or IPv6 routes to achieve routing fault tolerance for those workloads. This enables you to automatically reroute traffic within a VPC, which increases the manageability of VPC routing and interoperability with third-party workloads.</p>
 *          <p>Route server supports the follow route table types:</p>
 *          <ul>
 *             <li>
 *                <p>VPC route tables not associated with subnets</p>
 *             </li>
 *             <li>
 *                <p>Subnet route tables</p>
 *             </li>
 *             <li>
 *                <p>Internet gateway route tables</p>
 *             </li>
 *          </ul>
 *          <p>Route server does not support route tables associated with virtual private gateways. To propagate routes into a transit gateway route table, use <a href="https://docs.aws.amazon.com/vpc/latest/tgw/tgw-connect.html">Transit Gateway Connect</a>.</p>
 *          <p>For more information see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/dynamic-routing-route-server.html">Dynamic routing in your VPC with VPC Route Server</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteRouteServerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteRouteServerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteRouteServerRequest
 *   RouteServerId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteRouteServerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRouteServerResult
 * //   RouteServer: { // RouteServer
 * //     RouteServerId: "STRING_VALUE",
 * //     AmazonSideAsn: Number("long"),
 * //     State: "pending" || "available" || "modifying" || "deleting" || "deleted",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PersistRoutesState: "enabling" || "enabled" || "resetting" || "disabling" || "disabled" || "modifying",
 * //     PersistRoutesDuration: Number("long"),
 * //     SnsNotificationsEnabled: true || false,
 * //     SnsTopicArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteRouteServerCommandInput - {@link DeleteRouteServerCommandInput}
 * @returns {@link DeleteRouteServerCommandOutput}
 * @see {@link DeleteRouteServerCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteServerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteRouteServerCommand extends $Command
  .classBuilder<
    DeleteRouteServerCommandInput,
    DeleteRouteServerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteRouteServer", {})
  .n("EC2Client", "DeleteRouteServerCommand")
  .sc(DeleteRouteServer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRouteServerRequest;
      output: DeleteRouteServerResult;
    };
    sdk: {
      input: DeleteRouteServerCommandInput;
      output: DeleteRouteServerCommandOutput;
    };
  };
}

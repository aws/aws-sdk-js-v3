// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyRouteServerRequest, ModifyRouteServerResult } from "../models/models_7";
import { ModifyRouteServer } from "../schemas/schemas_137_Route";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyRouteServerCommand}.
 */
export interface ModifyRouteServerCommandInput extends ModifyRouteServerRequest {}
/**
 * @public
 *
 * The output of {@link ModifyRouteServerCommand}.
 */
export interface ModifyRouteServerCommandOutput extends ModifyRouteServerResult, __MetadataBearer {}

/**
 * <p>Modifies the configuration of an existing route server.</p>
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
 * import { EC2Client, ModifyRouteServerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyRouteServerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyRouteServerRequest
 *   RouteServerId: "STRING_VALUE", // required
 *   PersistRoutes: "enable" || "disable" || "reset",
 *   PersistRoutesDuration: Number("long"),
 *   SnsNotificationsEnabled: true || false,
 *   DryRun: true || false,
 * };
 * const command = new ModifyRouteServerCommand(input);
 * const response = await client.send(command);
 * // { // ModifyRouteServerResult
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
 * @param ModifyRouteServerCommandInput - {@link ModifyRouteServerCommandInput}
 * @returns {@link ModifyRouteServerCommandOutput}
 * @see {@link ModifyRouteServerCommandInput} for command's `input` shape.
 * @see {@link ModifyRouteServerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyRouteServerCommand extends $Command
  .classBuilder<
    ModifyRouteServerCommandInput,
    ModifyRouteServerCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyRouteServer", {})
  .n("EC2Client", "ModifyRouteServerCommand")
  .sc(ModifyRouteServer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyRouteServerRequest;
      output: ModifyRouteServerResult;
    };
    sdk: {
      input: ModifyRouteServerCommandInput;
      output: ModifyRouteServerCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AcceptVpcPeeringConnectionRequest, AcceptVpcPeeringConnectionResult } from "../models/models_0";
import { AcceptVpcPeeringConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptVpcPeeringConnectionCommand}.
 */
export interface AcceptVpcPeeringConnectionCommandInput extends AcceptVpcPeeringConnectionRequest {}
/**
 * @public
 *
 * The output of {@link AcceptVpcPeeringConnectionCommand}.
 */
export interface AcceptVpcPeeringConnectionCommandOutput extends AcceptVpcPeeringConnectionResult, __MetadataBearer {}

/**
 * <p>Accept a VPC peering connection request. To accept a request, the VPC peering connection must
 *       be in the <code>pending-acceptance</code> state, and you must be the owner of the peer VPC.
 *       Use <a>DescribeVpcPeeringConnections</a> to view your outstanding VPC
 *       peering connection requests.</p>
 *          <p>For an inter-Region VPC peering connection request, you must accept the VPC peering
 *       connection in the Region of the accepter VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AcceptVpcPeeringConnectionRequest
 *   DryRun: true || false,
 *   VpcPeeringConnectionId: "STRING_VALUE", // required
 * };
 * const command = new AcceptVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // { // AcceptVpcPeeringConnectionResult
 * //   VpcPeeringConnection: { // VpcPeeringConnection
 * //     AccepterVpcInfo: { // VpcPeeringConnectionVpcInfo
 * //       CidrBlock: "STRING_VALUE",
 * //       Ipv6CidrBlockSet: [ // Ipv6CidrBlockSet
 * //         { // Ipv6CidrBlock
 * //           Ipv6CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CidrBlockSet: [ // CidrBlockSet
 * //         { // CidrBlock
 * //           CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //       PeeringOptions: { // VpcPeeringConnectionOptionsDescription
 * //         AllowDnsResolutionFromRemoteVpc: true || false,
 * //         AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //         AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //       },
 * //       VpcId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     ExpirationTime: new Date("TIMESTAMP"),
 * //     RequesterVpcInfo: {
 * //       CidrBlock: "STRING_VALUE",
 * //       Ipv6CidrBlockSet: [
 * //         {
 * //           Ipv6CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CidrBlockSet: [
 * //         {
 * //           CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //       PeeringOptions: {
 * //         AllowDnsResolutionFromRemoteVpc: true || false,
 * //         AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //         AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //       },
 * //       VpcId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     Status: { // VpcPeeringConnectionStateReason
 * //       Code: "initiating-request" || "pending-acceptance" || "active" || "deleted" || "rejected" || "failed" || "expired" || "provisioning" || "deleting",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VpcPeeringConnectionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptVpcPeeringConnectionCommandInput - {@link AcceptVpcPeeringConnectionCommandInput}
 * @returns {@link AcceptVpcPeeringConnectionCommandOutput}
 * @see {@link AcceptVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AcceptVpcPeeringConnectionCommand extends $Command
  .classBuilder<
    AcceptVpcPeeringConnectionCommandInput,
    AcceptVpcPeeringConnectionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "AcceptVpcPeeringConnection", {})
  .n("EC2Client", "AcceptVpcPeeringConnectionCommand")
  .sc(AcceptVpcPeeringConnection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptVpcPeeringConnectionRequest;
      output: AcceptVpcPeeringConnectionResult;
    };
    sdk: {
      input: AcceptVpcPeeringConnectionCommandInput;
      output: AcceptVpcPeeringConnectionCommandOutput;
    };
  };
}

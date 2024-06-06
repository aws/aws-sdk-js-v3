// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateTransitGatewayMulticastDomainRequest,
  AssociateTransitGatewayMulticastDomainResult,
} from "../models/models_0";
import {
  de_AssociateTransitGatewayMulticastDomainCommand,
  se_AssociateTransitGatewayMulticastDomainCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateTransitGatewayMulticastDomainCommand}.
 */
export interface AssociateTransitGatewayMulticastDomainCommandInput
  extends AssociateTransitGatewayMulticastDomainRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTransitGatewayMulticastDomainCommand}.
 */
export interface AssociateTransitGatewayMulticastDomainCommandOutput
  extends AssociateTransitGatewayMulticastDomainResult,
    __MetadataBearer {}

/**
 * <p>Associates the specified subnets and transit gateway attachments with the specified transit gateway multicast domain.</p>
 *          <p>The transit gateway attachment must be in the available state before you can add a resource. Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeTransitGatewayAttachments.html">DescribeTransitGatewayAttachments</a>
 *             to see the state of the attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTransitGatewayMulticastDomainCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTransitGatewayMulticastDomainCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateTransitGatewayMulticastDomainRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   SubnetIds: [ // TransitGatewaySubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new AssociateTransitGatewayMulticastDomainCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTransitGatewayMulticastDomainResult
 * //   Associations: { // TransitGatewayMulticastDomainAssociations
 * //     TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //     ResourceOwnerId: "STRING_VALUE",
 * //     Subnets: [ // SubnetAssociationList
 * //       { // SubnetAssociation
 * //         SubnetId: "STRING_VALUE",
 * //         State: "pendingAcceptance" || "associating" || "associated" || "disassociating" || "disassociated" || "rejected" || "failed",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateTransitGatewayMulticastDomainCommandInput - {@link AssociateTransitGatewayMulticastDomainCommandInput}
 * @returns {@link AssociateTransitGatewayMulticastDomainCommandOutput}
 * @see {@link AssociateTransitGatewayMulticastDomainCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayMulticastDomainCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class AssociateTransitGatewayMulticastDomainCommand extends $Command
  .classBuilder<
    AssociateTransitGatewayMulticastDomainCommandInput,
    AssociateTransitGatewayMulticastDomainCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "AssociateTransitGatewayMulticastDomain", {})
  .n("EC2Client", "AssociateTransitGatewayMulticastDomainCommand")
  .f(void 0, void 0)
  .ser(se_AssociateTransitGatewayMulticastDomainCommand)
  .de(de_AssociateTransitGatewayMulticastDomainCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateTransitGatewayMulticastDomainRequest,
  DisassociateTransitGatewayMulticastDomainResult,
} from "../models/models_6";
import {
  de_DisassociateTransitGatewayMulticastDomainCommand,
  se_DisassociateTransitGatewayMulticastDomainCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateTransitGatewayMulticastDomainCommand}.
 */
export interface DisassociateTransitGatewayMulticastDomainCommandInput
  extends DisassociateTransitGatewayMulticastDomainRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTransitGatewayMulticastDomainCommand}.
 */
export interface DisassociateTransitGatewayMulticastDomainCommandOutput
  extends DisassociateTransitGatewayMulticastDomainResult,
    __MetadataBearer {}

/**
 * <p>Disassociates the specified subnets from the transit gateway multicast domain. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTransitGatewayMulticastDomainCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTransitGatewayMulticastDomainCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateTransitGatewayMulticastDomainRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   SubnetIds: [ // TransitGatewaySubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DisassociateTransitGatewayMulticastDomainCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateTransitGatewayMulticastDomainResult
 * //   Associations: { // TransitGatewayMulticastDomainAssociations
 * //     TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
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
 * @param DisassociateTransitGatewayMulticastDomainCommandInput - {@link DisassociateTransitGatewayMulticastDomainCommandInput}
 * @returns {@link DisassociateTransitGatewayMulticastDomainCommandOutput}
 * @see {@link DisassociateTransitGatewayMulticastDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayMulticastDomainCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateTransitGatewayMulticastDomainCommand extends $Command
  .classBuilder<
    DisassociateTransitGatewayMulticastDomainCommandInput,
    DisassociateTransitGatewayMulticastDomainCommandOutput,
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
  .s("AmazonEC2", "DisassociateTransitGatewayMulticastDomain", {})
  .n("EC2Client", "DisassociateTransitGatewayMulticastDomainCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateTransitGatewayMulticastDomainCommand)
  .de(de_DisassociateTransitGatewayMulticastDomainCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateTransitGatewayMulticastDomainRequest;
      output: DisassociateTransitGatewayMulticastDomainResult;
    };
    sdk: {
      input: DisassociateTransitGatewayMulticastDomainCommandInput;
      output: DisassociateTransitGatewayMulticastDomainCommandOutput;
    };
  };
}

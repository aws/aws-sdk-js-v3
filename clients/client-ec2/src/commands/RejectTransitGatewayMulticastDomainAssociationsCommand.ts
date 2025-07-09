// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  RejectTransitGatewayMulticastDomainAssociationsRequest,
  RejectTransitGatewayMulticastDomainAssociationsResult,
} from "../models/models_8";
import {
  de_RejectTransitGatewayMulticastDomainAssociationsCommand,
  se_RejectTransitGatewayMulticastDomainAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectTransitGatewayMulticastDomainAssociationsCommand}.
 */
export interface RejectTransitGatewayMulticastDomainAssociationsCommandInput
  extends RejectTransitGatewayMulticastDomainAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link RejectTransitGatewayMulticastDomainAssociationsCommand}.
 */
export interface RejectTransitGatewayMulticastDomainAssociationsCommandOutput
  extends RejectTransitGatewayMulticastDomainAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Rejects a request to associate cross-account subnets with a transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayMulticastDomainAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayMulticastDomainAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RejectTransitGatewayMulticastDomainAssociationsRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE",
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   SubnetIds: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new RejectTransitGatewayMulticastDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // RejectTransitGatewayMulticastDomainAssociationsResult
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
 * @param RejectTransitGatewayMulticastDomainAssociationsCommandInput - {@link RejectTransitGatewayMulticastDomainAssociationsCommandInput}
 * @returns {@link RejectTransitGatewayMulticastDomainAssociationsCommandOutput}
 * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RejectTransitGatewayMulticastDomainAssociationsCommand extends $Command
  .classBuilder<
    RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    RejectTransitGatewayMulticastDomainAssociationsCommandOutput,
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
  .s("AmazonEC2", "RejectTransitGatewayMulticastDomainAssociations", {})
  .n("EC2Client", "RejectTransitGatewayMulticastDomainAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_RejectTransitGatewayMulticastDomainAssociationsCommand)
  .de(de_RejectTransitGatewayMulticastDomainAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectTransitGatewayMulticastDomainAssociationsRequest;
      output: RejectTransitGatewayMulticastDomainAssociationsResult;
    };
    sdk: {
      input: RejectTransitGatewayMulticastDomainAssociationsCommandInput;
      output: RejectTransitGatewayMulticastDomainAssociationsCommandOutput;
    };
  };
}

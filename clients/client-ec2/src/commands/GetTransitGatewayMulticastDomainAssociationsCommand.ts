// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetTransitGatewayMulticastDomainAssociationsRequest,
  GetTransitGatewayMulticastDomainAssociationsResult,
} from "../models/models_6";
import { GetTransitGatewayMulticastDomainAssociations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayMulticastDomainAssociationsCommand}.
 */
export interface GetTransitGatewayMulticastDomainAssociationsCommandInput
  extends GetTransitGatewayMulticastDomainAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayMulticastDomainAssociationsCommand}.
 */
export interface GetTransitGatewayMulticastDomainAssociationsCommandOutput
  extends GetTransitGatewayMulticastDomainAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Gets information about the associations for the transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayMulticastDomainAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayMulticastDomainAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayMulticastDomainAssociationsRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetTransitGatewayMulticastDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayMulticastDomainAssociationsResult
 * //   MulticastDomainAssociations: [ // TransitGatewayMulticastDomainAssociationList
 * //     { // TransitGatewayMulticastDomainAssociation
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       Subnet: { // SubnetAssociation
 * //         SubnetId: "STRING_VALUE",
 * //         State: "pendingAcceptance" || "associating" || "associated" || "disassociating" || "disassociated" || "rejected" || "failed",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayMulticastDomainAssociationsCommandInput - {@link GetTransitGatewayMulticastDomainAssociationsCommandInput}
 * @returns {@link GetTransitGatewayMulticastDomainAssociationsCommandOutput}
 * @see {@link GetTransitGatewayMulticastDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayMulticastDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetTransitGatewayMulticastDomainAssociationsCommand extends $Command
  .classBuilder<
    GetTransitGatewayMulticastDomainAssociationsCommandInput,
    GetTransitGatewayMulticastDomainAssociationsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetTransitGatewayMulticastDomainAssociations", {})
  .n("EC2Client", "GetTransitGatewayMulticastDomainAssociationsCommand")
  .sc(GetTransitGatewayMulticastDomainAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTransitGatewayMulticastDomainAssociationsRequest;
      output: GetTransitGatewayMulticastDomainAssociationsResult;
    };
    sdk: {
      input: GetTransitGatewayMulticastDomainAssociationsCommandInput;
      output: GetTransitGatewayMulticastDomainAssociationsCommandOutput;
    };
  };
}

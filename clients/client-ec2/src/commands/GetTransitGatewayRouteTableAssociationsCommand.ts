// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetTransitGatewayRouteTableAssociationsRequest,
  GetTransitGatewayRouteTableAssociationsResult,
} from "../models/models_6";
import {
  de_GetTransitGatewayRouteTableAssociationsCommand,
  se_GetTransitGatewayRouteTableAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayRouteTableAssociationsCommand}.
 */
export interface GetTransitGatewayRouteTableAssociationsCommandInput
  extends GetTransitGatewayRouteTableAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayRouteTableAssociationsCommand}.
 */
export interface GetTransitGatewayRouteTableAssociationsCommandOutput
  extends GetTransitGatewayRouteTableAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Gets information about the associations for the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayRouteTableAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayRouteTableAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayRouteTableAssociationsRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
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
 * const command = new GetTransitGatewayRouteTableAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayRouteTableAssociationsResult
 * //   Associations: [ // TransitGatewayRouteTableAssociationList
 * //     { // TransitGatewayRouteTableAssociation
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //       State: "associating" || "associated" || "disassociating" || "disassociated",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayRouteTableAssociationsCommandInput - {@link GetTransitGatewayRouteTableAssociationsCommandInput}
 * @returns {@link GetTransitGatewayRouteTableAssociationsCommandOutput}
 * @see {@link GetTransitGatewayRouteTableAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayRouteTableAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetTransitGatewayRouteTableAssociationsCommand extends $Command
  .classBuilder<
    GetTransitGatewayRouteTableAssociationsCommandInput,
    GetTransitGatewayRouteTableAssociationsCommandOutput,
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
  .s("AmazonEC2", "GetTransitGatewayRouteTableAssociations", {})
  .n("EC2Client", "GetTransitGatewayRouteTableAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_GetTransitGatewayRouteTableAssociationsCommand)
  .de(de_GetTransitGatewayRouteTableAssociationsCommand)
  .build() {}

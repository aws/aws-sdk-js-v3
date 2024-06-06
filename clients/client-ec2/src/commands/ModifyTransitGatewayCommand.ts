// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyTransitGatewayRequest, ModifyTransitGatewayResult } from "../models/models_6";
import { de_ModifyTransitGatewayCommand, se_ModifyTransitGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyTransitGatewayCommand}.
 */
export interface ModifyTransitGatewayCommandInput extends ModifyTransitGatewayRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTransitGatewayCommand}.
 */
export interface ModifyTransitGatewayCommandOutput extends ModifyTransitGatewayResult, __MetadataBearer {}

/**
 * <p>Modifies the specified transit gateway. When you modify a transit gateway, the modified options are applied to new transit gateway attachments only. Your existing transit gateway attachments are not modified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyTransitGatewayRequest
 *   TransitGatewayId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Options: { // ModifyTransitGatewayOptions
 *     AddTransitGatewayCidrBlocks: [ // TransitGatewayCidrBlockStringList
 *       "STRING_VALUE",
 *     ],
 *     RemoveTransitGatewayCidrBlocks: [
 *       "STRING_VALUE",
 *     ],
 *     VpnEcmpSupport: "enable" || "disable",
 *     DnsSupport: "enable" || "disable",
 *     SecurityGroupReferencingSupport: "enable" || "disable",
 *     AutoAcceptSharedAttachments: "enable" || "disable",
 *     DefaultRouteTableAssociation: "enable" || "disable",
 *     AssociationDefaultRouteTableId: "STRING_VALUE",
 *     DefaultRouteTablePropagation: "enable" || "disable",
 *     PropagationDefaultRouteTableId: "STRING_VALUE",
 *     AmazonSideAsn: Number("long"),
 *   },
 *   DryRun: true || false,
 * };
 * const command = new ModifyTransitGatewayCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTransitGatewayResult
 * //   TransitGateway: { // TransitGateway
 * //     TransitGatewayId: "STRING_VALUE",
 * //     TransitGatewayArn: "STRING_VALUE",
 * //     State: "pending" || "available" || "modifying" || "deleting" || "deleted",
 * //     OwnerId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Options: { // TransitGatewayOptions
 * //       AmazonSideAsn: Number("long"),
 * //       TransitGatewayCidrBlocks: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AutoAcceptSharedAttachments: "enable" || "disable",
 * //       DefaultRouteTableAssociation: "enable" || "disable",
 * //       AssociationDefaultRouteTableId: "STRING_VALUE",
 * //       DefaultRouteTablePropagation: "enable" || "disable",
 * //       PropagationDefaultRouteTableId: "STRING_VALUE",
 * //       VpnEcmpSupport: "enable" || "disable",
 * //       DnsSupport: "enable" || "disable",
 * //       SecurityGroupReferencingSupport: "enable" || "disable",
 * //       MulticastSupport: "enable" || "disable",
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyTransitGatewayCommandInput - {@link ModifyTransitGatewayCommandInput}
 * @returns {@link ModifyTransitGatewayCommandOutput}
 * @see {@link ModifyTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyTransitGatewayCommand extends $Command
  .classBuilder<
    ModifyTransitGatewayCommandInput,
    ModifyTransitGatewayCommandOutput,
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
  .s("AmazonEC2", "ModifyTransitGateway", {})
  .n("EC2Client", "ModifyTransitGatewayCommand")
  .f(void 0, void 0)
  .ser(se_ModifyTransitGatewayCommand)
  .de(de_ModifyTransitGatewayCommand)
  .build() {}

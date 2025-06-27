// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyTransitGatewayVpcAttachmentRequest, ModifyTransitGatewayVpcAttachmentResult } from "../models/models_7";
import {
  de_ModifyTransitGatewayVpcAttachmentCommand,
  se_ModifyTransitGatewayVpcAttachmentCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyTransitGatewayVpcAttachmentCommand}.
 */
export interface ModifyTransitGatewayVpcAttachmentCommandInput extends ModifyTransitGatewayVpcAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTransitGatewayVpcAttachmentCommand}.
 */
export interface ModifyTransitGatewayVpcAttachmentCommandOutput
  extends ModifyTransitGatewayVpcAttachmentResult,
    __MetadataBearer {}

/**
 * <p>Modifies the specified VPC attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyTransitGatewayVpcAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   AddSubnetIds: [ // TransitGatewaySubnetIdList
 *     "STRING_VALUE",
 *   ],
 *   RemoveSubnetIds: [
 *     "STRING_VALUE",
 *   ],
 *   Options: { // ModifyTransitGatewayVpcAttachmentRequestOptions
 *     DnsSupport: "enable" || "disable",
 *     SecurityGroupReferencingSupport: "enable" || "disable",
 *     Ipv6Support: "enable" || "disable",
 *     ApplianceModeSupport: "enable" || "disable",
 *   },
 *   DryRun: true || false,
 * };
 * const command = new ModifyTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTransitGatewayVpcAttachmentResult
 * //   TransitGatewayVpcAttachment: { // TransitGatewayVpcAttachment
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     VpcOwnerId: "STRING_VALUE",
 * //     State: "initiating" || "initiatingRequest" || "pendingAcceptance" || "rollingBack" || "pending" || "available" || "modifying" || "deleting" || "deleted" || "failed" || "rejected" || "rejecting" || "failing",
 * //     SubnetIds: [ // ValueStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Options: { // TransitGatewayVpcAttachmentOptions
 * //       DnsSupport: "enable" || "disable",
 * //       SecurityGroupReferencingSupport: "enable" || "disable",
 * //       Ipv6Support: "enable" || "disable",
 * //       ApplianceModeSupport: "enable" || "disable",
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
 * @param ModifyTransitGatewayVpcAttachmentCommandInput - {@link ModifyTransitGatewayVpcAttachmentCommandInput}
 * @returns {@link ModifyTransitGatewayVpcAttachmentCommandOutput}
 * @see {@link ModifyTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link ModifyTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyTransitGatewayVpcAttachmentCommand extends $Command
  .classBuilder<
    ModifyTransitGatewayVpcAttachmentCommandInput,
    ModifyTransitGatewayVpcAttachmentCommandOutput,
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
  .s("AmazonEC2", "ModifyTransitGatewayVpcAttachment", {})
  .n("EC2Client", "ModifyTransitGatewayVpcAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_ModifyTransitGatewayVpcAttachmentCommand)
  .de(de_ModifyTransitGatewayVpcAttachmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTransitGatewayVpcAttachmentRequest;
      output: ModifyTransitGatewayVpcAttachmentResult;
    };
    sdk: {
      input: ModifyTransitGatewayVpcAttachmentCommandInput;
      output: ModifyTransitGatewayVpcAttachmentCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayVpcAttachmentRequest, DeleteTransitGatewayVpcAttachmentResult } from "../models/models_3";
import {
  de_DeleteTransitGatewayVpcAttachmentCommand,
  se_DeleteTransitGatewayVpcAttachmentCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayVpcAttachmentCommand}.
 */
export interface DeleteTransitGatewayVpcAttachmentCommandInput extends DeleteTransitGatewayVpcAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayVpcAttachmentCommand}.
 */
export interface DeleteTransitGatewayVpcAttachmentCommandOutput
  extends DeleteTransitGatewayVpcAttachmentResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified VPC attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayVpcAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayVpcAttachmentResult
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
 * @param DeleteTransitGatewayVpcAttachmentCommandInput - {@link DeleteTransitGatewayVpcAttachmentCommandInput}
 * @returns {@link DeleteTransitGatewayVpcAttachmentCommandOutput}
 * @see {@link DeleteTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteTransitGatewayVpcAttachmentCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayVpcAttachmentCommandInput,
    DeleteTransitGatewayVpcAttachmentCommandOutput,
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
  .s("AmazonEC2", "DeleteTransitGatewayVpcAttachment", {})
  .n("EC2Client", "DeleteTransitGatewayVpcAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTransitGatewayVpcAttachmentCommand)
  .de(de_DeleteTransitGatewayVpcAttachmentCommand)
  .build() {}

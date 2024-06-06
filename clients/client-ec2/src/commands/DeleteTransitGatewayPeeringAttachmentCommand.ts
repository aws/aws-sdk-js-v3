// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DeleteTransitGatewayPeeringAttachmentRequest,
  DeleteTransitGatewayPeeringAttachmentResult,
} from "../models/models_3";
import {
  de_DeleteTransitGatewayPeeringAttachmentCommand,
  se_DeleteTransitGatewayPeeringAttachmentCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayPeeringAttachmentCommand}.
 */
export interface DeleteTransitGatewayPeeringAttachmentCommandInput
  extends DeleteTransitGatewayPeeringAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayPeeringAttachmentCommand}.
 */
export interface DeleteTransitGatewayPeeringAttachmentCommandOutput
  extends DeleteTransitGatewayPeeringAttachmentResult,
    __MetadataBearer {}

/**
 * <p>Deletes a transit gateway peering attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayPeeringAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayPeeringAttachmentResult
 * //   TransitGatewayPeeringAttachment: { // TransitGatewayPeeringAttachment
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     AccepterTransitGatewayAttachmentId: "STRING_VALUE",
 * //     RequesterTgwInfo: { // PeeringTgwInfo
 * //       TransitGatewayId: "STRING_VALUE",
 * //       CoreNetworkId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     AccepterTgwInfo: {
 * //       TransitGatewayId: "STRING_VALUE",
 * //       CoreNetworkId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     Options: { // TransitGatewayPeeringAttachmentOptions
 * //       DynamicRouting: "enable" || "disable",
 * //     },
 * //     Status: { // PeeringAttachmentStatus
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     State: "initiating" || "initiatingRequest" || "pendingAcceptance" || "rollingBack" || "pending" || "available" || "modifying" || "deleting" || "deleted" || "failed" || "rejected" || "rejecting" || "failing",
 * //     CreationTime: new Date("TIMESTAMP"),
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
 * @param DeleteTransitGatewayPeeringAttachmentCommandInput - {@link DeleteTransitGatewayPeeringAttachmentCommandInput}
 * @returns {@link DeleteTransitGatewayPeeringAttachmentCommandOutput}
 * @see {@link DeleteTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteTransitGatewayPeeringAttachmentCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayPeeringAttachmentCommandInput,
    DeleteTransitGatewayPeeringAttachmentCommandOutput,
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
  .s("AmazonEC2", "DeleteTransitGatewayPeeringAttachment", {})
  .n("EC2Client", "DeleteTransitGatewayPeeringAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTransitGatewayPeeringAttachmentCommand)
  .de(de_DeleteTransitGatewayPeeringAttachmentCommand)
  .build() {}

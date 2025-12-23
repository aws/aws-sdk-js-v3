// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  RejectTransitGatewayPeeringAttachmentRequest,
  RejectTransitGatewayPeeringAttachmentResult,
} from "../models/models_7";
import { RejectTransitGatewayPeeringAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectTransitGatewayPeeringAttachmentCommand}.
 */
export interface RejectTransitGatewayPeeringAttachmentCommandInput extends RejectTransitGatewayPeeringAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link RejectTransitGatewayPeeringAttachmentCommand}.
 */
export interface RejectTransitGatewayPeeringAttachmentCommandOutput extends RejectTransitGatewayPeeringAttachmentResult, __MetadataBearer {}

/**
 * <p>Rejects a transit gateway peering attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // RejectTransitGatewayPeeringAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new RejectTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // RejectTransitGatewayPeeringAttachmentResult
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
 * @param RejectTransitGatewayPeeringAttachmentCommandInput - {@link RejectTransitGatewayPeeringAttachmentCommandInput}
 * @returns {@link RejectTransitGatewayPeeringAttachmentCommandOutput}
 * @see {@link RejectTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RejectTransitGatewayPeeringAttachmentCommand extends $Command
  .classBuilder<
    RejectTransitGatewayPeeringAttachmentCommandInput,
    RejectTransitGatewayPeeringAttachmentCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "RejectTransitGatewayPeeringAttachment", {})
  .n("EC2Client", "RejectTransitGatewayPeeringAttachmentCommand")
  .sc(RejectTransitGatewayPeeringAttachment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectTransitGatewayPeeringAttachmentRequest;
      output: RejectTransitGatewayPeeringAttachmentResult;
    };
    sdk: {
      input: RejectTransitGatewayPeeringAttachmentCommandInput;
      output: RejectTransitGatewayPeeringAttachmentCommandOutput;
    };
  };
}

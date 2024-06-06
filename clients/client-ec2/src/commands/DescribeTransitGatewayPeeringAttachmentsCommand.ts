// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeTransitGatewayPeeringAttachmentsRequest,
  DescribeTransitGatewayPeeringAttachmentsResult,
} from "../models/models_5";
import {
  de_DescribeTransitGatewayPeeringAttachmentsCommand,
  se_DescribeTransitGatewayPeeringAttachmentsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayPeeringAttachmentsCommand}.
 */
export interface DescribeTransitGatewayPeeringAttachmentsCommandInput
  extends DescribeTransitGatewayPeeringAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayPeeringAttachmentsCommand}.
 */
export interface DescribeTransitGatewayPeeringAttachmentsCommandOutput
  extends DescribeTransitGatewayPeeringAttachmentsResult,
    __MetadataBearer {}

/**
 * <p>Describes your transit gateway peering attachments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayPeeringAttachmentsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayPeeringAttachmentsRequest
 *   TransitGatewayAttachmentIds: [ // TransitGatewayAttachmentIdStringList
 *     "STRING_VALUE",
 *   ],
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
 * const command = new DescribeTransitGatewayPeeringAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayPeeringAttachmentsResult
 * //   TransitGatewayPeeringAttachments: [ // TransitGatewayPeeringAttachmentList
 * //     { // TransitGatewayPeeringAttachment
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       AccepterTransitGatewayAttachmentId: "STRING_VALUE",
 * //       RequesterTgwInfo: { // PeeringTgwInfo
 * //         TransitGatewayId: "STRING_VALUE",
 * //         CoreNetworkId: "STRING_VALUE",
 * //         OwnerId: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
 * //       AccepterTgwInfo: {
 * //         TransitGatewayId: "STRING_VALUE",
 * //         CoreNetworkId: "STRING_VALUE",
 * //         OwnerId: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
 * //       Options: { // TransitGatewayPeeringAttachmentOptions
 * //         DynamicRouting: "enable" || "disable",
 * //       },
 * //       Status: { // PeeringAttachmentStatus
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       State: "initiating" || "initiatingRequest" || "pendingAcceptance" || "rollingBack" || "pending" || "available" || "modifying" || "deleting" || "deleted" || "failed" || "rejected" || "rejecting" || "failing",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTransitGatewayPeeringAttachmentsCommandInput - {@link DescribeTransitGatewayPeeringAttachmentsCommandInput}
 * @returns {@link DescribeTransitGatewayPeeringAttachmentsCommandOutput}
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayPeeringAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeTransitGatewayPeeringAttachmentsCommand extends $Command
  .classBuilder<
    DescribeTransitGatewayPeeringAttachmentsCommandInput,
    DescribeTransitGatewayPeeringAttachmentsCommandOutput,
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
  .s("AmazonEC2", "DescribeTransitGatewayPeeringAttachments", {})
  .n("EC2Client", "DescribeTransitGatewayPeeringAttachmentsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTransitGatewayPeeringAttachmentsCommand)
  .de(de_DescribeTransitGatewayPeeringAttachmentsCommand)
  .build() {}

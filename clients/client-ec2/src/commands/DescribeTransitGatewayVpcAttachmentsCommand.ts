// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeTransitGatewayVpcAttachmentsRequest,
  DescribeTransitGatewayVpcAttachmentsResult,
} from "../models/models_5";
import {
  de_DescribeTransitGatewayVpcAttachmentsCommand,
  se_DescribeTransitGatewayVpcAttachmentsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayVpcAttachmentsCommand}.
 */
export interface DescribeTransitGatewayVpcAttachmentsCommandInput extends DescribeTransitGatewayVpcAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayVpcAttachmentsCommand}.
 */
export interface DescribeTransitGatewayVpcAttachmentsCommandOutput
  extends DescribeTransitGatewayVpcAttachmentsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more VPC attachments. By default, all VPC attachments are described.
 *          Alternatively, you can filter the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayVpcAttachmentsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayVpcAttachmentsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayVpcAttachmentsRequest
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
 * const command = new DescribeTransitGatewayVpcAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayVpcAttachmentsResult
 * //   TransitGatewayVpcAttachments: [ // TransitGatewayVpcAttachmentList
 * //     { // TransitGatewayVpcAttachment
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       VpcOwnerId: "STRING_VALUE",
 * //       State: "initiating" || "initiatingRequest" || "pendingAcceptance" || "rollingBack" || "pending" || "available" || "modifying" || "deleting" || "deleted" || "failed" || "rejected" || "rejecting" || "failing",
 * //       SubnetIds: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Options: { // TransitGatewayVpcAttachmentOptions
 * //         DnsSupport: "enable" || "disable",
 * //         SecurityGroupReferencingSupport: "enable" || "disable",
 * //         Ipv6Support: "enable" || "disable",
 * //         ApplianceModeSupport: "enable" || "disable",
 * //       },
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
 * @param DescribeTransitGatewayVpcAttachmentsCommandInput - {@link DescribeTransitGatewayVpcAttachmentsCommandInput}
 * @returns {@link DescribeTransitGatewayVpcAttachmentsCommandOutput}
 * @see {@link DescribeTransitGatewayVpcAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayVpcAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeTransitGatewayVpcAttachmentsCommand extends $Command
  .classBuilder<
    DescribeTransitGatewayVpcAttachmentsCommandInput,
    DescribeTransitGatewayVpcAttachmentsCommandOutput,
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
  .s("AmazonEC2", "DescribeTransitGatewayVpcAttachments", {})
  .n("EC2Client", "DescribeTransitGatewayVpcAttachmentsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTransitGatewayVpcAttachmentsCommand)
  .de(de_DescribeTransitGatewayVpcAttachmentsCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeTransitGatewayRouteTableAnnouncementsRequest,
  DescribeTransitGatewayRouteTableAnnouncementsResult,
} from "../models/models_5";
import {
  de_DescribeTransitGatewayRouteTableAnnouncementsCommand,
  se_DescribeTransitGatewayRouteTableAnnouncementsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayRouteTableAnnouncementsCommand}.
 */
export interface DescribeTransitGatewayRouteTableAnnouncementsCommandInput
  extends DescribeTransitGatewayRouteTableAnnouncementsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayRouteTableAnnouncementsCommand}.
 */
export interface DescribeTransitGatewayRouteTableAnnouncementsCommandOutput
  extends DescribeTransitGatewayRouteTableAnnouncementsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more transit gateway route table advertisements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayRouteTableAnnouncementsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayRouteTableAnnouncementsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayRouteTableAnnouncementsRequest
 *   TransitGatewayRouteTableAnnouncementIds: [ // TransitGatewayRouteTableAnnouncementIdStringList
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
 * const command = new DescribeTransitGatewayRouteTableAnnouncementsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayRouteTableAnnouncementsResult
 * //   TransitGatewayRouteTableAnnouncements: [ // TransitGatewayRouteTableAnnouncementList
 * //     { // TransitGatewayRouteTableAnnouncement
 * //       TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       CoreNetworkId: "STRING_VALUE",
 * //       PeerTransitGatewayId: "STRING_VALUE",
 * //       PeerCoreNetworkId: "STRING_VALUE",
 * //       PeeringAttachmentId: "STRING_VALUE",
 * //       AnnouncementDirection: "outgoing" || "incoming",
 * //       TransitGatewayRouteTableId: "STRING_VALUE",
 * //       State: "available" || "pending" || "failing" || "failed" || "deleting" || "deleted",
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
 * @param DescribeTransitGatewayRouteTableAnnouncementsCommandInput - {@link DescribeTransitGatewayRouteTableAnnouncementsCommandInput}
 * @returns {@link DescribeTransitGatewayRouteTableAnnouncementsCommandOutput}
 * @see {@link DescribeTransitGatewayRouteTableAnnouncementsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayRouteTableAnnouncementsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeTransitGatewayRouteTableAnnouncementsCommand extends $Command
  .classBuilder<
    DescribeTransitGatewayRouteTableAnnouncementsCommandInput,
    DescribeTransitGatewayRouteTableAnnouncementsCommandOutput,
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
  .s("AmazonEC2", "DescribeTransitGatewayRouteTableAnnouncements", {})
  .n("EC2Client", "DescribeTransitGatewayRouteTableAnnouncementsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTransitGatewayRouteTableAnnouncementsCommand)
  .de(de_DescribeTransitGatewayRouteTableAnnouncementsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTransitGatewayRouteTableAnnouncementsRequest;
      output: DescribeTransitGatewayRouteTableAnnouncementsResult;
    };
    sdk: {
      input: DescribeTransitGatewayRouteTableAnnouncementsCommandInput;
      output: DescribeTransitGatewayRouteTableAnnouncementsCommandOutput;
    };
  };
}

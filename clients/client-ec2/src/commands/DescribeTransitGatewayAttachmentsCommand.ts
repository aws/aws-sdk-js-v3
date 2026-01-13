// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeTransitGatewayAttachmentsRequest,
  DescribeTransitGatewayAttachmentsResult,
} from "../models/models_4";
import { DescribeTransitGatewayAttachments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayAttachmentsCommand}.
 */
export interface DescribeTransitGatewayAttachmentsCommandInput extends DescribeTransitGatewayAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayAttachmentsCommand}.
 */
export interface DescribeTransitGatewayAttachmentsCommandOutput extends DescribeTransitGatewayAttachmentsResult, __MetadataBearer {}

/**
 * <p>Describes one or more attachments between resources and transit gateways. By default, all attachments are described.
 *          Alternatively, you can filter the results by attachment ID, attachment state, resource ID, or resource owner.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayAttachmentsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayAttachmentsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayAttachmentsRequest
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
 * const command = new DescribeTransitGatewayAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayAttachmentsResult
 * //   TransitGatewayAttachments: [ // TransitGatewayAttachmentList
 * //     { // TransitGatewayAttachment
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       TransitGatewayOwnerId: "STRING_VALUE",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //       ResourceId: "STRING_VALUE",
 * //       State: "initiating" || "initiatingRequest" || "pendingAcceptance" || "rollingBack" || "pending" || "available" || "modifying" || "deleting" || "deleted" || "failed" || "rejected" || "rejecting" || "failing",
 * //       Association: { // TransitGatewayAttachmentAssociation
 * //         TransitGatewayRouteTableId: "STRING_VALUE",
 * //         State: "associating" || "associated" || "disassociating" || "disassociated",
 * //       },
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
 * @param DescribeTransitGatewayAttachmentsCommandInput - {@link DescribeTransitGatewayAttachmentsCommandInput}
 * @returns {@link DescribeTransitGatewayAttachmentsCommandOutput}
 * @see {@link DescribeTransitGatewayAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeTransitGatewayAttachmentsCommand extends $Command
  .classBuilder<
    DescribeTransitGatewayAttachmentsCommandInput,
    DescribeTransitGatewayAttachmentsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeTransitGatewayAttachments", {})
  .n("EC2Client", "DescribeTransitGatewayAttachmentsCommand")
  .sc(DescribeTransitGatewayAttachments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTransitGatewayAttachmentsRequest;
      output: DescribeTransitGatewayAttachmentsResult;
    };
    sdk: {
      input: DescribeTransitGatewayAttachmentsCommandInput;
      output: DescribeTransitGatewayAttachmentsCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeTransitGatewayNetworkFunctionAttachmentsRequest,
  DescribeTransitGatewayNetworkFunctionAttachmentsResult,
} from "../models/models_5";
import { DescribeTransitGatewayNetworkFunctionAttachments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTransitGatewayNetworkFunctionAttachmentsCommand}.
 */
export interface DescribeTransitGatewayNetworkFunctionAttachmentsCommandInput extends DescribeTransitGatewayNetworkFunctionAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTransitGatewayNetworkFunctionAttachmentsCommand}.
 */
export interface DescribeTransitGatewayNetworkFunctionAttachmentsCommandOutput extends DescribeTransitGatewayNetworkFunctionAttachmentsResult, __MetadataBearer {}

/**
 * <p>Describes one or more network function attachments. You can describe attachments that you own or that are attached to a transit gateway that you own.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTransitGatewayNetworkFunctionAttachmentsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTransitGatewayNetworkFunctionAttachmentsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeTransitGatewayNetworkFunctionAttachmentsRequest
 *   TransitGatewayAttachmentIds: [ // TransitGatewayNetworkFunctionAttachmentIdList
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
 * const command = new DescribeTransitGatewayNetworkFunctionAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTransitGatewayNetworkFunctionAttachmentsResult
 * //   TransitGatewayNetworkFunctionAttachments: [ // TransitGatewayNetworkFunctionAttachmentList
 * //     { // TransitGatewayNetworkFunctionAttachment
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       TransitGatewayId: "STRING_VALUE",
 * //       TransitGatewayOwnerId: "STRING_VALUE",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       AvailabilityZones: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AvailabilityZoneIds: [
 * //         "STRING_VALUE",
 * //       ],
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
 * @param DescribeTransitGatewayNetworkFunctionAttachmentsCommandInput - {@link DescribeTransitGatewayNetworkFunctionAttachmentsCommandInput}
 * @returns {@link DescribeTransitGatewayNetworkFunctionAttachmentsCommandOutput}
 * @see {@link DescribeTransitGatewayNetworkFunctionAttachmentsCommandInput} for command's `input` shape.
 * @see {@link DescribeTransitGatewayNetworkFunctionAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeTransitGatewayNetworkFunctionAttachmentsCommand extends command<DescribeTransitGatewayNetworkFunctionAttachmentsCommandInput, DescribeTransitGatewayNetworkFunctionAttachmentsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTransitGatewayNetworkFunctionAttachments",
  DescribeTransitGatewayNetworkFunctionAttachments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTransitGatewayNetworkFunctionAttachmentsRequest;
      output: DescribeTransitGatewayNetworkFunctionAttachmentsResult;
    };
    sdk: {
      input: DescribeTransitGatewayNetworkFunctionAttachmentsCommandInput;
      output: DescribeTransitGatewayNetworkFunctionAttachmentsCommandOutput;
    };
  };
}

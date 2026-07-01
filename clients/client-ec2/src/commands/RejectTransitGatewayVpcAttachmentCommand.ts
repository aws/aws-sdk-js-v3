// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RejectTransitGatewayVpcAttachmentRequest,
  RejectTransitGatewayVpcAttachmentResult,
} from "../models/models_7";
import { RejectTransitGatewayVpcAttachment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RejectTransitGatewayVpcAttachmentCommand}.
 */
export interface RejectTransitGatewayVpcAttachmentCommandInput extends RejectTransitGatewayVpcAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link RejectTransitGatewayVpcAttachmentCommand}.
 */
export interface RejectTransitGatewayVpcAttachmentCommandOutput extends RejectTransitGatewayVpcAttachmentResult, __MetadataBearer {}

/**
 * <p>Rejects a request to attach a VPC to a transit gateway.</p>
 *          <p>The VPC attachment must be in the <code>pendingAcceptance</code> state.
 *          Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests.
 *          Use <a>AcceptTransitGatewayVpcAttachment</a> to accept a VPC attachment request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayVpcAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayVpcAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // RejectTransitGatewayVpcAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new RejectTransitGatewayVpcAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // RejectTransitGatewayVpcAttachmentResult
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
 * @param RejectTransitGatewayVpcAttachmentCommandInput - {@link RejectTransitGatewayVpcAttachmentCommandInput}
 * @returns {@link RejectTransitGatewayVpcAttachmentCommandOutput}
 * @see {@link RejectTransitGatewayVpcAttachmentCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayVpcAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RejectTransitGatewayVpcAttachmentCommand extends command<RejectTransitGatewayVpcAttachmentCommandInput, RejectTransitGatewayVpcAttachmentCommandOutput>(
  _ep0,
  _mw0,
  "RejectTransitGatewayVpcAttachment",
  RejectTransitGatewayVpcAttachment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectTransitGatewayVpcAttachmentRequest;
      output: RejectTransitGatewayVpcAttachmentResult;
    };
    sdk: {
      input: RejectTransitGatewayVpcAttachmentCommandInput;
      output: RejectTransitGatewayVpcAttachmentCommandOutput;
    };
  };
}

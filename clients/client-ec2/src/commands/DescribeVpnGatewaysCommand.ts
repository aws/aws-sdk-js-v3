// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeVpnGatewaysRequest, DescribeVpnGatewaysResult } from "../models/models_5";
import { DescribeVpnGateways$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeVpnGatewaysCommand}.
 */
export interface DescribeVpnGatewaysCommandInput extends DescribeVpnGatewaysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpnGatewaysCommand}.
 */
export interface DescribeVpnGatewaysCommandOutput extends DescribeVpnGatewaysResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your virtual private gateways.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpnGatewaysCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpnGatewaysCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeVpnGatewaysRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   VpnGatewayIds: [ // VpnGatewayIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeVpnGatewaysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpnGatewaysResult
 * //   VpnGateways: [ // VpnGatewayList
 * //     { // VpnGateway
 * //       AmazonSideAsn: Number("long"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpnGatewayId: "STRING_VALUE",
 * //       State: "pending" || "available" || "deleting" || "deleted",
 * //       Type: "ipsec.1",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       VpcAttachments: [ // VpcAttachmentList
 * //         { // VpcAttachment
 * //           VpcId: "STRING_VALUE",
 * //           State: "attaching" || "attached" || "detaching" || "detached",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeVpnGatewaysCommandInput - {@link DescribeVpnGatewaysCommandInput}
 * @returns {@link DescribeVpnGatewaysCommandOutput}
 * @see {@link DescribeVpnGatewaysCommandInput} for command's `input` shape.
 * @see {@link DescribeVpnGatewaysCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpnGatewaysCommand extends command<DescribeVpnGatewaysCommandInput, DescribeVpnGatewaysCommandOutput>(
  _ep0,
  _mw0,
  "DescribeVpnGateways",
  DescribeVpnGateways$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpnGatewaysRequest;
      output: DescribeVpnGatewaysResult;
    };
    sdk: {
      input: DescribeVpnGatewaysCommandInput;
      output: DescribeVpnGatewaysCommandOutput;
    };
  };
}

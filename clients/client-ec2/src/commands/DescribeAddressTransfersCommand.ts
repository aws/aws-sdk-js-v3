// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAddressTransfersRequest, DescribeAddressTransfersResult } from "../models/models_3";
import { de_DescribeAddressTransfersCommand, se_DescribeAddressTransfersCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAddressTransfersCommand}.
 */
export interface DescribeAddressTransfersCommandInput extends DescribeAddressTransfersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddressTransfersCommand}.
 */
export interface DescribeAddressTransfersCommandOutput extends DescribeAddressTransfersResult, __MetadataBearer {}

/**
 * <p>Describes an Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>When you transfer an Elastic IP address, there is a two-step handshake
 *       between the source and transfer Amazon Web Services accounts. When the source account starts the transfer,
 *       the transfer account has seven days to accept the Elastic IP address
 *       transfer. During those seven days, the source account can view the
 *       pending transfer by using this action. After seven days, the
 *       transfer expires and ownership of the Elastic IP
 *       address returns to the source
 *       account. Accepted transfers are visible to the source account for three days
 *         after the transfers have been accepted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAddressTransfersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAddressTransfersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeAddressTransfersRequest
 *   AllocationIds: [ // AllocationIdList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new DescribeAddressTransfersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAddressTransfersResult
 * //   AddressTransfers: [ // AddressTransferList
 * //     { // AddressTransfer
 * //       PublicIp: "STRING_VALUE",
 * //       AllocationId: "STRING_VALUE",
 * //       TransferAccountId: "STRING_VALUE",
 * //       TransferOfferExpirationTimestamp: new Date("TIMESTAMP"),
 * //       TransferOfferAcceptedTimestamp: new Date("TIMESTAMP"),
 * //       AddressTransferStatus: "pending" || "disabled" || "accepted",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAddressTransfersCommandInput - {@link DescribeAddressTransfersCommandInput}
 * @returns {@link DescribeAddressTransfersCommandOutput}
 * @see {@link DescribeAddressTransfersCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressTransfersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeAddressTransfersCommand extends $Command
  .classBuilder<
    DescribeAddressTransfersCommandInput,
    DescribeAddressTransfersCommandOutput,
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
  .s("AmazonEC2", "DescribeAddressTransfers", {})
  .n("EC2Client", "DescribeAddressTransfersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAddressTransfersCommand)
  .de(de_DescribeAddressTransfersCommand)
  .build() {}

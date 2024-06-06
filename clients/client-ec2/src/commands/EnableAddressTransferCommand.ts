// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableAddressTransferRequest, EnableAddressTransferResult } from "../models/models_5";
import { de_EnableAddressTransferCommand, se_EnableAddressTransferCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableAddressTransferCommand}.
 */
export interface EnableAddressTransferCommandInput extends EnableAddressTransferRequest {}
/**
 * @public
 *
 * The output of {@link EnableAddressTransferCommand}.
 */
export interface EnableAddressTransferCommandOutput extends EnableAddressTransferResult, __MetadataBearer {}

/**
 * <p>Enables Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableAddressTransferCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableAddressTransferCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableAddressTransferRequest
 *   AllocationId: "STRING_VALUE", // required
 *   TransferAccountId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new EnableAddressTransferCommand(input);
 * const response = await client.send(command);
 * // { // EnableAddressTransferResult
 * //   AddressTransfer: { // AddressTransfer
 * //     PublicIp: "STRING_VALUE",
 * //     AllocationId: "STRING_VALUE",
 * //     TransferAccountId: "STRING_VALUE",
 * //     TransferOfferExpirationTimestamp: new Date("TIMESTAMP"),
 * //     TransferOfferAcceptedTimestamp: new Date("TIMESTAMP"),
 * //     AddressTransferStatus: "pending" || "disabled" || "accepted",
 * //   },
 * // };
 *
 * ```
 *
 * @param EnableAddressTransferCommandInput - {@link EnableAddressTransferCommandInput}
 * @returns {@link EnableAddressTransferCommandOutput}
 * @see {@link EnableAddressTransferCommandInput} for command's `input` shape.
 * @see {@link EnableAddressTransferCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class EnableAddressTransferCommand extends $Command
  .classBuilder<
    EnableAddressTransferCommandInput,
    EnableAddressTransferCommandOutput,
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
  .s("AmazonEC2", "EnableAddressTransfer", {})
  .n("EC2Client", "EnableAddressTransferCommand")
  .f(void 0, void 0)
  .ser(se_EnableAddressTransferCommand)
  .de(de_EnableAddressTransferCommand)
  .build() {}

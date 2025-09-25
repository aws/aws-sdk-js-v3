// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableAddressTransferRequest, EnableAddressTransferResult } from "../models/models_6";
import { EnableAddressTransfer } from "../schemas/schemas_73_Address";

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
 * <p>Enables Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableAddressTransferCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableAddressTransferCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "EnableAddressTransfer", {})
  .n("EC2Client", "EnableAddressTransferCommand")
  .sc(EnableAddressTransfer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableAddressTransferRequest;
      output: EnableAddressTransferResult;
    };
    sdk: {
      input: EnableAddressTransferCommandInput;
      output: EnableAddressTransferCommandOutput;
    };
  };
}

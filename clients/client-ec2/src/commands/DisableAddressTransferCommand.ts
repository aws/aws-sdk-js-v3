// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisableAddressTransferRequest, DisableAddressTransferResult } from "../models/models_5";
import { DisableAddressTransfer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableAddressTransferCommand}.
 */
export interface DisableAddressTransferCommandInput extends DisableAddressTransferRequest {}
/**
 * @public
 *
 * The output of {@link DisableAddressTransferCommand}.
 */
export interface DisableAddressTransferCommandOutput extends DisableAddressTransferResult, __MetadataBearer {}

/**
 * <p>Disables Elastic IP address transfer. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro">Transfer Elastic IP addresses</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableAddressTransferCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableAddressTransferCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableAddressTransferRequest
 *   AllocationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisableAddressTransferCommand(input);
 * const response = await client.send(command);
 * // { // DisableAddressTransferResult
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
 * @param DisableAddressTransferCommandInput - {@link DisableAddressTransferCommandInput}
 * @returns {@link DisableAddressTransferCommandOutput}
 * @see {@link DisableAddressTransferCommandInput} for command's `input` shape.
 * @see {@link DisableAddressTransferCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableAddressTransferCommand extends $Command
  .classBuilder<
    DisableAddressTransferCommandInput,
    DisableAddressTransferCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisableAddressTransfer", {})
  .n("EC2Client", "DisableAddressTransferCommand")
  .sc(DisableAddressTransfer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableAddressTransferRequest;
      output: DisableAddressTransferResult;
    };
    sdk: {
      input: DisableAddressTransferCommandInput;
      output: DisableAddressTransferCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdvertiseByoipCidrRequest, AdvertiseByoipCidrResult } from "../models/models_0";
import { de_AdvertiseByoipCidrCommand, se_AdvertiseByoipCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AdvertiseByoipCidrCommand}.
 */
export interface AdvertiseByoipCidrCommandInput extends AdvertiseByoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link AdvertiseByoipCidrCommand}.
 */
export interface AdvertiseByoipCidrCommandOutput extends AdvertiseByoipCidrResult, __MetadataBearer {}

/**
 * <p>Advertises an IPv4 or IPv6 address range that is provisioned for use with your Amazon Web Services resources through
 *          bring your own IP addresses (BYOIP).</p>
 *          <p>You can perform this operation at most once every 10 seconds, even if you specify different
 *          address ranges each time.</p>
 *          <p>We recommend that you stop advertising the BYOIP CIDR from other locations when you advertise
 *           it from Amazon Web Services. To minimize down time, you can configure your Amazon Web Services resources to use an address from a
 *          BYOIP CIDR before it is advertised, and then simultaneously stop advertising it from the current
 *          location and start advertising it through Amazon Web Services.</p>
 *          <p>It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services
 *          because of BGP propagation delays.</p>
 *          <p>To stop advertising the BYOIP CIDR, use <a>WithdrawByoipCidr</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AdvertiseByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AdvertiseByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AdvertiseByoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 *   Asn: "STRING_VALUE",
 *   DryRun: true || false,
 *   NetworkBorderGroup: "STRING_VALUE",
 * };
 * const command = new AdvertiseByoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // AdvertiseByoipCidrResult
 * //   ByoipCidr: { // ByoipCidr
 * //     Cidr: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     AsnAssociations: [ // AsnAssociationSet
 * //       { // AsnAssociation
 * //         Asn: "STRING_VALUE",
 * //         Cidr: "STRING_VALUE",
 * //         StatusMessage: "STRING_VALUE",
 * //         State: "disassociated" || "failed-disassociation" || "failed-association" || "pending-disassociation" || "pending-association" || "associated",
 * //       },
 * //     ],
 * //     StatusMessage: "STRING_VALUE",
 * //     State: "advertised" || "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-deprovision" || "pending-provision" || "provisioned" || "provisioned-not-publicly-advertisable",
 * //     NetworkBorderGroup: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AdvertiseByoipCidrCommandInput - {@link AdvertiseByoipCidrCommandInput}
 * @returns {@link AdvertiseByoipCidrCommandOutput}
 * @see {@link AdvertiseByoipCidrCommandInput} for command's `input` shape.
 * @see {@link AdvertiseByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class AdvertiseByoipCidrCommand extends $Command
  .classBuilder<
    AdvertiseByoipCidrCommandInput,
    AdvertiseByoipCidrCommandOutput,
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
  .s("AmazonEC2", "AdvertiseByoipCidr", {})
  .n("EC2Client", "AdvertiseByoipCidrCommand")
  .f(void 0, void 0)
  .ser(se_AdvertiseByoipCidrCommand)
  .de(de_AdvertiseByoipCidrCommand)
  .build() {}

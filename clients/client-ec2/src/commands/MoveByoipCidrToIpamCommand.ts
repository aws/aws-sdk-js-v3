// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { MoveByoipCidrToIpamRequest, MoveByoipCidrToIpamResult } from "../models/models_8";
import { de_MoveByoipCidrToIpamCommand, se_MoveByoipCidrToIpamCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MoveByoipCidrToIpamCommand}.
 */
export interface MoveByoipCidrToIpamCommandInput extends MoveByoipCidrToIpamRequest {}
/**
 * @public
 *
 * The output of {@link MoveByoipCidrToIpamCommand}.
 */
export interface MoveByoipCidrToIpamCommandOutput extends MoveByoipCidrToIpamResult, __MetadataBearer {}

/**
 * <p>Move a BYOIPv4 CIDR to IPAM from a public IPv4 pool.</p>
 *          <p>If you already have a BYOIPv4 CIDR with Amazon Web Services, you can move the CIDR to IPAM from a public IPv4 pool. You cannot move an IPv6 CIDR to IPAM. If you are bringing a new IP address to Amazon Web Services for the first time, complete the steps in <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoip-ipam.html">Tutorial: BYOIP address CIDRs to IPAM</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, MoveByoipCidrToIpamCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, MoveByoipCidrToIpamCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // MoveByoipCidrToIpamRequest
 *   DryRun: true || false,
 *   Cidr: "STRING_VALUE", // required
 *   IpamPoolId: "STRING_VALUE", // required
 *   IpamPoolOwner: "STRING_VALUE", // required
 * };
 * const command = new MoveByoipCidrToIpamCommand(input);
 * const response = await client.send(command);
 * // { // MoveByoipCidrToIpamResult
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
 * @param MoveByoipCidrToIpamCommandInput - {@link MoveByoipCidrToIpamCommandInput}
 * @returns {@link MoveByoipCidrToIpamCommandOutput}
 * @see {@link MoveByoipCidrToIpamCommandInput} for command's `input` shape.
 * @see {@link MoveByoipCidrToIpamCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class MoveByoipCidrToIpamCommand extends $Command
  .classBuilder<
    MoveByoipCidrToIpamCommandInput,
    MoveByoipCidrToIpamCommandOutput,
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
  .s("AmazonEC2", "MoveByoipCidrToIpam", {})
  .n("EC2Client", "MoveByoipCidrToIpamCommand")
  .f(void 0, void 0)
  .ser(se_MoveByoipCidrToIpamCommand)
  .de(de_MoveByoipCidrToIpamCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MoveByoipCidrToIpamRequest;
      output: MoveByoipCidrToIpamResult;
    };
    sdk: {
      input: MoveByoipCidrToIpamCommandInput;
      output: MoveByoipCidrToIpamCommandOutput;
    };
  };
}

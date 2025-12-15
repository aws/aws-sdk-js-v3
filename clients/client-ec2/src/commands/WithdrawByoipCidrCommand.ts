// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { WithdrawByoipCidrRequest, WithdrawByoipCidrResult } from "../models/models_7";
import { WithdrawByoipCidr$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link WithdrawByoipCidrCommand}.
 */
export interface WithdrawByoipCidrCommandInput extends WithdrawByoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link WithdrawByoipCidrCommand}.
 */
export interface WithdrawByoipCidrCommandOutput extends WithdrawByoipCidrResult, __MetadataBearer {}

/**
 * <p>Stops advertising an address range that is provisioned as an address pool.</p>
 *          <p>You can perform this operation at most once every 10 seconds, even if you specify different
 *          address ranges each time.</p>
 *          <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services
 *           because of BGP propagation delays.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, WithdrawByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, WithdrawByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // WithdrawByoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new WithdrawByoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // WithdrawByoipCidrResult
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
 * //     State: "advertised" || "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-advertising" || "pending-deprovision" || "pending-provision" || "pending-withdrawal" || "provisioned" || "provisioned-not-publicly-advertisable",
 * //     NetworkBorderGroup: "STRING_VALUE",
 * //     AdvertisementType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param WithdrawByoipCidrCommandInput - {@link WithdrawByoipCidrCommandInput}
 * @returns {@link WithdrawByoipCidrCommandOutput}
 * @see {@link WithdrawByoipCidrCommandInput} for command's `input` shape.
 * @see {@link WithdrawByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class WithdrawByoipCidrCommand extends $Command
  .classBuilder<
    WithdrawByoipCidrCommandInput,
    WithdrawByoipCidrCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "WithdrawByoipCidr", {})
  .n("EC2Client", "WithdrawByoipCidrCommand")
  .sc(WithdrawByoipCidr$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: WithdrawByoipCidrRequest;
      output: WithdrawByoipCidrResult;
    };
    sdk: {
      input: WithdrawByoipCidrCommandInput;
      output: WithdrawByoipCidrCommandOutput;
    };
  };
}

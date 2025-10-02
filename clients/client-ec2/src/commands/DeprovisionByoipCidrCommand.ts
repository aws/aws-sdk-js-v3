// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeprovisionByoipCidrRequest, DeprovisionByoipCidrResult } from "../models/models_3";
import { de_DeprovisionByoipCidrCommand, se_DeprovisionByoipCidrCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeprovisionByoipCidrCommand}.
 */
export interface DeprovisionByoipCidrCommandInput extends DeprovisionByoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link DeprovisionByoipCidrCommand}.
 */
export interface DeprovisionByoipCidrCommandOutput extends DeprovisionByoipCidrResult, __MetadataBearer {}

/**
 * <p>Releases the specified address range that you provisioned for use with your Amazon Web Services resources
 *          through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.</p>
 *          <p>Before you can release an address range, you must stop advertising it and you must not
 *           have any IP addresses allocated from its address range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeprovisionByoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeprovisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // DeprovisionByoipCidrResult
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
 * @param DeprovisionByoipCidrCommandInput - {@link DeprovisionByoipCidrCommandInput}
 * @returns {@link DeprovisionByoipCidrCommandOutput}
 * @see {@link DeprovisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeprovisionByoipCidrCommand extends $Command
  .classBuilder<
    DeprovisionByoipCidrCommandInput,
    DeprovisionByoipCidrCommandOutput,
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
  .s("AmazonEC2", "DeprovisionByoipCidr", {})
  .n("EC2Client", "DeprovisionByoipCidrCommand")
  .f(void 0, void 0)
  .ser(se_DeprovisionByoipCidrCommand)
  .de(de_DeprovisionByoipCidrCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprovisionByoipCidrRequest;
      output: DeprovisionByoipCidrResult;
    };
    sdk: {
      input: DeprovisionByoipCidrCommandInput;
      output: DeprovisionByoipCidrCommandOutput;
    };
  };
}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeByoipCidrsRequest, DescribeByoipCidrsResult } from "../models/models_4";
import { de_DescribeByoipCidrsCommand, se_DescribeByoipCidrsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeByoipCidrsCommand}.
 */
export interface DescribeByoipCidrsCommandInput extends DescribeByoipCidrsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeByoipCidrsCommand}.
 */
export interface DescribeByoipCidrsCommandOutput extends DescribeByoipCidrsResult, __MetadataBearer {}

/**
 * <p>Describes the IP address ranges that were provisioned for use with Amazon Web Services resources
 *           through through bring your own IP addresses (BYOIP).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeByoipCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeByoipCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeByoipCidrsRequest
 *   DryRun: true || false,
 *   MaxResults: Number("int"), // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeByoipCidrsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeByoipCidrsResult
 * //   ByoipCidrs: [ // ByoipCidrSet
 * //     { // ByoipCidr
 * //       Cidr: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       AsnAssociations: [ // AsnAssociationSet
 * //         { // AsnAssociation
 * //           Asn: "STRING_VALUE",
 * //           Cidr: "STRING_VALUE",
 * //           StatusMessage: "STRING_VALUE",
 * //           State: "disassociated" || "failed-disassociation" || "failed-association" || "pending-disassociation" || "pending-association" || "associated",
 * //         },
 * //       ],
 * //       StatusMessage: "STRING_VALUE",
 * //       State: "advertised" || "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-deprovision" || "pending-provision" || "provisioned" || "provisioned-not-publicly-advertisable",
 * //       NetworkBorderGroup: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeByoipCidrsCommandInput - {@link DescribeByoipCidrsCommandInput}
 * @returns {@link DescribeByoipCidrsCommandOutput}
 * @see {@link DescribeByoipCidrsCommandInput} for command's `input` shape.
 * @see {@link DescribeByoipCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeByoipCidrsCommand extends $Command
  .classBuilder<
    DescribeByoipCidrsCommandInput,
    DescribeByoipCidrsCommandOutput,
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
  .s("AmazonEC2", "DescribeByoipCidrs", {})
  .n("EC2Client", "DescribeByoipCidrsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeByoipCidrsCommand)
  .de(de_DescribeByoipCidrsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeByoipCidrsRequest;
      output: DescribeByoipCidrsResult;
    };
    sdk: {
      input: DescribeByoipCidrsCommandInput;
      output: DescribeByoipCidrsCommandOutput;
    };
  };
}

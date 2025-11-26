// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeIpamByoasnRequest, DescribeIpamByoasnResult } from "../models/models_4";
import { DescribeIpamByoasn } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamByoasnCommand}.
 */
export interface DescribeIpamByoasnCommandInput extends DescribeIpamByoasnRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamByoasnCommand}.
 */
export interface DescribeIpamByoasnCommandOutput extends DescribeIpamByoasnResult, __MetadataBearer {}

/**
 * <p>Describes your Autonomous System Numbers (ASNs), their provisioning statuses, and the BYOIP CIDRs with which they are associated. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-byoasn.html">Tutorial: Bring your ASN to IPAM</a> in the <i>Amazon VPC IPAM guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamByoasnCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamByoasnCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamByoasnRequest
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeIpamByoasnCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamByoasnResult
 * //   Byoasns: [ // ByoasnSet
 * //     { // Byoasn
 * //       Asn: "STRING_VALUE",
 * //       IpamId: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       State: "deprovisioned" || "failed-deprovision" || "failed-provision" || "pending-deprovision" || "pending-provision" || "provisioned",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeIpamByoasnCommandInput - {@link DescribeIpamByoasnCommandInput}
 * @returns {@link DescribeIpamByoasnCommandOutput}
 * @see {@link DescribeIpamByoasnCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamByoasnCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpamByoasnCommand extends $Command
  .classBuilder<
    DescribeIpamByoasnCommandInput,
    DescribeIpamByoasnCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeIpamByoasn", {})
  .n("EC2Client", "DescribeIpamByoasnCommand")
  .sc(DescribeIpamByoasn)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamByoasnRequest;
      output: DescribeIpamByoasnResult;
    };
    sdk: {
      input: DescribeIpamByoasnCommandInput;
      output: DescribeIpamByoasnCommandOutput;
    };
  };
}

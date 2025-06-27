// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAddressesAttributeRequest, DescribeAddressesAttributeResult } from "../models/models_3";
import { de_DescribeAddressesAttributeCommand, se_DescribeAddressesAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAddressesAttributeCommand}.
 */
export interface DescribeAddressesAttributeCommandInput extends DescribeAddressesAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddressesAttributeCommand}.
 */
export interface DescribeAddressesAttributeCommandOutput extends DescribeAddressesAttributeResult, __MetadataBearer {}

/**
 * <p>Describes the attributes of the specified Elastic IP addresses. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAddressesAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAddressesAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeAddressesAttributeRequest
 *   AllocationIds: [ // AllocationIds
 *     "STRING_VALUE",
 *   ],
 *   Attribute: "domain-name",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new DescribeAddressesAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAddressesAttributeResult
 * //   Addresses: [ // AddressSet
 * //     { // AddressAttribute
 * //       PublicIp: "STRING_VALUE",
 * //       AllocationId: "STRING_VALUE",
 * //       PtrRecord: "STRING_VALUE",
 * //       PtrRecordUpdate: { // PtrUpdateStatus
 * //         Value: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         Reason: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAddressesAttributeCommandInput - {@link DescribeAddressesAttributeCommandInput}
 * @returns {@link DescribeAddressesAttributeCommandOutput}
 * @see {@link DescribeAddressesAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressesAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeAddressesAttributeCommand extends $Command
  .classBuilder<
    DescribeAddressesAttributeCommandInput,
    DescribeAddressesAttributeCommandOutput,
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
  .s("AmazonEC2", "DescribeAddressesAttribute", {})
  .n("EC2Client", "DescribeAddressesAttributeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAddressesAttributeCommand)
  .de(de_DescribeAddressesAttributeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAddressesAttributeRequest;
      output: DescribeAddressesAttributeResult;
    };
    sdk: {
      input: DescribeAddressesAttributeCommandInput;
      output: DescribeAddressesAttributeCommandOutput;
    };
  };
}

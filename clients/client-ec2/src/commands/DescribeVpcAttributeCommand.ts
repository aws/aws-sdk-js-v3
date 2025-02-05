// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcAttributeRequest, DescribeVpcAttributeResult } from "../models/models_5";
import { de_DescribeVpcAttributeCommand, se_DescribeVpcAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcAttributeCommand}.
 */
export interface DescribeVpcAttributeCommandInput extends DescribeVpcAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcAttributeCommand}.
 */
export interface DescribeVpcAttributeCommandOutput extends DescribeVpcAttributeResult, __MetadataBearer {}

/**
 * <p>Describes the specified attribute of the specified VPC. You can specify only one attribute at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcAttributeRequest
 *   Attribute: "enableDnsSupport" || "enableDnsHostnames" || "enableNetworkAddressUsageMetrics", // required
 *   VpcId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DescribeVpcAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcAttributeResult
 * //   EnableDnsHostnames: { // AttributeBooleanValue
 * //     Value: true || false,
 * //   },
 * //   EnableDnsSupport: {
 * //     Value: true || false,
 * //   },
 * //   EnableNetworkAddressUsageMetrics: {
 * //     Value: true || false,
 * //   },
 * //   VpcId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcAttributeCommandInput - {@link DescribeVpcAttributeCommandInput}
 * @returns {@link DescribeVpcAttributeCommandOutput}
 * @see {@link DescribeVpcAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe the enableDnsSupport attribute
 * ```javascript
 * // This example describes the enableDnsSupport attribute. This attribute indicates whether DNS resolution is enabled for the VPC. If this attribute is true, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not.
 * const input = {
 *   "Attribute": "enableDnsSupport",
 *   "VpcId": "vpc-a01106c2"
 * };
 * const command = new DescribeVpcAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EnableDnsSupport": {
 *     "Value": true
 *   },
 *   "VpcId": "vpc-a01106c2"
 * }
 * *\/
 * // example id: ec2-describe-vpc-attribute-1
 * ```
 *
 * @example To describe the enableDnsHostnames attribute
 * ```javascript
 * // This example describes the enableDnsHostnames attribute. This attribute indicates whether the instances launched in the VPC get DNS hostnames. If this attribute is true, instances in the VPC get DNS hostnames; otherwise, they do not.
 * const input = {
 *   "Attribute": "enableDnsHostnames",
 *   "VpcId": "vpc-a01106c2"
 * };
 * const command = new DescribeVpcAttributeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EnableDnsHostnames": {
 *     "Value": true
 *   },
 *   "VpcId": "vpc-a01106c2"
 * }
 * *\/
 * // example id: ec2-describe-vpc-attribute-2
 * ```
 *
 */
export class DescribeVpcAttributeCommand extends $Command
  .classBuilder<
    DescribeVpcAttributeCommandInput,
    DescribeVpcAttributeCommandOutput,
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
  .s("AmazonEC2", "DescribeVpcAttribute", {})
  .n("EC2Client", "DescribeVpcAttributeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcAttributeCommand)
  .de(de_DescribeVpcAttributeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcAttributeRequest;
      output: DescribeVpcAttributeResult;
    };
    sdk: {
      input: DescribeVpcAttributeCommandInput;
      output: DescribeVpcAttributeCommandOutput;
    };
  };
}

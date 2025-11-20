// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVpcAttributeRequest } from "../models/models_7";
import { ModifyVpcAttribute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcAttributeCommand}.
 */
export interface ModifyVpcAttributeCommandInput extends ModifyVpcAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcAttributeCommand}.
 */
export interface ModifyVpcAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the specified attribute of the specified VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcAttributeRequest
 *   EnableDnsHostnames: { // AttributeBooleanValue
 *     Value: true || false,
 *   },
 *   EnableDnsSupport: {
 *     Value: true || false,
 *   },
 *   VpcId: "STRING_VALUE", // required
 *   EnableNetworkAddressUsageMetrics: {
 *     Value: true || false,
 *   },
 * };
 * const command = new ModifyVpcAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyVpcAttributeCommandInput - {@link ModifyVpcAttributeCommandInput}
 * @returns {@link ModifyVpcAttributeCommandOutput}
 * @see {@link ModifyVpcAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To modify the enableDnsSupport attribute
 * ```javascript
 * // This example modifies the enableDnsSupport attribute. This attribute indicates whether DNS resolution is enabled for the VPC. If this attribute is true, the Amazon DNS server resolves DNS hostnames for instances in the VPC to their corresponding IP addresses; otherwise, it does not.
 * const input = {
 *   EnableDnsSupport: {
 *     Value: false
 *   },
 *   VpcId: "vpc-a01106c2"
 * };
 * const command = new ModifyVpcAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example To modify the enableDnsHostnames attribute
 * ```javascript
 * // This example modifies the enableDnsHostnames attribute. This attribute indicates whether instances launched in the VPC get DNS hostnames. If this attribute is true, instances in the VPC get DNS hostnames; otherwise, they do not.
 * const input = {
 *   EnableDnsHostnames: {
 *     Value: false
 *   },
 *   VpcId: "vpc-a01106c2"
 * };
 * const command = new ModifyVpcAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyVpcAttributeCommand extends $Command
  .classBuilder<
    ModifyVpcAttributeCommandInput,
    ModifyVpcAttributeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyVpcAttribute", {})
  .n("EC2Client", "ModifyVpcAttributeCommand")
  .sc(ModifyVpcAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVpcAttributeRequest;
      output: {};
    };
    sdk: {
      input: ModifyVpcAttributeCommandInput;
      output: ModifyVpcAttributeCommandOutput;
    };
  };
}

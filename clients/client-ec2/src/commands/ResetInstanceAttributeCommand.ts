// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetInstanceAttributeRequest } from "../models/models_8";
import { ResetInstanceAttribute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetInstanceAttributeCommand}.
 */
export interface ResetInstanceAttributeCommandInput extends ResetInstanceAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ResetInstanceAttributeCommand}.
 */
export interface ResetInstanceAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Resets an attribute of an instance to its default value. To reset the
 *                 <code>kernel</code> or <code>ramdisk</code>, the instance must be in a stopped
 *             state. To reset the <code>sourceDestCheck</code>, the instance can be either running or
 *             stopped.</p>
 *          <p>The <code>sourceDestCheck</code> attribute controls whether source/destination
 *             checking is enabled. The default value is <code>true</code>, which means checking is
 *             enabled. This value must be <code>false</code> for a NAT instance to perform NAT. For
 *             more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_NAT_Instance.html">NAT instances</a> in the
 *                 <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetInstanceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetInstanceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ResetInstanceAttributeRequest
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   Attribute: "instanceType" || "kernel" || "ramdisk" || "userData" || "disableApiTermination" || "instanceInitiatedShutdownBehavior" || "rootDeviceName" || "blockDeviceMapping" || "productCodes" || "sourceDestCheck" || "groupSet" || "ebsOptimized" || "sriovNetSupport" || "enaSupport" || "enclaveOptions" || "disableApiStop", // required
 * };
 * const command = new ResetInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetInstanceAttributeCommandInput - {@link ResetInstanceAttributeCommandInput}
 * @returns {@link ResetInstanceAttributeCommandOutput}
 * @see {@link ResetInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To reset the sourceDestCheck attribute
 * ```javascript
 * // This example resets the sourceDestCheck attribute for the specified instance.
 * const input = {
 *   Attribute: "sourceDestCheck",
 *   InstanceId: "i-1234567890abcdef0"
 * };
 * const command = new ResetInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ResetInstanceAttributeCommand extends $Command
  .classBuilder<
    ResetInstanceAttributeCommandInput,
    ResetInstanceAttributeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ResetInstanceAttribute", {})
  .n("EC2Client", "ResetInstanceAttributeCommand")
  .sc(ResetInstanceAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetInstanceAttributeRequest;
      output: {};
    };
    sdk: {
      input: ResetInstanceAttributeCommandInput;
      output: ResetInstanceAttributeCommandOutput;
    };
  };
}

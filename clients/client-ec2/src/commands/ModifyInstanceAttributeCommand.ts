// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceAttributeRequest } from "../models/models_6";
import { de_ModifyInstanceAttributeCommand, se_ModifyInstanceAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceAttributeCommand}.
 */
export interface ModifyInstanceAttributeCommandInput extends ModifyInstanceAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceAttributeCommand}.
 */
export interface ModifyInstanceAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the specified attribute of the specified instance. You can specify only one
 *             attribute at a time.</p>
 *          <p>
 *             <b>Note: </b>Using this action to change the security groups
 *             associated with an elastic network interface (ENI) attached to an instance can
 *             result in an error if the instance has more than one ENI. To change the security groups
 *             associated with an ENI attached to an instance that has multiple ENIs, we recommend that
 *             you use the <a>ModifyNetworkInterfaceAttribute</a> action.</p>
 *          <p>To modify some attributes, the instance must be stopped. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_ChangingAttributesWhileInstanceStopped.html">Modify a stopped instance</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceAttributeRequest
 *   SourceDestCheck: { // AttributeBooleanValue
 *     Value: true || false,
 *   },
 *   Attribute: "instanceType" || "kernel" || "ramdisk" || "userData" || "disableApiTermination" || "instanceInitiatedShutdownBehavior" || "rootDeviceName" || "blockDeviceMapping" || "productCodes" || "sourceDestCheck" || "groupSet" || "ebsOptimized" || "sriovNetSupport" || "enaSupport" || "enclaveOptions" || "disableApiStop",
 *   BlockDeviceMappings: [ // InstanceBlockDeviceMappingSpecificationList
 *     { // InstanceBlockDeviceMappingSpecification
 *       DeviceName: "STRING_VALUE",
 *       Ebs: { // EbsInstanceBlockDeviceSpecification
 *         DeleteOnTermination: true || false,
 *         VolumeId: "STRING_VALUE",
 *       },
 *       NoDevice: "STRING_VALUE",
 *       VirtualName: "STRING_VALUE",
 *     },
 *   ],
 *   DisableApiTermination: {
 *     Value: true || false,
 *   },
 *   DryRun: true || false,
 *   EbsOptimized: {
 *     Value: true || false,
 *   },
 *   EnaSupport: {
 *     Value: true || false,
 *   },
 *   Groups: [ // GroupIdStringList
 *     "STRING_VALUE",
 *   ],
 *   InstanceId: "STRING_VALUE", // required
 *   InstanceInitiatedShutdownBehavior: { // AttributeValue
 *     Value: "STRING_VALUE",
 *   },
 *   InstanceType: {
 *     Value: "STRING_VALUE",
 *   },
 *   Kernel: {
 *     Value: "STRING_VALUE",
 *   },
 *   Ramdisk: {
 *     Value: "STRING_VALUE",
 *   },
 *   SriovNetSupport: {
 *     Value: "STRING_VALUE",
 *   },
 *   UserData: { // BlobAttributeValue
 *     Value: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   },
 *   Value: "STRING_VALUE",
 *   DisableApiStop: {
 *     Value: true || false,
 *   },
 * };
 * const command = new ModifyInstanceAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyInstanceAttributeCommandInput - {@link ModifyInstanceAttributeCommandInput}
 * @returns {@link ModifyInstanceAttributeCommandOutput}
 * @see {@link ModifyInstanceAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To modify the instance type
 * ```javascript
 * // This example modifies the instance type of the specified stopped instance.
 * const input = {
 *   "InstanceId": "i-1234567890abcdef0",
 *   "InstanceType": {
 *     "Value": "m5.large"
 *   }
 * };
 * const command = new ModifyInstanceAttributeCommand(input);
 * await client.send(command);
 * // example id: to-modify-the-instance-type-1529357844378
 * ```
 *
 * @example To enable enhanced networking
 * ```javascript
 * // This example enables enhanced networking for the specified stopped instance.
 * const input = {
 *   "EnaSupport": {
 *     "Value": true
 *   },
 *   "InstanceId": "i-1234567890abcdef0"
 * };
 * const command = new ModifyInstanceAttributeCommand(input);
 * await client.send(command);
 * // example id: to-enable-enhanced-networking-1529358279870
 * ```
 *
 */
export class ModifyInstanceAttributeCommand extends $Command
  .classBuilder<
    ModifyInstanceAttributeCommandInput,
    ModifyInstanceAttributeCommandOutput,
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
  .s("AmazonEC2", "ModifyInstanceAttribute", {})
  .n("EC2Client", "ModifyInstanceAttributeCommand")
  .f(void 0, void 0)
  .ser(se_ModifyInstanceAttributeCommand)
  .de(de_ModifyInstanceAttributeCommand)
  .build() {}

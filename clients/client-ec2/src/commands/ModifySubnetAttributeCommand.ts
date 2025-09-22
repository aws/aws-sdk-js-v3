// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifySubnetAttributeRequest } from "../models/models_7";
import { ModifySubnetAttribute } from "../schemas/schemas_199_Launch";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifySubnetAttributeCommand}.
 */
export interface ModifySubnetAttributeCommandInput extends ModifySubnetAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifySubnetAttributeCommand}.
 */
export interface ModifySubnetAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies a subnet attribute. You can only modify one attribute at a time.</p>
 *          <p>Use this action to modify subnets on Amazon Web Services Outposts.</p>
 *          <ul>
 *             <li>
 *                <p>To modify a subnet on an Outpost rack, set both
 *                         <code>MapCustomerOwnedIpOnLaunch</code> and
 *                         <code>CustomerOwnedIpv4Pool</code>. These two parameters act as a single
 *                     attribute.</p>
 *             </li>
 *             <li>
 *                <p>To modify a subnet on an Outpost server, set either
 *                         <code>EnableLniAtDeviceIndex</code> or
 *                     <code>DisableLniAtDeviceIndex</code>.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about Amazon Web Services Outposts, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/outposts/latest/userguide/how-servers-work.html">Outpost servers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/outposts/latest/userguide/how-racks-work.html">Outpost racks</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifySubnetAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifySubnetAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifySubnetAttributeRequest
 *   AssignIpv6AddressOnCreation: { // AttributeBooleanValue
 *     Value: true || false,
 *   },
 *   MapPublicIpOnLaunch: {
 *     Value: true || false,
 *   },
 *   SubnetId: "STRING_VALUE", // required
 *   MapCustomerOwnedIpOnLaunch: {
 *     Value: true || false,
 *   },
 *   CustomerOwnedIpv4Pool: "STRING_VALUE",
 *   EnableDns64: {
 *     Value: true || false,
 *   },
 *   PrivateDnsHostnameTypeOnLaunch: "ip-name" || "resource-name",
 *   EnableResourceNameDnsARecordOnLaunch: {
 *     Value: true || false,
 *   },
 *   EnableResourceNameDnsAAAARecordOnLaunch: "<AttributeBooleanValue>",
 *   EnableLniAtDeviceIndex: Number("int"),
 *   DisableLniAtDeviceIndex: "<AttributeBooleanValue>",
 * };
 * const command = new ModifySubnetAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifySubnetAttributeCommandInput - {@link ModifySubnetAttributeCommandInput}
 * @returns {@link ModifySubnetAttributeCommandOutput}
 * @see {@link ModifySubnetAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifySubnetAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To change a subnet's public IP addressing behavior
 * ```javascript
 * // This example modifies the specified subnet so that all instances launched into this subnet are assigned a public IP address.
 * const input = {
 *   MapPublicIpOnLaunch: {
 *     Value: true
 *   },
 *   SubnetId: "subnet-1a2b3c4d"
 * };
 * const command = new ModifySubnetAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ModifySubnetAttributeCommand extends $Command
  .classBuilder<
    ModifySubnetAttributeCommandInput,
    ModifySubnetAttributeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifySubnetAttribute", {})
  .n("EC2Client", "ModifySubnetAttributeCommand")
  .sc(ModifySubnetAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifySubnetAttributeRequest;
      output: {};
    };
    sdk: {
      input: ModifySubnetAttributeCommandInput;
      output: ModifySubnetAttributeCommandOutput;
    };
  };
}

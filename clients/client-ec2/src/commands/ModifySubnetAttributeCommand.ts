// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifySubnetAttributeRequest } from "../models/models_7";
import { ModifySubnetAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies a subnet attribute. You can only modify one attribute at a time.
 *
 * Use this action to modify subnets on Amazon Web Services Outposts.
 *
 * - To modify a subnet on an Outpost rack, set both `MapCustomerOwnedIpOnLaunch` and `CustomerOwnedIpv4Pool`. These two parameters act as a single attribute.
 * - To modify a subnet on an Outpost server, set either `EnableLniAtDeviceIndex` or `DisableLniAtDeviceIndex`.
 *
 * For more information about Amazon Web Services Outposts, see the following:
 *
 * - [Outpost servers](https://docs.aws.amazon.com/outposts/latest/userguide/how-servers-work.html)
 * - [Outpost racks](https://docs.aws.amazon.com/outposts/latest/userguide/how-racks-work.html)
 *
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
 *
 * Base exception class for all service exceptions from EC2 service.
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
export class ModifySubnetAttributeCommand extends command<ModifySubnetAttributeCommandInput, ModifySubnetAttributeCommandOutput>(
  _ep0,
  _mw0,
  "ModifySubnetAttribute",
  ModifySubnetAttribute$
) {
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

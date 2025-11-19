// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyImageAttributeRequest } from "../models/models_6";
import { ModifyImageAttribute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyImageAttributeCommand}.
 */
export interface ModifyImageAttributeCommandInput extends ModifyImageAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyImageAttributeCommand}.
 */
export interface ModifyImageAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the specified attribute of the specified AMI. You can specify only one attribute
 *       at a time.</p>
 *          <p>To specify the attribute, you can use the <code>Attribute</code> parameter, or one of the
 *       following parameters: <code>Description</code>, <code>ImdsSupport</code>, or
 *         <code>LaunchPermission</code>.</p>
 *          <p>Images with an Amazon Web Services Marketplace product code cannot be made public.</p>
 *          <p>To enable the SriovNetSupport enhanced networking attribute of an image, enable
 *       SriovNetSupport on an instance and create an AMI from the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyImageAttributeRequest
 *   Attribute: "STRING_VALUE",
 *   Description: { // AttributeValue
 *     Value: "STRING_VALUE",
 *   },
 *   ImageId: "STRING_VALUE", // required
 *   LaunchPermission: { // LaunchPermissionModifications
 *     Add: [ // LaunchPermissionList
 *       { // LaunchPermission
 *         OrganizationArn: "STRING_VALUE",
 *         OrganizationalUnitArn: "STRING_VALUE",
 *         UserId: "STRING_VALUE",
 *         Group: "all",
 *       },
 *     ],
 *     Remove: [
 *       {
 *         OrganizationArn: "STRING_VALUE",
 *         OrganizationalUnitArn: "STRING_VALUE",
 *         UserId: "STRING_VALUE",
 *         Group: "all",
 *       },
 *     ],
 *   },
 *   OperationType: "add" || "remove",
 *   ProductCodes: [ // ProductCodeStringList
 *     "STRING_VALUE",
 *   ],
 *   UserGroups: [ // UserGroupStringList
 *     "STRING_VALUE",
 *   ],
 *   UserIds: [ // UserIdStringList
 *     "STRING_VALUE",
 *   ],
 *   Value: "STRING_VALUE",
 *   OrganizationArns: [ // OrganizationArnStringList
 *     "STRING_VALUE",
 *   ],
 *   OrganizationalUnitArns: [ // OrganizationalUnitArnStringList
 *     "STRING_VALUE",
 *   ],
 *   ImdsSupport: {
 *     Value: "STRING_VALUE",
 *   },
 *   DryRun: true || false,
 * };
 * const command = new ModifyImageAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyImageAttributeCommandInput - {@link ModifyImageAttributeCommandInput}
 * @returns {@link ModifyImageAttributeCommandOutput}
 * @see {@link ModifyImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To grant launch permissions
 * ```javascript
 * // This example grants launch permissions for the specified AMI to the specified AWS account.
 * const input = {
 *   ImageId: "ami-5731123e",
 *   LaunchPermission: {
 *     Add: [
 *       {
 *         UserId: "123456789012"
 *       }
 *     ]
 *   }
 * };
 * const command = new ModifyImageAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @example To make an AMI public
 * ```javascript
 * // This example makes the specified AMI public.
 * const input = {
 *   ImageId: "ami-5731123e",
 *   LaunchPermission: {
 *     Add: [
 *       {
 *         Group: "all"
 *       }
 *     ]
 *   }
 * };
 * const command = new ModifyImageAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyImageAttributeCommand extends $Command
  .classBuilder<
    ModifyImageAttributeCommandInput,
    ModifyImageAttributeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyImageAttribute", {})
  .n("EC2Client", "ModifyImageAttributeCommand")
  .sc(ModifyImageAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyImageAttributeRequest;
      output: {};
    };
    sdk: {
      input: ModifyImageAttributeCommandInput;
      output: ModifyImageAttributeCommandOutput;
    };
  };
}

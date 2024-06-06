// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSubnetRequest } from "../models/models_3";
import { de_DeleteSubnetCommand, se_DeleteSubnetCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSubnetCommand}.
 */
export interface DeleteSubnetCommandInput extends DeleteSubnetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSubnetCommand}.
 */
export interface DeleteSubnetCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified subnet. You must terminate all running instances in the subnet before you can delete the subnet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteSubnetRequest
 *   SubnetId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteSubnetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSubnetCommandInput - {@link DeleteSubnetCommandInput}
 * @returns {@link DeleteSubnetCommandOutput}
 * @see {@link DeleteSubnetCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To delete a subnet
 * ```javascript
 * // This example deletes the specified subnet.
 * const input = {
 *   "SubnetId": "subnet-9d4a7b6c"
 * };
 * const command = new DeleteSubnetCommand(input);
 * await client.send(command);
 * // example id: ec2-delete-subnet-1
 * ```
 *
 */
export class DeleteSubnetCommand extends $Command
  .classBuilder<
    DeleteSubnetCommandInput,
    DeleteSubnetCommandOutput,
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
  .s("AmazonEC2", "DeleteSubnet", {})
  .n("EC2Client", "DeleteSubnetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSubnetCommand)
  .de(de_DeleteSubnetCommand)
  .build() {}

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkInterfacePermissionRequest, DeleteNetworkInterfacePermissionResult } from "../models/models_3";
import {
  de_DeleteNetworkInterfacePermissionCommand,
  se_DeleteNetworkInterfacePermissionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkInterfacePermissionCommand}.
 */
export interface DeleteNetworkInterfacePermissionCommandInput extends DeleteNetworkInterfacePermissionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkInterfacePermissionCommand}.
 */
export interface DeleteNetworkInterfacePermissionCommandOutput
  extends DeleteNetworkInterfacePermissionResult,
    __MetadataBearer {}

/**
 * <p>Deletes a permission for a network interface. By default, you cannot delete the
 * 			permission if the account for which you're removing the permission has attached the
 * 			network interface to an instance. However, you can force delete the permission,
 * 			regardless of any attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInterfacePermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInterfacePermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkInterfacePermissionRequest
 *   NetworkInterfacePermissionId: "STRING_VALUE", // required
 *   Force: true || false,
 *   DryRun: true || false,
 * };
 * const command = new DeleteNetworkInterfacePermissionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkInterfacePermissionResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteNetworkInterfacePermissionCommandInput - {@link DeleteNetworkInterfacePermissionCommandInput}
 * @returns {@link DeleteNetworkInterfacePermissionCommandOutput}
 * @see {@link DeleteNetworkInterfacePermissionCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInterfacePermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DeleteNetworkInterfacePermissionCommand extends $Command
  .classBuilder<
    DeleteNetworkInterfacePermissionCommandInput,
    DeleteNetworkInterfacePermissionCommandOutput,
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
  .s("AmazonEC2", "DeleteNetworkInterfacePermission", {})
  .n("EC2Client", "DeleteNetworkInterfacePermissionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNetworkInterfacePermissionCommand)
  .de(de_DeleteNetworkInterfacePermissionCommand)
  .build() {}

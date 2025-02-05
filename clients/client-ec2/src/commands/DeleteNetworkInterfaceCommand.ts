// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNetworkInterfaceRequest } from "../models/models_3";
import { de_DeleteNetworkInterfaceCommand, se_DeleteNetworkInterfaceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNetworkInterfaceCommand}.
 */
export interface DeleteNetworkInterfaceCommandInput extends DeleteNetworkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkInterfaceCommand}.
 */
export interface DeleteNetworkInterfaceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified network interface. You must detach the network interface before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkInterfaceRequest
 *   DryRun: true || false,
 *   NetworkInterfaceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteNetworkInterfaceCommandInput - {@link DeleteNetworkInterfaceCommandInput}
 * @returns {@link DeleteNetworkInterfaceCommandOutput}
 * @see {@link DeleteNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To delete a network interface
 * ```javascript
 * // This example deletes the specified network interface.
 * const input = {
 *   "NetworkInterfaceId": "eni-e5aa89a3"
 * };
 * const command = new DeleteNetworkInterfaceCommand(input);
 * await client.send(command);
 * // example id: ec2-delete-network-interface-1
 * ```
 *
 */
export class DeleteNetworkInterfaceCommand extends $Command
  .classBuilder<
    DeleteNetworkInterfaceCommandInput,
    DeleteNetworkInterfaceCommandOutput,
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
  .s("AmazonEC2", "DeleteNetworkInterface", {})
  .n("EC2Client", "DeleteNetworkInterfaceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNetworkInterfaceCommand)
  .de(de_DeleteNetworkInterfaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkInterfaceRequest;
      output: {};
    };
    sdk: {
      input: DeleteNetworkInterfaceCommandInput;
      output: DeleteNetworkInterfaceCommandOutput;
    };
  };
}

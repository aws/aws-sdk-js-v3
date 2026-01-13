// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteNetworkInterfaceRequest } from "../models/models_2";
import { DeleteNetworkInterface$ } from "../schemas/schemas_0";

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
 * <p>Deletes the specified network interface. You must detach the network interface before
 *             you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 *
 * @example To delete a network interface
 * ```javascript
 * // This example deletes the specified network interface.
 * const input = {
 *   NetworkInterfaceId: "eni-e5aa89a3"
 * };
 * const command = new DeleteNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteNetworkInterface", {})
  .n("EC2Client", "DeleteNetworkInterfaceCommand")
  .sc(DeleteNetworkInterface$)
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

// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DetachNetworkInterfaceRequest } from "../models/models_5";
import { de_DetachNetworkInterfaceCommand, se_DetachNetworkInterfaceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachNetworkInterfaceCommand}.
 */
export interface DetachNetworkInterfaceCommandInput extends DetachNetworkInterfaceRequest {}
/**
 * @public
 *
 * The output of {@link DetachNetworkInterfaceCommand}.
 */
export interface DetachNetworkInterfaceCommandOutput extends __MetadataBearer {}

/**
 * <p>Detaches a network interface from an instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachNetworkInterfaceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachNetworkInterfaceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DetachNetworkInterfaceRequest
 *   DryRun: true || false,
 *   AttachmentId: "STRING_VALUE", // required
 *   Force: true || false,
 * };
 * const command = new DetachNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachNetworkInterfaceCommandInput - {@link DetachNetworkInterfaceCommandInput}
 * @returns {@link DetachNetworkInterfaceCommandOutput}
 * @see {@link DetachNetworkInterfaceCommandInput} for command's `input` shape.
 * @see {@link DetachNetworkInterfaceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To detach a network interface from an instance
 * ```javascript
 * // This example detaches the specified network interface from its attached instance.
 * const input = {
 *   AttachmentId: "eni-attach-66c4350a"
 * };
 * const command = new DetachNetworkInterfaceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DetachNetworkInterfaceCommand extends $Command
  .classBuilder<
    DetachNetworkInterfaceCommandInput,
    DetachNetworkInterfaceCommandOutput,
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
  .s("AmazonEC2", "DetachNetworkInterface", {})
  .n("EC2Client", "DetachNetworkInterfaceCommand")
  .f(void 0, void 0)
  .ser(se_DetachNetworkInterfaceCommand)
  .de(de_DetachNetworkInterfaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachNetworkInterfaceRequest;
      output: {};
    };
    sdk: {
      input: DetachNetworkInterfaceCommandInput;
      output: DetachNetworkInterfaceCommandOutput;
    };
  };
}

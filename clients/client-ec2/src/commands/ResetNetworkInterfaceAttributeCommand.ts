// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetNetworkInterfaceAttributeRequest } from "../models/models_8";
import { ResetNetworkInterfaceAttribute } from "../schemas/schemas_136_ResetNetworkInterfaceAttribute";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetNetworkInterfaceAttributeCommand}.
 */
export interface ResetNetworkInterfaceAttributeCommandInput extends ResetNetworkInterfaceAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ResetNetworkInterfaceAttributeCommand}.
 */
export interface ResetNetworkInterfaceAttributeCommandOutput extends __MetadataBearer {}

/**
 * <p>Resets a network interface attribute. You can specify only one attribute at a
 *             time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetNetworkInterfaceAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetNetworkInterfaceAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ResetNetworkInterfaceAttributeRequest
 *   DryRun: true || false,
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   SourceDestCheck: "STRING_VALUE",
 * };
 * const command = new ResetNetworkInterfaceAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetNetworkInterfaceAttributeCommandInput - {@link ResetNetworkInterfaceAttributeCommandInput}
 * @returns {@link ResetNetworkInterfaceAttributeCommandOutput}
 * @see {@link ResetNetworkInterfaceAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetNetworkInterfaceAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ResetNetworkInterfaceAttributeCommand extends $Command
  .classBuilder<
    ResetNetworkInterfaceAttributeCommandInput,
    ResetNetworkInterfaceAttributeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ResetNetworkInterfaceAttribute", {})
  .n("EC2Client", "ResetNetworkInterfaceAttributeCommand")
  .sc(ResetNetworkInterfaceAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetNetworkInterfaceAttributeRequest;
      output: {};
    };
    sdk: {
      input: ResetNetworkInterfaceAttributeCommandInput;
      output: ResetNetworkInterfaceAttributeCommandOutput;
    };
  };
}

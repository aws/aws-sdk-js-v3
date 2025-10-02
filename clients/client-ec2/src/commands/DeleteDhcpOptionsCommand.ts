// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDhcpOptionsRequest } from "../models/models_3";
import { de_DeleteDhcpOptionsCommand, se_DeleteDhcpOptionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDhcpOptionsCommand}.
 */
export interface DeleteDhcpOptionsCommandInput extends DeleteDhcpOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDhcpOptionsCommand}.
 */
export interface DeleteDhcpOptionsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified set of DHCP options. You must disassociate the set of DHCP options before you can delete it. You can disassociate the set of DHCP options by associating either a new set of options or the default set of options with the VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteDhcpOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteDhcpOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteDhcpOptionsRequest
 *   DhcpOptionsId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDhcpOptionsCommandInput - {@link DeleteDhcpOptionsCommandInput}
 * @returns {@link DeleteDhcpOptionsCommandOutput}
 * @see {@link DeleteDhcpOptionsCommandInput} for command's `input` shape.
 * @see {@link DeleteDhcpOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a DHCP options set
 * ```javascript
 * // This example deletes the specified DHCP options set.
 * const input = {
 *   DhcpOptionsId: "dopt-d9070ebb"
 * };
 * const command = new DeleteDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDhcpOptionsCommand extends $Command
  .classBuilder<
    DeleteDhcpOptionsCommandInput,
    DeleteDhcpOptionsCommandOutput,
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
  .s("AmazonEC2", "DeleteDhcpOptions", {})
  .n("EC2Client", "DeleteDhcpOptionsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDhcpOptionsCommand)
  .de(de_DeleteDhcpOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDhcpOptionsRequest;
      output: {};
    };
    sdk: {
      input: DeleteDhcpOptionsCommandInput;
      output: DeleteDhcpOptionsCommandOutput;
    };
  };
}

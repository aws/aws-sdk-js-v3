// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ReleaseAddressRequest } from "../models/models_7";
import { de_ReleaseAddressCommand, se_ReleaseAddressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReleaseAddressCommand}.
 */
export interface ReleaseAddressCommandInput extends ReleaseAddressRequest {}
/**
 * @public
 *
 * The output of {@link ReleaseAddressCommand}.
 */
export interface ReleaseAddressCommandOutput extends __MetadataBearer {}

/**
 * <p>Releases the specified Elastic IP address.</p>
 *          <p>[Default VPC] Releasing an Elastic IP address automatically disassociates it
 * 				from any instance that it's associated with. To disassociate an Elastic IP address without
 * 				releasing it, use <a>DisassociateAddress</a>.</p>
 *          <p>[Nondefault VPC] You must use <a>DisassociateAddress</a> to disassociate the Elastic IP address
 * 			  before you can release it. Otherwise, Amazon EC2 returns an error (<code>InvalidIPAddress.InUse</code>).</p>
 *          <p>After releasing an Elastic IP address, it is released to the IP address pool.
 *         Be sure to update your DNS records and any servers or devices that communicate with the address.
 *         If you attempt to release an Elastic IP address that you already released, you'll get an
 *        <code>AuthFailure</code> error if the address is already allocated to another Amazon Web Services account.</p>
 *          <p>After you release an Elastic IP address, you might be able to recover it.
 *         For more information, see <a>AllocateAddress</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReleaseAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReleaseAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReleaseAddressRequest
 *   AllocationId: "STRING_VALUE",
 *   PublicIp: "STRING_VALUE",
 *   NetworkBorderGroup: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new ReleaseAddressCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ReleaseAddressCommandInput - {@link ReleaseAddressCommandInput}
 * @returns {@link ReleaseAddressCommandOutput}
 * @see {@link ReleaseAddressCommandInput} for command's `input` shape.
 * @see {@link ReleaseAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To release an Elastic IP address
 * ```javascript
 * // This example releases the specified Elastic IP address.
 * const input = {
 *   AllocationId: "eipalloc-64d5890a"
 * };
 * const command = new ReleaseAddressCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ReleaseAddressCommand extends $Command
  .classBuilder<
    ReleaseAddressCommandInput,
    ReleaseAddressCommandOutput,
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
  .s("AmazonEC2", "ReleaseAddress", {})
  .n("EC2Client", "ReleaseAddressCommand")
  .f(void 0, void 0)
  .ser(se_ReleaseAddressCommand)
  .de(de_ReleaseAddressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReleaseAddressRequest;
      output: {};
    };
    sdk: {
      input: ReleaseAddressCommandInput;
      output: ReleaseAddressCommandOutput;
    };
  };
}

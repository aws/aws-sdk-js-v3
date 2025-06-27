// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteNatGatewayRequest, DeleteNatGatewayResult } from "../models/models_3";
import { de_DeleteNatGatewayCommand, se_DeleteNatGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteNatGatewayCommand}.
 */
export interface DeleteNatGatewayCommandInput extends DeleteNatGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNatGatewayCommand}.
 */
export interface DeleteNatGatewayCommandOutput extends DeleteNatGatewayResult, __MetadataBearer {}

/**
 * <p>Deletes the specified NAT gateway. Deleting a public NAT gateway disassociates its Elastic IP address,
 *           but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway
 *           routes in your route tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNatGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNatGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteNatGatewayRequest
 *   DryRun: true || false,
 *   NatGatewayId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNatGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNatGatewayResult
 * //   NatGatewayId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNatGatewayCommandInput - {@link DeleteNatGatewayCommandInput}
 * @returns {@link DeleteNatGatewayCommandOutput}
 * @see {@link DeleteNatGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteNatGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a NAT gateway
 * ```javascript
 * // This example deletes the specified NAT gateway.
 * const input = {
 *   NatGatewayId: "nat-04ae55e711cec5680"
 * };
 * const command = new DeleteNatGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NatGatewayId: "nat-04ae55e711cec5680"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteNatGatewayCommand extends $Command
  .classBuilder<
    DeleteNatGatewayCommandInput,
    DeleteNatGatewayCommandOutput,
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
  .s("AmazonEC2", "DeleteNatGateway", {})
  .n("EC2Client", "DeleteNatGatewayCommand")
  .f(void 0, void 0)
  .ser(se_DeleteNatGatewayCommand)
  .de(de_DeleteNatGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNatGatewayRequest;
      output: DeleteNatGatewayResult;
    };
    sdk: {
      input: DeleteNatGatewayCommandInput;
      output: DeleteNatGatewayCommandOutput;
    };
  };
}

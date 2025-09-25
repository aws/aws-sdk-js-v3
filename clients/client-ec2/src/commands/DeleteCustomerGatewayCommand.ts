// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCustomerGatewayRequest } from "../models/models_3";
import { DeleteCustomerGateway } from "../schemas/schemas_179_Vpn";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomerGatewayCommand}.
 */
export interface DeleteCustomerGatewayCommandInput extends DeleteCustomerGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomerGatewayCommand}.
 */
export interface DeleteCustomerGatewayCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified customer gateway. You must delete the VPN connection before you
 *             can delete the customer gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteCustomerGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteCustomerGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteCustomerGatewayRequest
 *   CustomerGatewayId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomerGatewayCommandInput - {@link DeleteCustomerGatewayCommandInput}
 * @returns {@link DeleteCustomerGatewayCommandOutput}
 * @see {@link DeleteCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomerGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete a customer gateway
 * ```javascript
 * // This example deletes the specified customer gateway.
 * const input = {
 *   CustomerGatewayId: "cgw-0e11f167"
 * };
 * const command = new DeleteCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteCustomerGatewayCommand extends $Command
  .classBuilder<
    DeleteCustomerGatewayCommandInput,
    DeleteCustomerGatewayCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteCustomerGateway", {})
  .n("EC2Client", "DeleteCustomerGatewayCommand")
  .sc(DeleteCustomerGateway)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomerGatewayRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomerGatewayCommandInput;
      output: DeleteCustomerGatewayCommandOutput;
    };
  };
}

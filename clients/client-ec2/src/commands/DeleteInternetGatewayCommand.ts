// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteInternetGatewayRequest } from "../models/models_2";
import { DeleteInternetGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInternetGatewayCommand}.
 */
export interface DeleteInternetGatewayCommandInput extends DeleteInternetGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInternetGatewayCommand}.
 */
export interface DeleteInternetGatewayCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified internet gateway. You must detach the internet gateway from the
 * 			VPC before you can delete it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteInternetGatewayRequest
 *   DryRun: true || false,
 *   InternetGatewayId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInternetGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInternetGatewayCommandInput - {@link DeleteInternetGatewayCommandInput}
 * @returns {@link DeleteInternetGatewayCommandOutput}
 * @see {@link DeleteInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To delete an Internet gateway
 * ```javascript
 * // This example deletes the specified Internet gateway.
 * const input = {
 *   InternetGatewayId: "igw-c0a643a9"
 * };
 * const command = new DeleteInternetGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteInternetGatewayCommand extends $Command
  .classBuilder<
    DeleteInternetGatewayCommandInput,
    DeleteInternetGatewayCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteInternetGateway", {})
  .n("EC2Client", "DeleteInternetGatewayCommand")
  .sc(DeleteInternetGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInternetGatewayRequest;
      output: {};
    };
    sdk: {
      input: DeleteInternetGatewayCommandInput;
      output: DeleteInternetGatewayCommandOutput;
    };
  };
}

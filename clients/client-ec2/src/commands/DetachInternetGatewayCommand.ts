// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DetachInternetGatewayRequest } from "../models/models_5";
import { DetachInternetGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachInternetGatewayCommand}.
 */
export interface DetachInternetGatewayCommandInput extends DetachInternetGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DetachInternetGatewayCommand}.
 */
export interface DetachInternetGatewayCommandOutput extends __MetadataBearer {}

/**
 * <p>Detaches an internet gateway from a VPC, disabling connectivity between the internet
 * 			and the VPC. The VPC must not contain any running instances with Elastic IP addresses or
 * 			public IPv4 addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DetachInternetGatewayRequest
 *   DryRun: true || false,
 *   InternetGatewayId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new DetachInternetGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachInternetGatewayCommandInput - {@link DetachInternetGatewayCommandInput}
 * @returns {@link DetachInternetGatewayCommandOutput}
 * @see {@link DetachInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link DetachInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To detach an Internet gateway from a VPC
 * ```javascript
 * // This example detaches the specified Internet gateway from the specified VPC.
 * const input = {
 *   InternetGatewayId: "igw-c0a643a9",
 *   VpcId: "vpc-a01106c2"
 * };
 * const command = new DetachInternetGatewayCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DetachInternetGatewayCommand extends $Command
  .classBuilder<
    DetachInternetGatewayCommandInput,
    DetachInternetGatewayCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DetachInternetGateway", {})
  .n("EC2Client", "DetachInternetGatewayCommand")
  .sc(DetachInternetGateway$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachInternetGatewayRequest;
      output: {};
    };
    sdk: {
      input: DetachInternetGatewayCommandInput;
      output: DetachInternetGatewayCommandOutput;
    };
  };
}

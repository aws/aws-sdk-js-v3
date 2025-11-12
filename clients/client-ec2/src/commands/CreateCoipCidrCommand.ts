// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCoipCidrRequest, CreateCoipCidrResult } from "../models/models_1";
import { CreateCoipCidr } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCoipCidrCommand}.
 */
export interface CreateCoipCidrCommandInput extends CreateCoipCidrRequest {}
/**
 * @public
 *
 * The output of {@link CreateCoipCidrCommand}.
 */
export interface CreateCoipCidrCommandOutput extends CreateCoipCidrResult, __MetadataBearer {}

/**
 * <p>
 *      Creates a range of customer-owned IP addresses.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateCoipCidrRequest
 *   Cidr: "STRING_VALUE", // required
 *   CoipPoolId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new CreateCoipCidrCommand(input);
 * const response = await client.send(command);
 * // { // CreateCoipCidrResult
 * //   CoipCidr: { // CoipCidr
 * //     Cidr: "STRING_VALUE",
 * //     CoipPoolId: "STRING_VALUE",
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCoipCidrCommandInput - {@link CreateCoipCidrCommandInput}
 * @returns {@link CreateCoipCidrCommandOutput}
 * @see {@link CreateCoipCidrCommandInput} for command's `input` shape.
 * @see {@link CreateCoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateCoipCidrCommand extends $Command
  .classBuilder<
    CreateCoipCidrCommandInput,
    CreateCoipCidrCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateCoipCidr", {})
  .n("EC2Client", "CreateCoipCidrCommand")
  .sc(CreateCoipCidr)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCoipCidrRequest;
      output: CreateCoipCidrResult;
    };
    sdk: {
      input: CreateCoipCidrCommandInput;
      output: CreateCoipCidrCommandOutput;
    };
  };
}

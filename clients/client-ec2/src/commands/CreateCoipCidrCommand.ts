// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCoipCidrRequest, CreateCoipCidrResult } from "../models/models_1";
import { de_CreateCoipCidrCommand, se_CreateCoipCidrCommand } from "../protocols/Aws_ec2";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateCoipCidr", {})
  .n("EC2Client", "CreateCoipCidrCommand")
  .f(void 0, void 0)
  .ser(se_CreateCoipCidrCommand)
  .de(de_CreateCoipCidrCommand)
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

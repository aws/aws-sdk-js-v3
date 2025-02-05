// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateClientVpnRouteRequest, CreateClientVpnRouteResult } from "../models/models_1";
import { de_CreateClientVpnRouteCommand, se_CreateClientVpnRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateClientVpnRouteCommand}.
 */
export interface CreateClientVpnRouteCommandInput extends CreateClientVpnRouteRequest {}
/**
 * @public
 *
 * The output of {@link CreateClientVpnRouteCommand}.
 */
export interface CreateClientVpnRouteCommandOutput extends CreateClientVpnRouteResult, __MetadataBearer {}

/**
 * <p>Adds a route to a network to a Client VPN endpoint. Each Client VPN endpoint has a route table that describes the
 * 			available destination network routes. Each route in the route table specifies the path for traﬃc to speciﬁc resources or networks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateClientVpnRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateClientVpnRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // CreateClientVpnRouteRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   TargetVpcSubnetId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new CreateClientVpnRouteCommand(input);
 * const response = await client.send(command);
 * // { // CreateClientVpnRouteResult
 * //   Status: { // ClientVpnRouteStatus
 * //     Code: "creating" || "active" || "failed" || "deleting",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateClientVpnRouteCommandInput - {@link CreateClientVpnRouteCommandInput}
 * @returns {@link CreateClientVpnRouteCommandOutput}
 * @see {@link CreateClientVpnRouteCommandInput} for command's `input` shape.
 * @see {@link CreateClientVpnRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CreateClientVpnRouteCommand extends $Command
  .classBuilder<
    CreateClientVpnRouteCommandInput,
    CreateClientVpnRouteCommandOutput,
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
  .s("AmazonEC2", "CreateClientVpnRoute", {})
  .n("EC2Client", "CreateClientVpnRouteCommand")
  .f(void 0, void 0)
  .ser(se_CreateClientVpnRouteCommand)
  .de(de_CreateClientVpnRouteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateClientVpnRouteRequest;
      output: CreateClientVpnRouteResult;
    };
    sdk: {
      input: CreateClientVpnRouteCommandInput;
      output: CreateClientVpnRouteCommandOutput;
    };
  };
}

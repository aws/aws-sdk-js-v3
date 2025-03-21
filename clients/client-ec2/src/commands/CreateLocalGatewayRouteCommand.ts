// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLocalGatewayRouteRequest } from "../models/models_1";
import { CreateLocalGatewayRouteResult } from "../models/models_2";
import { de_CreateLocalGatewayRouteCommand, se_CreateLocalGatewayRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocalGatewayRouteCommand}.
 */
export interface CreateLocalGatewayRouteCommandInput extends CreateLocalGatewayRouteRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocalGatewayRouteCommand}.
 */
export interface CreateLocalGatewayRouteCommandOutput extends CreateLocalGatewayRouteResult, __MetadataBearer {}

/**
 * <p>Creates a static route for the specified local gateway route table. You must specify one of the
 *          following targets: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>LocalGatewayVirtualInterfaceGroupId</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>NetworkInterfaceId</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLocalGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLocalGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateLocalGatewayRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE",
 *   LocalGatewayRouteTableId: "STRING_VALUE", // required
 *   LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 *   DryRun: true || false,
 *   NetworkInterfaceId: "STRING_VALUE",
 *   DestinationPrefixListId: "STRING_VALUE",
 * };
 * const command = new CreateLocalGatewayRouteCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocalGatewayRouteResult
 * //   Route: { // LocalGatewayRoute
 * //     DestinationCidrBlock: "STRING_VALUE",
 * //     LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //     Type: "static" || "propagated",
 * //     State: "pending" || "active" || "blackhole" || "deleting" || "deleted",
 * //     LocalGatewayRouteTableId: "STRING_VALUE",
 * //     LocalGatewayRouteTableArn: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     CoipPoolId: "STRING_VALUE",
 * //     NetworkInterfaceId: "STRING_VALUE",
 * //     DestinationPrefixListId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLocalGatewayRouteCommandInput - {@link CreateLocalGatewayRouteCommandInput}
 * @returns {@link CreateLocalGatewayRouteCommandOutput}
 * @see {@link CreateLocalGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link CreateLocalGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CreateLocalGatewayRouteCommand extends $Command
  .classBuilder<
    CreateLocalGatewayRouteCommandInput,
    CreateLocalGatewayRouteCommandOutput,
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
  .s("AmazonEC2", "CreateLocalGatewayRoute", {})
  .n("EC2Client", "CreateLocalGatewayRouteCommand")
  .f(void 0, void 0)
  .ser(se_CreateLocalGatewayRouteCommand)
  .de(de_CreateLocalGatewayRouteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocalGatewayRouteRequest;
      output: CreateLocalGatewayRouteResult;
    };
    sdk: {
      input: CreateLocalGatewayRouteCommandInput;
      output: CreateLocalGatewayRouteCommandOutput;
    };
  };
}

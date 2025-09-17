// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyLocalGatewayRouteRequest, ModifyLocalGatewayRouteResult } from "../models/models_7";
import { de_ModifyLocalGatewayRouteCommand, se_ModifyLocalGatewayRouteCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyLocalGatewayRouteCommand}.
 */
export interface ModifyLocalGatewayRouteCommandInput extends ModifyLocalGatewayRouteRequest {}
/**
 * @public
 *
 * The output of {@link ModifyLocalGatewayRouteCommand}.
 */
export interface ModifyLocalGatewayRouteCommandOutput extends ModifyLocalGatewayRouteResult, __MetadataBearer {}

/**
 * <p>Modifies the specified local gateway route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyLocalGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyLocalGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyLocalGatewayRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE",
 *   LocalGatewayRouteTableId: "STRING_VALUE", // required
 *   LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 *   NetworkInterfaceId: "STRING_VALUE",
 *   DryRun: true || false,
 *   DestinationPrefixListId: "STRING_VALUE",
 * };
 * const command = new ModifyLocalGatewayRouteCommand(input);
 * const response = await client.send(command);
 * // { // ModifyLocalGatewayRouteResult
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
 * @param ModifyLocalGatewayRouteCommandInput - {@link ModifyLocalGatewayRouteCommandInput}
 * @returns {@link ModifyLocalGatewayRouteCommandOutput}
 * @see {@link ModifyLocalGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link ModifyLocalGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyLocalGatewayRouteCommand extends $Command
  .classBuilder<
    ModifyLocalGatewayRouteCommandInput,
    ModifyLocalGatewayRouteCommandOutput,
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
  .s("AmazonEC2", "ModifyLocalGatewayRoute", {})
  .n("EC2Client", "ModifyLocalGatewayRouteCommand")
  .f(void 0, void 0)
  .ser(se_ModifyLocalGatewayRouteCommand)
  .de(de_ModifyLocalGatewayRouteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyLocalGatewayRouteRequest;
      output: ModifyLocalGatewayRouteResult;
    };
    sdk: {
      input: ModifyLocalGatewayRouteCommandInput;
      output: ModifyLocalGatewayRouteCommandOutput;
    };
  };
}

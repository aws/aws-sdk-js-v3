// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteLocalGatewayRouteRequest, DeleteLocalGatewayRouteResult } from "../models/models_2";
import { DeleteLocalGatewayRoute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLocalGatewayRouteCommand}.
 */
export interface DeleteLocalGatewayRouteCommandInput extends DeleteLocalGatewayRouteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLocalGatewayRouteCommand}.
 */
export interface DeleteLocalGatewayRouteCommandOutput extends DeleteLocalGatewayRouteResult, __MetadataBearer {}

/**
 * <p>Deletes the specified route from the specified local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteLocalGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteLocalGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteLocalGatewayRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE",
 *   LocalGatewayRouteTableId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   DestinationPrefixListId: "STRING_VALUE",
 * };
 * const command = new DeleteLocalGatewayRouteCommand(input);
 * const response = await client.send(command);
 * // { // DeleteLocalGatewayRouteResult
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
 * @param DeleteLocalGatewayRouteCommandInput - {@link DeleteLocalGatewayRouteCommandInput}
 * @returns {@link DeleteLocalGatewayRouteCommandOutput}
 * @see {@link DeleteLocalGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteLocalGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteLocalGatewayRouteCommand extends $Command
  .classBuilder<
    DeleteLocalGatewayRouteCommandInput,
    DeleteLocalGatewayRouteCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteLocalGatewayRoute", {})
  .n("EC2Client", "DeleteLocalGatewayRouteCommand")
  .sc(DeleteLocalGatewayRoute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLocalGatewayRouteRequest;
      output: DeleteLocalGatewayRouteResult;
    };
    sdk: {
      input: DeleteLocalGatewayRouteCommandInput;
      output: DeleteLocalGatewayRouteCommandOutput;
    };
  };
}

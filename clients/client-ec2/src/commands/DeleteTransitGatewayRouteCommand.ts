// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTransitGatewayRouteRequest, DeleteTransitGatewayRouteResult } from "../models/models_3";
import { DeleteTransitGatewayRoute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayRouteCommand}.
 */
export interface DeleteTransitGatewayRouteCommandInput extends DeleteTransitGatewayRouteRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayRouteCommand}.
 */
export interface DeleteTransitGatewayRouteCommandOutput extends DeleteTransitGatewayRouteResult, __MetadataBearer {}

/**
 * <p>Deletes the specified route from the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayRouteRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayRouteCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayRouteResult
 * //   Route: { // TransitGatewayRoute
 * //     DestinationCidrBlock: "STRING_VALUE",
 * //     PrefixListId: "STRING_VALUE",
 * //     TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * //     TransitGatewayAttachments: [ // TransitGatewayRouteAttachmentList
 * //       { // TransitGatewayRouteAttachment
 * //         ResourceId: "STRING_VALUE",
 * //         TransitGatewayAttachmentId: "STRING_VALUE",
 * //         ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //       },
 * //     ],
 * //     Type: "static" || "propagated",
 * //     State: "pending" || "active" || "blackhole" || "deleting" || "deleted",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteTransitGatewayRouteCommandInput - {@link DeleteTransitGatewayRouteCommandInput}
 * @returns {@link DeleteTransitGatewayRouteCommandOutput}
 * @see {@link DeleteTransitGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteTransitGatewayRouteCommand extends $Command
  .classBuilder<
    DeleteTransitGatewayRouteCommandInput,
    DeleteTransitGatewayRouteCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DeleteTransitGatewayRoute", {})
  .n("EC2Client", "DeleteTransitGatewayRouteCommand")
  .sc(DeleteTransitGatewayRoute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTransitGatewayRouteRequest;
      output: DeleteTransitGatewayRouteResult;
    };
    sdk: {
      input: DeleteTransitGatewayRouteCommandInput;
      output: DeleteTransitGatewayRouteCommandOutput;
    };
  };
}

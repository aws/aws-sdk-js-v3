// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ReplaceTransitGatewayRouteRequest, ReplaceTransitGatewayRouteResult } from "../models/models_7";
import { ReplaceTransitGatewayRoute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReplaceTransitGatewayRouteCommand}.
 */
export interface ReplaceTransitGatewayRouteCommandInput extends ReplaceTransitGatewayRouteRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceTransitGatewayRouteCommand}.
 */
export interface ReplaceTransitGatewayRouteCommandOutput extends ReplaceTransitGatewayRouteResult, __MetadataBearer {}

/**
 * <p>Replaces the specified route in the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceTransitGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceTransitGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ReplaceTransitGatewayRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   Blackhole: true || false,
 *   DryRun: true || false,
 * };
 * const command = new ReplaceTransitGatewayRouteCommand(input);
 * const response = await client.send(command);
 * // { // ReplaceTransitGatewayRouteResult
 * //   Route: { // TransitGatewayRoute
 * //     DestinationCidrBlock: "STRING_VALUE",
 * //     PrefixListId: "STRING_VALUE",
 * //     TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * //     TransitGatewayAttachments: [ // TransitGatewayRouteAttachmentList
 * //       { // TransitGatewayRouteAttachment
 * //         ResourceId: "STRING_VALUE",
 * //         TransitGatewayAttachmentId: "STRING_VALUE",
 * //         ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function" || "client-vpn",
 * //       },
 * //     ],
 * //     Type: "static" || "propagated",
 * //     State: "pending" || "active" || "blackhole" || "deleting" || "deleted",
 * //   },
 * // };
 *
 * ```
 *
 * @param ReplaceTransitGatewayRouteCommandInput - {@link ReplaceTransitGatewayRouteCommandInput}
 * @returns {@link ReplaceTransitGatewayRouteCommandOutput}
 * @see {@link ReplaceTransitGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link ReplaceTransitGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ReplaceTransitGatewayRouteCommand extends command<ReplaceTransitGatewayRouteCommandInput, ReplaceTransitGatewayRouteCommandOutput>(
  _ep0,
  _mw0,
  "ReplaceTransitGatewayRoute",
  ReplaceTransitGatewayRoute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReplaceTransitGatewayRouteRequest;
      output: ReplaceTransitGatewayRouteResult;
    };
    sdk: {
      input: ReplaceTransitGatewayRouteCommandInput;
      output: ReplaceTransitGatewayRouteCommandOutput;
    };
  };
}

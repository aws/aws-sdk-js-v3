// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTransitGatewayRouteRequest, CreateTransitGatewayRouteResult } from "../models/models_2";
import { CreateTransitGatewayRoute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTransitGatewayRouteCommand}.
 */
export interface CreateTransitGatewayRouteCommandInput extends CreateTransitGatewayRouteRequest {}
/**
 * @public
 *
 * The output of {@link CreateTransitGatewayRouteCommand}.
 */
export interface CreateTransitGatewayRouteCommandOutput extends CreateTransitGatewayRouteResult, __MetadataBearer {}

/**
 * <p>Creates a static route for the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayRouteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayRouteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateTransitGatewayRouteRequest
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   Blackhole: true || false,
 *   DryRun: true || false,
 * };
 * const command = new CreateTransitGatewayRouteCommand(input);
 * const response = await client.send(command);
 * // { // CreateTransitGatewayRouteResult
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
 * @param CreateTransitGatewayRouteCommandInput - {@link CreateTransitGatewayRouteCommandInput}
 * @returns {@link CreateTransitGatewayRouteCommandOutput}
 * @see {@link CreateTransitGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateTransitGatewayRouteCommand extends command<CreateTransitGatewayRouteCommandInput, CreateTransitGatewayRouteCommandOutput>(
  _ep0,
  _mw0,
  "CreateTransitGatewayRoute",
  CreateTransitGatewayRoute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTransitGatewayRouteRequest;
      output: CreateTransitGatewayRouteResult;
    };
    sdk: {
      input: CreateTransitGatewayRouteCommandInput;
      output: CreateTransitGatewayRouteCommandOutput;
    };
  };
}

// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateTransitGatewayRouteTableRequest,
  DisassociateTransitGatewayRouteTableResult,
} from "../models/models_5";
import { DisassociateTransitGatewayRouteTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateTransitGatewayRouteTableCommand}.
 */
export interface DisassociateTransitGatewayRouteTableCommandInput extends DisassociateTransitGatewayRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateTransitGatewayRouteTableCommand}.
 */
export interface DisassociateTransitGatewayRouteTableCommandOutput extends DisassociateTransitGatewayRouteTableResult, __MetadataBearer {}

/**
 * <p>Disassociates a resource attachment from a transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateTransitGatewayRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateTransitGatewayRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateTransitGatewayRouteTableRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateTransitGatewayRouteTableCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateTransitGatewayRouteTableResult
 * //   Association: { // TransitGatewayAssociation
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function" || "client-vpn",
 * //     State: "associating" || "associated" || "disassociating" || "disassociated",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateTransitGatewayRouteTableCommandInput - {@link DisassociateTransitGatewayRouteTableCommandInput}
 * @returns {@link DisassociateTransitGatewayRouteTableCommandOutput}
 * @see {@link DisassociateTransitGatewayRouteTableCommandInput} for command's `input` shape.
 * @see {@link DisassociateTransitGatewayRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateTransitGatewayRouteTableCommand extends command<DisassociateTransitGatewayRouteTableCommandInput, DisassociateTransitGatewayRouteTableCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateTransitGatewayRouteTable",
  DisassociateTransitGatewayRouteTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateTransitGatewayRouteTableRequest;
      output: DisassociateTransitGatewayRouteTableResult;
    };
    sdk: {
      input: DisassociateTransitGatewayRouteTableCommandInput;
      output: DisassociateTransitGatewayRouteTableCommandOutput;
    };
  };
}

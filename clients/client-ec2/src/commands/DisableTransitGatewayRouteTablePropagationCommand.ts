// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisableTransitGatewayRouteTablePropagationRequest,
  DisableTransitGatewayRouteTablePropagationResult,
} from "../models/models_5";
import { DisableTransitGatewayRouteTablePropagation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableTransitGatewayRouteTablePropagationCommand}.
 */
export interface DisableTransitGatewayRouteTablePropagationCommandInput
  extends DisableTransitGatewayRouteTablePropagationRequest {}
/**
 * @public
 *
 * The output of {@link DisableTransitGatewayRouteTablePropagationCommand}.
 */
export interface DisableTransitGatewayRouteTablePropagationCommandOutput
  extends DisableTransitGatewayRouteTablePropagationResult,
    __MetadataBearer {}

/**
 * <p>Disables the specified resource attachment from propagating routes to the specified
 *          propagation route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableTransitGatewayRouteTablePropagationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableTransitGatewayRouteTablePropagationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableTransitGatewayRouteTablePropagationRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   DryRun: true || false,
 *   TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * };
 * const command = new DisableTransitGatewayRouteTablePropagationCommand(input);
 * const response = await client.send(command);
 * // { // DisableTransitGatewayRouteTablePropagationResult
 * //   Propagation: { // TransitGatewayPropagation
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "vpn-concentrator" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering" || "network-function",
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     State: "enabling" || "enabled" || "disabling" || "disabled",
 * //     TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisableTransitGatewayRouteTablePropagationCommandInput - {@link DisableTransitGatewayRouteTablePropagationCommandInput}
 * @returns {@link DisableTransitGatewayRouteTablePropagationCommandOutput}
 * @see {@link DisableTransitGatewayRouteTablePropagationCommandInput} for command's `input` shape.
 * @see {@link DisableTransitGatewayRouteTablePropagationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableTransitGatewayRouteTablePropagationCommand extends $Command
  .classBuilder<
    DisableTransitGatewayRouteTablePropagationCommandInput,
    DisableTransitGatewayRouteTablePropagationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisableTransitGatewayRouteTablePropagation", {})
  .n("EC2Client", "DisableTransitGatewayRouteTablePropagationCommand")
  .sc(DisableTransitGatewayRouteTablePropagation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableTransitGatewayRouteTablePropagationRequest;
      output: DisableTransitGatewayRouteTablePropagationResult;
    };
    sdk: {
      input: DisableTransitGatewayRouteTablePropagationCommandInput;
      output: DisableTransitGatewayRouteTablePropagationCommandOutput;
    };
  };
}

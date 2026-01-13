// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetVpnTunnelReplacementStatusRequest, GetVpnTunnelReplacementStatusResult } from "../models/models_6";
import { GetVpnTunnelReplacementStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVpnTunnelReplacementStatusCommand}.
 */
export interface GetVpnTunnelReplacementStatusCommandInput extends GetVpnTunnelReplacementStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetVpnTunnelReplacementStatusCommand}.
 */
export interface GetVpnTunnelReplacementStatusCommandOutput extends GetVpnTunnelReplacementStatusResult, __MetadataBearer {}

/**
 * <p>Get details of available tunnel endpoint maintenance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVpnTunnelReplacementStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVpnTunnelReplacementStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetVpnTunnelReplacementStatusRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   VpnTunnelOutsideIpAddress: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetVpnTunnelReplacementStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetVpnTunnelReplacementStatusResult
 * //   VpnConnectionId: "STRING_VALUE",
 * //   TransitGatewayId: "STRING_VALUE",
 * //   CustomerGatewayId: "STRING_VALUE",
 * //   VpnGatewayId: "STRING_VALUE",
 * //   VpnTunnelOutsideIpAddress: "STRING_VALUE",
 * //   MaintenanceDetails: { // MaintenanceDetails
 * //     PendingMaintenance: "STRING_VALUE",
 * //     MaintenanceAutoAppliedAfter: new Date("TIMESTAMP"),
 * //     LastMaintenanceApplied: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVpnTunnelReplacementStatusCommandInput - {@link GetVpnTunnelReplacementStatusCommandInput}
 * @returns {@link GetVpnTunnelReplacementStatusCommandOutput}
 * @see {@link GetVpnTunnelReplacementStatusCommandInput} for command's `input` shape.
 * @see {@link GetVpnTunnelReplacementStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetVpnTunnelReplacementStatusCommand extends $Command
  .classBuilder<
    GetVpnTunnelReplacementStatusCommandInput,
    GetVpnTunnelReplacementStatusCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetVpnTunnelReplacementStatus", {})
  .n("EC2Client", "GetVpnTunnelReplacementStatusCommand")
  .sc(GetVpnTunnelReplacementStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVpnTunnelReplacementStatusRequest;
      output: GetVpnTunnelReplacementStatusResult;
    };
    sdk: {
      input: GetVpnTunnelReplacementStatusCommandInput;
      output: GetVpnTunnelReplacementStatusCommandOutput;
    };
  };
}

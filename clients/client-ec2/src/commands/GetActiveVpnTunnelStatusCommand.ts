// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetActiveVpnTunnelStatusRequest, GetActiveVpnTunnelStatusResult } from "../models/models_5";
import { GetActiveVpnTunnelStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetActiveVpnTunnelStatusCommand}.
 */
export interface GetActiveVpnTunnelStatusCommandInput extends GetActiveVpnTunnelStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetActiveVpnTunnelStatusCommand}.
 */
export interface GetActiveVpnTunnelStatusCommandOutput extends GetActiveVpnTunnelStatusResult, __MetadataBearer {}

/**
 * <p>Returns the currently negotiated security parameters for an active VPN tunnel, including IKE version, DH groups, encryption algorithms, and integrity algorithms.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetActiveVpnTunnelStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetActiveVpnTunnelStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetActiveVpnTunnelStatusRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   VpnTunnelOutsideIpAddress: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetActiveVpnTunnelStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetActiveVpnTunnelStatusResult
 * //   ActiveVpnTunnelStatus: { // ActiveVpnTunnelStatus
 * //     Phase1EncryptionAlgorithm: "STRING_VALUE",
 * //     Phase2EncryptionAlgorithm: "STRING_VALUE",
 * //     Phase1IntegrityAlgorithm: "STRING_VALUE",
 * //     Phase2IntegrityAlgorithm: "STRING_VALUE",
 * //     Phase1DHGroup: Number("int"),
 * //     Phase2DHGroup: Number("int"),
 * //     IkeVersion: "STRING_VALUE",
 * //     ProvisioningStatus: "available" || "pending" || "failed",
 * //     ProvisioningStatusReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetActiveVpnTunnelStatusCommandInput - {@link GetActiveVpnTunnelStatusCommandInput}
 * @returns {@link GetActiveVpnTunnelStatusCommandOutput}
 * @see {@link GetActiveVpnTunnelStatusCommandInput} for command's `input` shape.
 * @see {@link GetActiveVpnTunnelStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetActiveVpnTunnelStatusCommand extends $Command
  .classBuilder<
    GetActiveVpnTunnelStatusCommandInput,
    GetActiveVpnTunnelStatusCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetActiveVpnTunnelStatus", {})
  .n("EC2Client", "GetActiveVpnTunnelStatusCommand")
  .sc(GetActiveVpnTunnelStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetActiveVpnTunnelStatusRequest;
      output: GetActiveVpnTunnelStatusResult;
    };
    sdk: {
      input: GetActiveVpnTunnelStatusCommandInput;
      output: GetActiveVpnTunnelStatusCommandOutput;
    };
  };
}

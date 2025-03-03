// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { TerminateClientVpnConnectionsRequest, TerminateClientVpnConnectionsResult } from "../models/models_8";
import { de_TerminateClientVpnConnectionsCommand, se_TerminateClientVpnConnectionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateClientVpnConnectionsCommand}.
 */
export interface TerminateClientVpnConnectionsCommandInput extends TerminateClientVpnConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link TerminateClientVpnConnectionsCommand}.
 */
export interface TerminateClientVpnConnectionsCommandOutput
  extends TerminateClientVpnConnectionsResult,
    __MetadataBearer {}

/**
 * <p>Terminates active Client VPN endpoint connections. This action can be used to terminate a specific client connection, or up to five connections established by a specific user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, TerminateClientVpnConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, TerminateClientVpnConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // TerminateClientVpnConnectionsRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   ConnectionId: "STRING_VALUE",
 *   Username: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new TerminateClientVpnConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // TerminateClientVpnConnectionsResult
 * //   ClientVpnEndpointId: "STRING_VALUE",
 * //   Username: "STRING_VALUE",
 * //   ConnectionStatuses: [ // TerminateConnectionStatusSet
 * //     { // TerminateConnectionStatus
 * //       ConnectionId: "STRING_VALUE",
 * //       PreviousStatus: { // ClientVpnConnectionStatus
 * //         Code: "active" || "failed-to-terminate" || "terminating" || "terminated",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       CurrentStatus: {
 * //         Code: "active" || "failed-to-terminate" || "terminating" || "terminated",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param TerminateClientVpnConnectionsCommandInput - {@link TerminateClientVpnConnectionsCommandInput}
 * @returns {@link TerminateClientVpnConnectionsCommandOutput}
 * @see {@link TerminateClientVpnConnectionsCommandInput} for command's `input` shape.
 * @see {@link TerminateClientVpnConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class TerminateClientVpnConnectionsCommand extends $Command
  .classBuilder<
    TerminateClientVpnConnectionsCommandInput,
    TerminateClientVpnConnectionsCommandOutput,
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
  .s("AmazonEC2", "TerminateClientVpnConnections", {})
  .n("EC2Client", "TerminateClientVpnConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_TerminateClientVpnConnectionsCommand)
  .de(de_TerminateClientVpnConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TerminateClientVpnConnectionsRequest;
      output: TerminateClientVpnConnectionsResult;
    };
    sdk: {
      input: TerminateClientVpnConnectionsCommandInput;
      output: TerminateClientVpnConnectionsCommandOutput;
    };
  };
}

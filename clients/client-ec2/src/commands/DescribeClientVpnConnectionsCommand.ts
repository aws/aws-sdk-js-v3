// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClientVpnConnectionsRequest, DescribeClientVpnConnectionsResult } from "../models/models_4";
import { de_DescribeClientVpnConnectionsCommand, se_DescribeClientVpnConnectionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientVpnConnectionsCommand}.
 */
export interface DescribeClientVpnConnectionsCommandInput extends DescribeClientVpnConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientVpnConnectionsCommand}.
 */
export interface DescribeClientVpnConnectionsCommandOutput
  extends DescribeClientVpnConnectionsResult,
    __MetadataBearer {}

/**
 * <p>Describes active client connections and connections that have been terminated within the last 60
 * 			minutes for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeClientVpnConnectionsRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new DescribeClientVpnConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientVpnConnectionsResult
 * //   Connections: [ // ClientVpnConnectionSet
 * //     { // ClientVpnConnection
 * //       ClientVpnEndpointId: "STRING_VALUE",
 * //       Timestamp: "STRING_VALUE",
 * //       ConnectionId: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //       ConnectionEstablishedTime: "STRING_VALUE",
 * //       IngressBytes: "STRING_VALUE",
 * //       EgressBytes: "STRING_VALUE",
 * //       IngressPackets: "STRING_VALUE",
 * //       EgressPackets: "STRING_VALUE",
 * //       ClientIp: "STRING_VALUE",
 * //       CommonName: "STRING_VALUE",
 * //       Status: { // ClientVpnConnectionStatus
 * //         Code: "active" || "failed-to-terminate" || "terminating" || "terminated",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ConnectionEndTime: "STRING_VALUE",
 * //       PostureComplianceStatuses: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClientVpnConnectionsCommandInput - {@link DescribeClientVpnConnectionsCommandInput}
 * @returns {@link DescribeClientVpnConnectionsCommandOutput}
 * @see {@link DescribeClientVpnConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeClientVpnConnectionsCommand extends $Command
  .classBuilder<
    DescribeClientVpnConnectionsCommandInput,
    DescribeClientVpnConnectionsCommandOutput,
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
  .s("AmazonEC2", "DescribeClientVpnConnections", {})
  .n("EC2Client", "DescribeClientVpnConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClientVpnConnectionsCommand)
  .de(de_DescribeClientVpnConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClientVpnConnectionsRequest;
      output: DescribeClientVpnConnectionsResult;
    };
    sdk: {
      input: DescribeClientVpnConnectionsCommandInput;
      output: DescribeClientVpnConnectionsCommandOutput;
    };
  };
}

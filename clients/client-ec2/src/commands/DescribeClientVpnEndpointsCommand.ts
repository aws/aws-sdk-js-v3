// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClientVpnEndpointsRequest, DescribeClientVpnEndpointsResult } from "../models/models_3";
import { de_DescribeClientVpnEndpointsCommand, se_DescribeClientVpnEndpointsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientVpnEndpointsCommand}.
 */
export interface DescribeClientVpnEndpointsCommandInput extends DescribeClientVpnEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientVpnEndpointsCommand}.
 */
export interface DescribeClientVpnEndpointsCommandOutput extends DescribeClientVpnEndpointsResult, __MetadataBearer {}

/**
 * <p>Describes one or more Client VPN endpoints in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeClientVpnEndpointsRequest
 *   ClientVpnEndpointIds: [ // ClientVpnEndpointIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeClientVpnEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientVpnEndpointsResult
 * //   ClientVpnEndpoints: [ // EndpointSet
 * //     { // ClientVpnEndpoint
 * //       ClientVpnEndpointId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: { // ClientVpnEndpointStatus
 * //         Code: "pending-associate" || "available" || "deleting" || "deleted",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       CreationTime: "STRING_VALUE",
 * //       DeletionTime: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       ClientCidrBlock: "STRING_VALUE",
 * //       DnsServers: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SplitTunnel: true || false,
 * //       VpnProtocol: "openvpn",
 * //       TransportProtocol: "tcp" || "udp",
 * //       VpnPort: Number("int"),
 * //       AssociatedTargetNetworks: [ // AssociatedTargetNetworkSet
 * //         { // AssociatedTargetNetwork
 * //           NetworkId: "STRING_VALUE",
 * //           NetworkType: "vpc",
 * //         },
 * //       ],
 * //       ServerCertificateArn: "STRING_VALUE",
 * //       AuthenticationOptions: [ // ClientVpnAuthenticationList
 * //         { // ClientVpnAuthentication
 * //           Type: "certificate-authentication" || "directory-service-authentication" || "federated-authentication",
 * //           ActiveDirectory: { // DirectoryServiceAuthentication
 * //             DirectoryId: "STRING_VALUE",
 * //           },
 * //           MutualAuthentication: { // CertificateAuthentication
 * //             ClientRootCertificateChain: "STRING_VALUE",
 * //           },
 * //           FederatedAuthentication: { // FederatedAuthentication
 * //             SamlProviderArn: "STRING_VALUE",
 * //             SelfServiceSamlProviderArn: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       ConnectionLogOptions: { // ConnectionLogResponseOptions
 * //         Enabled: true || false,
 * //         CloudwatchLogGroup: "STRING_VALUE",
 * //         CloudwatchLogStream: "STRING_VALUE",
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SecurityGroupIds: [ // ClientVpnSecurityGroupIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //       SelfServicePortalUrl: "STRING_VALUE",
 * //       ClientConnectOptions: { // ClientConnectResponseOptions
 * //         Enabled: true || false,
 * //         LambdaFunctionArn: "STRING_VALUE",
 * //         Status: { // ClientVpnEndpointAttributeStatus
 * //           Code: "applying" || "applied",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //       SessionTimeoutHours: Number("int"),
 * //       ClientLoginBannerOptions: { // ClientLoginBannerResponseOptions
 * //         Enabled: true || false,
 * //         BannerText: "STRING_VALUE",
 * //       },
 * //       DisconnectOnSessionTimeout: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClientVpnEndpointsCommandInput - {@link DescribeClientVpnEndpointsCommandInput}
 * @returns {@link DescribeClientVpnEndpointsCommandOutput}
 * @see {@link DescribeClientVpnEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeClientVpnEndpointsCommand extends $Command
  .classBuilder<
    DescribeClientVpnEndpointsCommandInput,
    DescribeClientVpnEndpointsCommandOutput,
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
  .s("AmazonEC2", "DescribeClientVpnEndpoints", {})
  .n("EC2Client", "DescribeClientVpnEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClientVpnEndpointsCommand)
  .de(de_DescribeClientVpnEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClientVpnEndpointsRequest;
      output: DescribeClientVpnEndpointsResult;
    };
    sdk: {
      input: DescribeClientVpnEndpointsCommandInput;
      output: DescribeClientVpnEndpointsCommandOutput;
    };
  };
}

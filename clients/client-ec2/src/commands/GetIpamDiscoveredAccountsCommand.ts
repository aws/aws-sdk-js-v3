// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamDiscoveredAccountsRequest, GetIpamDiscoveredAccountsResult } from "../models/models_7";
import { de_GetIpamDiscoveredAccountsCommand, se_GetIpamDiscoveredAccountsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamDiscoveredAccountsCommand}.
 */
export interface GetIpamDiscoveredAccountsCommandInput extends GetIpamDiscoveredAccountsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamDiscoveredAccountsCommand}.
 */
export interface GetIpamDiscoveredAccountsCommandOutput extends GetIpamDiscoveredAccountsResult, __MetadataBearer {}

/**
 * <p>Gets IPAM discovered accounts. A discovered account is an Amazon Web Services account that is monitored under a resource discovery. If you have integrated IPAM with Amazon Web Services Organizations, all accounts in the organization are discovered accounts. Only the IPAM account can get all discovered accounts in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamDiscoveredAccountsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamDiscoveredAccountsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamDiscoveredAccountsRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryId: "STRING_VALUE", // required
 *   DiscoveryRegion: "STRING_VALUE", // required
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
 * };
 * const command = new GetIpamDiscoveredAccountsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamDiscoveredAccountsResult
 * //   IpamDiscoveredAccounts: [ // IpamDiscoveredAccountSet
 * //     { // IpamDiscoveredAccount
 * //       AccountId: "STRING_VALUE",
 * //       DiscoveryRegion: "STRING_VALUE",
 * //       FailureReason: { // IpamDiscoveryFailureReason
 * //         Code: "assume-role-failure" || "throttling-failure" || "unauthorized-failure",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       LastAttemptedDiscoveryTime: new Date("TIMESTAMP"),
 * //       LastSuccessfulDiscoveryTime: new Date("TIMESTAMP"),
 * //       OrganizationalUnitId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamDiscoveredAccountsCommandInput - {@link GetIpamDiscoveredAccountsCommandInput}
 * @returns {@link GetIpamDiscoveredAccountsCommandOutput}
 * @see {@link GetIpamDiscoveredAccountsCommandInput} for command's `input` shape.
 * @see {@link GetIpamDiscoveredAccountsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamDiscoveredAccountsCommand extends $Command
  .classBuilder<
    GetIpamDiscoveredAccountsCommandInput,
    GetIpamDiscoveredAccountsCommandOutput,
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
  .s("AmazonEC2", "GetIpamDiscoveredAccounts", {})
  .n("EC2Client", "GetIpamDiscoveredAccountsCommand")
  .f(void 0, void 0)
  .ser(se_GetIpamDiscoveredAccountsCommand)
  .de(de_GetIpamDiscoveredAccountsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamDiscoveredAccountsRequest;
      output: GetIpamDiscoveredAccountsResult;
    };
    sdk: {
      input: GetIpamDiscoveredAccountsCommandInput;
      output: GetIpamDiscoveredAccountsCommandOutput;
    };
  };
}

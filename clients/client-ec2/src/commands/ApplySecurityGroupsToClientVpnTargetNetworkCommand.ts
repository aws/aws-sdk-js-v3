// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ApplySecurityGroupsToClientVpnTargetNetworkRequest,
  ApplySecurityGroupsToClientVpnTargetNetworkResult,
} from "../models/models_0";
import { ApplySecurityGroupsToClientVpnTargetNetwork } from "../schemas/schemas_1_Vpn";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ApplySecurityGroupsToClientVpnTargetNetworkCommand}.
 */
export interface ApplySecurityGroupsToClientVpnTargetNetworkCommandInput
  extends ApplySecurityGroupsToClientVpnTargetNetworkRequest {}
/**
 * @public
 *
 * The output of {@link ApplySecurityGroupsToClientVpnTargetNetworkCommand}.
 */
export interface ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput
  extends ApplySecurityGroupsToClientVpnTargetNetworkResult,
    __MetadataBearer {}

/**
 * <p>Applies a security group to the association between the target network and the Client VPN endpoint. This action replaces the existing
 * 			security groups with the specified security groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ApplySecurityGroupsToClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ApplySecurityGroupsToClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ApplySecurityGroupsToClientVpnTargetNetworkRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 *   SecurityGroupIds: [ // ClientVpnSecurityGroupIdSet // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ApplySecurityGroupsToClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * // { // ApplySecurityGroupsToClientVpnTargetNetworkResult
 * //   SecurityGroupIds: [ // ClientVpnSecurityGroupIdSet
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ApplySecurityGroupsToClientVpnTargetNetworkCommandInput - {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandInput}
 * @returns {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput}
 * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ApplySecurityGroupsToClientVpnTargetNetworkCommand extends $Command
  .classBuilder<
    ApplySecurityGroupsToClientVpnTargetNetworkCommandInput,
    ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ApplySecurityGroupsToClientVpnTargetNetwork", {})
  .n("EC2Client", "ApplySecurityGroupsToClientVpnTargetNetworkCommand")
  .sc(ApplySecurityGroupsToClientVpnTargetNetwork)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApplySecurityGroupsToClientVpnTargetNetworkRequest;
      output: ApplySecurityGroupsToClientVpnTargetNetworkResult;
    };
    sdk: {
      input: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput;
      output: ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput;
    };
  };
}

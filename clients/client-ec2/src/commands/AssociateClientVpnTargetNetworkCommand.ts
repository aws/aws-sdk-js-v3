// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateClientVpnTargetNetworkRequest, AssociateClientVpnTargetNetworkResult } from "../models/models_0";
import { AssociateClientVpnTargetNetwork } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateClientVpnTargetNetworkCommand}.
 */
export interface AssociateClientVpnTargetNetworkCommandInput extends AssociateClientVpnTargetNetworkRequest {}
/**
 * @public
 *
 * The output of {@link AssociateClientVpnTargetNetworkCommand}.
 */
export interface AssociateClientVpnTargetNetworkCommandOutput
  extends AssociateClientVpnTargetNetworkResult,
    __MetadataBearer {}

/**
 * <p>Associates a target network with a Client VPN endpoint. A target network is a subnet in a VPC. You can associate multiple subnets from the same VPC with a Client VPN endpoint. You can associate only one subnet in each Availability Zone. We recommend that you associate at least two subnets to provide Availability Zone redundancy.</p>
 *          <p>If you specified a VPC when you created the Client VPN endpoint or if you have previous subnet associations, the specified subnet must be in the same VPC. To specify a subnet that's in a different VPC, you must first modify the Client VPN endpoint (<a>ModifyClientVpnEndpoint</a>) and change the VPC that's associated with it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateClientVpnTargetNetworkCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateClientVpnTargetNetworkCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateClientVpnTargetNetworkRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   SubnetId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new AssociateClientVpnTargetNetworkCommand(input);
 * const response = await client.send(command);
 * // { // AssociateClientVpnTargetNetworkResult
 * //   AssociationId: "STRING_VALUE",
 * //   Status: { // AssociationStatus
 * //     Code: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated",
 * //     Message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateClientVpnTargetNetworkCommandInput - {@link AssociateClientVpnTargetNetworkCommandInput}
 * @returns {@link AssociateClientVpnTargetNetworkCommandOutput}
 * @see {@link AssociateClientVpnTargetNetworkCommandInput} for command's `input` shape.
 * @see {@link AssociateClientVpnTargetNetworkCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AssociateClientVpnTargetNetworkCommand extends $Command
  .classBuilder<
    AssociateClientVpnTargetNetworkCommandInput,
    AssociateClientVpnTargetNetworkCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "AssociateClientVpnTargetNetwork", {})
  .n("EC2Client", "AssociateClientVpnTargetNetworkCommand")
  .sc(AssociateClientVpnTargetNetwork)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateClientVpnTargetNetworkRequest;
      output: AssociateClientVpnTargetNetworkResult;
    };
    sdk: {
      input: AssociateClientVpnTargetNetworkCommandInput;
      output: AssociateClientVpnTargetNetworkCommandOutput;
    };
  };
}

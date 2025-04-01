// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeClientVpnTargetNetworksRequest, DescribeClientVpnTargetNetworksResult } from "../models/models_3";
import {
  de_DescribeClientVpnTargetNetworksCommand,
  se_DescribeClientVpnTargetNetworksCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClientVpnTargetNetworksCommand}.
 */
export interface DescribeClientVpnTargetNetworksCommandInput extends DescribeClientVpnTargetNetworksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClientVpnTargetNetworksCommand}.
 */
export interface DescribeClientVpnTargetNetworksCommandOutput
  extends DescribeClientVpnTargetNetworksResult,
    __MetadataBearer {}

/**
 * <p>Describes the target networks associated with the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeClientVpnTargetNetworksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeClientVpnTargetNetworksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeClientVpnTargetNetworksRequest
 *   ClientVpnEndpointId: "STRING_VALUE", // required
 *   AssociationIds: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeClientVpnTargetNetworksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClientVpnTargetNetworksResult
 * //   ClientVpnTargetNetworks: [ // TargetNetworkSet
 * //     { // TargetNetwork
 * //       AssociationId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       TargetNetworkId: "STRING_VALUE",
 * //       ClientVpnEndpointId: "STRING_VALUE",
 * //       Status: { // AssociationStatus
 * //         Code: "associating" || "associated" || "association-failed" || "disassociating" || "disassociated",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       SecurityGroups: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClientVpnTargetNetworksCommandInput - {@link DescribeClientVpnTargetNetworksCommandInput}
 * @returns {@link DescribeClientVpnTargetNetworksCommandOutput}
 * @see {@link DescribeClientVpnTargetNetworksCommandInput} for command's `input` shape.
 * @see {@link DescribeClientVpnTargetNetworksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeClientVpnTargetNetworksCommand extends $Command
  .classBuilder<
    DescribeClientVpnTargetNetworksCommandInput,
    DescribeClientVpnTargetNetworksCommandOutput,
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
  .s("AmazonEC2", "DescribeClientVpnTargetNetworks", {})
  .n("EC2Client", "DescribeClientVpnTargetNetworksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeClientVpnTargetNetworksCommand)
  .de(de_DescribeClientVpnTargetNetworksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClientVpnTargetNetworksRequest;
      output: DescribeClientVpnTargetNetworksResult;
    };
    sdk: {
      input: DescribeClientVpnTargetNetworksCommandInput;
      output: DescribeClientVpnTargetNetworksCommandOutput;
    };
  };
}

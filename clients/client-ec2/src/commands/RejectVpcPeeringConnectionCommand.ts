// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RejectVpcPeeringConnectionRequest, RejectVpcPeeringConnectionResult } from "../models/models_8";
import { de_RejectVpcPeeringConnectionCommand, se_RejectVpcPeeringConnectionCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectVpcPeeringConnectionCommand}.
 */
export interface RejectVpcPeeringConnectionCommandInput extends RejectVpcPeeringConnectionRequest {}
/**
 * @public
 *
 * The output of {@link RejectVpcPeeringConnectionCommand}.
 */
export interface RejectVpcPeeringConnectionCommandOutput extends RejectVpcPeeringConnectionResult, __MetadataBearer {}

/**
 * <p>Rejects a VPC peering connection request. The VPC peering connection must be in the
 * 				<code>pending-acceptance</code> state. Use the <a>DescribeVpcPeeringConnections</a> request
 * 			to view your outstanding VPC peering connection requests. To delete an active VPC peering
 * 			connection, or to delete a VPC peering connection request that you initiated, use	<a>DeleteVpcPeeringConnection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RejectVpcPeeringConnectionRequest
 *   DryRun: true || false,
 *   VpcPeeringConnectionId: "STRING_VALUE", // required
 * };
 * const command = new RejectVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // { // RejectVpcPeeringConnectionResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param RejectVpcPeeringConnectionCommandInput - {@link RejectVpcPeeringConnectionCommandInput}
 * @returns {@link RejectVpcPeeringConnectionCommandOutput}
 * @see {@link RejectVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RejectVpcPeeringConnectionCommand extends $Command
  .classBuilder<
    RejectVpcPeeringConnectionCommandInput,
    RejectVpcPeeringConnectionCommandOutput,
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
  .s("AmazonEC2", "RejectVpcPeeringConnection", {})
  .n("EC2Client", "RejectVpcPeeringConnectionCommand")
  .f(void 0, void 0)
  .ser(se_RejectVpcPeeringConnectionCommand)
  .de(de_RejectVpcPeeringConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectVpcPeeringConnectionRequest;
      output: RejectVpcPeeringConnectionResult;
    };
    sdk: {
      input: RejectVpcPeeringConnectionCommandInput;
      output: RejectVpcPeeringConnectionCommandOutput;
    };
  };
}

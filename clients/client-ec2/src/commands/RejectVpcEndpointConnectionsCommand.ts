// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { RejectVpcEndpointConnectionsRequest, RejectVpcEndpointConnectionsResult } from "../models/models_8";
import { de_RejectVpcEndpointConnectionsCommand, se_RejectVpcEndpointConnectionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectVpcEndpointConnectionsCommand}.
 */
export interface RejectVpcEndpointConnectionsCommandInput extends RejectVpcEndpointConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link RejectVpcEndpointConnectionsCommand}.
 */
export interface RejectVpcEndpointConnectionsCommandOutput
  extends RejectVpcEndpointConnectionsResult,
    __MetadataBearer {}

/**
 * <p>Rejects VPC endpoint connection requests to your VPC endpoint service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectVpcEndpointConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectVpcEndpointConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RejectVpcEndpointConnectionsRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
 *   VpcEndpointIds: [ // VpcEndpointIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RejectVpcEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // RejectVpcEndpointConnectionsResult
 * //   Unsuccessful: [ // UnsuccessfulItemSet
 * //     { // UnsuccessfulItem
 * //       Error: { // UnsuccessfulItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ResourceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RejectVpcEndpointConnectionsCommandInput - {@link RejectVpcEndpointConnectionsCommandInput}
 * @returns {@link RejectVpcEndpointConnectionsCommandOutput}
 * @see {@link RejectVpcEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link RejectVpcEndpointConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class RejectVpcEndpointConnectionsCommand extends $Command
  .classBuilder<
    RejectVpcEndpointConnectionsCommandInput,
    RejectVpcEndpointConnectionsCommandOutput,
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
  .s("AmazonEC2", "RejectVpcEndpointConnections", {})
  .n("EC2Client", "RejectVpcEndpointConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_RejectVpcEndpointConnectionsCommand)
  .de(de_RejectVpcEndpointConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectVpcEndpointConnectionsRequest;
      output: RejectVpcEndpointConnectionsResult;
    };
    sdk: {
      input: RejectVpcEndpointConnectionsCommandInput;
      output: RejectVpcEndpointConnectionsCommandOutput;
    };
  };
}

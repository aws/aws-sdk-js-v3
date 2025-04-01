// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptVpcEndpointConnectionsRequest, AcceptVpcEndpointConnectionsResult } from "../models/models_0";
import { de_AcceptVpcEndpointConnectionsCommand, se_AcceptVpcEndpointConnectionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptVpcEndpointConnectionsCommand}.
 */
export interface AcceptVpcEndpointConnectionsCommandInput extends AcceptVpcEndpointConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link AcceptVpcEndpointConnectionsCommand}.
 */
export interface AcceptVpcEndpointConnectionsCommandOutput
  extends AcceptVpcEndpointConnectionsResult,
    __MetadataBearer {}

/**
 * <p>Accepts connection requests to your VPC endpoint service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptVpcEndpointConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptVpcEndpointConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AcceptVpcEndpointConnectionsRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
 *   VpcEndpointIds: [ // VpcEndpointIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AcceptVpcEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // AcceptVpcEndpointConnectionsResult
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
 * @param AcceptVpcEndpointConnectionsCommandInput - {@link AcceptVpcEndpointConnectionsCommandInput}
 * @returns {@link AcceptVpcEndpointConnectionsCommandOutput}
 * @see {@link AcceptVpcEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link AcceptVpcEndpointConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AcceptVpcEndpointConnectionsCommand extends $Command
  .classBuilder<
    AcceptVpcEndpointConnectionsCommandInput,
    AcceptVpcEndpointConnectionsCommandOutput,
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
  .s("AmazonEC2", "AcceptVpcEndpointConnections", {})
  .n("EC2Client", "AcceptVpcEndpointConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_AcceptVpcEndpointConnectionsCommand)
  .de(de_AcceptVpcEndpointConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptVpcEndpointConnectionsRequest;
      output: AcceptVpcEndpointConnectionsResult;
    };
    sdk: {
      input: AcceptVpcEndpointConnectionsCommandInput;
      output: AcceptVpcEndpointConnectionsCommandOutput;
    };
  };
}

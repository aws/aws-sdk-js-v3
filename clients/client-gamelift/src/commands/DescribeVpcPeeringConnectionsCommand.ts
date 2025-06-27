// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeVpcPeeringConnectionsInput, DescribeVpcPeeringConnectionsOutput } from "../models/models_0";
import {
  de_DescribeVpcPeeringConnectionsCommand,
  se_DescribeVpcPeeringConnectionsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcPeeringConnectionsCommand}.
 */
export interface DescribeVpcPeeringConnectionsCommandInput extends DescribeVpcPeeringConnectionsInput {}
/**
 * @public
 *
 * The output of {@link DescribeVpcPeeringConnectionsCommand}.
 */
export interface DescribeVpcPeeringConnectionsCommandOutput
  extends DescribeVpcPeeringConnectionsOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves information on VPC peering connections. Use this operation to get peering
 *             information for all fleets or for one specific fleet ID. </p>
 *          <p>To retrieve connection information, call this operation from the Amazon Web Services account that is
 *             used to manage the Amazon GameLift Servers fleets. Specify a fleet ID or leave the parameter empty to
 *             retrieve all connection records. If successful, the retrieved information includes both
 *             active and pending connections. Active connections identify the IpV4 CIDR block that the
 *             VPC uses to connect. </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeVpcPeeringConnectionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeVpcPeeringConnectionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeVpcPeeringConnectionsInput
 *   FleetId: "STRING_VALUE",
 * };
 * const command = new DescribeVpcPeeringConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcPeeringConnectionsOutput
 * //   VpcPeeringConnections: [ // VpcPeeringConnectionList
 * //     { // VpcPeeringConnection
 * //       FleetId: "STRING_VALUE",
 * //       FleetArn: "STRING_VALUE",
 * //       IpV4CidrBlock: "STRING_VALUE",
 * //       VpcPeeringConnectionId: "STRING_VALUE",
 * //       Status: { // VpcPeeringConnectionStatus
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       PeerVpcId: "STRING_VALUE",
 * //       GameLiftVpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeVpcPeeringConnectionsCommandInput - {@link DescribeVpcPeeringConnectionsCommandInput}
 * @returns {@link DescribeVpcPeeringConnectionsCommandOutput}
 * @see {@link DescribeVpcPeeringConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcPeeringConnectionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class DescribeVpcPeeringConnectionsCommand extends $Command
  .classBuilder<
    DescribeVpcPeeringConnectionsCommandInput,
    DescribeVpcPeeringConnectionsCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "DescribeVpcPeeringConnections", {})
  .n("GameLiftClient", "DescribeVpcPeeringConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcPeeringConnectionsCommand)
  .de(de_DescribeVpcPeeringConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcPeeringConnectionsInput;
      output: DescribeVpcPeeringConnectionsOutput;
    };
    sdk: {
      input: DescribeVpcPeeringConnectionsCommandInput;
      output: DescribeVpcPeeringConnectionsCommandOutput;
    };
  };
}

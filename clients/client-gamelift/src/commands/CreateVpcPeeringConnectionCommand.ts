// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import type { CreateVpcPeeringConnectionInput, CreateVpcPeeringConnectionOutput } from "../models/models_0";
import { CreateVpcPeeringConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcPeeringConnectionCommand}.
 */
export interface CreateVpcPeeringConnectionCommandInput extends CreateVpcPeeringConnectionInput {}
/**
 * @public
 *
 * The output of {@link CreateVpcPeeringConnectionCommand}.
 */
export interface CreateVpcPeeringConnectionCommandOutput extends CreateVpcPeeringConnectionOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2</p>
 *          <p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an Amazon Web Services account with the VPC
 *             for your Amazon GameLift Servers fleet. VPC peering enables the game servers on your fleet to communicate
 *             directly with other Amazon Web Services resources. You can peer with VPCs in any Amazon Web Services account that
 *             you have access to, including the account that you use to manage your Amazon GameLift Servers fleets. You
 *             cannot peer with VPCs that are in different Regions. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC
 *                 Peering with Amazon GameLift Servers Fleets</a>.</p>
 *          <p>Before calling this operation to establish the peering connection, you first need to
 *             use <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateVpcPeeringAuthorization.html">CreateVpcPeeringAuthorization</a> and identify the VPC you want to peer with.
 *             Once the authorization for the specified VPC is issued, you have 24 hours to establish
 *             the connection. These two operations handle all tasks necessary to peer the two VPCs,
 *             including acceptance, updating routing tables, etc. </p>
 *          <p>To establish the connection, call this operation from the Amazon Web Services account that is used
 *             to manage the Amazon GameLift Servers fleets. Identify the following values: (1) The ID of the fleet you
 *             want to be enable a VPC peering connection for; (2) The Amazon Web Services account with the VPC that
 *             you want to peer with; and (3) The ID of the VPC you want to peer with. This operation
 *             is asynchronous. If successful, a connection request is created. You can use continuous
 *             polling to track the request's status using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeVpcPeeringConnections.html">DescribeVpcPeeringConnections</a> , or by monitoring fleet events for success
 *             or failure using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a> . </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateVpcPeeringConnectionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateVpcPeeringConnectionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // CreateVpcPeeringConnectionInput
 *   FleetId: "STRING_VALUE", // required
 *   PeerVpcAwsAccountId: "STRING_VALUE", // required
 *   PeerVpcId: "STRING_VALUE", // required
 * };
 * const command = new CreateVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateVpcPeeringConnectionCommandInput - {@link CreateVpcPeeringConnectionCommandInput}
 * @returns {@link CreateVpcPeeringConnectionCommandOutput}
 * @see {@link CreateVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcPeeringConnectionCommandOutput} for command's `response` shape.
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
export class CreateVpcPeeringConnectionCommand extends $Command
  .classBuilder<
    CreateVpcPeeringConnectionCommandInput,
    CreateVpcPeeringConnectionCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "CreateVpcPeeringConnection", {})
  .n("GameLiftClient", "CreateVpcPeeringConnectionCommand")
  .sc(CreateVpcPeeringConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcPeeringConnectionInput;
      output: {};
    };
    sdk: {
      input: CreateVpcPeeringConnectionCommandInput;
      output: CreateVpcPeeringConnectionCommandOutput;
    };
  };
}

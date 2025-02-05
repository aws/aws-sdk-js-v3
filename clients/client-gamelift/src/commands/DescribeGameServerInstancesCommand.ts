// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameServerInstancesInput, DescribeGameServerInstancesOutput } from "../models/models_0";
import { de_DescribeGameServerInstancesCommand, se_DescribeGameServerInstancesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGameServerInstancesCommand}.
 */
export interface DescribeGameServerInstancesCommandInput extends DescribeGameServerInstancesInput {}
/**
 * @public
 *
 * The output of {@link DescribeGameServerInstancesCommand}.
 */
export interface DescribeGameServerInstancesCommandOutput extends DescribeGameServerInstancesOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Retrieves status
 *             information about the Amazon EC2 instances associated with a Amazon GameLift FleetIQ game server group.
 *             Use this operation to detect when instances are active or not available to host new game
 *             servers.</p>
 *          <p>To request status for all instances in the game server group, provide a game server
 *             group ID only. To request status for specific instances, provide the game server group
 *             ID and one or more instance IDs. Use the pagination parameters to retrieve results in
 *             sequential segments. If successful, a collection of <code>GameServerInstance</code>
 *             objects is returned. </p>
 *          <p>This operation is not designed to be called with every game server claim request; this
 *             practice can cause you to exceed your API limit, which results in errors. Instead, as a
 *             best practice, cache the results and refresh your cache no more than once every 10
 *             seconds.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ
 *                 Guide</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameServerInstancesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameServerInstancesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GameLiftClient(config);
 * const input = { // DescribeGameServerInstancesInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   InstanceIds: [ // GameServerInstanceIds
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeGameServerInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGameServerInstancesOutput
 * //   GameServerInstances: [ // GameServerInstances
 * //     { // GameServerInstance
 * //       GameServerGroupName: "STRING_VALUE",
 * //       GameServerGroupArn: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceStatus: "ACTIVE" || "DRAINING" || "SPOT_TERMINATING",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeGameServerInstancesCommandInput - {@link DescribeGameServerInstancesCommandInput}
 * @returns {@link DescribeGameServerInstancesCommandOutput}
 * @see {@link DescribeGameServerInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeGameServerInstancesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeGameServerInstancesCommand extends $Command
  .classBuilder<
    DescribeGameServerInstancesCommandInput,
    DescribeGameServerInstancesCommandOutput,
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
  .s("GameLift", "DescribeGameServerInstances", {})
  .n("GameLiftClient", "DescribeGameServerInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeGameServerInstancesCommand)
  .de(de_DescribeGameServerInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGameServerInstancesInput;
      output: DescribeGameServerInstancesOutput;
    };
    sdk: {
      input: DescribeGameServerInstancesCommandInput;
      output: DescribeGameServerInstancesCommandOutput;
    };
  };
}

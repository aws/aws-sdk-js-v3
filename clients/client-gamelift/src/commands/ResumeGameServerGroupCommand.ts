// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ResumeGameServerGroupInput } from "../models/models_0";
import { ResumeGameServerGroupOutput } from "../models/models_1";
import { de_ResumeGameServerGroupCommand, se_ResumeGameServerGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResumeGameServerGroupCommand}.
 */
export interface ResumeGameServerGroupCommandInput extends ResumeGameServerGroupInput {}
/**
 * @public
 *
 * The output of {@link ResumeGameServerGroupCommand}.
 */
export interface ResumeGameServerGroupCommandOutput extends ResumeGameServerGroupOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Reinstates activity on a game
 *             server group after it has been suspended. A game server group might be suspended by the
 *                 <a href="gamelift/latest/apireference/API_SuspendGameServerGroup.html">SuspendGameServerGroup</a> operation, or it might be suspended involuntarily
 *             due to a configuration problem. In the second case, you can manually resume activity on
 *             the group once the configuration problem has been resolved. Refer to the game server
 *             group status and status reason for more information on why group activity is
 *             suspended.</p>
 *          <p>To resume activity, specify a game server group ARN and the type of activity to be
 *             resumed. If successful, a <code>GameServerGroup</code> object is returned showing that
 *             the resumed activity is no longer listed in <code>SuspendedActions</code>. </p>
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
 * import { GameLiftClient, ResumeGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ResumeGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // ResumeGameServerGroupInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   ResumeActions: [ // GameServerGroupActions // required
 *     "REPLACE_INSTANCE_TYPES",
 *   ],
 * };
 * const command = new ResumeGameServerGroupCommand(input);
 * const response = await client.send(command);
 * // { // ResumeGameServerGroupOutput
 * //   GameServerGroup: { // GameServerGroup
 * //     GameServerGroupName: "STRING_VALUE",
 * //     GameServerGroupArn: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     InstanceDefinitions: [ // InstanceDefinitions
 * //       { // InstanceDefinition
 * //         InstanceType: "c4.large" || "c4.xlarge" || "c4.2xlarge" || "c4.4xlarge" || "c4.8xlarge" || "c5.large" || "c5.xlarge" || "c5.2xlarge" || "c5.4xlarge" || "c5.9xlarge" || "c5.12xlarge" || "c5.18xlarge" || "c5.24xlarge" || "c5a.large" || "c5a.xlarge" || "c5a.2xlarge" || "c5a.4xlarge" || "c5a.8xlarge" || "c5a.12xlarge" || "c5a.16xlarge" || "c5a.24xlarge" || "c6g.medium" || "c6g.large" || "c6g.xlarge" || "c6g.2xlarge" || "c6g.4xlarge" || "c6g.8xlarge" || "c6g.12xlarge" || "c6g.16xlarge" || "r4.large" || "r4.xlarge" || "r4.2xlarge" || "r4.4xlarge" || "r4.8xlarge" || "r4.16xlarge" || "r5.large" || "r5.xlarge" || "r5.2xlarge" || "r5.4xlarge" || "r5.8xlarge" || "r5.12xlarge" || "r5.16xlarge" || "r5.24xlarge" || "r5a.large" || "r5a.xlarge" || "r5a.2xlarge" || "r5a.4xlarge" || "r5a.8xlarge" || "r5a.12xlarge" || "r5a.16xlarge" || "r5a.24xlarge" || "r6g.medium" || "r6g.large" || "r6g.xlarge" || "r6g.2xlarge" || "r6g.4xlarge" || "r6g.8xlarge" || "r6g.12xlarge" || "r6g.16xlarge" || "m4.large" || "m4.xlarge" || "m4.2xlarge" || "m4.4xlarge" || "m4.10xlarge" || "m5.large" || "m5.xlarge" || "m5.2xlarge" || "m5.4xlarge" || "m5.8xlarge" || "m5.12xlarge" || "m5.16xlarge" || "m5.24xlarge" || "m5a.large" || "m5a.xlarge" || "m5a.2xlarge" || "m5a.4xlarge" || "m5a.8xlarge" || "m5a.12xlarge" || "m5a.16xlarge" || "m5a.24xlarge" || "m6g.medium" || "m6g.large" || "m6g.xlarge" || "m6g.2xlarge" || "m6g.4xlarge" || "m6g.8xlarge" || "m6g.12xlarge" || "m6g.16xlarge", // required
 * //         WeightedCapacity: "STRING_VALUE",
 * //       },
 * //     ],
 * //     BalancingStrategy: "SPOT_ONLY" || "SPOT_PREFERRED" || "ON_DEMAND_ONLY",
 * //     GameServerProtectionPolicy: "NO_PROTECTION" || "FULL_PROTECTION",
 * //     AutoScalingGroupArn: "STRING_VALUE",
 * //     Status: "NEW" || "ACTIVATING" || "ACTIVE" || "DELETE_SCHEDULED" || "DELETING" || "DELETED" || "ERROR",
 * //     StatusReason: "STRING_VALUE",
 * //     SuspendedActions: [ // GameServerGroupActions
 * //       "REPLACE_INSTANCE_TYPES",
 * //     ],
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ResumeGameServerGroupCommandInput - {@link ResumeGameServerGroupCommandInput}
 * @returns {@link ResumeGameServerGroupCommandOutput}
 * @see {@link ResumeGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link ResumeGameServerGroupCommandOutput} for command's `response` shape.
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
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class ResumeGameServerGroupCommand extends $Command
  .classBuilder<
    ResumeGameServerGroupCommandInput,
    ResumeGameServerGroupCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "ResumeGameServerGroup", {})
  .n("GameLiftClient", "ResumeGameServerGroupCommand")
  .f(void 0, void 0)
  .ser(se_ResumeGameServerGroupCommand)
  .de(de_ResumeGameServerGroupCommand)
  .build() {}

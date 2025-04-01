// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateGameSessionQueueInput, CreateGameSessionQueueOutput } from "../models/models_0";
import { de_CreateGameSessionQueueCommand, se_CreateGameSessionQueueCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGameSessionQueueCommand}.
 */
export interface CreateGameSessionQueueCommandInput extends CreateGameSessionQueueInput {}
/**
 * @public
 *
 * The output of {@link CreateGameSessionQueueCommand}.
 */
export interface CreateGameSessionQueueCommandOutput extends CreateGameSessionQueueOutput, __MetadataBearer {}

/**
 * <p>Creates a placement queue that processes requests for new game sessions. A queue uses
 *             FleetIQ algorithms to locate the best available placement locations for a new game
 *             session, and then prompts the game server process to start a new game session.</p>
 *          <p>A game session queue is configured with a set of destinations (Amazon GameLift fleets or
 *             aliases) that determine where the queue can place new game sessions. These destinations
 *             can span multiple Amazon Web Services Regions, can use different instance types, and can include both
 *             Spot and On-Demand fleets. If the queue includes multi-location fleets, the queue can
 *             place game sessions in any of a fleet's remote locations.</p>
 *          <p>You can configure a queue to determine how it selects the best available placement for
 *             a new game session. Queues can prioritize placement decisions based on a combination of
 *             location, hosting cost, and player latency. You can set up the queue to use the default
 *             prioritization or provide alternate instructions using
 *                 <code>PriorityConfiguration</code>.</p>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <p>Use this operation to make these common types of requests. </p>
 *          <ul>
 *             <li>
 *                <p>Create a queue with the minimum required parameters.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>Name</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>Destinations</code> (This parameter isn't required, but a queue
 *                             can't make placements without at least one destination.)</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Create a queue with placement notification. Queues that have high placement
 *                     activity must use a notification system, such as with Amazon Simple Notification Service (Amazon SNS) or Amazon CloudWatch.</p>
 *                <ul>
 *                   <li>
 *                      <p>Required parameters <code>Name</code> and
 *                             <code>Destinations</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>NotificationTarget</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Create a queue with custom prioritization settings. These custom settings
 *                     replace the default prioritization configuration for a queue.</p>
 *                <ul>
 *                   <li>
 *                      <p>Required parameters <code>Name</code> and
 *                             <code>Destinations</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>PriorityConfiguration</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Create a queue with special rules for processing player latency data.</p>
 *                <ul>
 *                   <li>
 *                      <p>Required parameters <code>Name</code> and
 *                             <code>Destinations</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>PlayerLatencyPolicies</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Results</b>
 *          </p>
 *          <p>If successful, this operation returns a new <code>GameSessionQueue</code> object with
 *             an assigned queue ARN. Use the queue's name or ARN when submitting new game session
 *             requests with <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> or <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html">StartMatchmaking</a>. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html">
 *                 Design a game session queue</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html">
 *                 Create a game session queue</a>
 *          </p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html">CreateGameSessionQueue</a>
 *                     |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html">DescribeGameSessionQueues</a>
 *                     |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html">UpdateGameSessionQueue</a>
 *                     |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html">DeleteGameSessionQueue</a>
 *                     |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateGameSessionQueueCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateGameSessionQueueCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // CreateGameSessionQueueInput
 *   Name: "STRING_VALUE", // required
 *   TimeoutInSeconds: Number("int"),
 *   PlayerLatencyPolicies: [ // PlayerLatencyPolicyList
 *     { // PlayerLatencyPolicy
 *       MaximumIndividualPlayerLatencyMilliseconds: Number("int"),
 *       PolicyDurationSeconds: Number("int"),
 *     },
 *   ],
 *   Destinations: [ // GameSessionQueueDestinationList
 *     { // GameSessionQueueDestination
 *       DestinationArn: "STRING_VALUE",
 *     },
 *   ],
 *   FilterConfiguration: { // FilterConfiguration
 *     AllowedLocations: [ // LocationList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   PriorityConfiguration: { // PriorityConfiguration
 *     PriorityOrder: [ // PriorityTypeList
 *       "LATENCY" || "COST" || "DESTINATION" || "LOCATION",
 *     ],
 *     LocationOrder: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CustomEventData: "STRING_VALUE",
 *   NotificationTarget: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateGameSessionQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateGameSessionQueueOutput
 * //   GameSessionQueue: { // GameSessionQueue
 * //     Name: "STRING_VALUE",
 * //     GameSessionQueueArn: "STRING_VALUE",
 * //     TimeoutInSeconds: Number("int"),
 * //     PlayerLatencyPolicies: [ // PlayerLatencyPolicyList
 * //       { // PlayerLatencyPolicy
 * //         MaximumIndividualPlayerLatencyMilliseconds: Number("int"),
 * //         PolicyDurationSeconds: Number("int"),
 * //       },
 * //     ],
 * //     Destinations: [ // GameSessionQueueDestinationList
 * //       { // GameSessionQueueDestination
 * //         DestinationArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     FilterConfiguration: { // FilterConfiguration
 * //       AllowedLocations: [ // LocationList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     PriorityConfiguration: { // PriorityConfiguration
 * //       PriorityOrder: [ // PriorityTypeList
 * //         "LATENCY" || "COST" || "DESTINATION" || "LOCATION",
 * //       ],
 * //       LocationOrder: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CustomEventData: "STRING_VALUE",
 * //     NotificationTarget: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGameSessionQueueCommandInput - {@link CreateGameSessionQueueCommandInput}
 * @returns {@link CreateGameSessionQueueCommandOutput}
 * @see {@link CreateGameSessionQueueCommandInput} for command's `input` shape.
 * @see {@link CreateGameSessionQueueCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
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
export class CreateGameSessionQueueCommand extends $Command
  .classBuilder<
    CreateGameSessionQueueCommandInput,
    CreateGameSessionQueueCommandOutput,
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
  .s("GameLift", "CreateGameSessionQueue", {})
  .n("GameLiftClient", "CreateGameSessionQueueCommand")
  .f(void 0, void 0)
  .ser(se_CreateGameSessionQueueCommand)
  .de(de_CreateGameSessionQueueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGameSessionQueueInput;
      output: CreateGameSessionQueueOutput;
    };
    sdk: {
      input: CreateGameSessionQueueCommandInput;
      output: CreateGameSessionQueueCommandOutput;
    };
  };
}

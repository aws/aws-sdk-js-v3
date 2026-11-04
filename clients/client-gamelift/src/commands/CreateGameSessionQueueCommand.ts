// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGameSessionQueueInput, CreateGameSessionQueueOutput } from "../models/models_0";
import { CreateGameSessionQueue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Creates a placement queue that processes requests for new game sessions. A queue uses FleetIQ algorithms to locate the best available placement locations for a new game session, and then prompts the game server process to start a new game session.
 *
 * A game session queue is configured with a set of destinations (Amazon GameLift Servers fleets or aliases) that determine where the queue can place new game sessions. These destinations can span multiple Amazon Web Services Regions, can use different instance types, and can include both Spot and On-Demand fleets. If the queue includes multi-location fleets, the queue can place game sessions in any of a fleet's remote locations.
 *
 * You can configure a queue to determine how it selects the best available placement for a new game session. Queues can prioritize placement decisions based on a combination of location, hosting cost, and player latency. You can set up the queue to use the default prioritization or provide alternate instructions using `PriorityConfiguration`.
 *
 * **Request options**
 *
 * Use this operation to make these common types of requests.
 *
 * - Create a queue with the minimum required parameters.
 *
 *   - `Name`
 *   - `Destinations` (This parameter isn't required, but a queue can't make placements without at least one destination.)
 * - Create a queue with placement notification. Queues that have high placement activity must use a notification system, such as with Amazon Simple Notification Service (Amazon SNS) or Amazon CloudWatch.
 *
 *   - Required parameters `Name` and `Destinations`
 *   - `NotificationTarget`
 * - Create a queue with custom prioritization settings. These custom settings replace the default prioritization configuration for a queue.
 *
 *   - Required parameters `Name` and `Destinations`
 *   - `PriorityConfiguration`
 * - Create a queue with special rules for processing player latency data.
 *
 *   - Required parameters `Name` and `Destinations`
 *   - `PlayerLatencyPolicies`
 *
 * **Results**
 *
 * If successful, this operation returns a new `GameSessionQueue` object with an assigned queue ARN. Use the queue's name or ARN when submitting new game session requests with [StartGameSessionPlacement](https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html) or [StartMatchmaking](https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartMatchmaking.html).
 *
 * **Learn more**
 *
 * [Design a game session queue](https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html)
 *
 * [Create a game session queue](https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html)
 *
 * **Related actions**
 *
 * [CreateGameSessionQueue](https://docs.aws.amazon.com/gamelift/latest/apireference/API_CreateGameSessionQueue.html) | [DescribeGameSessionQueues](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionQueues.html) | [UpdateGameSessionQueue](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSessionQueue.html) | [DeleteGameSessionQueue](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeleteGameSessionQueue.html) | [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateGameSessionQueueCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateGameSessionQueueCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
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
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested operation would cause the resource to exceed the allowed service limit. Resolve the issue before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link TaggingFailedException} (client fault)
 *
 * The requested tagging operation did not succeed. This may be due to invalid tag format or the maximum tag limit may have been exceeded. Resolve the issue before retrying.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class CreateGameSessionQueueCommand extends command<CreateGameSessionQueueCommandInput, CreateGameSessionQueueCommandOutput>(
  _ep0,
  _mw0,
  "CreateGameSessionQueue",
  CreateGameSessionQueue$
) {
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

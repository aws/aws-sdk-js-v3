// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameSessionQueuesInput, DescribeGameSessionQueuesOutput } from "../models/models_0";
import { DescribeGameSessionQueues } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGameSessionQueuesCommand}.
 */
export interface DescribeGameSessionQueuesCommandInput extends DescribeGameSessionQueuesInput {}
/**
 * @public
 *
 * The output of {@link DescribeGameSessionQueuesCommand}.
 */
export interface DescribeGameSessionQueuesCommandOutput extends DescribeGameSessionQueuesOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Retrieves the properties for one or more game session queues. When requesting multiple
 *             queues, use the pagination parameters to retrieve results as a set of sequential pages.
 *             When specifying a list of queues, objects are returned only for queues that currently
 *             exist in the Region.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html">
 *                 View Your Queues</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameSessionQueuesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionQueuesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeGameSessionQueuesInput
 *   Names: [ // GameSessionQueueNameOrArnList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeGameSessionQueuesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGameSessionQueuesOutput
 * //   GameSessionQueues: [ // GameSessionQueueList
 * //     { // GameSessionQueue
 * //       Name: "STRING_VALUE",
 * //       GameSessionQueueArn: "STRING_VALUE",
 * //       TimeoutInSeconds: Number("int"),
 * //       PlayerLatencyPolicies: [ // PlayerLatencyPolicyList
 * //         { // PlayerLatencyPolicy
 * //           MaximumIndividualPlayerLatencyMilliseconds: Number("int"),
 * //           PolicyDurationSeconds: Number("int"),
 * //         },
 * //       ],
 * //       Destinations: [ // GameSessionQueueDestinationList
 * //         { // GameSessionQueueDestination
 * //           DestinationArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       FilterConfiguration: { // FilterConfiguration
 * //         AllowedLocations: [ // LocationList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       PriorityConfiguration: { // PriorityConfiguration
 * //         PriorityOrder: [ // PriorityTypeList
 * //           "LATENCY" || "COST" || "DESTINATION" || "LOCATION",
 * //         ],
 * //         LocationOrder: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CustomEventData: "STRING_VALUE",
 * //       NotificationTarget: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeGameSessionQueuesCommandInput - {@link DescribeGameSessionQueuesCommandInput}
 * @returns {@link DescribeGameSessionQueuesCommandOutput}
 * @see {@link DescribeGameSessionQueuesCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionQueuesCommandOutput} for command's `response` shape.
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
export class DescribeGameSessionQueuesCommand extends $Command
  .classBuilder<
    DescribeGameSessionQueuesCommandInput,
    DescribeGameSessionQueuesCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DescribeGameSessionQueues", {})
  .n("GameLiftClient", "DescribeGameSessionQueuesCommand")
  .sc(DescribeGameSessionQueues)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGameSessionQueuesInput;
      output: DescribeGameSessionQueuesOutput;
    };
    sdk: {
      input: DescribeGameSessionQueuesCommandInput;
      output: DescribeGameSessionQueuesCommandOutput;
    };
  };
}

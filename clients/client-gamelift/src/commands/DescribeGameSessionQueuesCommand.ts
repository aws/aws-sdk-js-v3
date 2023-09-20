// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameSessionQueuesInput, DescribeGameSessionQueuesOutput } from "../models/models_0";
import { de_DescribeGameSessionQueuesCommand, se_DescribeGameSessionQueuesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Retrieves the properties for one or more game session queues. When requesting multiple
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
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class DescribeGameSessionQueuesCommand extends $Command<
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeGameSessionQueuesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeGameSessionQueuesCommandInput, DescribeGameSessionQueuesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGameSessionQueuesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeGameSessionQueuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "DescribeGameSessionQueues",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeGameSessionQueuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeGameSessionQueuesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGameSessionQueuesCommandOutput> {
    return de_DescribeGameSessionQueuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

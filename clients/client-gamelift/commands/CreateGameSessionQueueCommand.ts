import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateGameSessionQueueInput, CreateGameSessionQueueOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateGameSessionQueueCommand,
  serializeAws_json1_1CreateGameSessionQueueCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateGameSessionQueueCommandInput = CreateGameSessionQueueInput;
export type CreateGameSessionQueueCommandOutput = CreateGameSessionQueueOutput & __MetadataBearer;

/**
 * <p>Establishes a new queue for processing requests to place new game sessions. A queue
 *             identifies where new game sessions can be hosted -- by specifying a list of destinations
 *             (fleets or aliases) -- and how long requests can wait in the queue before timing out.
 *             You can set up a queue to try to place game sessions on fleets in multiple Regions. To
 *             add placement requests to a queue, call <a>StartGameSessionPlacement</a> and
 *             reference the queue name.</p>
 *         <p>
 *             <b>Destination order.</b> When processing a request for a
 *             game session, Amazon GameLift tries each destination in order until it finds one with available
 *             resources to host the new game session. A queue's default order is determined by how
 *             destinations are listed. The default order is overridden when a game session placement
 *             request provides player latency information. Player latency information enables Amazon GameLift
 *             to prioritize destinations where players report the lowest average latency, as a result
 *             placing the new game session where the majority of players will have the best possible
 *             gameplay experience.</p>
 *         <p>
 *             <b>Player latency policies.</b> For placement requests
 *             containing player latency information, use player latency policies to protect individual
 *             players from very high latencies. With a latency cap, even when a destination can
 *             deliver a low latency for most players, the game is not placed where any individual
 *             player is reporting latency higher than a policy's maximum. A queue can have multiple
 *             latency policies, which are enforced consecutively starting with the policy with the
 *             lowest latency cap. Use multiple policies to gradually relax latency controls; for
 *             example, you might set a policy with a low latency cap for the first 60 seconds, a
 *             second policy with a higher cap for the next 60 seconds, etc. </p>
 *         <p>To create a new queue, provide a name, timeout value, a list of destinations and,
 *             if desired, a set of latency policies. If successful, a new queue object is
 *             returned.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-design.html">
 *             Design a Game Session Queue</a>
 *         </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-creating.html">
 *             Create a Game Session Queue</a>
 *         </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGameSessionQueue</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessionQueues</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameSessionQueue</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteGameSessionQueue</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateGameSessionQueueCommand extends $Command<
  CreateGameSessionQueueCommandInput,
  CreateGameSessionQueueCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGameSessionQueueCommandInput) {
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
  ): Handler<CreateGameSessionQueueCommandInput, CreateGameSessionQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateGameSessionQueueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGameSessionQueueInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGameSessionQueueOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGameSessionQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateGameSessionQueueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGameSessionQueueCommandOutput> {
    return deserializeAws_json1_1CreateGameSessionQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameSessionDetailsInput, DescribeGameSessionDetailsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeGameSessionDetailsCommand,
  serializeAws_json1_1DescribeGameSessionDetailsCommand,
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

export type DescribeGameSessionDetailsCommandInput = DescribeGameSessionDetailsInput;
export type DescribeGameSessionDetailsCommandOutput = DescribeGameSessionDetailsOutput & __MetadataBearer;

/**
 * <p>Retrieves additional game session properties, including the game session protection
 *             policy in force, a set of one or more game sessions in a specific fleet location. You
 *             can optionally filter the results by current game session status. Alternatively, use
 *                 <a>SearchGameSessions</a> to request a set of active game sessions that
 *             are filtered by certain criteria. To retrieve all game session properties, use <a>DescribeGameSessions</a>. </p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To retrieve details for all game sessions that are currently running on all
 *                     locations in a fleet, provide a fleet or alias ID, with an optional status
 *                     filter. This approach returns details from the fleet's home Region and all
 *                     remote locations.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve details for all game sessions that are currently running on a
 *                     specific fleet location, provide a fleet or alias ID and a location name, with
 *                     optional status filter. The location can be the fleet's home Region or any
 *                     remote location.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve details for a specific game session, provide the game session ID.
 *                     This approach looks for the game session ID in all fleets that reside in the AWS
 *                     Region defined in the request.</p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>GameSessionDetail</code> object is returned for each game
 *             session that matches the request.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameSession</a> |
 *                     <a>DescribeGameSessions</a> |
 *                     <a>DescribeGameSessionDetails</a> |
 *                     <a>SearchGameSessions</a> |
 *                     <a>UpdateGameSession</a> |
 *                     <a>GetGameSessionLogUrl</a> |
 *                     <a>StartGameSessionPlacement</a> |
 *                     <a>DescribeGameSessionPlacement</a> |
 *                     <a>StopGameSessionPlacement</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 */
export class DescribeGameSessionDetailsCommand extends $Command<
  DescribeGameSessionDetailsCommandInput,
  DescribeGameSessionDetailsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeGameSessionDetailsCommandInput) {
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
  ): Handler<DescribeGameSessionDetailsCommandInput, DescribeGameSessionDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeGameSessionDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGameSessionDetailsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGameSessionDetailsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGameSessionDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeGameSessionDetailsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGameSessionDetailsCommandOutput> {
    return deserializeAws_json1_1DescribeGameSessionDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

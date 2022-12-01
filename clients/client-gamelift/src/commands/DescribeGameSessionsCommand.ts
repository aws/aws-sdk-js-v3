// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DescribeGameSessionsInput,
  DescribeGameSessionsInputFilterSensitiveLog,
  DescribeGameSessionsOutput,
  DescribeGameSessionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeGameSessionsCommand,
  serializeAws_json1_1DescribeGameSessionsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeGameSessionsCommandInput extends DescribeGameSessionsInput {}
export interface DescribeGameSessionsCommandOutput extends DescribeGameSessionsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a set of one or more game sessions in a specific fleet location. You can
 *             optionally filter the results by current game session status.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To retrieve all game sessions that are currently running on all locations in a
 *                     fleet, provide a fleet or alias ID, with an optional status filter. This
 *                     approach returns all game sessions in the fleet's home Region and all remote
 *                     locations.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve all game sessions that are currently running on a specific fleet
 *                     location, provide a fleet or alias ID and a location name, with optional status
 *                     filter. The location can be the fleet's home Region or any remote
 *                     location.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve a specific game session, provide the game session ID. This
 *                     approach looks for the game session ID in all fleets that reside in the Amazon Web Services
 *                     Region defined in the request.</p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>GameSession</code> object is returned for each game session
 *             that matches the request.</p>
 *         <p>This operation is not designed to be continually called to track game session status.
 *             This practice can cause you to exceed your API limit, which results in errors. Instead,
 *             you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or
 *             queues. Continuously polling with <code>DescribeGameSessions</code> should only be used
 *             for games in development with low game session usage. </p>
 *         <p>
 *             <i>Available in Amazon GameLift Local.</i>
 *          </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a>
 *          </p>
 *          <p>
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeGameSessionsCommand extends $Command<
  DescribeGameSessionsCommandInput,
  DescribeGameSessionsCommandOutput,
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

  constructor(readonly input: DescribeGameSessionsCommandInput) {
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
  ): Handler<DescribeGameSessionsCommandInput, DescribeGameSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGameSessionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeGameSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGameSessionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeGameSessionsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGameSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeGameSessionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGameSessionsCommandOutput> {
    return deserializeAws_json1_1DescribeGameSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

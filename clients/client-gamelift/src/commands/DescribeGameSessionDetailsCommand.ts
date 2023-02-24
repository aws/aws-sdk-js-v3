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
  DescribeGameSessionDetailsInput,
  DescribeGameSessionDetailsInputFilterSensitiveLog,
  DescribeGameSessionDetailsOutput,
  DescribeGameSessionDetailsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeGameSessionDetailsCommand,
  serializeAws_json1_1DescribeGameSessionDetailsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeGameSessionDetailsCommandInput extends DescribeGameSessionDetailsInput {}
export interface DescribeGameSessionDetailsCommandOutput extends DescribeGameSessionDetailsOutput, __MetadataBearer {}

/**
 * <p>Retrieves additional game session properties, including the game session protection
 *             policy in force, a set of one or more game sessions in a specific fleet location. You
 *             can optionally filter the results by current game session status.</p>
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
 *                     This approach looks for the game session ID in all fleets that reside in the
 *                     Amazon Web Services Region defined in the request.</p>
 *             </li>
 *          </ul>
 *         <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>GameSessionDetail</code> object is returned for each game
 *             session that matches the request.</p>
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
 * import { GameLiftClient, DescribeGameSessionDetailsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionDetailsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameSessionDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameSessionDetailsCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionDetailsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeGameSessionDetailsCommand extends $Command<
  DescribeGameSessionDetailsCommandInput,
  DescribeGameSessionDetailsCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGameSessionDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeGameSessionDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGameSessionDetailsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeGameSessionDetailsOutputFilterSensitiveLog,
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

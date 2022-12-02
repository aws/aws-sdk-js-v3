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
  DescribePlayerSessionsInput,
  DescribePlayerSessionsInputFilterSensitiveLog,
  DescribePlayerSessionsOutput,
  DescribePlayerSessionsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePlayerSessionsCommand,
  serializeAws_json1_1DescribePlayerSessionsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribePlayerSessionsCommandInput extends DescribePlayerSessionsInput {}
export interface DescribePlayerSessionsCommandOutput extends DescribePlayerSessionsOutput, __MetadataBearer {}

/**
 * <p>Retrieves properties for one or more player sessions. </p>
 *         <p>This action can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To retrieve a specific player session, provide the player session ID
 *                     only.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve all player sessions in a game session, provide the game session ID
 *                     only.</p>
 *             </li>
 *             <li>
 *                 <p>To retrieve all player sessions for a specific player, provide a player ID
 *                     only.</p>
 *             </li>
 *          </ul>
 *         <p>To request player sessions, specify either a player session ID, game session ID, or
 *             player ID. You can filter this request by player session status. Use the pagination
 *             parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>PlayerSession</code> object is returned for each session that
 *             matches the request.</p>
 *          <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribePlayerSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribePlayerSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribePlayerSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePlayerSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribePlayerSessionsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribePlayerSessionsCommand extends $Command<
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput,
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

  constructor(readonly input: DescribePlayerSessionsCommandInput) {
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
  ): Handler<DescribePlayerSessionsCommandInput, DescribePlayerSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePlayerSessionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribePlayerSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePlayerSessionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePlayerSessionsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePlayerSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePlayerSessionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePlayerSessionsCommandOutput> {
    return deserializeAws_json1_1DescribePlayerSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

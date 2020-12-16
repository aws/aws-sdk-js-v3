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
 * <p>Retrieves properties, including the protection policy in force, for one or more
 *             game sessions. This operation can be used in several ways: (1) provide a
 *                 <code>GameSessionId</code> or <code>GameSessionArn</code> to request details for a
 *             specific game session; (2) provide either a <code>FleetId</code> or an
 *                 <code>AliasId</code> to request properties for all game sessions running on a fleet. </p>
 *         <p>To get game session record(s), specify just one of the following: game session ID,
 *             fleet ID, or alias ID. You can filter this request by game session status. Use the
 *             pagination parameters to retrieve results as a set of sequential pages. If successful, a
 *                 <a>GameSessionDetail</a> object is returned for each session matching the
 *             request.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGameSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessionDetails</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>SearchGameSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetGameSessionLogUrl</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Game session placements</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>StartGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>StopGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
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

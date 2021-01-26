import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { GetGameSessionLogUrlInput, GetGameSessionLogUrlOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetGameSessionLogUrlCommand,
  serializeAws_json1_1GetGameSessionLogUrlCommand,
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

export type GetGameSessionLogUrlCommandInput = GetGameSessionLogUrlInput;
export type GetGameSessionLogUrlCommandOutput = GetGameSessionLogUrlOutput & __MetadataBearer;

/**
 * <p>Retrieves the location of stored game session logs for a specified game session.
 *             When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and
 *             retains them for 14 days. Use this URL to download the logs.</p>
 *         <note>
 *             <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">AWS Service
 *                     Limits</a> page for maximum log file sizes. Log files that exceed this limit
 *                 are not saved.</p>
 *         </note>
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
export class GetGameSessionLogUrlCommand extends $Command<
  GetGameSessionLogUrlCommandInput,
  GetGameSessionLogUrlCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetGameSessionLogUrlCommandInput) {
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
  ): Handler<GetGameSessionLogUrlCommandInput, GetGameSessionLogUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "GetGameSessionLogUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGameSessionLogUrlInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetGameSessionLogUrlOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGameSessionLogUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetGameSessionLogUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGameSessionLogUrlCommandOutput> {
    return deserializeAws_json1_1GetGameSessionLogUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

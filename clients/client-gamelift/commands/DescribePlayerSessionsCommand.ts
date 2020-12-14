import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribePlayerSessionsInput, DescribePlayerSessionsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribePlayerSessionsCommand,
  serializeAws_json1_1DescribePlayerSessionsCommand,
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

export type DescribePlayerSessionsCommandInput = DescribePlayerSessionsInput;
export type DescribePlayerSessionsCommandOutput = DescribePlayerSessionsOutput & __MetadataBearer;

/**
 * <p>Retrieves properties for one or more player sessions. This operation can be used in
 *         several ways: (1) provide a <code>PlayerSessionId</code> to request properties for a
 *         specific player session; (2) provide a <code>GameSessionId</code> to request properties
 *         for all player sessions in the specified game session; (3) provide a
 *         <code>PlayerId</code> to request properties for all player sessions of a specified
 *         player. </p>
 *          <p>To get game session record(s), specify only one of the following: a player session
 *         ID, a game session ID, or a player ID. You can filter this request by player session
 *         status. Use the pagination parameters to retrieve results as a set of sequential pages.
 *         If successful, a <a>PlayerSession</a> object is returned for each session
 *         matching the request.</p>
 *          <p>
 *             <i>Available in Amazon GameLift Local.</i>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreatePlayerSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreatePlayerSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribePlayerSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Game session placements</p>
 *                <ul>
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
export class DescribePlayerSessionsCommand extends $Command<
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribePlayerSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePlayerSessionsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePlayerSessionsOutput.filterSensitiveLog,
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

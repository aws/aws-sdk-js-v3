import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameSessionQueuesInput, DescribeGameSessionQueuesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeGameSessionQueuesCommand,
  serializeAws_json1_1DescribeGameSessionQueuesCommand,
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

export type DescribeGameSessionQueuesCommandInput = DescribeGameSessionQueuesInput;
export type DescribeGameSessionQueuesCommandOutput = DescribeGameSessionQueuesOutput & __MetadataBearer;

/**
 * <p>Retrieves the properties for one or more game session queues. When requesting
 *             multiple queues, use the pagination parameters to retrieve results as a set of
 *             sequential pages. If successful, a <a>GameSessionQueue</a> object is returned
 *             for each requested queue. When specifying a list of queues, objects are returned only
 *             for queues that currently exist in the Region.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html">
 *            View Your Queues</a>
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
export class DescribeGameSessionQueuesCommand extends $Command<
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeGameSessionQueuesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGameSessionQueuesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGameSessionQueuesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGameSessionQueuesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeGameSessionQueuesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGameSessionQueuesCommandOutput> {
    return deserializeAws_json1_1DescribeGameSessionQueuesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

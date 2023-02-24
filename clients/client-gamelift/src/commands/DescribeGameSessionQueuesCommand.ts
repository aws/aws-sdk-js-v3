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
  DescribeGameSessionQueuesInput,
  DescribeGameSessionQueuesInputFilterSensitiveLog,
  DescribeGameSessionQueuesOutput,
  DescribeGameSessionQueuesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeGameSessionQueuesCommand,
  serializeAws_json1_1DescribeGameSessionQueuesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeGameSessionQueuesCommandInput extends DescribeGameSessionQueuesInput {}
export interface DescribeGameSessionQueuesCommandOutput extends DescribeGameSessionQueuesOutput, __MetadataBearer {}

/**
 * <p>Retrieves the properties for one or more game session queues. When requesting multiple
 *             queues, use the pagination parameters to retrieve results as a set of sequential pages.
 *             When specifying a list of queues, objects are returned only for queues that currently
 *             exist in the Region.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html">
 *                 View Your Queues</a>
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameSessionQueuesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionQueuesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameSessionQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameSessionQueuesCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionQueuesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
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
      inputFilterSensitiveLog: DescribeGameSessionQueuesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeGameSessionQueuesOutputFilterSensitiveLog,
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

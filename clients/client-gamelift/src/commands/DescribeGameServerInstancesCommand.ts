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
  DescribeGameServerInstancesInput,
  DescribeGameServerInstancesInputFilterSensitiveLog,
  DescribeGameServerInstancesOutput,
  DescribeGameServerInstancesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeGameServerInstancesCommand,
  serializeAws_json1_1DescribeGameServerInstancesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeGameServerInstancesCommandInput extends DescribeGameServerInstancesInput {}
export interface DescribeGameServerInstancesCommandOutput extends DescribeGameServerInstancesOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Retrieves status
 *             information about the Amazon EC2 instances associated with a GameLift FleetIQ game server group.
 *             Use this operation to detect when instances are active or not available to host new game
 *             servers.</p>
 *         <p>To request status for all instances in the game server group, provide a game server
 *             group ID only. To request status for specific instances, provide the game server group
 *             ID and one or more instance IDs. Use the pagination parameters to retrieve results in
 *             sequential segments. If successful, a collection of <code>GameServerInstance</code>
 *             objects is returned. </p>
 *         <p>This operation is not designed to be called with every game server claim request; this
 *             practice can cause you to exceed your API limit, which results in errors. Instead, as a
 *             best practice, cache the results and refresh your cache no more than once every 10
 *             seconds.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ
 *                 Guide</a>
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameServerInstancesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameServerInstancesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameServerInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameServerInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeGameServerInstancesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeGameServerInstancesCommand extends $Command<
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput,
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

  constructor(readonly input: DescribeGameServerInstancesCommandInput) {
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
  ): Handler<DescribeGameServerInstancesCommandInput, DescribeGameServerInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGameServerInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeGameServerInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGameServerInstancesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeGameServerInstancesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGameServerInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeGameServerInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGameServerInstancesCommandOutput> {
    return deserializeAws_json1_1DescribeGameServerInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

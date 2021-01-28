import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameServerInstancesInput, DescribeGameServerInstancesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeGameServerInstancesCommand,
  serializeAws_json1_1DescribeGameServerInstancesCommand,
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

export type DescribeGameServerInstancesCommandInput = DescribeGameServerInstancesInput;
export type DescribeGameServerInstancesCommandOutput = DescribeGameServerInstancesOutput & __MetadataBearer;

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves status information about the Amazon EC2 instances associated with a GameLift FleetIQ
 *             game server group. Use this operation to detect when instances are active or not
 *             available to host new game servers. If you are looking for instance configuration
 *             information, call <a>DescribeGameServerGroup</a> or access the corresponding
 *             Auto Scaling group properties.</p>
 *         <p>To request status for all instances in the game server group, provide a game server
 *             group ID only. To request status for specific instances, provide the game server group
 *             ID and one or more instance IDs. Use the pagination parameters to retrieve results in
 *             sequential segments. If successful, a collection of <code>GameServerInstance</code>
 *             objects is returned.
 *
 *         </p>
 *         <p>This operation is not designed to be called with every game server claim request; this
 *             practice can cause you to exceed your API limit, which results in errors. Instead, as a
 *             best practice, cache the results and refresh your cache no more than once every 10
 *             seconds.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGameServerGroups</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ResumeGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>SuspendGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServerInstances</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DescribeGameServerInstancesCommand extends $Command<
  DescribeGameServerInstancesCommandInput,
  DescribeGameServerInstancesCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeGameServerInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGameServerInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeGameServerInstancesOutput.filterSensitiveLog,
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

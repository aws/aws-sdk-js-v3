import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateGameServerGroupInput, CreateGameServerGroupOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateGameServerGroupCommand,
  serializeAws_json1_1CreateGameServerGroupCommand,
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

export type CreateGameServerGroupCommandInput = CreateGameServerGroupInput;
export type CreateGameServerGroupCommandOutput = CreateGameServerGroupOutput & __MetadataBearer;

/**
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Creates a GameLift FleetIQ game server group for managing game hosting on a collection of
 *             Amazon EC2 instances for game hosting. This operation creates the game server group,
 *             creates an Auto Scaling group in your AWS account, and establishes a link between the
 *             two groups. You can view the status of your game server groups in the GameLift console.
 *             Game server group metrics and events are emitted to Amazon CloudWatch.</p>
 *         <p>Before creating a new game server group, you must have the following: </p>
 *         <ul>
 *             <li>
 *                 <p>An Amazon EC2 launch template that specifies how to launch Amazon EC2 instances
 *                     with your game server build. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the
 *                         <i>Amazon EC2 User Guide</i>. </p>
 *             </li>
 *             <li>
 *                <p>An IAM role that extends limited access to your AWS account to allow GameLift FleetIQ to create and
 *                     interact with the Auto Scaling group. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gsg-iam-permissions-roles.html">Create IAM roles for cross-service interaction</a> in the <i>GameLift FleetIQ Developer
 *                         Guide</i>.</p>
 *             </li>
 *          </ul>
 *         <p>To create a new game server group, specify a unique group name, IAM role and Amazon EC2
 *             launch template, and provide a list of instance types that can be used in the group. You
 *             must also set initial maximum and minimum limits on the group's instance count. You can
 *             optionally set an Auto Scaling policy with target tracking based on a GameLift FleetIQ
 *             metric.</p>
 *         <p>Once the game server group and corresponding Auto Scaling group are created, you have
 *             full access to change the Auto Scaling group's configuration as needed. Several
 *             properties that are set when creating a game server group, including maximum/minimum
 *             size and auto-scaling policy settings, must be updated directly in the Auto Scaling
 *             group. Keep in mind that some Auto Scaling group properties are periodically updated by
 *             GameLift FleetIQ as part of its balancing activities to optimize for availability and
 *             cost.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *
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
export class CreateGameServerGroupCommand extends $Command<
  CreateGameServerGroupCommandInput,
  CreateGameServerGroupCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGameServerGroupCommandInput) {
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
  ): Handler<CreateGameServerGroupCommandInput, CreateGameServerGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateGameServerGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGameServerGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGameServerGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGameServerGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateGameServerGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGameServerGroupCommandOutput> {
    return deserializeAws_json1_1CreateGameServerGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

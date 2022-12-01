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
  CreateGameServerGroupInput,
  CreateGameServerGroupInputFilterSensitiveLog,
  CreateGameServerGroupOutput,
  CreateGameServerGroupOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateGameServerGroupCommand,
  serializeAws_json1_1CreateGameServerGroupCommand,
} from "../protocols/Aws_json1_1";

export interface CreateGameServerGroupCommandInput extends CreateGameServerGroupInput {}
export interface CreateGameServerGroupCommandOutput extends CreateGameServerGroupOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Creates a GameLift FleetIQ game server
 *             group for managing game hosting on a collection of Amazon Elastic Compute Cloud instances for game hosting.
 *             This operation creates the game server group, creates an Auto Scaling group in your
 *             Amazon Web Services account, and establishes a link between the two groups. You can view the status of
 *             your game server groups in the GameLift console. Game server group metrics and events are
 *             emitted to Amazon CloudWatch.</p>
 *         <p>Before creating a new game server group, you must have the following: </p>
 *         <ul>
 *             <li>
 *                 <p>An Amazon Elastic Compute Cloud launch template that specifies how to launch Amazon Elastic Compute Cloud instances
 *                     with your game server build. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html"> Launching an Instance from a Launch Template</a> in the
 *                         <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
 *             </li>
 *             <li>
 *                 <p>An IAM role that extends limited access to your Amazon Web Services account to allow GameLift FleetIQ
 *                     to create and interact with the Auto Scaling group. For more information, see
 *                         <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-iam-permissions-roles.html">Create IAM
 *                         roles for cross-service interaction</a> in the <i>GameLift FleetIQ Developer
 *                         Guide</i>.</p>
 *             </li>
 *          </ul>
 *         <p>To create a new game server group, specify a unique group name, IAM role and Amazon Elastic Compute Cloud
 *             launch template, and provide a list of instance types that can be used in the group. You
 *             must also set initial maximum and minimum limits on the group's instance count. You can
 *             optionally set an Auto Scaling policy with target tracking based on a GameLift FleetIQ
 *             metric.</p>
 *         <p>Once the game server group and corresponding Auto Scaling group are created, you have
 *             full access to change the Auto Scaling group's configuration as needed. Several
 *             properties that are set when creating a game server group, including maximum/minimum
 *             size and auto-scaling policy settings, must be updated directly in the Auto Scaling
 *             group. Keep in mind that some Auto Scaling group properties are periodically updated by
 *             GameLift FleetIQ as part of its balancing activities to optimize for availability and cost.</p>
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
 * import { GameLiftClient, CreateGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateGameServerGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link CreateGameServerGroupCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class CreateGameServerGroupCommand extends $Command<
  CreateGameServerGroupCommandInput,
  CreateGameServerGroupCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGameServerGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateGameServerGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGameServerGroupInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateGameServerGroupOutputFilterSensitiveLog,
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

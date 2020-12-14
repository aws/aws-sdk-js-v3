import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateFleetInput, CreateFleetOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateFleetCommand,
  serializeAws_json1_1CreateFleetCommand,
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

export type CreateFleetCommandInput = CreateFleetInput;
export type CreateFleetCommandOutput = CreateFleetOutput & __MetadataBearer;

/**
 * <p>Creates a new fleet to run your game servers. whether they are custom game builds or
 *             Realtime Servers with game-specific script. A fleet is a set of Amazon Elastic Compute Cloud
 *             (Amazon EC2) instances, each of which can host multiple game sessions. When creating a
 *             fleet, you choose the hardware specifications, set some configuration options, and
 *             specify the game server to deploy on the new fleet. </p>
 *         <p>To create a new fleet, provide the following: (1) a fleet name, (2) an EC2 instance
 *             type and fleet type (spot or on-demand), (3) the build ID for your game build or script
 *             ID if using Realtime Servers, and (4) a runtime configuration, which determines how game servers
 *             will run on each instance in the fleet. </p>
 *
 *         <p>If the <code>CreateFleet</code> call is successful, Amazon GameLift performs the following
 *             tasks. You can track the process of a fleet by checking the fleet status or by
 *             monitoring fleet creation events:</p>
 *         <ul>
 *             <li>
 *                 <p>Creates a fleet resource. Status: <code>NEW</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Begins writing events to the fleet event log, which can be accessed in the
 *                     Amazon GameLift console.</p>
 *             </li>
 *             <li>
 *                  <p>Sets the fleet's target capacity to 1 (desired instances), which triggers
 *                     Amazon GameLift to start one new EC2 instance.</p>
 *             </li>
 *             <li>
 *                 <p>Downloads the game build or Realtime script to the new instance and installs it.
 *                     Statuses: <code>DOWNLOADING</code>, <code>VALIDATING</code>,
 *                         <code>BUILDING</code>. </p>
 *             </li>
 *             <li>
 *                 <p>Starts launching server processes on the instance. If the fleet is configured
 *                     to run multiple server processes per instance, Amazon GameLift staggers each process
 *                     launch by a few seconds. Status: <code>ACTIVATING</code>.</p>
 *             </li>
 *             <li>
 *                 <p>Sets the fleet's status to <code>ACTIVE</code> as soon as one server
 *                     process is ready to host a game session.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting Up Fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug Fleet Creation Issues</a>
 *          </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListFleets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartFleetActions</a> or <a>StopFleetActions</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateFleetCommand extends $Command<
  CreateFleetCommandInput,
  CreateFleetCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFleetCommandInput) {
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
  ): Handler<CreateFleetCommandInput, CreateFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFleetInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFleetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFleetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFleetCommandOutput> {
    return deserializeAws_json1_1CreateFleetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

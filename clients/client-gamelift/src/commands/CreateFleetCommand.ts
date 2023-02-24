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
  CreateFleetInput,
  CreateFleetInputFilterSensitiveLog,
  CreateFleetOutput,
  CreateFleetOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateFleetCommand,
  serializeAws_json1_1CreateFleetCommand,
} from "../protocols/Aws_json1_1";

export interface CreateFleetCommandInput extends CreateFleetInput {}
export interface CreateFleetCommandOutput extends CreateFleetOutput, __MetadataBearer {}

/**
 * <p>Creates a fleet of Amazon Elastic Compute Cloud (Amazon Elastic Compute Cloud) instances to host your
 *             custom game server or Realtime Servers. Use this operation to configure the computing resources for
 *             your fleet and provide instructions for running game servers on each instance.</p>
 *         <p>Most GameLift fleets can deploy instances to multiple locations, including the home
 *             Region (where the fleet is created) and an optional set of remote locations. Fleets that
 *             are created in the following Amazon Web Services Regions support multiple locations: us-east-1 (N.
 *             Virginia), us-west-2 (Oregon), eu-central-1 (Frankfurt), eu-west-1 (Ireland),
 *             ap-southeast-2 (Sydney), ap-northeast-1 (Tokyo), and ap-northeast-2 (Seoul). Fleets that
 *             are created in other GameLift Regions can deploy instances in the fleet's home Region
 *             only. All fleet instances use the same configuration regardless of location; however,
 *             you can adjust capacity settings and turn auto-scaling on/off for each location.</p>
 *         <p>To create a fleet, choose the hardware for your instances, specify a game server build
 *             or Realtime script to deploy, and provide a runtime configuration to direct GameLift how
 *             to start and run game servers on each instance in the fleet. Set permissions for inbound
 *             traffic to your game servers, and enable optional features as needed. When creating a
 *             multi-location fleet, provide a list of additional remote locations.</p>
 *         <p>If you need to debug your fleet, fetch logs, view performance metrics or other actions
 *             on the fleet, create the development fleet with port 22/3389 open. As a best practice,
 *             we recommend opening ports for remote access only when you need them and closing them
 *             when you're finished. </p>
 *         <p>If successful, this operation creates a new Fleet resource and places it in
 *                 <code>NEW</code> status, which prompts GameLift to initiate the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creation-workflow.html">fleet creation
 *                 workflow</a>.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up
 *             fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation">Debug fleet creation issues</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateFleetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateFleetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class CreateFleetCommand extends $Command<
  CreateFleetCommandInput,
  CreateFleetCommandOutput,
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
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateFleetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFleetInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFleetOutputFilterSensitiveLog,
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

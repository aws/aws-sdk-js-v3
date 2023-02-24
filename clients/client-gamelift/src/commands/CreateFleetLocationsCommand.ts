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
  CreateFleetLocationsInput,
  CreateFleetLocationsInputFilterSensitiveLog,
  CreateFleetLocationsOutput,
  CreateFleetLocationsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateFleetLocationsCommand,
  serializeAws_json1_1CreateFleetLocationsCommand,
} from "../protocols/Aws_json1_1";

export interface CreateFleetLocationsCommandInput extends CreateFleetLocationsInput {}
export interface CreateFleetLocationsCommandOutput extends CreateFleetLocationsOutput, __MetadataBearer {}

/**
 * <p>Adds remote locations to a fleet and begins populating the new locations with EC2
 *             instances. The new instances conform to the fleet's instance type, auto-scaling, and
 *             other configuration settings. </p>
 *         <note>
 *             <p>This operation cannot be used with fleets that don't support remote locations.
 *                 Fleets can have multiple locations only if they reside in Amazon Web Services Regions that support
 *                 this feature and were created after the feature was released in March 2021.</p>
 *         </note>
 *         <p>To add fleet locations, specify the fleet to be updated and provide a list of one or
 *             more locations. </p>
 *         <p>If successful, this operation returns the list of added locations with their status
 *             set to <code>NEW</code>. GameLift initiates the process of starting an instance in each
 *             added location. You can track the status of each new location by monitoring location
 *             creation events using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetEvents.html">DescribeFleetEvents</a>.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up
 *             fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateFleetLocationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateFleetLocationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateFleetLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFleetLocationsCommandInput} for command's `input` shape.
 * @see {@link CreateFleetLocationsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class CreateFleetLocationsCommand extends $Command<
  CreateFleetLocationsCommandInput,
  CreateFleetLocationsCommandOutput,
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

  constructor(readonly input: CreateFleetLocationsCommandInput) {
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
  ): Handler<CreateFleetLocationsCommandInput, CreateFleetLocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFleetLocationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateFleetLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFleetLocationsInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFleetLocationsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFleetLocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateFleetLocationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFleetLocationsCommandOutput> {
    return deserializeAws_json1_1CreateFleetLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

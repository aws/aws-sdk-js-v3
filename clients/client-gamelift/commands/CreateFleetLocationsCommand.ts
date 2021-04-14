import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateFleetLocationsInput, CreateFleetLocationsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateFleetLocationsCommand,
  serializeAws_json1_1CreateFleetLocationsCommand,
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

export type CreateFleetLocationsCommandInput = CreateFleetLocationsInput;
export type CreateFleetLocationsCommandOutput = CreateFleetLocationsOutput & __MetadataBearer;

/**
 * <p>Adds remote locations to a fleet and begins populating the new locations with EC2
 *             instances. The new instances conform to the fleet's instance type, auto-scaling, and
 *             other configuration settings. </p>
 *         <note>
 *             <p>This operation cannot be used with fleets that don't support remote locations. Fleets
 *                 can have multiple locations only if they reside in AWS Regions that support this
 *                 feature (see <a>CreateFleet</a> for the complete list) and were created
 *                 after the feature was released in March 2021.</p>
 *         </note>
 *         <p>To add fleet locations, specify the fleet to be updated and provide a list of one or
 *             more locations. </p>
 *         <p>If successful, this operation returns the list of added locations with their status set
 *             to <code>NEW</code>. GameLift initiates the process of starting an instance in each added
 *             location. You can track the status of each new location by monitoring location creation
 *             events using <a>DescribeFleetEvents</a>. Alternatively, you can poll location
 *             status by calling <a>DescribeFleetLocationAttributes</a>. After a location
 *             status becomes <code>ACTIVE</code>, you can adjust the location's capacity as needed
 *             with <a>UpdateFleetCapacity</a>.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up fleets</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Multi-location fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleetLocations</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetLocationCapacity</a> |
 *                     <a>DescribeFleetLocationUtilization</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 */
export class CreateFleetLocationsCommand extends $Command<
  CreateFleetLocationsCommandInput,
  CreateFleetLocationsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateFleetLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFleetLocationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFleetLocationsOutput.filterSensitiveLog,
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

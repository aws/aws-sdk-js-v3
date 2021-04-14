import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetPortSettingsInput, DescribeFleetPortSettingsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetPortSettingsCommand,
  serializeAws_json1_1DescribeFleetPortSettingsCommand,
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

export type DescribeFleetPortSettingsCommandInput = DescribeFleetPortSettingsInput;
export type DescribeFleetPortSettingsCommandOutput = DescribeFleetPortSettingsOutput & __MetadataBearer;

/**
 * <p>Retrieves a fleet's inbound connection permissions. Connection permissions specify the
 *             range of IP addresses and port settings that incoming traffic can use to access server
 *             processes in the fleet. Game sessions that are running on instances in the fleet must
 *             use connections that fall in this range.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To retrieve the inbound connection permissions for a fleet, identify the
 *                     fleet's unique identifier. </p>
 *             </li>
 *             <li>
 *                 <p>To check the status of recent updates to a fleet remote location, specify
 *                     the fleet ID and a location. Port setting updates can take time to
 *                     propagate across all locations. </p>
 *             </li>
 *          </ul>
 *         <p>If successful, a set of <a>IpPermission</a> objects is returned for the
 *             requested fleet ID. When a location is specified, a pending status is included. If the
 *             requested fleet has been deleted, the result set is empty.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>ListFleets</a> |
 *                     <a>DescribeEC2InstanceLimits</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetEvents</a> |
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetPortSettings</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>DescribeRuntimeConfiguration</a> |
 *                     <a>DescribeScalingPolicies</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 */
export class DescribeFleetPortSettingsCommand extends $Command<
  DescribeFleetPortSettingsCommandInput,
  DescribeFleetPortSettingsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFleetPortSettingsCommandInput) {
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
  ): Handler<DescribeFleetPortSettingsCommandInput, DescribeFleetPortSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeFleetPortSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetPortSettingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetPortSettingsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFleetPortSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFleetPortSettingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFleetPortSettingsCommandOutput> {
    return deserializeAws_json1_1DescribeFleetPortSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

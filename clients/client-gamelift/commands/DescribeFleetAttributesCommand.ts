import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeFleetAttributesInput, DescribeFleetAttributesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetAttributesCommand,
  serializeAws_json1_1DescribeFleetAttributesCommand,
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

export interface DescribeFleetAttributesCommandInput extends DescribeFleetAttributesInput {}
export interface DescribeFleetAttributesCommandOutput extends DescribeFleetAttributesOutput, __MetadataBearer {}

/**
 * <p>Retrieves core fleet-wide properties, including the computing hardware and deployment
 *             configuration for all instances in the fleet.</p>
 *         <p>This operation can be used in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>To get attributes for one or more specific fleets, provide a list of fleet IDs
 *                     or fleet ARNs. </p>
 *             </li>
 *             <li>
 *                 <p>To get attributes for all fleets, do not provide a fleet identifier. </p>
 *             </li>
 *          </ul>
 *         <p>When requesting attributes for multiple fleets, use the pagination parameters to
 *             retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a <code>FleetAttributes</code> object is returned for each fleet
 *             requested, unless the fleet identifier is not found. </p>
 *         <note>
 *             <p>Some API operations limit the number of fleet IDs that allowed in one request. If a
 *                 request exceeds this limit, the request fails and the error message contains the
 *                 maximum allowed number.</p>
 *         </note>
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
export class DescribeFleetAttributesCommand extends $Command<
  DescribeFleetAttributesCommandInput,
  DescribeFleetAttributesCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFleetAttributesCommandInput) {
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
  ): Handler<DescribeFleetAttributesCommandInput, DescribeFleetAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeFleetAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFleetAttributesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetAttributesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFleetAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFleetAttributesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFleetAttributesCommandOutput> {
    return deserializeAws_json1_1DescribeFleetAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

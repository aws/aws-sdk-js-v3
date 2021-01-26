import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeScalingPoliciesInput, DescribeScalingPoliciesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScalingPoliciesCommand,
  serializeAws_json1_1DescribeScalingPoliciesCommand,
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

export type DescribeScalingPoliciesCommandInput = DescribeScalingPoliciesInput;
export type DescribeScalingPoliciesCommandOutput = DescribeScalingPoliciesOutput & __MetadataBearer;

/**
 * <p>Retrieves all scaling policies applied to a fleet.</p>
 *         <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this
 *             request by policy status, such as to retrieve only active scaling policies. Use the
 *             pagination parameters to retrieve results as a set of sequential pages. If successful,
 *             set of <a>ScalingPolicy</a> objects is returned for the fleet.</p>
 *         <p>A fleet may have all of its scaling policies suspended (<a>StopFleetActions</a>). This operation does not affect the status of the scaling
 *             policies, which remains ACTIVE. To see whether a fleet's scaling policies are in force
 *             or suspended, call <a>DescribeFleetAttributes</a> and check the stopped
 *             actions.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetCapacity</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateFleetCapacity</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEC2InstanceLimits</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Manage scaling policies:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a>PutScalingPolicy</a> (auto-scaling)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeScalingPolicies</a> (auto-scaling)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DeleteScalingPolicy</a> (auto-scaling)</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Manage fleet actions:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a>StartFleetActions</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>StopFleetActions</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export class DescribeScalingPoliciesCommand extends $Command<
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScalingPoliciesCommandInput) {
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
  ): Handler<DescribeScalingPoliciesCommandInput, DescribeScalingPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeScalingPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScalingPoliciesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalingPoliciesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScalingPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeScalingPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScalingPoliciesCommandOutput> {
    return deserializeAws_json1_1DescribeScalingPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

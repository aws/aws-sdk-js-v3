import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { PutScalingPolicyInput, PutScalingPolicyOutput } from "../models/models_0";
import {
  deserializeAws_json1_1PutScalingPolicyCommand,
  serializeAws_json1_1PutScalingPolicyCommand,
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

export type PutScalingPolicyCommandInput = PutScalingPolicyInput;
export type PutScalingPolicyCommandOutput = PutScalingPolicyOutput & __MetadataBearer;

/**
 * <p>Creates or updates a scaling policy for a fleet. Scaling policies are used to
 *             automatically scale a fleet's hosting capacity to meet player demand. An active scaling
 *             policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's
 *             capacity when a certain threshold is reached. There are two types of scaling policies:
 *             target-based and rule-based. Use a target-based policy to quickly and efficiently manage
 *             fleet scaling; this option is the most commonly used. Use rule-based policies when you
 *             need to exert fine-grained control over auto-scaling. </p>
 *         <p>Fleets can have multiple scaling policies of each type in force at the same time;
 *             you can have one target-based policy, one or multiple rule-based scaling policies, or
 *             both. We recommend caution, however, because multiple auto-scaling policies can have
 *             unintended consequences.</p>
 *         <p>You can temporarily suspend all scaling policies for a fleet by calling <a>StopFleetActions</a> with the fleet action AUTO_SCALING. To resume scaling
 *             policies, call <a>StartFleetActions</a> with the same fleet action. To stop
 *             just one scaling policy--or to permanently remove it, you must delete the policy with
 *                 <a>DeleteScalingPolicy</a>.</p>
 *         <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic
 *                 Scaling</a>.</p>
 *         <p>
 *             <b>Target-based policy</b>
 *          </p>
 *         <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This
 *             metric tells us how much of a fleet's hosting capacity is ready to host game sessions
 *             but is not currently in use. This is the fleet's buffer; it measures the additional
 *             player demand that the fleet could handle at current capacity. With a target-based
 *             policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action
 *             is needed to maintain that target. </p>
 *         <p>For example, you might choose to maintain a 10% buffer for a fleet that has the
 *             capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take
 *             action whenever the fleet's available capacity falls below or rises above 10 game
 *             sessions. Amazon GameLift will start new instances or stop unused instances in order to return
 *             to the 10% buffer. </p>
 *         <p>To create or update a target-based policy, specify a fleet ID and name, and set the
 *             policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions)
 *             and reference a <a>TargetConfiguration</a> object with your desired buffer
 *             value. Exclude all other parameters. On a successful request, the policy name is
 *             returned. The scaling policy is automatically in force as soon as it's successfully
 *             created. If the fleet's auto-scaling actions are temporarily suspended, the new policy
 *             will be in force once the fleet actions are restarted.</p>
 *         <p>
 *             <b>Rule-based policy</b>
 *          </p>
 *         <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and
 *             specifies the type of action to initiate when triggered. With a rule-based policy, you
 *             can select from several available fleet metrics. Each policy specifies whether to scale
 *             up or scale down (and by how much), so you need one policy for each type of action. </p>
 *         <p>For example, a policy may make the following statement: "If the percentage of idle
 *             instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity
 *             by 10%."</p>
 *         <p>A policy's rule statement has the following structure:</p>
 *         <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code>
 *             <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then
 *                 <code>[ScalingAdjustmentType]</code> to/by
 *             <code>[ScalingAdjustment]</code>.</p>
 *         <p>To implement the example, the rule statement would look like this:</p>
 *         <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code>
 *             <code>[20]</code> for <code>[15]</code> minutes, then
 *                 <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p>
 *         <p>To create or update a scaling policy, specify a unique combination of name and
 *             fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a
 *             policy rule statement. On a successful request, the policy name is returned. Scaling
 *             policies are automatically in force as soon as they're successfully created. If the
 *             fleet's auto-scaling actions are temporarily suspended, the new policy will be in force
 *             once the fleet actions are restarted.</p>
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
export class PutScalingPolicyCommand extends $Command<
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutScalingPolicyCommandInput) {
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
  ): Handler<PutScalingPolicyCommandInput, PutScalingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "PutScalingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutScalingPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutScalingPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutScalingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutScalingPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutScalingPolicyCommandOutput> {
    return deserializeAws_json1_1PutScalingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

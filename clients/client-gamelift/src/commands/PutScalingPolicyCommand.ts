// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { PutScalingPolicyInput, PutScalingPolicyOutput } from "../models/models_0";
import { de_PutScalingPolicyCommand, se_PutScalingPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutScalingPolicyCommand}.
 */
export interface PutScalingPolicyCommandInput extends PutScalingPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutScalingPolicyCommand}.
 */
export interface PutScalingPolicyCommandOutput extends PutScalingPolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a scaling policy for a fleet. Scaling policies are used to
 *             automatically scale a fleet's hosting capacity to meet player demand. An active scaling
 *             policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's
 *             capacity when a certain threshold is reached. There are two types of scaling policies:
 *             target-based and rule-based. Use a target-based policy to quickly and efficiently manage
 *             fleet scaling; this option is the most commonly used. Use rule-based policies when you
 *             need to exert fine-grained control over auto-scaling. </p>
 *          <p>Fleets can have multiple scaling policies of each type in force at the same time; you
 *             can have one target-based policy, one or multiple rule-based scaling policies, or both.
 *             We recommend caution, however, because multiple auto-scaling policies can have
 *             unintended consequences.</p>
 *          <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic
 *                 Scaling</a>.</p>
 *          <p>
 *             <b>Target-based policy</b>
 *          </p>
 *          <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This
 *             metric tells us how much of a fleet's hosting capacity is ready to host game sessions
 *             but is not currently in use. This is the fleet's buffer; it measures the additional
 *             player demand that the fleet could handle at current capacity. With a target-based
 *             policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action is
 *             needed to maintain that target. </p>
 *          <p>For example, you might choose to maintain a 10% buffer for a fleet that has the
 *             capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take action
 *             whenever the fleet's available capacity falls below or rises above 10 game sessions.
 *             Amazon GameLift will start new instances or stop unused instances in order to return to the 10%
 *             buffer. </p>
 *          <p>To create or update a target-based policy, specify a fleet ID and name, and set the
 *             policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions)
 *             and reference a <code>TargetConfiguration</code> object with your desired buffer value.
 *             Exclude all other parameters. On a successful request, the policy name is returned. The
 *             scaling policy is automatically in force as soon as it's successfully created. If the
 *             fleet's auto-scaling actions are temporarily suspended, the new policy will be in force
 *             once the fleet actions are restarted.</p>
 *          <p>
 *             <b>Rule-based policy</b>
 *          </p>
 *          <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and
 *             specifies the type of action to initiate when triggered. With a rule-based policy, you
 *             can select from several available fleet metrics. Each policy specifies whether to scale
 *             up or scale down (and by how much), so you need one policy for each type of action. </p>
 *          <p>For example, a policy may make the following statement: "If the percentage of idle
 *             instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity
 *             by 10%."</p>
 *          <p>A policy's rule statement has the following structure:</p>
 *          <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code>
 *             <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then
 *                 <code>[ScalingAdjustmentType]</code> to/by <code>[ScalingAdjustment]</code>.</p>
 *          <p>To implement the example, the rule statement would look like this:</p>
 *          <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code>
 *             <code>[20]</code> for <code>[15]</code> minutes, then
 *                 <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p>
 *          <p>To create or update a scaling policy, specify a unique combination of name and fleet
 *             ID, and set the policy type to "RuleBased". Specify the parameter values for a policy
 *             rule statement. On a successful request, the policy name is returned. Scaling policies
 *             are automatically in force as soon as they're successfully created. If the fleet's
 *             auto-scaling actions are temporarily suspended, the new policy will be in force once the
 *             fleet actions are restarted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, PutScalingPolicyCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, PutScalingPolicyCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // PutScalingPolicyInput
 *   Name: "STRING_VALUE", // required
 *   FleetId: "STRING_VALUE", // required
 *   ScalingAdjustment: Number("int"),
 *   ScalingAdjustmentType: "ChangeInCapacity" || "ExactCapacity" || "PercentChangeInCapacity",
 *   Threshold: Number("double"),
 *   ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold",
 *   EvaluationPeriods: Number("int"),
 *   MetricName: "ActivatingGameSessions" || "ActiveGameSessions" || "ActiveInstances" || "AvailableGameSessions" || "AvailablePlayerSessions" || "CurrentPlayerSessions" || "IdleInstances" || "PercentAvailableGameSessions" || "PercentIdleInstances" || "QueueDepth" || "WaitTime" || "ConcurrentActivatableGameSessions", // required
 *   PolicyType: "RuleBased" || "TargetBased",
 *   TargetConfiguration: { // TargetConfiguration
 *     TargetValue: Number("double"), // required
 *   },
 * };
 * const command = new PutScalingPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutScalingPolicyOutput
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutScalingPolicyCommandInput - {@link PutScalingPolicyCommandInput}
 * @returns {@link PutScalingPolicyCommandOutput}
 * @see {@link PutScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class PutScalingPolicyCommand extends $Command<
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutScalingPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "PutScalingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutScalingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutScalingPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutScalingPolicyCommandOutput> {
    return de_PutScalingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

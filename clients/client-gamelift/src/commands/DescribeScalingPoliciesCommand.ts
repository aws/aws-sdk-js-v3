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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeScalingPoliciesInput, DescribeScalingPoliciesOutput } from "../models/models_0";
import { de_DescribeScalingPoliciesCommand, se_DescribeScalingPoliciesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeScalingPoliciesCommand}.
 */
export interface DescribeScalingPoliciesCommandInput extends DescribeScalingPoliciesInput {}
/**
 * @public
 *
 * The output of {@link DescribeScalingPoliciesCommand}.
 */
export interface DescribeScalingPoliciesCommandOutput extends DescribeScalingPoliciesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves all scaling policies applied to a fleet.</p>
 *          <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this request
 *             by policy status, such as to retrieve only active scaling policies. Use the pagination
 *             parameters to retrieve results as a set of sequential pages. If successful, set of
 *                 <code>ScalingPolicy</code> objects is returned for the fleet.</p>
 *          <p>A fleet may have all of its scaling policies suspended. This operation does not affect
 *             the status of the scaling policies, which remains ACTIVE.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeScalingPoliciesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeScalingPoliciesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeScalingPoliciesInput
 *   FleetId: "STRING_VALUE", // required
 *   StatusFilter: "ACTIVE" || "UPDATE_REQUESTED" || "UPDATING" || "DELETE_REQUESTED" || "DELETING" || "DELETED" || "ERROR",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Location: "STRING_VALUE",
 * };
 * const command = new DescribeScalingPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScalingPoliciesOutput
 * //   ScalingPolicies: [ // ScalingPolicyList
 * //     { // ScalingPolicy
 * //       FleetId: "STRING_VALUE",
 * //       FleetArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Status: "ACTIVE" || "UPDATE_REQUESTED" || "UPDATING" || "DELETE_REQUESTED" || "DELETING" || "DELETED" || "ERROR",
 * //       ScalingAdjustment: Number("int"),
 * //       ScalingAdjustmentType: "ChangeInCapacity" || "ExactCapacity" || "PercentChangeInCapacity",
 * //       ComparisonOperator: "GreaterThanOrEqualToThreshold" || "GreaterThanThreshold" || "LessThanThreshold" || "LessThanOrEqualToThreshold",
 * //       Threshold: Number("double"),
 * //       EvaluationPeriods: Number("int"),
 * //       MetricName: "ActivatingGameSessions" || "ActiveGameSessions" || "ActiveInstances" || "AvailableGameSessions" || "AvailablePlayerSessions" || "CurrentPlayerSessions" || "IdleInstances" || "PercentAvailableGameSessions" || "PercentIdleInstances" || "QueueDepth" || "WaitTime" || "ConcurrentActivatableGameSessions",
 * //       PolicyType: "RuleBased" || "TargetBased",
 * //       TargetConfiguration: { // TargetConfiguration
 * //         TargetValue: Number("double"), // required
 * //       },
 * //       UpdateStatus: "PENDING_UPDATE",
 * //       Location: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeScalingPoliciesCommandInput - {@link DescribeScalingPoliciesCommandInput}
 * @returns {@link DescribeScalingPoliciesCommandOutput}
 * @see {@link DescribeScalingPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPoliciesCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class DescribeScalingPoliciesCommand extends $Command<
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScalingPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeScalingPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "DescribeScalingPolicies",
      },
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
  private serialize(input: DescribeScalingPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeScalingPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeScalingPoliciesCommandOutput> {
    return de_DescribeScalingPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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
import { SuspendGameServerGroupInput, SuspendGameServerGroupOutput } from "../models/models_0";
import { de_SuspendGameServerGroupCommand, se_SuspendGameServerGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SuspendGameServerGroupCommand}.
 */
export interface SuspendGameServerGroupCommandInput extends SuspendGameServerGroupInput {}
/**
 * @public
 *
 * The output of {@link SuspendGameServerGroupCommand}.
 */
export interface SuspendGameServerGroupCommandOutput extends SuspendGameServerGroupOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Temporarily stops activity on
 *             a game server group without terminating instances or the game server group. You can
 *             restart activity by calling <a href="gamelift/latest/apireference/API_ResumeGameServerGroup.html">ResumeGameServerGroup</a>. You can suspend the following activity:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Instance type replacement</b> - This activity
 *                     evaluates the current game hosting viability of all Spot instance types that are
 *                     defined for the game server group. It updates the Auto Scaling group to remove
 *                     nonviable Spot Instance types, which have a higher chance of game server
 *                     interruptions. It then balances capacity across the remaining viable Spot
 *                     Instance types. When this activity is suspended, the Auto Scaling group
 *                     continues with its current balance, regardless of viability. Instance
 *                     protection, utilization metrics, and capacity scaling activities continue to be
 *                     active. </p>
 *             </li>
 *          </ul>
 *          <p>To suspend activity, specify a game server group ARN and the type of activity to be
 *             suspended. If successful, a <code>GameServerGroup</code> object is returned showing that
 *             the activity is listed in <code>SuspendedActions</code>.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">Amazon GameLift FleetIQ
 *                 Guide</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, SuspendGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, SuspendGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // SuspendGameServerGroupInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   SuspendActions: [ // GameServerGroupActions // required
 *     "REPLACE_INSTANCE_TYPES",
 *   ],
 * };
 * const command = new SuspendGameServerGroupCommand(input);
 * const response = await client.send(command);
 * // { // SuspendGameServerGroupOutput
 * //   GameServerGroup: { // GameServerGroup
 * //     GameServerGroupName: "STRING_VALUE",
 * //     GameServerGroupArn: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     InstanceDefinitions: [ // InstanceDefinitions
 * //       { // InstanceDefinition
 * //         InstanceType: "c4.large" || "c4.xlarge" || "c4.2xlarge" || "c4.4xlarge" || "c4.8xlarge" || "c5.large" || "c5.xlarge" || "c5.2xlarge" || "c5.4xlarge" || "c5.9xlarge" || "c5.12xlarge" || "c5.18xlarge" || "c5.24xlarge" || "c5a.large" || "c5a.xlarge" || "c5a.2xlarge" || "c5a.4xlarge" || "c5a.8xlarge" || "c5a.12xlarge" || "c5a.16xlarge" || "c5a.24xlarge" || "c6g.medium" || "c6g.large" || "c6g.xlarge" || "c6g.2xlarge" || "c6g.4xlarge" || "c6g.8xlarge" || "c6g.12xlarge" || "c6g.16xlarge" || "r4.large" || "r4.xlarge" || "r4.2xlarge" || "r4.4xlarge" || "r4.8xlarge" || "r4.16xlarge" || "r5.large" || "r5.xlarge" || "r5.2xlarge" || "r5.4xlarge" || "r5.8xlarge" || "r5.12xlarge" || "r5.16xlarge" || "r5.24xlarge" || "r5a.large" || "r5a.xlarge" || "r5a.2xlarge" || "r5a.4xlarge" || "r5a.8xlarge" || "r5a.12xlarge" || "r5a.16xlarge" || "r5a.24xlarge" || "r6g.medium" || "r6g.large" || "r6g.xlarge" || "r6g.2xlarge" || "r6g.4xlarge" || "r6g.8xlarge" || "r6g.12xlarge" || "r6g.16xlarge" || "m4.large" || "m4.xlarge" || "m4.2xlarge" || "m4.4xlarge" || "m4.10xlarge" || "m5.large" || "m5.xlarge" || "m5.2xlarge" || "m5.4xlarge" || "m5.8xlarge" || "m5.12xlarge" || "m5.16xlarge" || "m5.24xlarge" || "m5a.large" || "m5a.xlarge" || "m5a.2xlarge" || "m5a.4xlarge" || "m5a.8xlarge" || "m5a.12xlarge" || "m5a.16xlarge" || "m5a.24xlarge" || "m6g.medium" || "m6g.large" || "m6g.xlarge" || "m6g.2xlarge" || "m6g.4xlarge" || "m6g.8xlarge" || "m6g.12xlarge" || "m6g.16xlarge", // required
 * //         WeightedCapacity: "STRING_VALUE",
 * //       },
 * //     ],
 * //     BalancingStrategy: "SPOT_ONLY" || "SPOT_PREFERRED" || "ON_DEMAND_ONLY",
 * //     GameServerProtectionPolicy: "NO_PROTECTION" || "FULL_PROTECTION",
 * //     AutoScalingGroupArn: "STRING_VALUE",
 * //     Status: "NEW" || "ACTIVATING" || "ACTIVE" || "DELETE_SCHEDULED" || "DELETING" || "DELETED" || "ERROR",
 * //     StatusReason: "STRING_VALUE",
 * //     SuspendedActions: [ // GameServerGroupActions
 * //       "REPLACE_INSTANCE_TYPES",
 * //     ],
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param SuspendGameServerGroupCommandInput - {@link SuspendGameServerGroupCommandInput}
 * @returns {@link SuspendGameServerGroupCommandOutput}
 * @see {@link SuspendGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link SuspendGameServerGroupCommandOutput} for command's `response` shape.
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
export class SuspendGameServerGroupCommand extends $Command<
  SuspendGameServerGroupCommandInput,
  SuspendGameServerGroupCommandOutput,
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
  constructor(readonly input: SuspendGameServerGroupCommandInput) {
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
  ): Handler<SuspendGameServerGroupCommandInput, SuspendGameServerGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SuspendGameServerGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "SuspendGameServerGroupCommand";
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
  private serialize(input: SuspendGameServerGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SuspendGameServerGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SuspendGameServerGroupCommandOutput> {
    return de_SuspendGameServerGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

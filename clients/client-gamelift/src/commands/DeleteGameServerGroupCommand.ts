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
import { DeleteGameServerGroupInput, DeleteGameServerGroupOutput } from "../models/models_0";
import { de_DeleteGameServerGroupCommand, se_DeleteGameServerGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteGameServerGroupCommand}.
 */
export interface DeleteGameServerGroupCommandInput extends DeleteGameServerGroupInput {}
/**
 * @public
 *
 * The output of {@link DeleteGameServerGroupCommand}.
 */
export interface DeleteGameServerGroupCommandOutput extends DeleteGameServerGroupOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Terminates a game server group
 *             and permanently deletes the game server group record. You have several options for how
 *             these resources are impacted when deleting the game server group. Depending on the type
 *             of delete operation selected, this operation might affect these resources:</p>
 *          <ul>
 *             <li>
 *                <p>The game server group</p>
 *             </li>
 *             <li>
 *                <p>The corresponding Auto Scaling group</p>
 *             </li>
 *             <li>
 *                <p>All game servers that are currently running in the group</p>
 *             </li>
 *          </ul>
 *          <p>To delete a game server group, identify the game server group to delete and specify
 *             the type of delete operation to initiate. Game server groups can only be deleted if they
 *             are in <code>ACTIVE</code> or <code>ERROR</code> status.</p>
 *          <p>If the delete request is successful, a series of operations are kicked off. The game
 *             server group status is changed to <code>DELETE_SCHEDULED</code>, which prevents new game
 *             servers from being registered and stops automatic scaling activity. Once all game
 *             servers in the game server group are deregistered, Amazon GameLift FleetIQ can begin deleting resources.
 *             If any of the delete operations fail, the game server group is placed in
 *                 <code>ERROR</code> status.</p>
 *          <p>Amazon GameLift FleetIQ emits delete events to Amazon CloudWatch.</p>
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
 * import { GameLiftClient, DeleteGameServerGroupCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteGameServerGroupCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DeleteGameServerGroupInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   DeleteOption: "SAFE_DELETE" || "FORCE_DELETE" || "RETAIN",
 * };
 * const command = new DeleteGameServerGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteGameServerGroupOutput
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
 * @param DeleteGameServerGroupCommandInput - {@link DeleteGameServerGroupCommandInput}
 * @returns {@link DeleteGameServerGroupCommandOutput}
 * @see {@link DeleteGameServerGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGameServerGroupCommandOutput} for command's `response` shape.
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
export class DeleteGameServerGroupCommand extends $Command<
  DeleteGameServerGroupCommandInput,
  DeleteGameServerGroupCommandOutput,
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
  constructor(readonly input: DeleteGameServerGroupCommandInput) {
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
  ): Handler<DeleteGameServerGroupCommandInput, DeleteGameServerGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteGameServerGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteGameServerGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "DeleteGameServerGroup",
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
  private serialize(input: DeleteGameServerGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteGameServerGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGameServerGroupCommandOutput> {
    return de_DeleteGameServerGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

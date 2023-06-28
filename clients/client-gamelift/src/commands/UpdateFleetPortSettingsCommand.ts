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
import { UpdateFleetPortSettingsInput, UpdateFleetPortSettingsOutput } from "../models/models_1";
import { de_UpdateFleetPortSettingsCommand, se_UpdateFleetPortSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFleetPortSettingsCommand}.
 */
export interface UpdateFleetPortSettingsCommandInput extends UpdateFleetPortSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateFleetPortSettingsCommand}.
 */
export interface UpdateFleetPortSettingsCommandOutput extends UpdateFleetPortSettingsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates permissions that allow inbound traffic to connect to game sessions that are
 *             being hosted on instances in the fleet. </p>
 *          <p>To update settings, specify the fleet ID to be updated and specify the changes to be
 *             made. List the permissions you want to add in
 *                 <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in
 *                 <code>InboundPermissionRevocations</code>. Permissions to be removed must match
 *             existing fleet permissions. </p>
 *          <p>If successful, the fleet ID for the updated fleet is returned. For fleets with remote
 *             locations, port setting updates can take time to propagate across all locations. You can
 *             check the status of updates in each location by calling
 *                 <code>DescribeFleetPortSettings</code> with a location name.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift
 *                 fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateFleetPortSettingsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateFleetPortSettingsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // UpdateFleetPortSettingsInput
 *   FleetId: "STRING_VALUE", // required
 *   InboundPermissionAuthorizations: [ // IpPermissionsList
 *     { // IpPermission
 *       FromPort: Number("int"), // required
 *       ToPort: Number("int"), // required
 *       IpRange: "STRING_VALUE", // required
 *       Protocol: "TCP" || "UDP", // required
 *     },
 *   ],
 *   InboundPermissionRevocations: [
 *     {
 *       FromPort: Number("int"), // required
 *       ToPort: Number("int"), // required
 *       IpRange: "STRING_VALUE", // required
 *       Protocol: "TCP" || "UDP", // required
 *     },
 *   ],
 * };
 * const command = new UpdateFleetPortSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFleetPortSettingsOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFleetPortSettingsCommandInput - {@link UpdateFleetPortSettingsCommandInput}
 * @returns {@link UpdateFleetPortSettingsCommandOutput}
 * @see {@link UpdateFleetPortSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetPortSettingsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 *          <p></p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidFleetStatusException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the fleet. Resolve the conflict before
 *             retrying.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
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
export class UpdateFleetPortSettingsCommand extends $Command<
  UpdateFleetPortSettingsCommandInput,
  UpdateFleetPortSettingsCommandOutput,
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
  constructor(readonly input: UpdateFleetPortSettingsCommandInput) {
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
  ): Handler<UpdateFleetPortSettingsCommandInput, UpdateFleetPortSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFleetPortSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateFleetPortSettingsCommand";
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
  private serialize(input: UpdateFleetPortSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFleetPortSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFleetPortSettingsCommandOutput> {
    return de_UpdateFleetPortSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

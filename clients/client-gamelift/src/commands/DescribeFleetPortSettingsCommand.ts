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
import { DescribeFleetPortSettingsInput, DescribeFleetPortSettingsOutput } from "../models/models_0";
import { de_DescribeFleetPortSettingsCommand, se_DescribeFleetPortSettingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFleetPortSettingsCommand}.
 */
export interface DescribeFleetPortSettingsCommandInput extends DescribeFleetPortSettingsInput {}
/**
 * @public
 *
 * The output of {@link DescribeFleetPortSettingsCommand}.
 */
export interface DescribeFleetPortSettingsCommandOutput extends DescribeFleetPortSettingsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a fleet's inbound connection permissions. Connection permissions specify the
 *             range of IP addresses and port settings that incoming traffic can use to access server
 *             processes in the fleet. Game sessions that are running on instances in the fleet must
 *             use connections that fall in this range.</p>
 *          <p>This operation can be used in the following ways: </p>
 *          <ul>
 *             <li>
 *                <p>To retrieve the inbound connection permissions for a fleet, identify the
 *                     fleet's unique identifier. </p>
 *             </li>
 *             <li>
 *                <p>To check the status of recent updates to a fleet remote location, specify the
 *                     fleet ID and a location. Port setting updates can take time to propagate across
 *                     all locations. </p>
 *             </li>
 *          </ul>
 *          <p>If successful, a set of <code>IpPermission</code> objects is returned for the
 *             requested fleet ID. When a location is specified, a pending status is included. If the
 *             requested fleet has been deleted, the result set is empty.</p>
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
 * import { GameLiftClient, DescribeFleetPortSettingsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetPortSettingsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeFleetPortSettingsInput
 *   FleetId: "STRING_VALUE", // required
 *   Location: "STRING_VALUE",
 * };
 * const command = new DescribeFleetPortSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFleetPortSettingsOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   InboundPermissions: [ // IpPermissionsList
 * //     { // IpPermission
 * //       FromPort: Number("int"), // required
 * //       ToPort: Number("int"), // required
 * //       IpRange: "STRING_VALUE", // required
 * //       Protocol: "TCP" || "UDP", // required
 * //     },
 * //   ],
 * //   UpdateStatus: "PENDING_UPDATE",
 * //   Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeFleetPortSettingsCommandInput - {@link DescribeFleetPortSettingsCommandInput}
 * @returns {@link DescribeFleetPortSettingsCommandOutput}
 * @see {@link DescribeFleetPortSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetPortSettingsCommandOutput} for command's `response` shape.
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
export class DescribeFleetPortSettingsCommand extends $Command<
  DescribeFleetPortSettingsCommandInput,
  DescribeFleetPortSettingsCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFleetPortSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeFleetPortSettingsCommand";
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
  private serialize(input: DescribeFleetPortSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFleetPortSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFleetPortSettingsCommandOutput> {
    return de_DescribeFleetPortSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

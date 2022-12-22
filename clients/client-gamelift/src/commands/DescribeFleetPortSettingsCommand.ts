// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DescribeFleetPortSettingsInput,
  DescribeFleetPortSettingsInputFilterSensitiveLog,
  DescribeFleetPortSettingsOutput,
  DescribeFleetPortSettingsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFleetPortSettingsCommand,
  serializeAws_json1_1DescribeFleetPortSettingsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeFleetPortSettingsCommandInput extends DescribeFleetPortSettingsInput {}
export interface DescribeFleetPortSettingsCommandOutput extends DescribeFleetPortSettingsOutput, __MetadataBearer {}

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
 *                 <p>To check the status of recent updates to a fleet remote location, specify the
 *                     fleet ID and a location. Port setting updates can take time to propagate across
 *                     all locations. </p>
 *             </li>
 *          </ul>
 *         <p>If successful, a set of <code>IpPermission</code> objects is returned for the
 *             requested fleet ID. When a location is specified, a pending status is included. If the
 *             requested fleet has been deleted, the result set is empty.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *                 <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift
 *                 fleets</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeFleetPortSettingsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeFleetPortSettingsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeFleetPortSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetPortSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetPortSettingsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
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
      inputFilterSensitiveLog: DescribeFleetPortSettingsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFleetPortSettingsOutputFilterSensitiveLog,
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

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
import { ListGameServersInput, ListGameServersOutput } from "../models/models_0";
import { de_ListGameServersCommand, se_ListGameServersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListGameServersCommand}.
 */
export interface ListGameServersCommandInput extends ListGameServersInput {}
/**
 * @public
 *
 * The output of {@link ListGameServersCommand}.
 */
export interface ListGameServersCommandOutput extends ListGameServersOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <b>This operation is used with the Amazon GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *          <p>Retrieves information on all game
 *             servers that are currently active in a specified game server group. You can opt to sort
 *             the list by game server age. Use the pagination parameters to retrieve results in a set
 *             of sequential segments. </p>
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
 * import { GameLiftClient, ListGameServersCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListGameServersCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // ListGameServersInput
 *   GameServerGroupName: "STRING_VALUE", // required
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGameServersCommand(input);
 * const response = await client.send(command);
 * // { // ListGameServersOutput
 * //   GameServers: [ // GameServers
 * //     { // GameServer
 * //       GameServerGroupName: "STRING_VALUE",
 * //       GameServerGroupArn: "STRING_VALUE",
 * //       GameServerId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       ConnectionInfo: "STRING_VALUE",
 * //       GameServerData: "STRING_VALUE",
 * //       ClaimStatus: "CLAIMED",
 * //       UtilizationStatus: "AVAILABLE" || "UTILIZED",
 * //       RegistrationTime: new Date("TIMESTAMP"),
 * //       LastClaimTime: new Date("TIMESTAMP"),
 * //       LastHealthCheckTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGameServersCommandInput - {@link ListGameServersCommandInput}
 * @returns {@link ListGameServersCommandOutput}
 * @see {@link ListGameServersCommandInput} for command's `input` shape.
 * @see {@link ListGameServersCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class ListGameServersCommand extends $Command<
  ListGameServersCommandInput,
  ListGameServersCommandOutput,
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
  constructor(readonly input: ListGameServersCommandInput) {
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
  ): Handler<ListGameServersCommandInput, ListGameServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListGameServersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ListGameServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "ListGameServers",
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
  private serialize(input: ListGameServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListGameServersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGameServersCommandOutput> {
    return de_ListGameServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

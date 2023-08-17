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

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import { GetPlayerConnectionStatusRequest, GetPlayerConnectionStatusResult } from "../models/models_0";
import { de_GetPlayerConnectionStatusCommand, se_GetPlayerConnectionStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPlayerConnectionStatusCommand}.
 */
export interface GetPlayerConnectionStatusCommandInput extends GetPlayerConnectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetPlayerConnectionStatusCommand}.
 */
export interface GetPlayerConnectionStatusCommandOutput extends GetPlayerConnectionStatusResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets the status of a player's connection to the game runtime.</p>
 *          <p>
 *       It's possible for a single player to have multiple connections to the game runtime.
 *       If a player is not connected, this operation returns an empty list.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, GetPlayerConnectionStatusCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, GetPlayerConnectionStatusCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const input = { // GetPlayerConnectionStatusRequest
 *   PlayerId: "STRING_VALUE", // required
 *   GameName: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE", // required
 * };
 * const command = new GetPlayerConnectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetPlayerConnectionStatusResult
 * //   Connections: [ // ConnectionList
 * //     { // Connection
 * //       Id: "STRING_VALUE",
 * //       Created: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPlayerConnectionStatusCommandInput - {@link GetPlayerConnectionStatusCommandInput}
 * @returns {@link GetPlayerConnectionStatusCommandOutput}
 * @see {@link GetPlayerConnectionStatusCommandInput} for command's `input` shape.
 * @see {@link GetPlayerConnectionStatusCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 * @throws {@link GameSparksServiceException}
 * <p>Base exception class for all service exceptions from GameSparks service.</p>
 *
 */
export class GetPlayerConnectionStatusCommand extends $Command<
  GetPlayerConnectionStatusCommandInput,
  GetPlayerConnectionStatusCommandOutput,
  GameSparksClientResolvedConfig
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
  constructor(readonly input: GetPlayerConnectionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameSparksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPlayerConnectionStatusCommandInput, GetPlayerConnectionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPlayerConnectionStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "GetPlayerConnectionStatusCommand";
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
  private serialize(input: GetPlayerConnectionStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPlayerConnectionStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPlayerConnectionStatusCommandOutput> {
    return de_GetPlayerConnectionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

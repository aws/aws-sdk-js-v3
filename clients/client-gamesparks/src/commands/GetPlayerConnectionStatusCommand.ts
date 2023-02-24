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

import { GameSparksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameSparksClient";
import {
  GetPlayerConnectionStatusRequest,
  GetPlayerConnectionStatusRequestFilterSensitiveLog,
  GetPlayerConnectionStatusResult,
  GetPlayerConnectionStatusResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPlayerConnectionStatusCommand,
  serializeAws_restJson1GetPlayerConnectionStatusCommand,
} from "../protocols/Aws_restJson1";

export interface GetPlayerConnectionStatusCommandInput extends GetPlayerConnectionStatusRequest {}
export interface GetPlayerConnectionStatusCommandOutput extends GetPlayerConnectionStatusResult, __MetadataBearer {}

/**
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
 * const command = new GetPlayerConnectionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPlayerConnectionStatusCommandInput} for command's `input` shape.
 * @see {@link GetPlayerConnectionStatusCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
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
      inputFilterSensitiveLog: GetPlayerConnectionStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPlayerConnectionStatusResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPlayerConnectionStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPlayerConnectionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPlayerConnectionStatusCommandOutput> {
    return deserializeAws_restJson1GetPlayerConnectionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

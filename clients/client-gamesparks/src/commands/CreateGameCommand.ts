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
import { CreateGameRequest, CreateGameResult } from "../models/models_0";
import {
  deserializeAws_restJson1CreateGameCommand,
  serializeAws_restJson1CreateGameCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateGameCommand}.
 */
export interface CreateGameCommandInput extends CreateGameRequest {}
/**
 * @public
 *
 * The output of {@link CreateGameCommand}.
 */
export interface CreateGameCommandOutput extends CreateGameResult, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Creates a new game with an empty configuration.
 *       After creating your game, you can update the configuration using <code>UpdateGameConfiguration</code> or <code>ImportGameConfiguration</code>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, CreateGameCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, CreateGameCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new CreateGameCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateGameCommandInput - {@link CreateGameCommandInput}
 * @returns {@link CreateGameCommandOutput}
 * @see {@link CreateGameCommandInput} for command's `input` shape.
 * @see {@link CreateGameCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an internal error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would result in exceeding service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters in the request is invalid.</p>
 *
 *
 */
export class CreateGameCommand extends $Command<
  CreateGameCommandInput,
  CreateGameCommandOutput,
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
  constructor(readonly input: CreateGameCommandInput) {
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
  ): Handler<CreateGameCommandInput, CreateGameCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateGameCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "CreateGameCommand";
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
  private serialize(input: CreateGameCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateGameCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGameCommandOutput> {
    return deserializeAws_restJson1CreateGameCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

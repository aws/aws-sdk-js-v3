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
  GetGameConfigurationRequest,
  GetGameConfigurationRequestFilterSensitiveLog,
  GetGameConfigurationResult,
  GetGameConfigurationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetGameConfigurationCommand,
  serializeAws_restJson1GetGameConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface GetGameConfigurationCommandInput extends GetGameConfigurationRequest {}
export interface GetGameConfigurationCommandOutput extends GetGameConfigurationResult, __MetadataBearer {}

/**
 * <p>Gets the configuration of the game.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, GetGameConfigurationCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, GetGameConfigurationCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new GetGameConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGameConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetGameConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 */
export class GetGameConfigurationCommand extends $Command<
  GetGameConfigurationCommandInput,
  GetGameConfigurationCommandOutput,
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

  constructor(readonly input: GetGameConfigurationCommandInput) {
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
  ): Handler<GetGameConfigurationCommandInput, GetGameConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGameConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "GetGameConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGameConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetGameConfigurationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGameConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetGameConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGameConfigurationCommandOutput> {
    return deserializeAws_restJson1GetGameConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

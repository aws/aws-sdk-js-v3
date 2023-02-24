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
  ImportGameConfigurationRequest,
  ImportGameConfigurationRequestFilterSensitiveLog,
  ImportGameConfigurationResult,
  ImportGameConfigurationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ImportGameConfigurationCommand,
  serializeAws_restJson1ImportGameConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface ImportGameConfigurationCommandInput extends ImportGameConfigurationRequest {}
export interface ImportGameConfigurationCommandOutput extends ImportGameConfigurationResult, __MetadataBearer {}

/**
 * <p>Imports a game configuration.</p>
 *          <p>
 *       This operation replaces the current configuration of the game with the provided input.
 *       This is not a reversible operation. If you want to preserve the previous configuration,
 *       use <code>CreateSnapshot</code> to make a new snapshot before importing.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, ImportGameConfigurationCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, ImportGameConfigurationCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new ImportGameConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportGameConfigurationCommandInput} for command's `input` shape.
 * @see {@link ImportGameConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 */
export class ImportGameConfigurationCommand extends $Command<
  ImportGameConfigurationCommandInput,
  ImportGameConfigurationCommandOutput,
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

  constructor(readonly input: ImportGameConfigurationCommandInput) {
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
  ): Handler<ImportGameConfigurationCommandInput, ImportGameConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportGameConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "ImportGameConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportGameConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportGameConfigurationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportGameConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ImportGameConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportGameConfigurationCommandOutput> {
    return deserializeAws_restJson1ImportGameConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

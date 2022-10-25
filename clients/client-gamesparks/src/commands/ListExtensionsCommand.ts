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
  ListExtensionsRequest,
  ListExtensionsRequestFilterSensitiveLog,
  ListExtensionsResult,
  ListExtensionsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListExtensionsCommand,
  serializeAws_restJson1ListExtensionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListExtensionsCommandInput extends ListExtensionsRequest {}
export interface ListExtensionsCommandOutput extends ListExtensionsResult, __MetadataBearer {}

/**
 * <p>Gets a paginated list of available extensions.</p>
 *          <p>
 *       Extensions provide features that games can use from scripts.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, ListExtensionsCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, ListExtensionsCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new ListExtensionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExtensionsCommandInput} for command's `input` shape.
 * @see {@link ListExtensionsCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 */
export class ListExtensionsCommand extends $Command<
  ListExtensionsCommandInput,
  ListExtensionsCommandOutput,
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

  constructor(readonly input: ListExtensionsCommandInput) {
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
  ): Handler<ListExtensionsCommandInput, ListExtensionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExtensionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "ListExtensionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListExtensionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListExtensionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListExtensionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListExtensionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExtensionsCommandOutput> {
    return deserializeAws_restJson1ListExtensionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

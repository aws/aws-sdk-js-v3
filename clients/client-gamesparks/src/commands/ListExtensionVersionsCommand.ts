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
  ListExtensionVersionsRequest,
  ListExtensionVersionsRequestFilterSensitiveLog,
  ListExtensionVersionsResult,
  ListExtensionVersionsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListExtensionVersionsCommand,
  serializeAws_restJson1ListExtensionVersionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListExtensionVersionsCommandInput extends ListExtensionVersionsRequest {}
export interface ListExtensionVersionsCommandOutput extends ListExtensionVersionsResult, __MetadataBearer {}

/**
 * <p>Gets a paginated list of available versions for the extension.</p>
 *          <p>
 *       Each time an API change is made to an extension, the version is incremented.
 *       The list retrieved by this operation shows the versions that are currently available.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameSparksClient, ListExtensionVersionsCommand } from "@aws-sdk/client-gamesparks"; // ES Modules import
 * // const { GameSparksClient, ListExtensionVersionsCommand } = require("@aws-sdk/client-gamesparks"); // CommonJS import
 * const client = new GameSparksClient(config);
 * const command = new ListExtensionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExtensionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListExtensionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GameSparksClientResolvedConfig | config} for GameSparksClient's `config` shape.
 *
 */
export class ListExtensionVersionsCommand extends $Command<
  ListExtensionVersionsCommandInput,
  ListExtensionVersionsCommandOutput,
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

  constructor(readonly input: ListExtensionVersionsCommandInput) {
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
  ): Handler<ListExtensionVersionsCommandInput, ListExtensionVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExtensionVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameSparksClient";
    const commandName = "ListExtensionVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListExtensionVersionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListExtensionVersionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListExtensionVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListExtensionVersionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExtensionVersionsCommandOutput> {
    return deserializeAws_restJson1ListExtensionVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

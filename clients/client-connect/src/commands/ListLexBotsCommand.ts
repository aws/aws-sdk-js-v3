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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  ListLexBotsRequest,
  ListLexBotsRequestFilterSensitiveLog,
  ListLexBotsResponse,
  ListLexBotsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListLexBotsCommand,
  serializeAws_restJson1ListLexBotsCommand,
} from "../protocols/Aws_restJson1";

export interface ListLexBotsCommandInput extends ListLexBotsRequest {}
export interface ListLexBotsCommandOutput extends ListLexBotsResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of all the Amazon Lex V1 bots currently associated with the instance. To
 *    return both Amazon Lex V1 and V2 bots, use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListBots.html">ListBots</a> API.
 *    </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListLexBotsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListLexBotsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListLexBotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLexBotsCommandInput} for command's `input` shape.
 * @see {@link ListLexBotsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListLexBotsCommand extends $Command<
  ListLexBotsCommandInput,
  ListLexBotsCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: ListLexBotsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLexBotsCommandInput, ListLexBotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListLexBotsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListLexBotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLexBotsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListLexBotsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListLexBotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLexBotsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLexBotsCommandOutput> {
    return deserializeAws_restJson1ListLexBotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

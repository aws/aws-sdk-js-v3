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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import {
  ListTemplatesRequest,
  ListTemplatesRequestFilterSensitiveLog,
  ListTemplatesResponse,
  ListTemplatesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListTemplatesCommand,
  serializeAws_restJson1ListTemplatesCommand,
} from "../protocols/Aws_restJson1";

export interface ListTemplatesCommandInput extends ListTemplatesRequest {}
export interface ListTemplatesCommandOutput extends ListTemplatesResponse, __MetadataBearer {}

/**
 * <p>Lists all of the templates in a Cases domain. Each list item is a condensed summary
 *       object of the template. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, ListTemplatesCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, ListTemplatesCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const command = new ListTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListTemplatesCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 */
export class ListTemplatesCommand extends $Command<
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
  ConnectCasesClientResolvedConfig
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

  constructor(readonly input: ListTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTemplatesCommandInput, ListTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTemplatesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "ListTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTemplatesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTemplatesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTemplatesCommandOutput> {
    return deserializeAws_restJson1ListTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

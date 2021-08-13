import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListAppInstanceUsersRequest, ListAppInstanceUsersResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListAppInstanceUsersCommand,
  serializeAws_restJson1ListAppInstanceUsersCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListAppInstanceUsersCommandInput extends ListAppInstanceUsersRequest {}
export interface ListAppInstanceUsersCommandOutput extends ListAppInstanceUsersResponse, __MetadataBearer {}

/**
 * <p>List all <code>AppInstanceUsers</code>
 *             created under a single <code>AppInstance</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAppInstanceUsersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAppInstanceUsersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListAppInstanceUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppInstanceUsersCommandInput} for command's `input` shape.
 * @see {@link ListAppInstanceUsersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAppInstanceUsersCommand extends $Command<
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAppInstanceUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppInstanceUsersCommandInput, ListAppInstanceUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListAppInstanceUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppInstanceUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppInstanceUsersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAppInstanceUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAppInstanceUsersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppInstanceUsersCommandOutput> {
    return deserializeAws_restJson1ListAppInstanceUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

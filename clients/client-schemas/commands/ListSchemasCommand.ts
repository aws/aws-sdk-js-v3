import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { ListSchemasRequest, ListSchemasResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListSchemasCommand,
  serializeAws_restJson1ListSchemasCommand,
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

export interface ListSchemasCommandInput extends ListSchemasRequest {}
export interface ListSchemasCommandOutput extends ListSchemasResponse, __MetadataBearer {}

/**
 * <p>List the schemas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListSchemasCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListSchemasCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new ListSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSchemasCommandInput} for command's `input` shape.
 * @see {@link ListSchemasCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSchemasCommand extends $Command<
  ListSchemasCommandInput,
  ListSchemasCommandOutput,
  SchemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSchemasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSchemasCommandInput, ListSchemasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "ListSchemasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSchemasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSchemasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSchemasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSchemasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSchemasCommandOutput> {
    return deserializeAws_restJson1ListSchemasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

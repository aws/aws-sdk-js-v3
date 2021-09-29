import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";
import { SearchSchemasRequest, SearchSchemasResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SearchSchemasCommand,
  serializeAws_restJson1SearchSchemasCommand,
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

export interface SearchSchemasCommandInput extends SearchSchemasRequest {}
export interface SearchSchemasCommandOutput extends SearchSchemasResponse, __MetadataBearer {}

/**
 * <p>Search the schemas</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, SearchSchemasCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, SearchSchemasCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new SearchSchemasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchSchemasCommandInput} for command's `input` shape.
 * @see {@link SearchSchemasCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SearchSchemasCommand extends $Command<
  SearchSchemasCommandInput,
  SearchSchemasCommandOutput,
  SchemasClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchSchemasCommandInput) {
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
  ): Handler<SearchSchemasCommandInput, SearchSchemasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "SearchSchemasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchSchemasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchSchemasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchSchemasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchSchemasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchSchemasCommandOutput> {
    return deserializeAws_restJson1SearchSchemasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

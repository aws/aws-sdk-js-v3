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

import {
  SearchSchemasRequest,
  SearchSchemasRequestFilterSensitiveLog,
  SearchSchemasResponse,
  SearchSchemasResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SearchSchemasCommand,
  serializeAws_restJson1SearchSchemasCommand,
} from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

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
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 */
export class SearchSchemasCommand extends $Command<
  SearchSchemasCommandInput,
  SearchSchemasCommandOutput,
  SchemasClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchSchemasCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "SearchSchemasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchSchemasRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchSchemasResponseFilterSensitiveLog,
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

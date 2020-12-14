import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { SearchProductsAsAdminInput, SearchProductsAsAdminOutput } from "../models/models_0";
import {
  deserializeAws_json1_1SearchProductsAsAdminCommand,
  serializeAws_json1_1SearchProductsAsAdminCommand,
} from "../protocols/Aws_json1_1";
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

export type SearchProductsAsAdminCommandInput = SearchProductsAsAdminInput;
export type SearchProductsAsAdminCommandOutput = SearchProductsAsAdminOutput & __MetadataBearer;

/**
 * <p>Gets information about the products for the specified portfolio or all products.</p>
 */
export class SearchProductsAsAdminCommand extends $Command<
  SearchProductsAsAdminCommandInput,
  SearchProductsAsAdminCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchProductsAsAdminCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchProductsAsAdminCommandInput, SearchProductsAsAdminCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "SearchProductsAsAdminCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchProductsAsAdminInput.filterSensitiveLog,
      outputFilterSensitiveLog: SearchProductsAsAdminOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchProductsAsAdminCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchProductsAsAdminCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchProductsAsAdminCommandOutput> {
    return deserializeAws_json1_1SearchProductsAsAdminCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

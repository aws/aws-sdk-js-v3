import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { SearchProvisionedProductsInput, SearchProvisionedProductsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1SearchProvisionedProductsCommand,
  serializeAws_json1_1SearchProvisionedProductsCommand,
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

export type SearchProvisionedProductsCommandInput = SearchProvisionedProductsInput;
export type SearchProvisionedProductsCommandOutput = SearchProvisionedProductsOutput & __MetadataBearer;

/**
 * <p>Gets information about the provisioned products that meet the specified criteria.</p>
 */
export class SearchProvisionedProductsCommand extends $Command<
  SearchProvisionedProductsCommandInput,
  SearchProvisionedProductsCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchProvisionedProductsCommandInput) {
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
  ): Handler<SearchProvisionedProductsCommandInput, SearchProvisionedProductsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "SearchProvisionedProductsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchProvisionedProductsInput.filterSensitiveLog,
      outputFilterSensitiveLog: SearchProvisionedProductsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchProvisionedProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchProvisionedProductsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchProvisionedProductsCommandOutput> {
    return deserializeAws_json1_1SearchProvisionedProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

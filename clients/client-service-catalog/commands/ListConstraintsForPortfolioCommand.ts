import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListConstraintsForPortfolioInput, ListConstraintsForPortfolioOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListConstraintsForPortfolioCommand,
  serializeAws_json1_1ListConstraintsForPortfolioCommand,
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

export type ListConstraintsForPortfolioCommandInput = ListConstraintsForPortfolioInput;
export type ListConstraintsForPortfolioCommandOutput = ListConstraintsForPortfolioOutput & __MetadataBearer;

/**
 * <p>Lists the constraints for the specified portfolio and product.</p>
 */
export class ListConstraintsForPortfolioCommand extends $Command<
  ListConstraintsForPortfolioCommandInput,
  ListConstraintsForPortfolioCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListConstraintsForPortfolioCommandInput) {
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
  ): Handler<ListConstraintsForPortfolioCommandInput, ListConstraintsForPortfolioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListConstraintsForPortfolioCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConstraintsForPortfolioInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListConstraintsForPortfolioOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConstraintsForPortfolioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListConstraintsForPortfolioCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListConstraintsForPortfolioCommandOutput> {
    return deserializeAws_json1_1ListConstraintsForPortfolioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

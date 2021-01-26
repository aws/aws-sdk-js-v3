import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListPortfolioAccessInput, ListPortfolioAccessOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListPortfolioAccessCommand,
  serializeAws_json1_1ListPortfolioAccessCommand,
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

export type ListPortfolioAccessCommandInput = ListPortfolioAccessInput;
export type ListPortfolioAccessCommandOutput = ListPortfolioAccessOutput & __MetadataBearer;

/**
 * <p>Lists the account IDs that have access to the specified portfolio.</p>
 *          <p>A delegated admin can list the accounts that have access to the shared portfolio. Note that if a delegated admin is de-registered, they can no longer perform this operation.</p>
 */
export class ListPortfolioAccessCommand extends $Command<
  ListPortfolioAccessCommandInput,
  ListPortfolioAccessCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPortfolioAccessCommandInput) {
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
  ): Handler<ListPortfolioAccessCommandInput, ListPortfolioAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListPortfolioAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPortfolioAccessInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListPortfolioAccessOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPortfolioAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPortfolioAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPortfolioAccessCommandOutput> {
    return deserializeAws_json1_1ListPortfolioAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

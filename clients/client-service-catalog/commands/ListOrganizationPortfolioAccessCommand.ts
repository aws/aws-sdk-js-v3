import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListOrganizationPortfolioAccessInput, ListOrganizationPortfolioAccessOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListOrganizationPortfolioAccessCommand,
  serializeAws_json1_1ListOrganizationPortfolioAccessCommand,
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

export type ListOrganizationPortfolioAccessCommandInput = ListOrganizationPortfolioAccessInput;
export type ListOrganizationPortfolioAccessCommandOutput = ListOrganizationPortfolioAccessOutput & __MetadataBearer;

/**
 * <p>Lists the organization nodes that have access to the specified portfolio. This API can
 *          only be called by the management account in the organization or by a delegated
 *          admin.</p>
 *          <p>If a delegated admin is de-registered, they can no longer perform this operation.</p>
 */
export class ListOrganizationPortfolioAccessCommand extends $Command<
  ListOrganizationPortfolioAccessCommandInput,
  ListOrganizationPortfolioAccessCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOrganizationPortfolioAccessCommandInput) {
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
  ): Handler<ListOrganizationPortfolioAccessCommandInput, ListOrganizationPortfolioAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListOrganizationPortfolioAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOrganizationPortfolioAccessInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListOrganizationPortfolioAccessOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListOrganizationPortfolioAccessCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListOrganizationPortfolioAccessCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListOrganizationPortfolioAccessCommandOutput> {
    return deserializeAws_json1_1ListOrganizationPortfolioAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

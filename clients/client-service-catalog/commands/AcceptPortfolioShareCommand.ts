import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AcceptPortfolioShareInput, AcceptPortfolioShareOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AcceptPortfolioShareCommand,
  serializeAws_json1_1AcceptPortfolioShareCommand,
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

export type AcceptPortfolioShareCommandInput = AcceptPortfolioShareInput;
export type AcceptPortfolioShareCommandOutput = AcceptPortfolioShareOutput & __MetadataBearer;

/**
 * <p>Accepts an offer to share the specified portfolio.</p>
 */
export class AcceptPortfolioShareCommand extends $Command<
  AcceptPortfolioShareCommandInput,
  AcceptPortfolioShareCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptPortfolioShareCommandInput) {
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
  ): Handler<AcceptPortfolioShareCommandInput, AcceptPortfolioShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "AcceptPortfolioShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptPortfolioShareInput.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptPortfolioShareOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptPortfolioShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptPortfolioShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptPortfolioShareCommandOutput> {
    return deserializeAws_json1_1AcceptPortfolioShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

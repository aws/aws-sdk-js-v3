import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribePortfolioSharesInput, DescribePortfolioSharesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribePortfolioSharesCommand,
  serializeAws_json1_1DescribePortfolioSharesCommand,
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

export type DescribePortfolioSharesCommandInput = DescribePortfolioSharesInput;
export type DescribePortfolioSharesCommandOutput = DescribePortfolioSharesOutput & __MetadataBearer;

/**
 * <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p>
 *          <p>You can use this API to determine which accounts or organizational nodes this
 *          portfolio have been shared, whether the recipient entity has imported the share, and
 *          whether TagOptions are included with the share.</p>
 *          <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
 */
export class DescribePortfolioSharesCommand extends $Command<
  DescribePortfolioSharesCommandInput,
  DescribePortfolioSharesCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePortfolioSharesCommandInput) {
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
  ): Handler<DescribePortfolioSharesCommandInput, DescribePortfolioSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribePortfolioSharesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePortfolioSharesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePortfolioSharesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePortfolioSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePortfolioSharesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePortfolioSharesCommandOutput> {
    return deserializeAws_json1_1DescribePortfolioSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

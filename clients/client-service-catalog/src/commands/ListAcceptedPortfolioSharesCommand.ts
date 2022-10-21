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
  ListAcceptedPortfolioSharesInput,
  ListAcceptedPortfolioSharesInputFilterSensitiveLog,
  ListAcceptedPortfolioSharesOutput,
  ListAcceptedPortfolioSharesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAcceptedPortfolioSharesCommand,
  serializeAws_json1_1ListAcceptedPortfolioSharesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface ListAcceptedPortfolioSharesCommandInput extends ListAcceptedPortfolioSharesInput {}
export interface ListAcceptedPortfolioSharesCommandOutput extends ListAcceptedPortfolioSharesOutput, __MetadataBearer {}

/**
 * <p>Lists all imported portfolios for which account-to-account shares were accepted by
 *          this account. By specifying the <code>PortfolioShareType</code>, you can list portfolios for which
 *          organizational shares were accepted by this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListAcceptedPortfolioSharesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListAcceptedPortfolioSharesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListAcceptedPortfolioSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAcceptedPortfolioSharesCommandInput} for command's `input` shape.
 * @see {@link ListAcceptedPortfolioSharesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class ListAcceptedPortfolioSharesCommand extends $Command<
  ListAcceptedPortfolioSharesCommandInput,
  ListAcceptedPortfolioSharesCommandOutput,
  ServiceCatalogClientResolvedConfig
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

  constructor(readonly input: ListAcceptedPortfolioSharesCommandInput) {
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
  ): Handler<ListAcceptedPortfolioSharesCommandInput, ListAcceptedPortfolioSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAcceptedPortfolioSharesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListAcceptedPortfolioSharesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAcceptedPortfolioSharesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListAcceptedPortfolioSharesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAcceptedPortfolioSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAcceptedPortfolioSharesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAcceptedPortfolioSharesCommandOutput> {
    return deserializeAws_json1_1ListAcceptedPortfolioSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

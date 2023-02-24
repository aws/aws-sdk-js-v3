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
  DescribePortfolioSharesInput,
  DescribePortfolioSharesInputFilterSensitiveLog,
  DescribePortfolioSharesOutput,
  DescribePortfolioSharesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePortfolioSharesCommand,
  serializeAws_json1_1DescribePortfolioSharesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface DescribePortfolioSharesCommandInput extends DescribePortfolioSharesInput {}
export interface DescribePortfolioSharesCommandOutput extends DescribePortfolioSharesOutput, __MetadataBearer {}

/**
 * <p>Returns a summary of each of the portfolio shares that were created for the specified portfolio.</p>
 *          <p>You can use this API to determine which accounts or organizational nodes this
 *          portfolio have been shared, whether the recipient entity has imported the share, and
 *          whether TagOptions are included with the share.</p>
 *          <p>The <code>PortfolioId</code> and <code>Type</code> parameters are both required.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioSharesCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribePortfolioSharesCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribePortfolioSharesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePortfolioSharesCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioSharesCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class DescribePortfolioSharesCommand extends $Command<
  DescribePortfolioSharesCommandInput,
  DescribePortfolioSharesCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePortfolioSharesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribePortfolioSharesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePortfolioSharesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePortfolioSharesOutputFilterSensitiveLog,
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

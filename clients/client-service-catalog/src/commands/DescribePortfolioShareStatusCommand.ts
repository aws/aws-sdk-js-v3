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
  DescribePortfolioShareStatusInput,
  DescribePortfolioShareStatusInputFilterSensitiveLog,
  DescribePortfolioShareStatusOutput,
  DescribePortfolioShareStatusOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePortfolioShareStatusCommand,
  serializeAws_json1_1DescribePortfolioShareStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface DescribePortfolioShareStatusCommandInput extends DescribePortfolioShareStatusInput {}
export interface DescribePortfolioShareStatusCommandOutput
  extends DescribePortfolioShareStatusOutput,
    __MetadataBearer {}

/**
 * <p>Gets the status of the specified portfolio share operation. This API can only be called
 *          by the management account in the organization or by a delegated admin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioShareStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribePortfolioShareStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribePortfolioShareStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePortfolioShareStatusCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioShareStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class DescribePortfolioShareStatusCommand extends $Command<
  DescribePortfolioShareStatusCommandInput,
  DescribePortfolioShareStatusCommandOutput,
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

  constructor(readonly input: DescribePortfolioShareStatusCommandInput) {
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
  ): Handler<DescribePortfolioShareStatusCommandInput, DescribePortfolioShareStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePortfolioShareStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribePortfolioShareStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePortfolioShareStatusInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePortfolioShareStatusOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePortfolioShareStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePortfolioShareStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribePortfolioShareStatusCommandOutput> {
    return deserializeAws_json1_1DescribePortfolioShareStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

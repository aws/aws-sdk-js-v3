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

import { SearchProvisionedProductsInput, SearchProvisionedProductsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1SearchProvisionedProductsCommand,
  serializeAws_json1_1SearchProvisionedProductsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 *
 * The input for {@link SearchProvisionedProductsCommand}.
 */
export interface SearchProvisionedProductsCommandInput extends SearchProvisionedProductsInput {}
/**
 * @public
 *
 * The output of {@link SearchProvisionedProductsCommand}.
 */
export interface SearchProvisionedProductsCommandOutput extends SearchProvisionedProductsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the provisioned products that meet the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProvisionedProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProvisionedProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new SearchProvisionedProductsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SearchProvisionedProductsCommandInput - {@link SearchProvisionedProductsCommandInput}
 * @returns {@link SearchProvisionedProductsCommandOutput}
 * @see {@link SearchProvisionedProductsCommandInput} for command's `input` shape.
 * @see {@link SearchProvisionedProductsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 *
 */
export class SearchProvisionedProductsCommand extends $Command<
  SearchProvisionedProductsCommandInput,
  SearchProvisionedProductsCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchProvisionedProductsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "SearchProvisionedProductsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: SearchProvisionedProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchProvisionedProductsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchProvisionedProductsCommandOutput> {
    return deserializeAws_json1_1SearchProvisionedProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

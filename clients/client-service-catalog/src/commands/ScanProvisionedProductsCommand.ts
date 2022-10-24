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
  ScanProvisionedProductsInput,
  ScanProvisionedProductsInputFilterSensitiveLog,
  ScanProvisionedProductsOutput,
  ScanProvisionedProductsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ScanProvisionedProductsCommand,
  serializeAws_json1_1ScanProvisionedProductsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface ScanProvisionedProductsCommandInput extends ScanProvisionedProductsInput {}
export interface ScanProvisionedProductsCommandOutput extends ScanProvisionedProductsOutput, __MetadataBearer {}

/**
 * <p>Lists the provisioned products that are available (not terminated).</p>
 *          <p>To use additional filtering, see <a>SearchProvisionedProducts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ScanProvisionedProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ScanProvisionedProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ScanProvisionedProductsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ScanProvisionedProductsCommandInput} for command's `input` shape.
 * @see {@link ScanProvisionedProductsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class ScanProvisionedProductsCommand extends $Command<
  ScanProvisionedProductsCommandInput,
  ScanProvisionedProductsCommandOutput,
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

  constructor(readonly input: ScanProvisionedProductsCommandInput) {
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
  ): Handler<ScanProvisionedProductsCommandInput, ScanProvisionedProductsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ScanProvisionedProductsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ScanProvisionedProductsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ScanProvisionedProductsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ScanProvisionedProductsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ScanProvisionedProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ScanProvisionedProductsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ScanProvisionedProductsCommandOutput> {
    return deserializeAws_json1_1ScanProvisionedProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

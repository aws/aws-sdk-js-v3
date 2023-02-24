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
  ExecuteProvisionedProductServiceActionInput,
  ExecuteProvisionedProductServiceActionInputFilterSensitiveLog,
  ExecuteProvisionedProductServiceActionOutput,
  ExecuteProvisionedProductServiceActionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand,
  serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface ExecuteProvisionedProductServiceActionCommandInput
  extends ExecuteProvisionedProductServiceActionInput {}
export interface ExecuteProvisionedProductServiceActionCommandOutput
  extends ExecuteProvisionedProductServiceActionOutput,
    __MetadataBearer {}

/**
 * <p>Executes a self-service action against a provisioned product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ExecuteProvisionedProductServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ExecuteProvisionedProductServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ExecuteProvisionedProductServiceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteProvisionedProductServiceActionCommandInput} for command's `input` shape.
 * @see {@link ExecuteProvisionedProductServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class ExecuteProvisionedProductServiceActionCommand extends $Command<
  ExecuteProvisionedProductServiceActionCommandInput,
  ExecuteProvisionedProductServiceActionCommandOutput,
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

  constructor(readonly input: ExecuteProvisionedProductServiceActionCommandInput) {
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
  ): Handler<ExecuteProvisionedProductServiceActionCommandInput, ExecuteProvisionedProductServiceActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteProvisionedProductServiceActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ExecuteProvisionedProductServiceActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteProvisionedProductServiceActionInputFilterSensitiveLog,
      outputFilterSensitiveLog: ExecuteProvisionedProductServiceActionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ExecuteProvisionedProductServiceActionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ExecuteProvisionedProductServiceActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExecuteProvisionedProductServiceActionCommandOutput> {
    return deserializeAws_json1_1ExecuteProvisionedProductServiceActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

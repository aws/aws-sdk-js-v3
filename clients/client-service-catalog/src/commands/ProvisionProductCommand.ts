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
  ProvisionProductInput,
  ProvisionProductInputFilterSensitiveLog,
  ProvisionProductOutput,
  ProvisionProductOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ProvisionProductCommand,
  serializeAws_json1_1ProvisionProductCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface ProvisionProductCommandInput extends ProvisionProductInput {}
export interface ProvisionProductCommandOutput extends ProvisionProductOutput, __MetadataBearer {}

/**
 * <p>Provisions the specified product.</p>
 *          <p>A provisioned product is a resourced instance of a product.
 *          For example, provisioning a product based on a CloudFormation template launches a
 *          CloudFormation stack and its underlying resources.
 *          You can check the status of this request using <a>DescribeRecord</a>.</p>
 *          <p>If the request contains a tag key with an empty list of values, there is a
 *          tag conflict for that key. Do not include conflicted keys as tags, or this causes
 *          the error "Parameter validation failed: Missing required parameter in
 *          Tags[<i>N</i>]:<i>Value</i>".</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ProvisionProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ProvisionProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ProvisionProductCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionProductCommandInput} for command's `input` shape.
 * @see {@link ProvisionProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class ProvisionProductCommand extends $Command<
  ProvisionProductCommandInput,
  ProvisionProductCommandOutput,
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

  constructor(readonly input: ProvisionProductCommandInput) {
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
  ): Handler<ProvisionProductCommandInput, ProvisionProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ProvisionProductCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ProvisionProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvisionProductInputFilterSensitiveLog,
      outputFilterSensitiveLog: ProvisionProductOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ProvisionProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ProvisionProductCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ProvisionProductCommandOutput> {
    return deserializeAws_json1_1ProvisionProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

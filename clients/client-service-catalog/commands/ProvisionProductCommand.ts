import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ProvisionProductInput, ProvisionProductOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ProvisionProductCommand,
  serializeAws_json1_1ProvisionProductCommand,
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

export type ProvisionProductCommandInput = ProvisionProductInput;
export type ProvisionProductCommandOutput = ProvisionProductOutput & __MetadataBearer;

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
 */
export class ProvisionProductCommand extends $Command<
  ProvisionProductCommandInput,
  ProvisionProductCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ProvisionProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvisionProductInput.filterSensitiveLog,
      outputFilterSensitiveLog: ProvisionProductOutput.filterSensitiveLog,
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

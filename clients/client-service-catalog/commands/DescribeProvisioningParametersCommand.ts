import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProvisioningParametersInput, DescribeProvisioningParametersOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeProvisioningParametersCommand,
  serializeAws_json1_1DescribeProvisioningParametersCommand,
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

export type DescribeProvisioningParametersCommandInput = DescribeProvisioningParametersInput;
export type DescribeProvisioningParametersCommandOutput = DescribeProvisioningParametersOutput & __MetadataBearer;

/**
 * <p>Gets information about the configuration required to provision the specified product using
 *          the specified provisioning artifact.</p>
 *          <p>If the output contains a TagOption key with an empty list of values, there is a
 *          TagOption conflict for that key. The end user cannot take action to fix the conflict, and
 *          launch is not blocked. In subsequent calls to <a>ProvisionProduct</a>,
 *          do not include conflicted TagOption keys as tags, or this causes the error
 *          "Parameter validation failed: Missing required parameter in Tags[<i>N</i>]:<i>Value</i>".
 *          Tag the provisioned product with the value <code>sc-tagoption-conflict-portfolioId-productId</code>.</p>
 */
export class DescribeProvisioningParametersCommand extends $Command<
  DescribeProvisioningParametersCommandInput,
  DescribeProvisioningParametersCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeProvisioningParametersCommandInput) {
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
  ): Handler<DescribeProvisioningParametersCommandInput, DescribeProvisioningParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeProvisioningParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProvisioningParametersInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProvisioningParametersOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeProvisioningParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeProvisioningParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeProvisioningParametersCommandOutput> {
    return deserializeAws_json1_1DescribeProvisioningParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProvisionedProductPlanInput, DescribeProvisionedProductPlanOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeProvisionedProductPlanCommand,
  serializeAws_json1_1DescribeProvisionedProductPlanCommand,
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

export type DescribeProvisionedProductPlanCommandInput = DescribeProvisionedProductPlanInput;
export type DescribeProvisionedProductPlanCommandOutput = DescribeProvisionedProductPlanOutput & __MetadataBearer;

/**
 * <p>Gets information about the resource changes for the specified plan.</p>
 */
export class DescribeProvisionedProductPlanCommand extends $Command<
  DescribeProvisionedProductPlanCommandInput,
  DescribeProvisionedProductPlanCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeProvisionedProductPlanCommandInput) {
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
  ): Handler<DescribeProvisionedProductPlanCommandInput, DescribeProvisionedProductPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeProvisionedProductPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProvisionedProductPlanInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProvisionedProductPlanOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeProvisionedProductPlanCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeProvisionedProductPlanCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeProvisionedProductPlanCommandOutput> {
    return deserializeAws_json1_1DescribeProvisionedProductPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

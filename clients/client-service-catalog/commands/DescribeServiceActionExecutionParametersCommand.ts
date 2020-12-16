import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import {
  DescribeServiceActionExecutionParametersInput,
  DescribeServiceActionExecutionParametersOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand,
  serializeAws_json1_1DescribeServiceActionExecutionParametersCommand,
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

export type DescribeServiceActionExecutionParametersCommandInput = DescribeServiceActionExecutionParametersInput;
export type DescribeServiceActionExecutionParametersCommandOutput = DescribeServiceActionExecutionParametersOutput &
  __MetadataBearer;

/**
 * <p>Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.</p>
 */
export class DescribeServiceActionExecutionParametersCommand extends $Command<
  DescribeServiceActionExecutionParametersCommandInput,
  DescribeServiceActionExecutionParametersCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeServiceActionExecutionParametersCommandInput) {
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
  ): Handler<
    DescribeServiceActionExecutionParametersCommandInput,
    DescribeServiceActionExecutionParametersCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeServiceActionExecutionParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServiceActionExecutionParametersInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeServiceActionExecutionParametersOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeServiceActionExecutionParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeServiceActionExecutionParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeServiceActionExecutionParametersCommandOutput> {
    return deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { DescribeComponentConfigurationRequest, DescribeComponentConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeComponentConfigurationCommand,
  serializeAws_json1_1DescribeComponentConfigurationCommand,
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

export type DescribeComponentConfigurationCommandInput = DescribeComponentConfigurationRequest;
export type DescribeComponentConfigurationCommandOutput = DescribeComponentConfigurationResponse & __MetadataBearer;

/**
 * <p>Describes the monitoring configuration of the component.</p>
 */
export class DescribeComponentConfigurationCommand extends $Command<
  DescribeComponentConfigurationCommandInput,
  DescribeComponentConfigurationCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeComponentConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeComponentConfigurationCommandInput, DescribeComponentConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "DescribeComponentConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeComponentConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeComponentConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeComponentConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeComponentConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeComponentConfigurationCommandOutput> {
    return deserializeAws_json1_1DescribeComponentConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

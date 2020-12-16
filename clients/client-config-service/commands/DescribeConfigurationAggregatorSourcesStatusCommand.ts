import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  DescribeConfigurationAggregatorSourcesStatusRequest,
  DescribeConfigurationAggregatorSourcesStatusResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand,
  serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand,
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

export type DescribeConfigurationAggregatorSourcesStatusCommandInput = DescribeConfigurationAggregatorSourcesStatusRequest;
export type DescribeConfigurationAggregatorSourcesStatusCommandOutput = DescribeConfigurationAggregatorSourcesStatusResponse &
  __MetadataBearer;

/**
 * <p>Returns status information for sources within an aggregator.
 * 			The status includes information about the last time AWS Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. </p>
 */
export class DescribeConfigurationAggregatorSourcesStatusCommand extends $Command<
  DescribeConfigurationAggregatorSourcesStatusCommandInput,
  DescribeConfigurationAggregatorSourcesStatusCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConfigurationAggregatorSourcesStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeConfigurationAggregatorSourcesStatusCommandInput,
    DescribeConfigurationAggregatorSourcesStatusCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConfigurationAggregatorSourcesStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConfigurationAggregatorSourcesStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConfigurationAggregatorSourcesStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeConfigurationAggregatorSourcesStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationAggregatorSourcesStatusCommandOutput> {
    return deserializeAws_json1_1DescribeConfigurationAggregatorSourcesStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

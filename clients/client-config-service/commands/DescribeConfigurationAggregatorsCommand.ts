import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeConfigurationAggregatorsRequest, DescribeConfigurationAggregatorsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConfigurationAggregatorsCommand,
  serializeAws_json1_1DescribeConfigurationAggregatorsCommand,
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

export type DescribeConfigurationAggregatorsCommandInput = DescribeConfigurationAggregatorsRequest;
export type DescribeConfigurationAggregatorsCommandOutput = DescribeConfigurationAggregatorsResponse & __MetadataBearer;

/**
 * <p>Returns the details of one or more configuration aggregators.
 * 			If the configuration aggregator is not specified, this action
 * 			returns the details for all the configuration aggregators associated
 * 			with the account. </p>
 */
export class DescribeConfigurationAggregatorsCommand extends $Command<
  DescribeConfigurationAggregatorsCommandInput,
  DescribeConfigurationAggregatorsCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeConfigurationAggregatorsCommandInput) {
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
  ): Handler<DescribeConfigurationAggregatorsCommandInput, DescribeConfigurationAggregatorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeConfigurationAggregatorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeConfigurationAggregatorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConfigurationAggregatorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeConfigurationAggregatorsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeConfigurationAggregatorsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeConfigurationAggregatorsCommandOutput> {
    return deserializeAws_json1_1DescribeConfigurationAggregatorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

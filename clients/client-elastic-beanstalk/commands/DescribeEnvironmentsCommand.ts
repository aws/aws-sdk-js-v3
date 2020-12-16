import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentsMessage, EnvironmentDescriptionsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeEnvironmentsCommand,
  serializeAws_queryDescribeEnvironmentsCommand,
} from "../protocols/Aws_query";
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

export type DescribeEnvironmentsCommandInput = DescribeEnvironmentsMessage;
export type DescribeEnvironmentsCommandOutput = EnvironmentDescriptionsMessage & __MetadataBearer;

/**
 * <p>Returns descriptions for existing environments.</p>
 */
export class DescribeEnvironmentsCommand extends $Command<
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEnvironmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEnvironmentsCommandInput, DescribeEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeEnvironmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEnvironmentsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: EnvironmentDescriptionsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEnvironmentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEnvironmentsCommandOutput> {
    return deserializeAws_queryDescribeEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

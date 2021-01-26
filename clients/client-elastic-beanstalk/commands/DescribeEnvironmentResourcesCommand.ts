import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentResourcesMessage, EnvironmentResourceDescriptionsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeEnvironmentResourcesCommand,
  serializeAws_queryDescribeEnvironmentResourcesCommand,
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

export type DescribeEnvironmentResourcesCommandInput = DescribeEnvironmentResourcesMessage;
export type DescribeEnvironmentResourcesCommandOutput = EnvironmentResourceDescriptionsMessage & __MetadataBearer;

/**
 * <p>Returns AWS resources for this environment.</p>
 */
export class DescribeEnvironmentResourcesCommand extends $Command<
  DescribeEnvironmentResourcesCommandInput,
  DescribeEnvironmentResourcesCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEnvironmentResourcesCommandInput) {
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
  ): Handler<DescribeEnvironmentResourcesCommandInput, DescribeEnvironmentResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeEnvironmentResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEnvironmentResourcesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: EnvironmentResourceDescriptionsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeEnvironmentResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEnvironmentResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentResourcesCommandOutput> {
    return deserializeAws_queryDescribeEnvironmentResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { DescribeEnvironmentManagedActionsRequest, DescribeEnvironmentManagedActionsResult } from "../models/models_0";
import {
  deserializeAws_queryDescribeEnvironmentManagedActionsCommand,
  serializeAws_queryDescribeEnvironmentManagedActionsCommand,
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

export type DescribeEnvironmentManagedActionsCommandInput = DescribeEnvironmentManagedActionsRequest;
export type DescribeEnvironmentManagedActionsCommandOutput = DescribeEnvironmentManagedActionsResult & __MetadataBearer;

/**
 * <p>Lists an environment's upcoming and in-progress managed actions.</p>
 */
export class DescribeEnvironmentManagedActionsCommand extends $Command<
  DescribeEnvironmentManagedActionsCommandInput,
  DescribeEnvironmentManagedActionsCommandOutput,
  ElasticBeanstalkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeEnvironmentManagedActionsCommandInput) {
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
  ): Handler<DescribeEnvironmentManagedActionsCommandInput, DescribeEnvironmentManagedActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "DescribeEnvironmentManagedActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeEnvironmentManagedActionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeEnvironmentManagedActionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeEnvironmentManagedActionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeEnvironmentManagedActionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEnvironmentManagedActionsCommandOutput> {
    return deserializeAws_queryDescribeEnvironmentManagedActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { DescribeComputeEnvironmentsRequest, DescribeComputeEnvironmentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeComputeEnvironmentsCommand,
  serializeAws_restJson1DescribeComputeEnvironmentsCommand,
} from "../protocols/Aws_restJson1";
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

export type DescribeComputeEnvironmentsCommandInput = DescribeComputeEnvironmentsRequest;
export type DescribeComputeEnvironmentsCommandOutput = DescribeComputeEnvironmentsResponse & __MetadataBearer;

/**
 * <p>Describes one or more of your compute environments.</p>
 *          <p>If you're using an unmanaged compute environment, you can use the <code>DescribeComputeEnvironment</code>
 *    operation to determine the <code>ecsClusterArn</code> that you should launch your Amazon ECS container instances
 *    into.</p>
 */
export class DescribeComputeEnvironmentsCommand extends $Command<
  DescribeComputeEnvironmentsCommandInput,
  DescribeComputeEnvironmentsCommandOutput,
  BatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeComputeEnvironmentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeComputeEnvironmentsCommandInput, DescribeComputeEnvironmentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DescribeComputeEnvironmentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeComputeEnvironmentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeComputeEnvironmentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeComputeEnvironmentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeComputeEnvironmentsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeComputeEnvironmentsCommandOutput> {
    return deserializeAws_restJson1DescribeComputeEnvironmentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

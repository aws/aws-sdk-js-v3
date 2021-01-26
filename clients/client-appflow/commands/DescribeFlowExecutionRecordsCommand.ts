import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { DescribeFlowExecutionRecordsRequest, DescribeFlowExecutionRecordsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeFlowExecutionRecordsCommand,
  serializeAws_restJson1DescribeFlowExecutionRecordsCommand,
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

export type DescribeFlowExecutionRecordsCommandInput = DescribeFlowExecutionRecordsRequest;
export type DescribeFlowExecutionRecordsCommandOutput = DescribeFlowExecutionRecordsResponse & __MetadataBearer;

/**
 * <p>
 * Fetches the execution history of the flow.
 * </p>
 */
export class DescribeFlowExecutionRecordsCommand extends $Command<
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFlowExecutionRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFlowExecutionRecordsCommandInput, DescribeFlowExecutionRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "DescribeFlowExecutionRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFlowExecutionRecordsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFlowExecutionRecordsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFlowExecutionRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeFlowExecutionRecordsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFlowExecutionRecordsCommandOutput> {
    return deserializeAws_restJson1DescribeFlowExecutionRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

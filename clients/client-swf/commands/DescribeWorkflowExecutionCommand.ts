import {
  SWFClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SWFClient";
import {
  DescribeWorkflowExecutionInput,
  WorkflowExecutionDetail
} from "../models/index";
import {
  deserializeAws_json1_0DescribeWorkflowExecutionCommand,
  serializeAws_json1_0DescribeWorkflowExecutionCommand
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type DescribeWorkflowExecutionCommandInput = DescribeWorkflowExecutionInput;
export type DescribeWorkflowExecutionCommandOutput = WorkflowExecutionDetail &
  __MetadataBearer;

export class DescribeWorkflowExecutionCommand extends $Command<
  DescribeWorkflowExecutionCommandInput,
  DescribeWorkflowExecutionCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWorkflowExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeWorkflowExecutionCommandInput,
    DescribeWorkflowExecutionCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeWorkflowExecutionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeWorkflowExecutionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkflowExecutionCommandOutput> {
    return deserializeAws_json1_0DescribeWorkflowExecutionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

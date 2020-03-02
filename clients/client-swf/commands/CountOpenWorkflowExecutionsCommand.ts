import {
  SWFClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SWFClient";
import {
  CountOpenWorkflowExecutionsInput,
  WorkflowExecutionCount
} from "../models/index";
import {
  deserializeAws_json1_0CountOpenWorkflowExecutionsCommand,
  serializeAws_json1_0CountOpenWorkflowExecutionsCommand
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

export type CountOpenWorkflowExecutionsCommandInput = CountOpenWorkflowExecutionsInput;
export type CountOpenWorkflowExecutionsCommandOutput = WorkflowExecutionCount &
  __MetadataBearer;

export class CountOpenWorkflowExecutionsCommand extends $Command<
  CountOpenWorkflowExecutionsCommandInput,
  CountOpenWorkflowExecutionsCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CountOpenWorkflowExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CountOpenWorkflowExecutionsCommandInput,
    CountOpenWorkflowExecutionsCommandOutput
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
    input: CountOpenWorkflowExecutionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0CountOpenWorkflowExecutionsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CountOpenWorkflowExecutionsCommandOutput> {
    return deserializeAws_json1_0CountOpenWorkflowExecutionsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

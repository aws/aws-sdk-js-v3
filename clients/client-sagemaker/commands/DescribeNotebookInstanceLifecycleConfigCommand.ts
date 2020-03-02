import {
  SageMakerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SageMakerClient";
import {
  DescribeNotebookInstanceLifecycleConfigInput,
  DescribeNotebookInstanceLifecycleConfigOutput
} from "../models/index";
import {
  deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand,
  serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand
} from "../protocols/Aws_json1_1";
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

export type DescribeNotebookInstanceLifecycleConfigCommandInput = DescribeNotebookInstanceLifecycleConfigInput;
export type DescribeNotebookInstanceLifecycleConfigCommandOutput = DescribeNotebookInstanceLifecycleConfigOutput &
  __MetadataBearer;

export class DescribeNotebookInstanceLifecycleConfigCommand extends $Command<
  DescribeNotebookInstanceLifecycleConfigCommandInput,
  DescribeNotebookInstanceLifecycleConfigCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: DescribeNotebookInstanceLifecycleConfigCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeNotebookInstanceLifecycleConfigCommandInput,
    DescribeNotebookInstanceLifecycleConfigCommandOutput
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
    input: DescribeNotebookInstanceLifecycleConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNotebookInstanceLifecycleConfigCommandOutput> {
    return deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListCompilationJobsRequest, ListCompilationJobsResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListCompilationJobsCommand,
  serializeAws_json1_1ListCompilationJobsCommand,
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

export type ListCompilationJobsCommandInput = ListCompilationJobsRequest;
export type ListCompilationJobsCommandOutput = ListCompilationJobsResponse & __MetadataBearer;

/**
 * <p>Lists model compilation jobs that satisfy various filters.</p>
 *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
 *             information about a particular model compilation job you have created, use <a>DescribeCompilationJob</a>.</p>
 */
export class ListCompilationJobsCommand extends $Command<
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCompilationJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCompilationJobsCommandInput, ListCompilationJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListCompilationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCompilationJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCompilationJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCompilationJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCompilationJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCompilationJobsCommandOutput> {
    return deserializeAws_json1_1ListCompilationJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

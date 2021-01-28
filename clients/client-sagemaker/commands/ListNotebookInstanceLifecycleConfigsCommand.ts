import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import {
  ListNotebookInstanceLifecycleConfigsInput,
  ListNotebookInstanceLifecycleConfigsOutput,
} from "../models/models_2";
import {
  deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand,
  serializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand,
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

export type ListNotebookInstanceLifecycleConfigsCommandInput = ListNotebookInstanceLifecycleConfigsInput;
export type ListNotebookInstanceLifecycleConfigsCommandOutput = ListNotebookInstanceLifecycleConfigsOutput &
  __MetadataBearer;

/**
 * <p>Lists notebook instance lifestyle configurations created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
 */
export class ListNotebookInstanceLifecycleConfigsCommand extends $Command<
  ListNotebookInstanceLifecycleConfigsCommandInput,
  ListNotebookInstanceLifecycleConfigsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListNotebookInstanceLifecycleConfigsCommandInput) {
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
  ): Handler<ListNotebookInstanceLifecycleConfigsCommandInput, ListNotebookInstanceLifecycleConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListNotebookInstanceLifecycleConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNotebookInstanceLifecycleConfigsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListNotebookInstanceLifecycleConfigsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListNotebookInstanceLifecycleConfigsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput> {
    return deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

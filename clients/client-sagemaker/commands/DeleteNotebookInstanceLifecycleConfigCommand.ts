import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteNotebookInstanceLifecycleConfigInput } from "../models/models_1";
import {
  deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand,
  serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand,
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

export type DeleteNotebookInstanceLifecycleConfigCommandInput = DeleteNotebookInstanceLifecycleConfigInput;
export type DeleteNotebookInstanceLifecycleConfigCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a notebook instance lifecycle configuration.</p>
 */
export class DeleteNotebookInstanceLifecycleConfigCommand extends $Command<
  DeleteNotebookInstanceLifecycleConfigCommandInput,
  DeleteNotebookInstanceLifecycleConfigCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNotebookInstanceLifecycleConfigCommandInput) {
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
  ): Handler<DeleteNotebookInstanceLifecycleConfigCommandInput, DeleteNotebookInstanceLifecycleConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DeleteNotebookInstanceLifecycleConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNotebookInstanceLifecycleConfigInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteNotebookInstanceLifecycleConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNotebookInstanceLifecycleConfigCommandOutput> {
    return deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

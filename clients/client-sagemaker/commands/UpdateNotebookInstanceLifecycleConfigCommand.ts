import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import {
  UpdateNotebookInstanceLifecycleConfigInput,
  UpdateNotebookInstanceLifecycleConfigOutput,
} from "../models/models_2";
import {
  deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand,
  serializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand,
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

export type UpdateNotebookInstanceLifecycleConfigCommandInput = UpdateNotebookInstanceLifecycleConfigInput;
export type UpdateNotebookInstanceLifecycleConfigCommandOutput = UpdateNotebookInstanceLifecycleConfigOutput &
  __MetadataBearer;

/**
 * <p>Updates a notebook instance lifecycle configuration created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
 */
export class UpdateNotebookInstanceLifecycleConfigCommand extends $Command<
  UpdateNotebookInstanceLifecycleConfigCommandInput,
  UpdateNotebookInstanceLifecycleConfigCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateNotebookInstanceLifecycleConfigCommandInput) {
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
  ): Handler<UpdateNotebookInstanceLifecycleConfigCommandInput, UpdateNotebookInstanceLifecycleConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateNotebookInstanceLifecycleConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateNotebookInstanceLifecycleConfigInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateNotebookInstanceLifecycleConfigOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateNotebookInstanceLifecycleConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateNotebookInstanceLifecycleConfigCommandOutput> {
    return deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

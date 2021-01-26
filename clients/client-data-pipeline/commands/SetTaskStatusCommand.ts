import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { SetTaskStatusInput, SetTaskStatusOutput } from "../models/models_0";
import {
  deserializeAws_json1_1SetTaskStatusCommand,
  serializeAws_json1_1SetTaskStatusCommand,
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

export type SetTaskStatusCommandInput = SetTaskStatusInput;
export type SetTaskStatusCommandOutput = SetTaskStatusOutput & __MetadataBearer;

/**
 * <p>Task runners call <code>SetTaskStatus</code> to notify AWS Data Pipeline that a task is completed and provide information about the final status.
 *             A task runner makes this call regardless of whether the task was sucessful. A task runner does not need to call <code>SetTaskStatus</code> for
 *             tasks that are canceled by the web service during a call to <a>ReportTaskProgress</a>.</p>
 */
export class SetTaskStatusCommand extends $Command<
  SetTaskStatusCommandInput,
  SetTaskStatusCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetTaskStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataPipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetTaskStatusCommandInput, SetTaskStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "SetTaskStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetTaskStatusInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetTaskStatusOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetTaskStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetTaskStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetTaskStatusCommandOutput> {
    return deserializeAws_json1_1SetTaskStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

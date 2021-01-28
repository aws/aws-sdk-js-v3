import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { UpdateTaskExecutionRequest, UpdateTaskExecutionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateTaskExecutionCommand,
  serializeAws_json1_1UpdateTaskExecutionCommand,
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

export type UpdateTaskExecutionCommandInput = UpdateTaskExecutionRequest;
export type UpdateTaskExecutionCommandOutput = UpdateTaskExecutionResponse & __MetadataBearer;

/**
 * <p>Updates execution of a task.</p>
 *          <p>You can modify bandwidth throttling for a task execution that is running or queued.
 *       For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/working-with-task-executions.html#adjust-bandwidth-throttling">Adjusting Bandwidth Throttling for a Task Execution</a>.</p>
 *
 *          <note>
 *             <p>The only <code>Option</code> that can be modified by <code>UpdateTaskExecution</code>
 *         is <code>
 *                   <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a>
 *                </code>.</p>
 *          </note>
 */
export class UpdateTaskExecutionCommand extends $Command<
  UpdateTaskExecutionCommandInput,
  UpdateTaskExecutionCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTaskExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTaskExecutionCommandInput, UpdateTaskExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "UpdateTaskExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTaskExecutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTaskExecutionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTaskExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateTaskExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTaskExecutionCommandOutput> {
    return deserializeAws_json1_1UpdateTaskExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

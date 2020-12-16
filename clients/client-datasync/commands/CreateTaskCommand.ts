import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateTaskRequest, CreateTaskResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateTaskCommand,
  serializeAws_json1_1CreateTaskCommand,
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

export type CreateTaskCommandInput = CreateTaskRequest;
export type CreateTaskCommandOutput = CreateTaskResponse & __MetadataBearer;

/**
 * <p>Creates a task. A task is a set of two locations (source and destination) and a set of
 *       Options that you use to control the behavior of a task. If you don't specify Options when you
 *       create a task, AWS DataSync populates them with service defaults.</p>
 *          <p>When you create a task, it first enters the CREATING state. During CREATING
 *       AWS DataSync attempts to mount the on-premises Network File System (NFS) location. The task
 *       transitions to the AVAILABLE state without waiting for the AWS location to become mounted. If
 *       required, AWS DataSync mounts the AWS location before each task execution.</p>
 *          <p>If an agent that is associated with a source (NFS) location goes offline, the task
 *       transitions to the UNAVAILABLE status. If the status of the task remains in the CREATING
 *       status for more than a few minutes, it means that your agent might be having trouble mounting
 *       the source NFS file system. Check the task's ErrorCode and ErrorDetail. Mount issues are often
 *       caused by either a misconfigured firewall or a mistyped NFS server hostname.</p>
 */
export class CreateTaskCommand extends $Command<
  CreateTaskCommandInput,
  CreateTaskCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTaskCommandInput) {
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
  ): Handler<CreateTaskCommandInput, CreateTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTaskCommandOutput> {
    return deserializeAws_json1_1CreateTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

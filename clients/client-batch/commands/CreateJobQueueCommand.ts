import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { CreateJobQueueRequest, CreateJobQueueResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateJobQueueCommand,
  serializeAws_restJson1CreateJobQueueCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateJobQueueCommandInput = CreateJobQueueRequest;
export type CreateJobQueueCommandOutput = CreateJobQueueResponse & __MetadataBearer;

/**
 * <p>Creates an AWS Batch job queue. When you create a job queue, you associate one or more compute environments to the
 *    queue and assign an order of preference for the compute environments.</p>
 *          <p>You also set a priority to the job queue that determines the order in which the AWS Batch scheduler places jobs
 *    onto its associated compute environments. For example, if a compute environment is associated with more than one job
 *    queue, the job queue with a higher priority is given preference for scheduling jobs to that compute
 *    environment.</p>
 */
export class CreateJobQueueCommand extends $Command<
  CreateJobQueueCommandInput,
  CreateJobQueueCommandOutput,
  BatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateJobQueueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateJobQueueCommandInput, CreateJobQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "CreateJobQueueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateJobQueueRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateJobQueueResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateJobQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateJobQueueCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobQueueCommandOutput> {
    return deserializeAws_restJson1CreateJobQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

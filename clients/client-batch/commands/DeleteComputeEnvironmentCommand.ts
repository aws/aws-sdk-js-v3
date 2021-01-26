import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { DeleteComputeEnvironmentRequest, DeleteComputeEnvironmentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteComputeEnvironmentCommand,
  serializeAws_restJson1DeleteComputeEnvironmentCommand,
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

export type DeleteComputeEnvironmentCommandInput = DeleteComputeEnvironmentRequest;
export type DeleteComputeEnvironmentCommandOutput = DeleteComputeEnvironmentResponse & __MetadataBearer;

/**
 * <p>Deletes an AWS Batch compute environment.</p>
 *          <p>Before you can delete a compute environment, you must set its state to <code>DISABLED</code> with the <a>UpdateComputeEnvironment</a> API operation and disassociate it from any job queues with the <a>UpdateJobQueue</a> API operation. Compute environments that use AWS Fargate resources must terminate all
 *    active jobs on that compute environment before deleting the compute environment. If this isn't done, the compute
 *    environment will end up in an invalid state.</p>
 */
export class DeleteComputeEnvironmentCommand extends $Command<
  DeleteComputeEnvironmentCommandInput,
  DeleteComputeEnvironmentCommandOutput,
  BatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteComputeEnvironmentCommandInput) {
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
  ): Handler<DeleteComputeEnvironmentCommandInput, DeleteComputeEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DeleteComputeEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteComputeEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteComputeEnvironmentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteComputeEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteComputeEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteComputeEnvironmentCommandOutput> {
    return deserializeAws_restJson1DeleteComputeEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

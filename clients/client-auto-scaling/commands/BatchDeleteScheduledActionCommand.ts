import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { BatchDeleteScheduledActionAnswer, BatchDeleteScheduledActionType } from "../models/models_0";
import {
  deserializeAws_queryBatchDeleteScheduledActionCommand,
  serializeAws_queryBatchDeleteScheduledActionCommand,
} from "../protocols/Aws_query";
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

export type BatchDeleteScheduledActionCommandInput = BatchDeleteScheduledActionType;
export type BatchDeleteScheduledActionCommandOutput = BatchDeleteScheduledActionAnswer & __MetadataBearer;

/**
 * <p>Deletes one or more scheduled actions for the specified Auto Scaling group.</p>
 */
export class BatchDeleteScheduledActionCommand extends $Command<
  BatchDeleteScheduledActionCommandInput,
  BatchDeleteScheduledActionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeleteScheduledActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteScheduledActionCommandInput, BatchDeleteScheduledActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "BatchDeleteScheduledActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteScheduledActionType.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteScheduledActionAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteScheduledActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchDeleteScheduledActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDeleteScheduledActionCommandOutput> {
    return deserializeAws_queryBatchDeleteScheduledActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

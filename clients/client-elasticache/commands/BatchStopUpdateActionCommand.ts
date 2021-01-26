import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { BatchStopUpdateActionMessage, UpdateActionResultsMessage } from "../models/models_0";
import {
  deserializeAws_queryBatchStopUpdateActionCommand,
  serializeAws_queryBatchStopUpdateActionCommand,
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

export type BatchStopUpdateActionCommandInput = BatchStopUpdateActionMessage;
export type BatchStopUpdateActionCommandOutput = UpdateActionResultsMessage & __MetadataBearer;

/**
 * <p>Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.</p>
 */
export class BatchStopUpdateActionCommand extends $Command<
  BatchStopUpdateActionCommandInput,
  BatchStopUpdateActionCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchStopUpdateActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchStopUpdateActionCommandInput, BatchStopUpdateActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "BatchStopUpdateActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchStopUpdateActionMessage.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateActionResultsMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchStopUpdateActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchStopUpdateActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchStopUpdateActionCommandOutput> {
    return deserializeAws_queryBatchStopUpdateActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

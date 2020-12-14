import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { EventSourceMappingConfiguration, UpdateEventSourceMappingRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateEventSourceMappingCommand,
  serializeAws_restJson1UpdateEventSourceMappingCommand,
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

export type UpdateEventSourceMappingCommandInput = UpdateEventSourceMappingRequest;
export type UpdateEventSourceMappingCommandOutput = EventSourceMappingConfiguration & __MetadataBearer;

/**
 * <p>Updates an event source mapping. You can change the function that AWS Lambda invokes, or pause invocation and
 *       resume later from the same location.</p>
 *          <p>The following error handling options are only available for stream sources (DynamoDB and Kinesis):</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BisectBatchOnFunctionError</code> - If the function returns an error, split the batch in two and retry.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DestinationConfig</code> - Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaximumRecordAgeInSeconds</code> - Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaximumRetryAttempts</code> - Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ParallelizationFactor</code> - Process multiple batches from each shard concurrently.</p>
 *             </li>
 *          </ul>
 */
export class UpdateEventSourceMappingCommand extends $Command<
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEventSourceMappingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEventSourceMappingCommandInput, UpdateEventSourceMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "UpdateEventSourceMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEventSourceMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EventSourceMappingConfiguration.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEventSourceMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateEventSourceMappingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEventSourceMappingCommandOutput> {
    return deserializeAws_restJson1UpdateEventSourceMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

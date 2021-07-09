import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { CreateEventSourceMappingRequest, EventSourceMappingConfiguration } from "../models/models_0";
import {
  deserializeAws_restJson1CreateEventSourceMappingCommand,
  serializeAws_restJson1CreateEventSourceMappingCommand,
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

export interface CreateEventSourceMappingCommandInput extends CreateEventSourceMappingRequest {}
export interface CreateEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, __MetadataBearer {}

/**
 * <p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source
 *       and triggers the function.</p>
 *          <p>For details about each event source type, see the following topics. In particular, each of the topics
 *       describes the required and optional parameters for the specific event source. </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping">
 *           Configuring a Dynamo DB stream as an event source</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping">
 *           Configuring a Kinesis stream as an event source</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource">
 *           Configuring an SQS queue as an event source</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping">
 *           Configuring an MQ broker as an event source</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html">
 *           Configuring MSK as an event source</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html">
 *           Configuring Self-Managed Apache Kafka as an event source</a>
 *                </p>
 *             </li>
 *          </ul>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new CreateEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link CreateEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateEventSourceMappingCommand extends $Command<
  CreateEventSourceMappingCommandInput,
  CreateEventSourceMappingCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEventSourceMappingCommandInput) {
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
  ): Handler<CreateEventSourceMappingCommandInput, CreateEventSourceMappingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "CreateEventSourceMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEventSourceMappingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EventSourceMappingConfiguration.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEventSourceMappingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateEventSourceMappingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEventSourceMappingCommandOutput> {
    return deserializeAws_restJson1CreateEventSourceMappingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

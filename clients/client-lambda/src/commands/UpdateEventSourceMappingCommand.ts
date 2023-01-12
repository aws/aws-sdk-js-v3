// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  EventSourceMappingConfiguration,
  EventSourceMappingConfigurationFilterSensitiveLog,
  UpdateEventSourceMappingRequest,
  UpdateEventSourceMappingRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateEventSourceMappingCommand,
  serializeAws_restJson1UpdateEventSourceMappingCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateEventSourceMappingCommandInput extends UpdateEventSourceMappingRequest {}
export interface UpdateEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, __MetadataBearer {}

/**
 * <p>Updates an event source mapping. You can change the function that Lambda invokes, or pause
 *       invocation and resume later from the same location.</p>
 *          <p>For details about how to configure different event sources, see the following topics. </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping">
 *             Amazon DynamoDB Streams</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping">
 *             Amazon Kinesis</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource">
 *             Amazon SQS</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping">
 *             Amazon MQ and RabbitMQ</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html">
 *             Amazon MSK</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html">
 *             Apache Kafka</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p>
 *             </li>
 *          </ul>
 *          <p>For information about which configuration parameters apply to each event source, see the following topics.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params">
 *           Amazon DynamoDB Streams</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params">
 *           Amazon Kinesis</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params">
 *           Amazon SQS</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params">
 *           Amazon MQ and RabbitMQ</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms">
 *           Amazon MSK</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms">
 *           Apache Kafka</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class UpdateEventSourceMappingCommand extends $Command<
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput,
  LambdaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEventSourceMappingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "UpdateEventSourceMappingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEventSourceMappingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EventSourceMappingConfigurationFilterSensitiveLog,
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

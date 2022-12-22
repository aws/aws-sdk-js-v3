// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  EventStreamSerdeContext as __EventStreamSerdeContext,
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import {
  SubscribeToShardInput,
  SubscribeToShardInputFilterSensitiveLog,
  SubscribeToShardOutput,
  SubscribeToShardOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SubscribeToShardCommand,
  serializeAws_json1_1SubscribeToShardCommand,
} from "../protocols/Aws_json1_1";

export interface SubscribeToShardCommandInput extends SubscribeToShardInput {}
export interface SubscribeToShardCommandOutput extends SubscribeToShardOutput, __MetadataBearer {}

/**
 * <p>This operation establishes an HTTP/2 connection between the consumer you specify in
 *             the <code>ConsumerARN</code> parameter and the shard you specify in the
 *                 <code>ShardId</code> parameter. After the connection is successfully established,
 *             Kinesis Data Streams pushes records from the shard to the consumer over this connection.
 *             Before you call this operation, call <a>RegisterStreamConsumer</a> to
 *             register the consumer with Kinesis Data Streams.</p>
 *          <p>When the <code>SubscribeToShard</code> call succeeds, your consumer starts receiving
 *             events of type <a>SubscribeToShardEvent</a> over the HTTP/2 connection for up
 *             to 5 minutes, after which time you need to call <code>SubscribeToShard</code> again to
 *             renew the subscription if you want to continue to receive records.</p>
 *          <p>You can make one call to <code>SubscribeToShard</code> per second per registered
 *             consumer per shard. For example, if you have a 4000 shard stream and two registered
 *             stream consumers, you can make one <code>SubscribeToShard</code> request per second for
 *             each combination of shard and registered consumer, allowing you to subscribe both
 *             consumers to all 4000 shards in one second. </p>
 *          <p>If you call <code>SubscribeToShard</code> again with the same <code>ConsumerARN</code>
 *             and <code>ShardId</code> within 5 seconds of a successful call, you'll get a
 *                 <code>ResourceInUseException</code>. If you call <code>SubscribeToShard</code> 5
 *             seconds or more after a successful call, the second call takes over the subscription and
 *             the previous connection expires or fails with a
 *             <code>ResourceInUseException</code>.</p>
 *          <p>For an example of how to use this operations, see <a href="/streams/latest/dev/building-enhanced-consumers-api.html">Enhanced Fan-Out
 *                 Using the Kinesis Data Streams API</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, SubscribeToShardCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, SubscribeToShardCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const command = new SubscribeToShardCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubscribeToShardCommandInput} for command's `input` shape.
 * @see {@link SubscribeToShardCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 */
export class SubscribeToShardCommand extends $Command<
  SubscribeToShardCommandInput,
  SubscribeToShardCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OperationType: { type: "staticContextParams", value: `data` },
      ConsumerARN: { type: "contextParams", name: "ConsumerARN" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: SubscribeToShardCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubscribeToShardCommandInput, SubscribeToShardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SubscribeToShardCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "SubscribeToShardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubscribeToShardInputFilterSensitiveLog,
      outputFilterSensitiveLog: SubscribeToShardOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubscribeToShardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SubscribeToShardCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext & __EventStreamSerdeContext
  ): Promise<SubscribeToShardCommandOutput> {
    return deserializeAws_json1_1SubscribeToShardCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

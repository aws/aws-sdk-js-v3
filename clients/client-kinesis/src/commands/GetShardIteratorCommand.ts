// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { GetShardIteratorInput, GetShardIteratorOutput } from "../models/models_0";
import { de_GetShardIteratorCommand, se_GetShardIteratorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetShardIteratorCommand}.
 */
export interface GetShardIteratorCommandInput extends GetShardIteratorInput {}
/**
 * @public
 *
 * The output of {@link GetShardIteratorCommand}.
 */
export interface GetShardIteratorCommandOutput extends GetShardIteratorOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets an Amazon Kinesis shard iterator. A shard iterator expires 5 minutes after it is
 *             returned to the requester.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>A shard iterator specifies the shard position from which to start reading data records
 *             sequentially. The position is specified using the sequence number of a data record in a
 *             shard. A sequence number is the identifier associated with every record ingested in the
 *             stream, and is assigned when a record is put into the stream. Each stream has one or
 *             more shards.</p>
 *          <p>You must specify the shard iterator type. For example, you can set the
 *                 <code>ShardIteratorType</code> parameter to read exactly from the position denoted
 *             by a specific sequence number by using the <code>AT_SEQUENCE_NUMBER</code> shard
 *             iterator type. Alternatively, the parameter can read right after the sequence number by
 *             using the <code>AFTER_SEQUENCE_NUMBER</code> shard iterator type, using sequence numbers
 *             returned by earlier calls to <a>PutRecord</a>, <a>PutRecords</a>,
 *                 <a>GetRecords</a>, or <a>DescribeStream</a>. In the request,
 *             you can specify the shard iterator type <code>AT_TIMESTAMP</code> to read records from
 *             an arbitrary point in time, <code>TRIM_HORIZON</code> to cause
 *                 <code>ShardIterator</code> to point to the last untrimmed record in the shard in the
 *             system (the oldest data record in the shard), or <code>LATEST</code> so that you always
 *             read the most recent data in the shard. </p>
 *          <p>When you read repeatedly from a stream, use a <a>GetShardIterator</a>
 *             request to get the first shard iterator for use in your first <a>GetRecords</a> request and for subsequent reads use the shard iterator returned by the <a>GetRecords</a> request in <code>NextShardIterator</code>. A new shard
 *             iterator is returned by every <a>GetRecords</a> request in
 *                 <code>NextShardIterator</code>, which you use in the <code>ShardIterator</code>
 *             parameter of the next <a>GetRecords</a> request. </p>
 *          <p>If a <a>GetShardIterator</a> request is made too often, you receive a
 *                 <code>ProvisionedThroughputExceededException</code>. For more information about
 *             throughput limits, see <a>GetRecords</a>, and <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the
 *                 <i>Amazon Kinesis Data Streams Developer Guide</i>.</p>
 *          <p>If the shard is closed, <a>GetShardIterator</a> returns a valid iterator
 *             for the last sequence number of the shard. A shard can be closed as a result of using
 *                 <a>SplitShard</a> or <a>MergeShards</a>.</p>
 *          <p>
 *             <a>GetShardIterator</a> has a limit of five transactions per second per
 *             account per open shard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, GetShardIteratorCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, GetShardIteratorCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // GetShardIteratorInput
 *   StreamName: "STRING_VALUE",
 *   ShardId: "STRING_VALUE", // required
 *   ShardIteratorType: "AT_SEQUENCE_NUMBER" || "AFTER_SEQUENCE_NUMBER" || "TRIM_HORIZON" || "LATEST" || "AT_TIMESTAMP", // required
 *   StartingSequenceNumber: "STRING_VALUE",
 *   Timestamp: new Date("TIMESTAMP"),
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new GetShardIteratorCommand(input);
 * const response = await client.send(command);
 * // { // GetShardIteratorOutput
 * //   ShardIterator: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetShardIteratorCommandInput - {@link GetShardIteratorCommandInput}
 * @returns {@link GetShardIteratorCommandOutput}
 * @see {@link GetShardIteratorCommandInput} for command's `input` shape.
 * @see {@link GetShardIteratorCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The request rate for the stream is too high, or the requested data is too large for
 *             the available throughput. Reduce the frequency or size of your requests. For more
 *             information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Streams Limits</a> in the
 *                 <i>Amazon Kinesis Data Streams Developer Guide</i>, and <a href="https://docs.aws.amazon.com/general/latest/gr/api-retries.html">Error Retries and
 *                 Exponential Backoff in Amazon Web Services</a> in the <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 */
export class GetShardIteratorCommand extends $Command<
  GetShardIteratorCommandInput,
  GetShardIteratorCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OperationType: { type: "staticContextParams", value: `data` },
      StreamARN: { type: "contextParams", name: "StreamARN" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetShardIteratorCommandInput) {
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
  ): Handler<GetShardIteratorCommandInput, GetShardIteratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetShardIteratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "GetShardIteratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kinesis_20131202",
        operation: "GetShardIterator",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetShardIteratorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetShardIteratorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetShardIteratorCommandOutput> {
    return de_GetShardIteratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

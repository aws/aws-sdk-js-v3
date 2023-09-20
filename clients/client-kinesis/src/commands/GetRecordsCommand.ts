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
import { GetRecordsInput, GetRecordsOutput } from "../models/models_0";
import { de_GetRecordsCommand, se_GetRecordsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRecordsCommand}.
 */
export interface GetRecordsCommandInput extends GetRecordsInput {}
/**
 * @public
 *
 * The output of {@link GetRecordsCommand}.
 */
export interface GetRecordsCommandOutput extends GetRecordsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets data records from a Kinesis data stream's shard.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter in addition to the <code>ShardIterator</code> parameter.</p>
 *          </note>
 *          <p>Specify a shard iterator using the <code>ShardIterator</code> parameter. The shard
 *             iterator specifies the position in the shard from which you want to start reading data
 *             records sequentially. If there are no records available in the portion of the shard that
 *             the iterator points to, <a>GetRecords</a> returns an empty list. It might
 *             take multiple calls to get to a portion of the shard that contains records.</p>
 *          <p>You can scale by provisioning multiple shards per stream while considering service
 *             limits (for more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Amazon Kinesis Data Streams
 *                 Limits</a> in the <i>Amazon Kinesis Data Streams Developer
 *                 Guide</i>). Your application should have one thread per shard, each reading
 *             continuously from its stream. To read from a stream continually, call <a>GetRecords</a> in a loop. Use <a>GetShardIterator</a> to get the
 *             shard iterator to specify in the first <a>GetRecords</a> call. <a>GetRecords</a> returns a new shard iterator in
 *                 <code>NextShardIterator</code>. Specify the shard iterator returned in
 *                 <code>NextShardIterator</code> in subsequent calls to <a>GetRecords</a>.
 *             If the shard has been closed, the shard iterator can't return more data and <a>GetRecords</a> returns <code>null</code> in <code>NextShardIterator</code>.
 *             You can terminate the loop when the shard is closed, or when the shard iterator reaches
 *             the record with the sequence number or other attribute that marks it as the last record
 *             to process.</p>
 *          <p>Each data record can be up to 1 MiB in size, and each shard can read up to 2 MiB per
 *             second. You can ensure that your calls don't exceed the maximum supported size or
 *             throughput by using the <code>Limit</code> parameter to specify the maximum number of
 *             records that <a>GetRecords</a> can return. Consider your average record size
 *             when determining this limit. The maximum number of records that can be returned per call
 *             is 10,000.</p>
 *          <p>The size of the data returned by <a>GetRecords</a> varies depending on the
 *             utilization of the shard. It is recommended that consumer applications retrieve records
 *             via the <code>GetRecords</code> command using the 5 TPS limit to remain caught up.
 *             Retrieving records less frequently can lead to consumer applications falling behind. The
 *             maximum size of data that <a>GetRecords</a> can return is 10 MiB. If a call
 *             returns this amount of data, subsequent calls made within the next 5 seconds throw
 *                 <code>ProvisionedThroughputExceededException</code>. If there is insufficient
 *             provisioned throughput on the stream, subsequent calls made within the next 1 second
 *             throw <code>ProvisionedThroughputExceededException</code>. <a>GetRecords</a>
 *             doesn't return any data when it throws an exception. For this reason, we recommend that
 *             you wait 1 second between calls to <a>GetRecords</a>. However, it's possible
 *             that the application will get exceptions for longer than 1 second.</p>
 *          <p>To detect whether the application is falling behind in processing, you can use the
 *                 <code>MillisBehindLatest</code> response attribute. You can also monitor the stream
 *             using CloudWatch metrics and other mechanisms (see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/monitoring.html">Monitoring</a> in the <i>Amazon
 *                 Kinesis Data Streams Developer Guide</i>).</p>
 *          <p>Each Amazon Kinesis record includes a value, <code>ApproximateArrivalTimestamp</code>,
 *             that is set when a stream successfully receives and stores a record. This is commonly
 *             referred to as a server-side time stamp, whereas a client-side time stamp is set when a
 *             data producer creates or sends the record to a stream (a data producer is any data
 *             source putting data records into a stream, for example with <a>PutRecords</a>). The time stamp has millisecond precision. There are no guarantees about the time
 *             stamp accuracy, or that the time stamp is always increasing. For example, records in a
 *             shard or across a stream might have time stamps that are out of order.</p>
 *          <p>This operation has a limit of five transactions per second per shard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, GetRecordsCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, GetRecordsCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // GetRecordsInput
 *   ShardIterator: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new GetRecordsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecordsOutput
 * //   Records: [ // RecordList // required
 * //     { // Record
 * //       SequenceNumber: "STRING_VALUE", // required
 * //       ApproximateArrivalTimestamp: new Date("TIMESTAMP"),
 * //       Data: "BLOB_VALUE", // required
 * //       PartitionKey: "STRING_VALUE", // required
 * //       EncryptionType: "NONE" || "KMS",
 * //     },
 * //   ],
 * //   NextShardIterator: "STRING_VALUE",
 * //   MillisBehindLatest: Number("long"),
 * //   ChildShards: [ // ChildShardList
 * //     { // ChildShard
 * //       ShardId: "STRING_VALUE", // required
 * //       ParentShards: [ // ShardIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       HashKeyRange: { // HashKeyRange
 * //         StartingHashKey: "STRING_VALUE", // required
 * //         EndingHashKey: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecordsCommandInput - {@link GetRecordsCommandInput}
 * @returns {@link GetRecordsCommandOutput}
 * @see {@link GetRecordsCommandInput} for command's `input` shape.
 * @see {@link GetRecordsCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link ExpiredIteratorException} (client fault)
 *  <p>The provided iterator exceeds the maximum age allowed.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link KMSAccessDeniedException} (client fault)
 *  <p>The ciphertext references a key that doesn't exist or that you don't have access
 *             to.</p>
 *
 * @throws {@link KMSDisabledException} (client fault)
 *  <p>The request was rejected because the specified customer master key (CMK) isn't
 *             enabled.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource isn't valid for
 *             this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a
 *                 Customer Master Key</a> in the <i>Amazon Web Services Key Management
 *                 Service Developer Guide</i>.</p>
 *
 * @throws {@link KMSNotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource can't be
 *             found.</p>
 *
 * @throws {@link KMSOptInRequired} (client fault)
 *  <p>The Amazon Web Services access key ID needs a subscription for the service.</p>
 *
 * @throws {@link KMSThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. For more information about
 *             throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in
 *             the <i>Amazon Web Services Key Management Service Developer
 *             Guide</i>.</p>
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
export class GetRecordsCommand extends $Command<
  GetRecordsCommandInput,
  GetRecordsCommandOutput,
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
  constructor(readonly input: GetRecordsCommandInput) {
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
  ): Handler<GetRecordsCommandInput, GetRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetRecordsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "GetRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kinesis_20131202",
        operation: "GetRecords",
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
  private serialize(input: GetRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRecordsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRecordsCommandOutput> {
    return de_GetRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

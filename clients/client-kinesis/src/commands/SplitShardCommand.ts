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
import { SplitShardInput } from "../models/models_0";
import { de_SplitShardCommand, se_SplitShardCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SplitShardCommand}.
 */
export interface SplitShardCommandInput extends SplitShardInput {}
/**
 * @public
 *
 * The output of {@link SplitShardCommand}.
 */
export interface SplitShardCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Splits a shard into two new shards in the Kinesis data stream, to increase the
 *             stream's capacity to ingest and transport data. <code>SplitShard</code> is called when
 *             there is a need to increase the overall capacity of a stream because of an expected
 *             increase in the volume of data records being ingested. This API is only supported for
 *             the data streams with the provisioned capacity mode.</p>
 *          <note>
 *             <p>When invoking this API, it is recommended you use the <code>StreamARN</code> input
 *                 parameter rather than the <code>StreamName</code> input parameter.</p>
 *          </note>
 *          <p>You can also use <code>SplitShard</code> when a shard appears to be approaching its
 *             maximum utilization; for example, the producers sending data into the specific shard are
 *             suddenly sending more than previously anticipated. You can also call
 *                 <code>SplitShard</code> to increase stream capacity, so that more Kinesis Data
 *             Streams applications can simultaneously read data from the stream for real-time
 *             processing. </p>
 *          <p>You must specify the shard to be split and the new hash key, which is the position in
 *             the shard where the shard gets split in two. In many cases, the new hash key might be
 *             the average of the beginning and ending hash key, but it can be any hash key value in
 *             the range being mapped into the shard. For more information, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-split.html">Split a
 *                 Shard</a> in the <i>Amazon Kinesis Data Streams Developer
 *                 Guide</i>.</p>
 *          <p>You can use <a>DescribeStreamSummary</a> and the <a>ListShards</a> APIs to determine the shard ID and hash key values for the <code>ShardToSplit</code>
 *             and <code>NewStartingHashKey</code> parameters that are specified in the
 *                 <code>SplitShard</code> request.</p>
 *          <p>
 *             <code>SplitShard</code> is an asynchronous operation. Upon receiving a
 *                 <code>SplitShard</code> request, Kinesis Data Streams immediately returns a response
 *             and sets the stream status to <code>UPDATING</code>. After the operation is completed,
 *             Kinesis Data Streams sets the stream status to <code>ACTIVE</code>. Read and write
 *             operations continue to work while the stream is in the <code>UPDATING</code> state. </p>
 *          <p>You can use <a>DescribeStreamSummary</a> to check the status of the stream,
 *             which is returned in <code>StreamStatus</code>. If the stream is in the
 *                 <code>ACTIVE</code> state, you can call <code>SplitShard</code>.
 *             </p>
 *          <p>If the specified stream does not exist, <a>DescribeStreamSummary</a>
 *             returns a <code>ResourceNotFoundException</code>. If you try to create more shards than
 *             are authorized for your account, you receive a <code>LimitExceededException</code>. </p>
 *          <p>For the default shard limit for an Amazon Web Services account, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/service-sizes-and-limits.html">Kinesis
 *                 Data Streams Limits</a> in the <i>Amazon Kinesis Data Streams Developer
 *                 Guide</i>. To increase this limit, <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">contact Amazon Web Services
 *                 Support</a>.</p>
 *          <p>If you try to operate on too many streams simultaneously using <a>CreateStream</a>, <a>DeleteStream</a>, <a>MergeShards</a>, and/or <a>SplitShard</a>, you receive a
 *                 <code>LimitExceededException</code>. </p>
 *          <p>
 *             <code>SplitShard</code> has a limit of five transactions per second per account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, SplitShardCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, SplitShardCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * const client = new KinesisClient(config);
 * const input = { // SplitShardInput
 *   StreamName: "STRING_VALUE",
 *   ShardToSplit: "STRING_VALUE", // required
 *   NewStartingHashKey: "STRING_VALUE", // required
 *   StreamARN: "STRING_VALUE",
 * };
 * const command = new SplitShardCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SplitShardCommandInput - {@link SplitShardCommandInput}
 * @returns {@link SplitShardCommandOutput}
 * @see {@link SplitShardCommandInput} for command's `input` shape.
 * @see {@link SplitShardCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is not available for this operation. For successful operation, the
 *             resource must be in the <code>ACTIVE</code> state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Specifies that you tried to invoke this API for a data stream with the on-demand
 *             capacity mode. This API is only supported for data streams with the provisioned capacity
 *             mode. </p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 */
export class SplitShardCommand extends $Command<
  SplitShardCommandInput,
  SplitShardCommandOutput,
  KinesisClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      OperationType: { type: "staticContextParams", value: `control` },
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
  constructor(readonly input: SplitShardCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SplitShardCommandInput, SplitShardCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SplitShardCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "SplitShardCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kinesis_20131202",
        operation: "SplitShard",
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
  private serialize(input: SplitShardCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SplitShardCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SplitShardCommandOutput> {
    return de_SplitShardCommand(output, context);
  }
}

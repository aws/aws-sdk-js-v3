import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { MergeShardsInput } from "../models/models_0";
import {
  deserializeAws_json1_1MergeShardsCommand,
  serializeAws_json1_1MergeShardsCommand,
} from "../protocols/Aws_json1_1";
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

export type MergeShardsCommandInput = MergeShardsInput;
export type MergeShardsCommandOutput = __MetadataBearer;

/**
 * <p>Merges two adjacent shards in a Kinesis data stream and combines them into a single
 *             shard to reduce the stream's capacity to ingest and transport data. Two shards are
 *             considered adjacent if the union of the hash key ranges for the two shards form a
 *             contiguous set with no gaps. For example, if you have two shards, one with a hash key
 *             range of 276...381 and the other with a hash key range of 382...454, then you could
 *             merge these two shards into a single shard that would have a hash key range of
 *             276...454. After the merge, the single child shard receives data for all hash key values
 *             covered by the two parent shards.</p>
 *         <p>
 *             <code>MergeShards</code> is called when there is a need to reduce the overall capacity
 *             of a stream because of excess capacity that is not being used. You must specify the
 *             shard to be merged and the adjacent shard for a stream. For more information about
 *             merging shards, see <a href="https://docs.aws.amazon.com/kinesis/latest/dev/kinesis-using-sdk-java-resharding-merge.html">Merge Two
 *                 Shards</a> in the <i>Amazon Kinesis Data Streams Developer
 *                 Guide</i>.</p>
 *         <p>If the stream is in the <code>ACTIVE</code> state, you can call
 *                 <code>MergeShards</code>. If a stream is in the <code>CREATING</code>,
 *                 <code>UPDATING</code>, or <code>DELETING</code> state, <code>MergeShards</code>
 *             returns a <code>ResourceInUseException</code>. If the specified stream does not exist,
 *                 <code>MergeShards</code> returns a <code>ResourceNotFoundException</code>. </p>
 *         <p>You can use <a>DescribeStream</a> to check the state of the stream,
 *             which is returned in <code>StreamStatus</code>.</p>
 *         <p>
 *             <code>MergeShards</code> is an asynchronous operation. Upon receiving a
 *                 <code>MergeShards</code> request, Amazon Kinesis Data Streams immediately returns a
 *             response and sets the <code>StreamStatus</code> to <code>UPDATING</code>. After the
 *             operation is completed, Kinesis Data Streams sets the <code>StreamStatus</code> to
 *                 <code>ACTIVE</code>. Read and write operations continue to work while the stream is
 *             in the <code>UPDATING</code> state. </p>
 *         <p>You use <a>DescribeStream</a> to determine the shard IDs that are
 *             specified in the <code>MergeShards</code> request. </p>
 *         <p>If you try to operate on too many streams in parallel using <a>CreateStream</a>, <a>DeleteStream</a>, <code>MergeShards</code>,
 *             or <a>SplitShard</a>, you receive a <code>LimitExceededException</code>. </p>
 *         <p>
 *             <code>MergeShards</code> has a limit of five transactions per second per
 *             account.</p>
 */
export class MergeShardsCommand extends $Command<
  MergeShardsCommandInput,
  MergeShardsCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MergeShardsCommandInput) {
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
  ): Handler<MergeShardsCommandInput, MergeShardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "MergeShardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MergeShardsInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergeShardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergeShardsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MergeShardsCommandOutput> {
    return deserializeAws_json1_1MergeShardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

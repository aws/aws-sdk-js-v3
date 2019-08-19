import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListShardsInput shape
 */
export interface ListShardsInput {
  /**
   * <p>The name of the data stream whose shards you want to list. </p> <p>You cannot specify this parameter if you specify the <code>NextToken</code> parameter.</p>
   */
  StreamName?: string;

  /**
   * <p>When the number of shards in the data stream is greater than the default value for the <code>MaxResults</code> parameter, or if you explicitly specify a value for <code>MaxResults</code> that is less than the number of shards in the data stream, the response includes a pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code> value in a subsequent call to <code>ListShards</code> to list the next set of shards.</p> <p>Don't specify <code>StreamName</code> or <code>StreamCreationTimestamp</code> if you specify <code>NextToken</code> because the latter unambiguously identifies the stream.</p> <p>You can optionally specify a value for the <code>MaxResults</code> parameter when you specify <code>NextToken</code>. If you specify a <code>MaxResults</code> value that is less than the number of shards that the operation returns if you don't specify <code>MaxResults</code>, the response will contain a new <code>NextToken</code> value. You can use the new <code>NextToken</code> value in a subsequent call to the <code>ListShards</code> operation.</p> <important> <p>Tokens expire after 300 seconds. When you obtain a value for <code>NextToken</code> in the response to a call to <code>ListShards</code>, you have 300 seconds to use that value. If you specify an expired token in a call to <code>ListShards</code>, you get <code>ExpiredNextTokenException</code>.</p> </important>
   */
  NextToken?: string;

  /**
   * <p>Specify this parameter to indicate that you want to list the shards starting with the shard whose ID immediately follows <code>ExclusiveStartShardId</code>.</p> <p>If you don't specify this parameter, the default behavior is for <code>ListShards</code> to list the shards starting with the first one in the stream.</p> <p>You cannot specify this parameter if you specify <code>NextToken</code>.</p>
   */
  ExclusiveStartShardId?: string;

  /**
   * <p>The maximum number of shards to return in a single call to <code>ListShards</code>. The minimum value you can specify for this parameter is 1, and the maximum is 1,000, which is also the default.</p> <p>When the number of shards to be listed is greater than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you can use in a subsequent call to <code>ListShards</code> to list the next set of shards.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specify this input parameter to distinguish data streams that have the same name. For example, if you create a data stream and then delete it, and you later create another data stream with the same name, you can use this input parameter to specify which of the two streams you want to list the shards for.</p> <p>You cannot specify this parameter if you specify the <code>NextToken</code> parameter.</p>
   */
  StreamCreationTimestamp?: Date | string | number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}

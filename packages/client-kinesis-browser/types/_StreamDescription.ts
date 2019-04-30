import { _Shard, _UnmarshalledShard } from "./_Shard";
import {
  _EnhancedMetrics,
  _UnmarshalledEnhancedMetrics
} from "./_EnhancedMetrics";

/**
 * <p>Represents the output for <a>DescribeStream</a>.</p>
 */
export interface _StreamDescription {
  /**
   * <p>The name of the stream being described.</p>
   */
  StreamName: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the stream being described.</p>
   */
  StreamARN: string;

  /**
   * <p>The current status of the stream being described. The stream status is one of the following states:</p> <ul> <li> <p> <code>CREATING</code> - The stream is being created. Kinesis Data Streams immediately returns and sets <code>StreamStatus</code> to <code>CREATING</code>.</p> </li> <li> <p> <code>DELETING</code> - The stream is being deleted. The specified stream is in the <code>DELETING</code> state until Kinesis Data Streams completes the deletion.</p> </li> <li> <p> <code>ACTIVE</code> - The stream exists and is ready for read and write operations or deletion. You should perform read and write operations only on an <code>ACTIVE</code> stream.</p> </li> <li> <p> <code>UPDATING</code> - Shards in the stream are being merged or split. Read and write operations continue to work while the stream is in the <code>UPDATING</code> state.</p> </li> </ul>
   */
  StreamStatus: "CREATING" | "DELETING" | "ACTIVE" | "UPDATING" | string;

  /**
   * <p>The shards that comprise the stream.</p>
   */
  Shards: Array<_Shard> | Iterable<_Shard>;

  /**
   * <p>If set to <code>true</code>, more shards in the stream are available to describe.</p>
   */
  HasMoreShards: boolean;

  /**
   * <p>The current retention period, in hours.</p>
   */
  RetentionPeriodHours: number;

  /**
   * <p>The approximate time that the stream was created.</p>
   */
  StreamCreationTimestamp: Date | string | number;

  /**
   * <p>Represents the current enhanced monitoring settings of the stream.</p>
   */
  EnhancedMonitoring: Array<_EnhancedMetrics> | Iterable<_EnhancedMetrics>;

  /**
   * <p>The server-side encryption type used on the stream. This parameter can be one of the following values:</p> <ul> <li> <p> <code>NONE</code>: Do not encrypt the records in the stream.</p> </li> <li> <p> <code>KMS</code>: Use server-side encryption on the records in the stream using a customer-managed AWS KMS key.</p> </li> </ul>
   */
  EncryptionType?: "NONE" | "KMS" | string;

  /**
   * <p>The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified ARN to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias <code>aws/kinesis</code>.</p> <ul> <li> <p>Key ARN example: <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias ARN example: <code>arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</code> </p> </li> <li> <p>Globally unique key ID example: <code>12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias name example: <code>alias/MyAliasName</code> </p> </li> <li> <p>Master key owned by Kinesis Data Streams: <code>alias/aws/kinesis</code> </p> </li> </ul>
   */
  KeyId?: string;
}

export interface _UnmarshalledStreamDescription extends _StreamDescription {
  /**
   * <p>The shards that comprise the stream.</p>
   */
  Shards: Array<_UnmarshalledShard>;

  /**
   * <p>The approximate time that the stream was created.</p>
   */
  StreamCreationTimestamp: Date;

  /**
   * <p>Represents the current enhanced monitoring settings of the stream.</p>
   */
  EnhancedMonitoring: Array<_UnmarshalledEnhancedMetrics>;
}

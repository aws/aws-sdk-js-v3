import {
  _EnhancedMetrics,
  _UnmarshalledEnhancedMetrics
} from "./_EnhancedMetrics";

/**
 * <p>Represents the output for <a>DescribeStreamSummary</a> </p>
 */
export interface _StreamDescriptionSummary {
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
   * <p>The encryption type used. This value is one of the following:</p> <ul> <li> <p> <code>KMS</code> </p> </li> <li> <p> <code>NONE</code> </p> </li> </ul>
   */
  EncryptionType?: "NONE" | "KMS" | string;

  /**
   * <p>The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified ARN to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias <code>aws/kinesis</code>.</p> <ul> <li> <p>Key ARN example: <code>arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias ARN example: <code> arn:aws:kms:us-east-1:123456789012:alias/MyAliasName</code> </p> </li> <li> <p>Globally unique key ID example: <code>12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p>Alias name example: <code>alias/MyAliasName</code> </p> </li> <li> <p>Master key owned by Kinesis Data Streams: <code>alias/aws/kinesis</code> </p> </li> </ul>
   */
  KeyId?: string;

  /**
   * <p>The number of open shards in the stream.</p>
   */
  OpenShardCount: number;

  /**
   * <p>The number of enhanced fan-out consumers registered with the stream.</p>
   */
  ConsumerCount?: number;
}

export interface _UnmarshalledStreamDescriptionSummary
  extends _StreamDescriptionSummary {
  /**
   * <p>The approximate time that the stream was created.</p>
   */
  StreamCreationTimestamp: Date;

  /**
   * <p>Represents the current enhanced monitoring settings of the stream.</p>
   */
  EnhancedMonitoring: Array<_UnmarshalledEnhancedMetrics>;
}

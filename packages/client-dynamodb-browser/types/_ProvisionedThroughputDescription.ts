/**
 * <p>Represents the provisioned throughput settings for the table, consisting of read and write capacity units, along with data about increases and decreases.</p>
 */
export interface _ProvisionedThroughputDescription {
  /**
   * <p>The date and time of the last provisioned throughput increase for this table.</p>
   */
  LastIncreaseDateTime?: Date | string | number;

  /**
   * <p>The date and time of the last provisioned throughput decrease for this table.</p>
   */
  LastDecreaseDateTime?: Date | string | number;

  /**
   * <p>The number of provisioned throughput decreases for this table during this UTC calendar day. For current maximums on provisioned throughput decreases, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Limits</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
   */
  NumberOfDecreasesToday?: number;

  /**
   * <p>The maximum number of strongly consistent reads consumed per second before DynamoDB returns a <code>ThrottlingException</code>. Eventually consistent reads require less effort than strongly consistent reads, so a setting of 50 <code>ReadCapacityUnits</code> per second provides 100 eventually consistent <code>ReadCapacityUnits</code> per second.</p>
   */
  ReadCapacityUnits?: number;

  /**
   * <p>The maximum number of writes consumed per second before DynamoDB returns a <code>ThrottlingException</code>.</p>
   */
  WriteCapacityUnits?: number;
}

export interface _UnmarshalledProvisionedThroughputDescription
  extends _ProvisionedThroughputDescription {
  /**
   * <p>The date and time of the last provisioned throughput increase for this table.</p>
   */
  LastIncreaseDateTime?: Date;

  /**
   * <p>The date and time of the last provisioned throughput decrease for this table.</p>
   */
  LastDecreaseDateTime?: Date;
}

/**
 * <p>Specifies the Amazon S3 object key name to filter on and whether to filter on the suffix or prefix of the key name.</p>
 */
export interface _FilterRule {
  /**
   * <p>The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Name?: "prefix" | "suffix" | string;

  /**
   * <p>The value that the filter searches for in object key names.</p>
   */
  Value?: string;
}

export type _UnmarshalledFilterRule = _FilterRule;

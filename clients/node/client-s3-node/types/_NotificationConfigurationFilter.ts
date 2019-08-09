import { _S3KeyFilter, _UnmarshalledS3KeyFilter } from "./_S3KeyFilter";

/**
 * <p>Specifies object key name filtering rules. For information about key name filtering, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface _NotificationConfigurationFilter {
  /**
   * <p/>
   */
  Key?: _S3KeyFilter;
}

export interface _UnmarshalledNotificationConfigurationFilter
  extends _NotificationConfigurationFilter {
  /**
   * <p/>
   */
  Key?: _UnmarshalledS3KeyFilter;
}

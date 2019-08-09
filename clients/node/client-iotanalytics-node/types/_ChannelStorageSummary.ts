import {
  _ServiceManagedChannelS3StorageSummary,
  _UnmarshalledServiceManagedChannelS3StorageSummary
} from "./_ServiceManagedChannelS3StorageSummary";
import {
  _CustomerManagedChannelS3StorageSummary,
  _UnmarshalledCustomerManagedChannelS3StorageSummary
} from "./_CustomerManagedChannelS3StorageSummary";

/**
 * <p>Where channel data is stored.</p>
 */
export interface _ChannelStorageSummary {
  /**
   * <p>Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   */
  serviceManagedS3?: _ServiceManagedChannelS3StorageSummary;

  /**
   * <p>Used to store channel data in an S3 bucket that you manage.</p>
   */
  customerManagedS3?: _CustomerManagedChannelS3StorageSummary;
}

export interface _UnmarshalledChannelStorageSummary
  extends _ChannelStorageSummary {
  /**
   * <p>Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   */
  serviceManagedS3?: _UnmarshalledServiceManagedChannelS3StorageSummary;

  /**
   * <p>Used to store channel data in an S3 bucket that you manage.</p>
   */
  customerManagedS3?: _UnmarshalledCustomerManagedChannelS3StorageSummary;
}

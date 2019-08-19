import {
  _ServiceManagedChannelS3Storage,
  _UnmarshalledServiceManagedChannelS3Storage
} from "./_ServiceManagedChannelS3Storage";
import {
  _CustomerManagedChannelS3Storage,
  _UnmarshalledCustomerManagedChannelS3Storage
} from "./_CustomerManagedChannelS3Storage";

/**
 * <p>Where channel data is stored.</p>
 */
export interface _ChannelStorage {
  /**
   * <p>Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   */
  serviceManagedS3?: _ServiceManagedChannelS3Storage;

  /**
   * <p>Use this to store channel data in an S3 bucket that you manage.</p>
   */
  customerManagedS3?: _CustomerManagedChannelS3Storage;
}

export interface _UnmarshalledChannelStorage extends _ChannelStorage {
  /**
   * <p>Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   */
  serviceManagedS3?: _UnmarshalledServiceManagedChannelS3Storage;

  /**
   * <p>Use this to store channel data in an S3 bucket that you manage.</p>
   */
  customerManagedS3?: _UnmarshalledCustomerManagedChannelS3Storage;
}

import {
  _IotEventsDestinationConfiguration,
  _UnmarshalledIotEventsDestinationConfiguration
} from "./_IotEventsDestinationConfiguration";
import {
  _S3DestinationConfiguration,
  _UnmarshalledS3DestinationConfiguration
} from "./_S3DestinationConfiguration";

/**
 * <p>The destination to which data set contents are delivered.</p>
 */
export interface _DatasetContentDeliveryDestination {
  /**
   * <p>Configuration information for delivery of data set contents to AWS IoT Events.</p>
   */
  iotEventsDestinationConfiguration?: _IotEventsDestinationConfiguration;

  /**
   * <p>Configuration information for delivery of data set contents to Amazon S3.</p>
   */
  s3DestinationConfiguration?: _S3DestinationConfiguration;
}

export interface _UnmarshalledDatasetContentDeliveryDestination
  extends _DatasetContentDeliveryDestination {
  /**
   * <p>Configuration information for delivery of data set contents to AWS IoT Events.</p>
   */
  iotEventsDestinationConfiguration?: _UnmarshalledIotEventsDestinationConfiguration;

  /**
   * <p>Configuration information for delivery of data set contents to Amazon S3.</p>
   */
  s3DestinationConfiguration?: _UnmarshalledS3DestinationConfiguration;
}

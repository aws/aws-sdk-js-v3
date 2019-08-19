import {
  _ServiceManagedDatastoreS3StorageSummary,
  _UnmarshalledServiceManagedDatastoreS3StorageSummary
} from "./_ServiceManagedDatastoreS3StorageSummary";
import {
  _CustomerManagedDatastoreS3StorageSummary,
  _UnmarshalledCustomerManagedDatastoreS3StorageSummary
} from "./_CustomerManagedDatastoreS3StorageSummary";

/**
 * <p>Where data store data is stored.</p>
 */
export interface _DatastoreStorageSummary {
  /**
   * <p>Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   */
  serviceManagedS3?: _ServiceManagedDatastoreS3StorageSummary;

  /**
   * <p>Used to store data store data in an S3 bucket that you manage.</p>
   */
  customerManagedS3?: _CustomerManagedDatastoreS3StorageSummary;
}

export interface _UnmarshalledDatastoreStorageSummary
  extends _DatastoreStorageSummary {
  /**
   * <p>Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   */
  serviceManagedS3?: _UnmarshalledServiceManagedDatastoreS3StorageSummary;

  /**
   * <p>Used to store data store data in an S3 bucket that you manage.</p>
   */
  customerManagedS3?: _UnmarshalledCustomerManagedDatastoreS3StorageSummary;
}

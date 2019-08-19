import {
  _ServiceManagedDatastoreS3Storage,
  _UnmarshalledServiceManagedDatastoreS3Storage
} from "./_ServiceManagedDatastoreS3Storage";
import {
  _CustomerManagedDatastoreS3Storage,
  _UnmarshalledCustomerManagedDatastoreS3Storage
} from "./_CustomerManagedDatastoreS3Storage";

/**
 * <p>Where data store data is stored.</p>
 */
export interface _DatastoreStorage {
  /**
   * <p>Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   */
  serviceManagedS3?: _ServiceManagedDatastoreS3Storage;

  /**
   * <p>Use this to store data store data in an S3 bucket that you manage.</p>
   */
  customerManagedS3?: _CustomerManagedDatastoreS3Storage;
}

export interface _UnmarshalledDatastoreStorage extends _DatastoreStorage {
  /**
   * <p>Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   */
  serviceManagedS3?: _UnmarshalledServiceManagedDatastoreS3Storage;

  /**
   * <p>Use this to store data store data in an S3 bucket that you manage.</p>
   */
  customerManagedS3?: _UnmarshalledCustomerManagedDatastoreS3Storage;
}

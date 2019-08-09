import {
  _S3AccessControlPolicy,
  _UnmarshalledS3AccessControlPolicy
} from "./_S3AccessControlPolicy";

/**
 * <p>Contains the configuration parameters for a Set Object ACL operation. Amazon S3 batch operations passes each value through to the underlying PUT Object acl API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTacl.html">PUT Object acl</a>.</p>
 */
export interface _S3SetObjectAclOperation {
  /**
   * <p/>
   */
  AccessControlPolicy?: _S3AccessControlPolicy;
}

export interface _UnmarshalledS3SetObjectAclOperation
  extends _S3SetObjectAclOperation {
  /**
   * <p/>
   */
  AccessControlPolicy?: _UnmarshalledS3AccessControlPolicy;
}

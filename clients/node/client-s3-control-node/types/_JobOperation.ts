import {
  _LambdaInvokeOperation,
  _UnmarshalledLambdaInvokeOperation
} from "./_LambdaInvokeOperation";
import {
  _S3CopyObjectOperation,
  _UnmarshalledS3CopyObjectOperation
} from "./_S3CopyObjectOperation";
import {
  _S3SetObjectAclOperation,
  _UnmarshalledS3SetObjectAclOperation
} from "./_S3SetObjectAclOperation";
import {
  _S3SetObjectTaggingOperation,
  _UnmarshalledS3SetObjectTaggingOperation
} from "./_S3SetObjectTaggingOperation";
import {
  _S3InitiateRestoreObjectOperation,
  _UnmarshalledS3InitiateRestoreObjectOperation
} from "./_S3InitiateRestoreObjectOperation";

/**
 * <p>The operation that you want this job to perform on each object listed in the manifest. For more information about the available operations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-operations.html">Available Operations</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface _JobOperation {
  /**
   * <p>Directs the specified job to invoke an AWS Lambda function on each object in the manifest.</p>
   */
  LambdaInvoke?: _LambdaInvokeOperation;

  /**
   * <p>Directs the specified job to execute a PUT Copy object call on each object in the manifest.</p>
   */
  S3PutObjectCopy?: _S3CopyObjectOperation;

  /**
   * <p>Directs the specified job to execute a PUT Object acl call on each object in the manifest.</p>
   */
  S3PutObjectAcl?: _S3SetObjectAclOperation;

  /**
   * <p>Directs the specified job to execute a PUT Object tagging call on each object in the manifest.</p>
   */
  S3PutObjectTagging?: _S3SetObjectTaggingOperation;

  /**
   * <p>Directs the specified job to execute an Initiate Glacier Restore call on each object in the manifest.</p>
   */
  S3InitiateRestoreObject?: _S3InitiateRestoreObjectOperation;
}

export interface _UnmarshalledJobOperation extends _JobOperation {
  /**
   * <p>Directs the specified job to invoke an AWS Lambda function on each object in the manifest.</p>
   */
  LambdaInvoke?: _UnmarshalledLambdaInvokeOperation;

  /**
   * <p>Directs the specified job to execute a PUT Copy object call on each object in the manifest.</p>
   */
  S3PutObjectCopy?: _UnmarshalledS3CopyObjectOperation;

  /**
   * <p>Directs the specified job to execute a PUT Object acl call on each object in the manifest.</p>
   */
  S3PutObjectAcl?: _UnmarshalledS3SetObjectAclOperation;

  /**
   * <p>Directs the specified job to execute a PUT Object tagging call on each object in the manifest.</p>
   */
  S3PutObjectTagging?: _UnmarshalledS3SetObjectTaggingOperation;

  /**
   * <p>Directs the specified job to execute an Initiate Glacier Restore call on each object in the manifest.</p>
   */
  S3InitiateRestoreObject?: _UnmarshalledS3InitiateRestoreObjectOperation;
}

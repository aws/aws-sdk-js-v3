import { _S3Grant, _UnmarshalledS3Grant } from "./_S3Grant";
import {
  _S3ObjectMetadata,
  _UnmarshalledS3ObjectMetadata
} from "./_S3ObjectMetadata";
import { _S3Tag, _UnmarshalledS3Tag } from "./_S3Tag";

/**
 * <p>Contains the configuration parameters for a PUT Copy object operation. Amazon S3 batch operations passes each value through to the underlying PUT Copy object API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectCOPY.html">PUT Object - Copy</a>.</p>
 */
export interface _S3CopyObjectOperation {
  /**
   * <p/>
   */
  TargetResource?: string;

  /**
   * <p/>
   */
  CannedAccessControlList?:
    | "private"
    | "public-read"
    | "public-read-write"
    | "aws-exec-read"
    | "authenticated-read"
    | "bucket-owner-read"
    | "bucket-owner-full-control"
    | string;

  /**
   * <p/>
   */
  AccessControlGrants?: Array<_S3Grant> | Iterable<_S3Grant>;

  /**
   * <p/>
   */
  MetadataDirective?: "COPY" | "REPLACE" | string;

  /**
   * <p/>
   */
  ModifiedSinceConstraint?: Date | string | number;

  /**
   * <p/>
   */
  NewObjectMetadata?: _S3ObjectMetadata;

  /**
   * <p/>
   */
  NewObjectTagging?: Array<_S3Tag> | Iterable<_S3Tag>;

  /**
   * <p/>
   */
  RedirectLocation?: string;

  /**
   * <p/>
   */
  RequesterPays?: boolean;

  /**
   * <p/>
   */
  StorageClass?:
    | "STANDARD"
    | "STANDARD_IA"
    | "ONEZONE_IA"
    | "GLACIER"
    | "INTELLIGENT_TIERING"
    | "DEEP_ARCHIVE"
    | string;

  /**
   * <p/>
   */
  UnModifiedSinceConstraint?: Date | string | number;

  /**
   * <p/>
   */
  SSEAwsKmsKeyId?: string;

  /**
   * _NonEmptyMaxLength1024String shape
   */
  TargetKeyPrefix?: string;

  /**
   * _S3ObjectLockLegalHoldStatus shape
   */
  ObjectLockLegalHoldStatus?: "OFF" | "ON" | string;

  /**
   * _S3ObjectLockMode shape
   */
  ObjectLockMode?: "COMPLIANCE" | "GOVERNANCE" | string;

  /**
   * _TimeStamp shape
   */
  ObjectLockRetainUntilDate?: Date | string | number;
}

export interface _UnmarshalledS3CopyObjectOperation
  extends _S3CopyObjectOperation {
  /**
   * <p/>
   */
  AccessControlGrants?: Array<_UnmarshalledS3Grant>;

  /**
   * <p/>
   */
  ModifiedSinceConstraint?: Date;

  /**
   * <p/>
   */
  NewObjectMetadata?: _UnmarshalledS3ObjectMetadata;

  /**
   * <p/>
   */
  NewObjectTagging?: Array<_UnmarshalledS3Tag>;

  /**
   * <p/>
   */
  UnModifiedSinceConstraint?: Date;

  /**
   * _TimeStamp shape
   */
  ObjectLockRetainUntilDate?: Date;
}

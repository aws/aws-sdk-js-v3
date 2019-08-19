import { _Encryption, _UnmarshalledEncryption } from "./_Encryption";
import { _Grant, _UnmarshalledGrant } from "./_Grant";
import { _Tagging, _UnmarshalledTagging } from "./_Tagging";
import { _MetadataEntry, _UnmarshalledMetadataEntry } from "./_MetadataEntry";

/**
 * <p>Describes an S3 location that will receive the results of the restore request.</p>
 */
export interface _S3Location {
  /**
   * <p>The name of the bucket where the restore results will be placed.</p>
   */
  BucketName: string;

  /**
   * <p>The prefix that is prepended to the restore results for this request.</p>
   */
  Prefix: string;

  /**
   * <p/>
   */
  Encryption?: _Encryption;

  /**
   * <p>The canned ACL to apply to the restore results.</p>
   */
  CannedACL?:
    | "private"
    | "public-read"
    | "public-read-write"
    | "authenticated-read"
    | "aws-exec-read"
    | "bucket-owner-read"
    | "bucket-owner-full-control"
    | string;

  /**
   * <p>A list of grants that control access to the staged results.</p>
   */
  AccessControlList?: Array<_Grant> | Iterable<_Grant>;

  /**
   * <p>The tag-set that is applied to the restore results.</p>
   */
  Tagging?: _Tagging;

  /**
   * <p>A list of metadata to store with the restore results in S3.</p>
   */
  UserMetadata?: Array<_MetadataEntry> | Iterable<_MetadataEntry>;

  /**
   * <p>The class of storage used to store the restore results.</p>
   */
  StorageClass?:
    | "STANDARD"
    | "REDUCED_REDUNDANCY"
    | "STANDARD_IA"
    | "ONEZONE_IA"
    | "INTELLIGENT_TIERING"
    | "GLACIER"
    | "DEEP_ARCHIVE"
    | string;
}

export interface _UnmarshalledS3Location extends _S3Location {
  /**
   * <p/>
   */
  Encryption?: _UnmarshalledEncryption;

  /**
   * <p>A list of grants that control access to the staged results.</p>
   */
  AccessControlList?: Array<_UnmarshalledGrant>;

  /**
   * <p>The tag-set that is applied to the restore results.</p>
   */
  Tagging?: _UnmarshalledTagging;

  /**
   * <p>A list of metadata to store with the restore results in S3.</p>
   */
  UserMetadata?: Array<_UnmarshalledMetadataEntry>;
}

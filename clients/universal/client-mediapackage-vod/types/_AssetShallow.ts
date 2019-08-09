/**
 * A MediaPackage VOD Asset resource.
 */
export interface _AssetShallow {
  /**
   * The ARN of the Asset.
   */
  Arn?: string;

  /**
   * The unique identifier for the Asset.
   */
  Id?: string;

  /**
   * The ID of the PackagingGroup for the Asset.
   */
  PackagingGroupId?: string;

  /**
   * The resource ID to include in SPEKE key requests.
   */
  ResourceId?: string;

  /**
   * ARN of the source object in S3.
   */
  SourceArn?: string;

  /**
   * The IAM role ARN used to access the source S3 bucket.
   */
  SourceRoleArn?: string;
}

export type _UnmarshalledAssetShallow = _AssetShallow;

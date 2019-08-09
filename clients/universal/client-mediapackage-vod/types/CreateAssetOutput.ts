import { _UnmarshalledEgressEndpoint } from "./_EgressEndpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAssetOutput shape
 */
export interface CreateAssetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the Asset.
   */
  Arn?: string;

  /**
   * The list of egress endpoints available for the Asset.
   */
  EgressEndpoints?: Array<_UnmarshalledEgressEndpoint>;

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
   * The IAM role_arn used to access the source S3 bucket.
   */
  SourceRoleArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

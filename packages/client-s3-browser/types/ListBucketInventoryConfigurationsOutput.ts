import { _UnmarshalledInventoryConfiguration } from "./_InventoryConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListBucketInventoryConfigurationsOutput shape
 */
export interface ListBucketInventoryConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If sent in the request, the marker that is used as a starting point for this inventory configuration list response.</p>
   */
  ContinuationToken?: string;

  /**
   * <p>The list of inventory configurations for a bucket.</p>
   */
  InventoryConfigurationList?: Array<_UnmarshalledInventoryConfiguration>;

  /**
   * <p>Indicates whether the returned list of inventory configurations is truncated in this response. A value of true indicates that the list is truncated.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>The marker used to continue this inventory configuration listing. Use the NextContinuationToken from this response to continue the listing in a subsequent request. The continuation token is an opaque value that Amazon S3 understands.</p>
   */
  NextContinuationToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

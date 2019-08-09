import { _UnmarshalledCacheCluster } from "./_CacheCluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>DescribeCacheClusters</code> operation.</p>
 */
export interface DescribeCacheClustersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of clusters. Each item in the list contains detailed information about one cluster.</p>
   */
  CacheClusters?: Array<_UnmarshalledCacheCluster>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

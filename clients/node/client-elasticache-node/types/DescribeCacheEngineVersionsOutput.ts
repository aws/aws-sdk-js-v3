import { _UnmarshalledCacheEngineVersion } from "./_CacheEngineVersion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <a>DescribeCacheEngineVersions</a> operation.</p>
 */
export interface DescribeCacheEngineVersionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of cache engine version details. Each element in the list contains detailed information about one cache engine version.</p>
   */
  CacheEngineVersions?: Array<_UnmarshalledCacheEngineVersion>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

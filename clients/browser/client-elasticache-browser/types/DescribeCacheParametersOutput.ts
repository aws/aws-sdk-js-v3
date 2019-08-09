import { _UnmarshalledParameter } from "./_Parameter";
import { _UnmarshalledCacheNodeTypeSpecificParameter } from "./_CacheNodeTypeSpecificParameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>DescribeCacheParameters</code> operation.</p>
 */
export interface DescribeCacheParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>Parameter</a> instances.</p>
   */
  Parameters?: Array<_UnmarshalledParameter>;

  /**
   * <p>A list of parameters specific to a particular cache node type. Each element in the list contains detailed information about one parameter.</p>
   */
  CacheNodeTypeSpecificParameters?: Array<
    _UnmarshalledCacheNodeTypeSpecificParameter
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

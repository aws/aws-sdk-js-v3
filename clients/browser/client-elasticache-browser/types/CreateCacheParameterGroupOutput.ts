import { _UnmarshalledCacheParameterGroup } from "./_CacheParameterGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCacheParameterGroupOutput shape
 */
export interface CreateCacheParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the output of a <code>CreateCacheParameterGroup</code> operation.</p>
   */
  CacheParameterGroup?: _UnmarshalledCacheParameterGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

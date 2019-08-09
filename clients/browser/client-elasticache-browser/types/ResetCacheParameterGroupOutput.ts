import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>ModifyCacheParameterGroup</code> </p> </li> <li> <p> <code>ResetCacheParameterGroup</code> </p> </li> </ul>
 */
export interface ResetCacheParameterGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the cache parameter group.</p>
   */
  CacheParameterGroupName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledCacheSubnetGroup } from "./_CacheSubnetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCacheSubnetGroupOutput shape
 */
export interface CreateCacheSubnetGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
   */
  CacheSubnetGroup?: _UnmarshalledCacheSubnetGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

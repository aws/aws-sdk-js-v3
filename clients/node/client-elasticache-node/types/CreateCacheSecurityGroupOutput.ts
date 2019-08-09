import { _UnmarshalledCacheSecurityGroup } from "./_CacheSecurityGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCacheSecurityGroupOutput shape
 */
export interface CreateCacheSecurityGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
   */
  CacheSecurityGroup?: _UnmarshalledCacheSecurityGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

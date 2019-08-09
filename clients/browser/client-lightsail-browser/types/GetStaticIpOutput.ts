import { _UnmarshalledStaticIp } from "./_StaticIp";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetStaticIpOutput shape
 */
export interface GetStaticIpOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about the requested static IP.</p>
   */
  staticIp?: _UnmarshalledStaticIp;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

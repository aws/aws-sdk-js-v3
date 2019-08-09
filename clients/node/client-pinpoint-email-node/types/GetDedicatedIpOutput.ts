import { _UnmarshalledDedicatedIp } from "./_DedicatedIp";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Information about a dedicated IP address.</p>
 */
export interface GetDedicatedIpOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains information about a dedicated IP address.</p>
   */
  DedicatedIp?: _UnmarshalledDedicatedIp;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

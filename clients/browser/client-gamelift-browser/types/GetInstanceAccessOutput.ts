import { _UnmarshalledInstanceAccess } from "./_InstanceAccess";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface GetInstanceAccessOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object that contains connection information for a fleet instance, including IP address and access credentials.</p>
   */
  InstanceAccess?: _UnmarshalledInstanceAccess;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

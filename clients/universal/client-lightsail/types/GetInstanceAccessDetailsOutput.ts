import { _UnmarshalledInstanceAccessDetails } from "./_InstanceAccessDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInstanceAccessDetailsOutput shape
 */
export interface GetInstanceAccessDetailsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about a get instance access request.</p>
   */
  accessDetails?: _UnmarshalledInstanceAccessDetails;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

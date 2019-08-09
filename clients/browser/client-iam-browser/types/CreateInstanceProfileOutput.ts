import { _UnmarshalledInstanceProfile } from "./_InstanceProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>CreateInstanceProfile</a> request. </p>
 */
export interface CreateInstanceProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure containing details about the new instance profile.</p>
   */
  InstanceProfile: _UnmarshalledInstanceProfile;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledInstanceProfile } from "./_InstanceProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateInstanceProfileOutput shape
 */
export interface CreateInstanceProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing information about your instance profile.</p>
   */
  instanceProfile?: _UnmarshalledInstanceProfile;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledProfile } from "./_Profile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetProfileOutput shape
 */
export interface GetProfileOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details of the room profile requested. Required.</p>
   */
  Profile?: _UnmarshalledProfile;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

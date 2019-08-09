import { _UnmarshalledHIT } from "./_HIT";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateHITWithHITTypeOutput shape
 */
export interface CreateHITWithHITTypeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Contains the newly created HIT data. For a description of the HIT data structure as it appears in responses, see the HIT Data Structure documentation. </p>
   */
  HIT?: _UnmarshalledHIT;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

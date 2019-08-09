import { _UnmarshalledHIT } from "./_HIT";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetHITOutput shape
 */
export interface GetHITOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Contains the requested HIT data.</p>
   */
  HIT?: _UnmarshalledHIT;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

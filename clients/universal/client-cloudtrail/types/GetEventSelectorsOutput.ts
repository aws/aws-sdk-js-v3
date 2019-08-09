import { _UnmarshalledEventSelector } from "./_EventSelector";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetEventSelectorsOutput shape
 */
export interface GetEventSelectorsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The specified trail ARN that has the event selectors.</p>
   */
  TrailARN?: string;

  /**
   * <p>The event selectors that are configured for the trail.</p>
   */
  EventSelectors?: Array<_UnmarshalledEventSelector>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

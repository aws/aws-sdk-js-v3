import { _UnmarshalledViolationEvent } from "./_ViolationEvent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListViolationEventsOutput shape
 */
export interface ListViolationEventsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The security profile violation alerts issued for this account during the given time period, potentially filtered by security profile, behavior violated, or thing (device) violating.</p>
   */
  violationEvents?: Array<_UnmarshalledViolationEvent>;

  /**
   * <p>A token that can be used to retrieve the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

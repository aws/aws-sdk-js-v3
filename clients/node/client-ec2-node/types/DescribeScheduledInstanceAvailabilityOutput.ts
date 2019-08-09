import { _UnmarshalledScheduledInstanceAvailability } from "./_ScheduledInstanceAvailability";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of DescribeScheduledInstanceAvailability.</p>
 */
export interface DescribeScheduledInstanceAvailabilityOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token required to retrieve the next set of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the available Scheduled Instances.</p>
   */
  ScheduledInstanceAvailabilitySet?: Array<
    _UnmarshalledScheduledInstanceAvailability
  >;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

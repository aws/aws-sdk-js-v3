import { _UnmarshalledScheduledAction } from "./_ScheduledAction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeScheduledActionsOutput shape
 */
export interface DescribeScheduledActionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the scheduled actions.</p>
   */
  ScheduledActions?: Array<_UnmarshalledScheduledAction>;

  /**
   * <p>The token required to get the next set of results. This value is <code>null</code> if there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

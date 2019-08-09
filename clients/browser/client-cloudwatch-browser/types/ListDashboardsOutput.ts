import { _UnmarshalledDashboardEntry } from "./_DashboardEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDashboardsOutput shape
 */
export interface ListDashboardsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of matching dashboards.</p>
   */
  DashboardEntries?: Array<_UnmarshalledDashboardEntry>;

  /**
   * <p>The token that marks the start of the next batch of returned results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

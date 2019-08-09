import { _UnmarshalledServiceSummary } from "./_ServiceSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListServicesOutput shape
 */
export interface ListServicesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array that contains one <code>ServiceSummary</code> object for each service that matches the specified filter criteria.</p>
   */
  Services?: Array<_UnmarshalledServiceSummary>;

  /**
   * <p>If the response contains <code>NextToken</code>, submit another <code>ListServices</code> request to get the next group of results. Specify the value of <code>NextToken</code> from the previous response in the next request.</p> <note> <p>AWS Cloud Map gets <code>MaxResults</code> services and then filters them based on the specified criteria. It's possible that no services in the first <code>MaxResults</code> services matched the specified criteria but that subsequent groups of <code>MaxResults</code> services do contain services that match the criteria.</p> </note>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

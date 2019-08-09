import { _UnmarshalledQualificationRequest } from "./_QualificationRequest";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListQualificationRequestsOutput shape
 */
export interface ListQualificationRequestsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of Qualification requests on this page in the filtered results list, equivalent to the number of Qualification requests being returned by this call.</p>
   */
  NumResults?: number;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The Qualification request. The response includes one QualificationRequest element for each Qualification request returned by the query.</p>
   */
  QualificationRequests?: Array<_UnmarshalledQualificationRequest>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

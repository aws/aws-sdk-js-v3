import { _UnmarshalledCaseDetails } from "./_CaseDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Returns an array of <a>CaseDetails</a> objects and a <code>nextToken</code> that defines a point for pagination in the result set.</p>
 */
export interface DescribeCasesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details for the cases that match the request.</p>
   */
  cases?: Array<_UnmarshalledCaseDetails>;

  /**
   * <p>A resumption point for pagination.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledAnalysisSchemeStatus } from "./_AnalysisSchemeStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.</p>
 */
export interface DescribeAnalysisSchemesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The analysis scheme descriptions.</p>
   */
  AnalysisSchemes: Array<_UnmarshalledAnalysisSchemeStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

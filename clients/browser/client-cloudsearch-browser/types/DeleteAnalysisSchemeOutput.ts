import { _UnmarshalledAnalysisSchemeStatus } from "./_AnalysisSchemeStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.</p>
 */
export interface DeleteAnalysisSchemeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the analysis scheme being deleted.</p>
   */
  AnalysisScheme: _UnmarshalledAnalysisSchemeStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

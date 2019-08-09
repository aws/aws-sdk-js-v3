import { _UnmarshalledAnalysisSchemeStatus } from "./_AnalysisSchemeStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.</p>
 */
export interface DefineAnalysisSchemeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status and configuration of an <code>AnalysisScheme</code>.</p>
   */
  AnalysisScheme: _UnmarshalledAnalysisSchemeStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

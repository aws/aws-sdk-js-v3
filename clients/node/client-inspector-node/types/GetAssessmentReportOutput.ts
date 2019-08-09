import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAssessmentReportOutput shape
 */
export interface GetAssessmentReportOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies the status of the request to generate an assessment report. </p>
   */
  status: "WORK_IN_PROGRESS" | "FAILED" | "COMPLETED" | string;

  /**
   * <p>Specifies the URL where you can find the generated assessment report. This parameter is only returned if the report is successfully generated.</p>
   */
  url?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetCredentialReport</a> request. </p>
 */
export interface GetCredentialReportOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the credential report. The report is Base64-encoded.</p>
   */
  Content?: Uint8Array;

  /**
   * <p>The format (MIME type) of the credential report.</p>
   */
  ReportFormat?: "text/csv" | string;

  /**
   * <p> The date and time when the credential report was created, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>.</p>
   */
  GeneratedTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

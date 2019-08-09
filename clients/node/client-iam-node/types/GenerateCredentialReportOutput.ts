import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GenerateCredentialReport</a> request. </p>
 */
export interface GenerateCredentialReportOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the state of the credential report.</p>
   */
  State?: "STARTED" | "INPROGRESS" | "COMPLETE" | string;

  /**
   * <p>Information about the credential report.</p>
   */
  Description?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

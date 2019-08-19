import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The AWS Support case ID returned by a successful completion of the <a>CreateCase</a> operation. </p>
 */
export interface CreateCaseOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The AWS Support case ID requested or returned in the call. The case ID is an alphanumeric string formatted as shown in this example: case-<i>12345678910-2013-c4c1d2bf33c5cf47</i> </p>
   */
  caseId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

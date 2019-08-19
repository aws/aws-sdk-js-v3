import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>If the action is successful, the service sends back an HTTP 200 response.</p>
 */
export interface DeleteReportDefinitionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Whether the deletion was successful or not.</p>
   */
  ResponseMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

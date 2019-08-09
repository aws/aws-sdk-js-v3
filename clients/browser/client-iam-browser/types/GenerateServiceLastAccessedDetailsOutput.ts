import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GenerateServiceLastAccessedDetailsOutput shape
 */
export interface GenerateServiceLastAccessedDetailsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The job ID that you can use in the <a>GetServiceLastAccessedDetails</a> or <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
   */
  JobId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

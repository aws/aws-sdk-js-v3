import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The status of the case returned by the <a>ResolveCase</a> operation.</p>
 */
export interface ResolveCaseOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the case when the <a>ResolveCase</a> request was sent.</p>
   */
  initialCaseStatus?: string;

  /**
   * <p>The status of the case after the <a>ResolveCase</a> request was processed.</p>
   */
  finalCaseStatus?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

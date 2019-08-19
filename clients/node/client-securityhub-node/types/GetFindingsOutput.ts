import { _UnmarshalledAwsSecurityFinding } from "./_AwsSecurityFinding";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetFindingsOutput shape
 */
export interface GetFindingsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The findings that matched the filters specified in the request.</p>
   */
  Findings: Array<_UnmarshalledAwsSecurityFinding>;

  /**
   * <p>The token that is required for pagination.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

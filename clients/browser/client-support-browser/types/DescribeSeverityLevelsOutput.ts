import { _UnmarshalledSeverityLevel } from "./_SeverityLevel";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.</p>
 */
export interface DescribeSeverityLevelsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The available severity levels for the support case. Available severity levels are defined by your service level agreement with AWS.</p>
   */
  severityLevels?: Array<_UnmarshalledSeverityLevel>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

import { _UnmarshalledSkillSummary } from "./_SkillSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSkillsOutput shape
 */
export interface ListSkillsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of enabled skills requested. Required.</p>
   */
  SkillSummaries?: Array<_UnmarshalledSkillSummary>;

  /**
   * <p>The token returned to indicate that there is more data available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}

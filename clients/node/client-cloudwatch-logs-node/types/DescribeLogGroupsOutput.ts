import { _UnmarshalledLogGroup } from "./_LogGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeLogGroupsOutput shape
 */
export interface DescribeLogGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The log groups.</p>
   */
  logGroups?: Array<_UnmarshalledLogGroup>;

  /**
   * <p>The token for the next set of items to return. The token expires after 24 hours.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
